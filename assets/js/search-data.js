// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/tillmeissner.github.io/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tillmeissner.github.io/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here is an overview of projects I have worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tillmeissner.github.io/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tillmeissner.github.io/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here you&#39;ll find my latest CV. Click on the button to the right to download it.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tillmeissner.github.io/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tillmeissner.github.io/teaching/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tillmeissner.github.io/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tillmeissner.github.io/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-has-globalisation-brought-about-the-death-of-distance",
        
          title: "Has Globalisation Brought About the Death of Distance?",
        
        description: "Despite falling transport costs, digital connectivity, and sweeping trade liberalisation, this essay argues that distance remains a stubborn and powerful force shaping economic opportunity in the 21st century.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/tillmeissner.github.io/blog/2019/death-of-distance/";
          
        },
      },{id: "post-populism-and-deindustrialisation-trade-liberalisation-or-technological-change",
        
          title: "Populism and Deindustrialisation: Trade Liberalisation or Technological Change?",
        
        description: "What explains the rise of right-wing populism in high-income countries? This essay argues that technological change, not trade liberalisation, is the primary driver of manufacturing decline and the grievances fuelling populist politics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/tillmeissner.github.io/blog/2019/populism-trade-or-technology/";
          
        },
      },{id: "books-half-of-a-yellow-sun",
          title: 'Half of a Yellow Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/half_of_a_yellow_sun/";
            },},{id: "books-a-fine-balance",
          title: 'A Fine Balance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/a_fine_balance/";
            },},{id: "books-kicking-away-the-ladder-development-strategy-in-historical-perspective",
          title: 'Kicking Away the Ladder: Development Strategy in Historical Perspective',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/kicking_away_the_ladder/";
            },},{id: "books-dreams-from-my-father-a-story-of-race-and-inheritance",
          title: 'Dreams from My Father: A Story of Race and Inheritance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/dreams_from_my_father/";
            },},{id: "books-freedom",
          title: 'Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/freedom/";
            },},{id: "books-crashed-how-a-decade-of-financial-crises-changed-the-world",
          title: 'Crashed: How a Decade of Financial Crises Changed the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/crashed/";
            },},{id: "books-the-age-of-extremes-a-history-of-the-world-1914-1991",
          title: 'The Age of Extremes: A History of the World, 1914–1991',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/age_of_extremes/";
            },},{id: "books-how-europe-underdeveloped-africa",
          title: 'How Europe Underdeveloped Africa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/how_europe_underdeveloped_africa/";
            },},{id: "books-cutting-for-stone",
          title: 'Cutting for Stone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/cutting_for_stone/";
            },},{id: "books-petit-pays",
          title: 'Petit pays',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/petit_pays/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/1_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/5_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/9_project/";
            },},{id: "projects-china-and-ghana-39-s-economic-transformation",
          title: 'China and Ghana&amp;#39;s Economic Transformation',
          description: "A policy report on China&#39;s role in Ghana&#39;s economic transformation, written for the African Center for Economic Transformation (ACET)",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/china_africa_transformation/";
            },},{id: "projects-migration-in-the-face-of-climate-change",
          title: 'Migration in the Face of Climate Change',
          description: "Assessing the Potential of Ultra-Poor Graduation Programs in Upper Egypt",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/climate_change_report/";
            },},{id: "teachings-contemporary-europe-gy-103",
          title: 'Contemporary Europe (GY 103)',
          description: "Graduate Teaching Assistant for Block A: The Political Economy of European Integration. Taught 4 seminar groups across 9 classes in Autumn Term 2023/24 at LSE.",
          section: "Teachings",handler: () => {
              window.location.href = "/tillmeissner.github.io/teachings/gy103-2023-2024/";
            },},{id: "teachings-contemporary-europe-gy-103",
          title: 'Contemporary Europe (GY 103)',
          description: "Graduate Teaching Assistant for Block A: The Political Economy of European Integration. Taught 3 seminar groups across 9 classes in Autumn Term 2024/25 at LSE. Recipient of the LSE Class Teacher Award 2024 and 2025.",
          section: "Teachings",handler: () => {
              window.location.href = "/tillmeissner.github.io/teachings/gy103-2024-2025/";
            },},{id: "teachings-introduction-to-geographical-research-gy-140",
          title: 'Introduction to Geographical Research (GY 140)',
          description: "Graduate Teaching Assistant for the Applied Quantitative Methods module (Winter Term 2024/25). Delivered 4 groups of lab seminars covering core statistical concepts and methods using STATA, R, and Excel.",
          section: "Teachings",handler: () => {
              window.location.href = "/tillmeissner.github.io/teachings/gy140-2024-2025/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/tillmeissner.github.io/assets/pdf/TillMeissner_CV_2025_other.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%6C%6C%61%6D@%67%6D%78.%64%65", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/tillytales.bsky.social", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/till-arne-meissner", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
