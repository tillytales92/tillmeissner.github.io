#!/usr/bin/env python3
"""Generate _books markdown files from Goodreads CSV export."""

import csv
import os
import re
import unicodedata

CSV_PATH = os.path.join(os.path.dirname(__file__), '..', 'assets', 'books', 'goodreads_library_export.csv')
BOOKS_DIR = os.path.join(os.path.dirname(__file__), '..', '_books')

# Books already manually created (skip these)
SKIP_TITLES = {
    "The Age of Extremes, 1914-1991",
    "Crashed: How a Decade of Financial Crises Changed the World",
    "Cutting for Stone",
    "Dreams from My Father: A Story of Race and Inheritance",
    "Freedom",
    "Half of a Yellow Sun",
    "How Europe Underdeveloped Africa",
    "Kicking Away the Ladder: Development Strategy in Historical Perspective",
    "Petit pays",
    "A Fine Balance",
}


def to_slug(text):
    """Convert a title to a filesystem-safe slug."""
    # Normalise unicode (NFD), then drop combining marks
    text = unicodedata.normalize('NFD', text)
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn')
    text = text.lower()
    # Remove series markers like "(Series, #2)" or "(Series #2)"
    text = re.sub(r'\s*\(.*?#\d+\)', '', text)
    text = re.sub(r'\s*\(.*?\)\s*$', '', text)
    # Keep only alphanumeric + spaces
    text = re.sub(r'[^a-z0-9\s]', '', text)
    # Replace whitespace with underscores
    text = re.sub(r'\s+', '_', text.strip())
    # Truncate
    if len(text) > 50:
        text = text[:50].rstrip('_')
    return text


def clean_isbn(raw):
    """Strip Excel artifact: =\"\"9781234...\"\" -> 9781234..."""
    return re.sub(r'[="]+', '', raw).strip()


def convert_date(d):
    """Convert Goodreads date 2023/05/03 -> 2023-05-03."""
    return d.replace('/', '-') if d else ''


def yaml_safe(value):
    """Return YAML-safe string (quoted if needed)."""
    if any(c in value for c in [':', '"', "'", '#', '&', '{', '}', '[', ']', '|', '>']):
        escaped = value.replace('"', '\\"')
        return f'"{escaped}"'
    return value


def main():
    os.makedirs(BOOKS_DIR, exist_ok=True)
    existing_files = {os.path.splitext(f)[0] for f in os.listdir(BOOKS_DIR) if f.endswith('.md')}

    created = 0
    skipped = 0

    with open(CSV_PATH, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            shelf = row.get('Exclusive Shelf', '').strip()
            if shelf != 'read':
                continue

            title = row['Title'].strip()
            author = row['Author'].strip()

            if title in SKIP_TITLES:
                print(f'SKIP (manual): {title}')
                skipped += 1
                continue

            slug = to_slug(title)
            if not slug:
                print(f'SKIP (empty slug): {title}')
                skipped += 1
                continue

            if slug in existing_files:
                print(f'SKIP (exists): {slug}.md')
                skipped += 1
                continue

            isbn = clean_isbn(row.get('ISBN13', ''))
            date_read = convert_date(row.get('Date Read', '').strip())
            date_added = convert_date(row.get('Date Added', '').strip())
            year_published = row.get('Year Published', '').strip()
            orig_year = row.get('Original Publication Year', '').strip()
            released = orig_year if orig_year else year_published
            rating = row.get('My Rating', '0').strip()

            # date for Jekyll sorting
            book_date = date_read if date_read else date_added

            lines = ['---', 'layout: book-review']
            lines.append(f'title: {yaml_safe(title)}')
            lines.append(f'author: {yaml_safe(author)}')
            if isbn:
                lines.append(f'isbn: {isbn}')
            if book_date:
                lines.append(f'date: {book_date}')
            if date_read:
                lines.append(f'finished: {date_read}')
            if released:
                lines.append(f'released: {released}')
            if rating and rating != '0':
                lines.append(f'stars: {rating}')
            lines.append('status: Finished')
            lines.append('---')
            lines.append('')

            file_path = os.path.join(BOOKS_DIR, f'{slug}.md')
            with open(file_path, 'w', encoding='utf-8') as out:
                out.write('\n'.join(lines))

            print(f'CREATED: {slug}.md  ({title})')
            created += 1
            existing_files.add(slug)

    print(f'\nDone — created: {created}, skipped: {skipped}')


if __name__ == '__main__':
    main()
