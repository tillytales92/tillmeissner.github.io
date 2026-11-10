"""One-off: download a cover for every book in _books/ that has no local cover."""
import glob, json, os, re, time, urllib.parse, urllib.request

OUT = "assets/img/book_covers"
UA = {"User-Agent": "tillmeissner.github.io cover fetcher"}

def get(url, binary=False):
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
            data = r.read()
            return data if binary else json.loads(data)
    except Exception:
        return None

def image_ok(data):
    return data and len(data) > 2000 and data[:3] in (b"\xff\xd8\xff", b"\x89PN", b"GIF", b"RIF")

def field(text, name):
    m = re.search(rf"^{name}:\s*(.+)$", text, re.M)
    return m.group(1).strip().strip('"\'') if m else ""

found, missing = [], []
for path in sorted(glob.glob("_books/*.md")):
    text = open(path, encoding="utf-8").read()
    cover = field(text, "cover")
    if cover and os.path.exists(cover):
        continue
    title, author, isbn, olid = (field(text, k) for k in ("title", "author", "isbn", "olid"))
    short_title = re.split(r"[:(]|\. ", title)[0].strip()
    short_title = re.sub(r"\s*\((German|Spanish|English) Edition\)", "", short_title)
    img = None
    if isbn:
        img = get(f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg?default=false", True)
    if not image_ok(img) and olid:
        img = get(f"https://covers.openlibrary.org/b/olid/{olid}-L.jpg?default=false", True)
    if not image_ok(img):
        q = urllib.parse.urlencode({"title": short_title, "author": author, "limit": 10, "fields": "cover_i"})
        res = get(f"https://openlibrary.org/search.json?{q}") or {}
        for doc in res.get("docs", []):
            if doc.get("cover_i"):
                img = get(f"https://covers.openlibrary.org/b/id/{doc['cover_i']}-L.jpg?default=false", True)
                if image_ok(img):
                    break
    if not image_ok(img):
        q = "intitle:" + short_title + (" inauthor:" + author.split(",")[0] if author else "")
        res = get("https://www.googleapis.com/books/v1/volumes?" + urllib.parse.urlencode({"q": q, "maxResults": 5})) or {}
        for item in res.get("items", []):
            links = item.get("volumeInfo", {}).get("imageLinks", {})
            url = links.get("thumbnail") or links.get("smallThumbnail")
            if url:
                url = url.replace("http://", "https://").replace("&edge=curl", "")
                img = get(url.replace("zoom=1", "zoom=2"), True) or get(url, True)
                if image_ok(img):
                    break
                img = get(url, True)
                if image_ok(img):
                    break
    if not image_ok(img):
        # broad fallbacks: free-text queries without field restrictions
        for q in (f"{short_title} {author}", short_title):
            res = get("https://openlibrary.org/search.json?" + urllib.parse.urlencode({"q": q, "limit": 10, "fields": "cover_i"})) or {}
            for doc in res.get("docs", []):
                if doc.get("cover_i"):
                    img = get(f"https://covers.openlibrary.org/b/id/{doc['cover_i']}-L.jpg?default=false", True)
                    if image_ok(img):
                        break
            if image_ok(img):
                break
            res = get("https://www.googleapis.com/books/v1/volumes?" + urllib.parse.urlencode({"q": q, "maxResults": 5})) or {}
            for item in res.get("items", []):
                url = item.get("volumeInfo", {}).get("imageLinks", {}).get("thumbnail")
                if url:
                    img = get(url.replace("http://", "https://").replace("&edge=curl", ""), True)
                    if image_ok(img):
                        break
            if image_ok(img):
                break
    if not image_ok(img):
        missing.append(title)
        continue
    slug = os.path.splitext(os.path.basename(path))[0]
    dest = f"{OUT}/{slug}.jpg"
    open(dest, "wb").write(img)
    if re.search(r"^cover:", text, re.M):
        text = re.sub(r"^cover:.*$", f"cover: {dest}", text, count=1, flags=re.M)
    else:
        text = re.sub(r"^(author:.*)$", rf"\1\ncover: {dest}", text, count=1, flags=re.M)
    open(path, "w", encoding="utf-8").write(text)
    found.append(title)
    time.sleep(0.5)

print(f"Added covers: {len(found)}")
print(f"Still missing ({len(missing)}):")
for t in missing:
    print("  -", t)
