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
            },{id: "post-mapping-conflict-in-ethiopia-with-acled-data",
        
          title: "Mapping Conflict in Ethiopia with ACLED Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/tillmeissner.github.io/blog/2026/acleddata_post/";
          
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
      },{id: "books-die-kinder-von-eden",
          title: 'Die Kinder von Eden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/die_kinder_von_eden/";
            },},{id: "books-das-urteil-und-andere-erzählungen",
          title: 'Das Urteil und andere Erzählungen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/das_urteil_und_andere_erzahlungen/";
            },},{id: "books-der-erdbeerpflücker-jette-weingärtner-1",
          title: 'Der Erdbeerpflücker (Jette Weingärtner #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_erdbeerpflucker/";
            },},{id: "books-andorra",
          title: 'Andorra',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/andorra/";
            },},{id: "books-der-sandmann",
          title: 'Der Sandmann',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_sandmann/";
            },},{id: "books-lord-of-the-flies",
          title: 'Lord of the Flies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/lord_of_the_flies/";
            },},{id: "books-nathan-der-weise",
          title: 'Nathan der Weise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/nathan_der_weise/";
            },},{id: "books-woyzeck-leonce-und-lena",
          title: 'Woyzeck/Leonce und Lena',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/woyzeckleonce_und_lena/";
            },},{id: "books-maria-stuart",
          title: 'Maria Stuart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/maria_stuart/";
            },},{id: "books-of-mice-and-men",
          title: 'Of Mice and Men',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/of_mice_and_men/";
            },},{id: "books-the-assault",
          title: 'The Assault',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_assault/";
            },},{id: "books-the-picture-of-dorian-gray",
          title: 'The Picture of Dorian Gray',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_picture_of_dorian_gray/";
            },},{id: "books-mephisto",
          title: 'Mephisto',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/mephisto/";
            },},{id: "books-macbeth",
          title: 'Macbeth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/macbeth/";
            },},{id: "books-tannöd",
          title: 'Tannöd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/tannod/";
            },},{id: "books-the-great-gatsby",
          title: 'The Great Gatsby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_great_gatsby/";
            },},{id: "books-afrikanisches-fieber-german-edition",
          title: 'Afrikanisches Fieber (German Edition)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/afrikanisches_fieber/";
            },},{id: "books-ach-afrika-berichte-aus-dem-inneren-eines-kontinents",
          title: 'Ach, Afrika. Berichte aus dem Inneren eines Kontinents',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/ach_afrika_berichte_aus_dem_inneren_eines_kontinen/";
            },},{id: "books-buddenbrooks-the-decline-of-a-family",
          title: 'Buddenbrooks: The Decline of a Family',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/buddenbrooks_the_decline_of_a_family/";
            },},{id: "books-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/siddhartha/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_stranger/";
            },},{id: "books-narcissus-and-goldmund",
          title: 'Narcissus and Goldmund',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/narcissus_and_goldmund/";
            },},{id: "books-die-angst-des-weissen-mannes",
          title: 'Die Angst des weissen Mannes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/die_angst_des_weissen_mannes/";
            },},{id: "books-deutschland-schwarz-weiß",
          title: 'Deutschland Schwarz Weiß',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/deutschland_schwarz_wei/";
            },},{id: "books-the-old-man-and-the-sea",
          title: 'The Old Man and the Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_old_man_and_the_sea/";
            },},{id: "books-die-physiker",
          title: 'Die Physiker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/die_physiker/";
            },},{id: "books-the-diary-of-a-young-girl",
          title: 'The Diary of a Young Girl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_diary_of_a_young_girl/";
            },},{id: "books-peter-camenzind",
          title: 'Peter Camenzind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/peter_camenzind/";
            },},{id: "books-an-ideal-husband",
          title: 'An Ideal Husband',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/an_ideal_husband/";
            },},{id: "books-the-tortilla-curtain",
          title: 'The Tortilla Curtain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_tortilla_curtain/";
            },},{id: "books-poor-economics-a-radical-rethinking-of-the-way-to-fight-global-poverty",
          title: 'Poor Economics: A Radical Rethinking of the Way to Fight Global Poverty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/poor_economics_a_radical_rethinking_of_the_way_to/";
            },},{id: "books-americanah",
          title: 'Americanah',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/americanah/";
            },},{id: "books-long-walk-to-freedom",
          title: 'Long Walk to Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/long_walk_to_freedom/";
            },},{id: "books-the-feast-of-the-goat",
          title: 'The Feast of the Goat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_feast_of_the_goat/";
            },},{id: "books-the-festival-of-insignificance",
          title: 'The Festival of Insignificance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_festival_of_insignificance/";
            },},{id: "books-the-joke",
          title: 'The Joke',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_joke/";
            },},{id: "books-the-unbearable-lightness-of-being",
          title: 'The Unbearable Lightness of Being',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_unbearable_lightness_of_being/";
            },},{id: "books-things-fall-apart-the-african-trilogy-1",
          title: 'Things Fall Apart (The African Trilogy, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/things_fall_apart/";
            },},{id: "books-half-of-a-yellow-sun",
          title: 'Half of a Yellow Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/half_of_a_yellow_sun/";
            },},{id: "books-congo-een-geschiedenis",
          title: 'Congo: een geschiedenis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/congo_een_geschiedenis/";
            },},{id: "books-jugend-ohne-gott",
          title: 'Jugend ohne Gott',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/jugend_ohne_gott/";
            },},{id: "books-der-schimmelreiter",
          title: 'Der Schimmelreiter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_schimmelreiter/";
            },},{id: "books-purple-hibiscus",
          title: 'Purple Hibiscus',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/purple_hibiscus/";
            },},{id: "books-we-should-all-be-feminists",
          title: 'We Should All Be Feminists',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/we_should_all_be_feminists/";
            },},{id: "books-dead-aid-why-aid-is-not-working-and-how-there-is-a-better-way-for-africa",
          title: 'Dead Aid: Why Aid Is Not Working and How There Is a Better...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/dead_aid_why_aid_is_not_working_and_how_there_is_a/";
            },},{id: "books-africa-why-economists-get-it-wrong",
          title: 'Africa: Why Economists Get It Wrong',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/africa_why_economists_get_it_wrong/";
            },},{id: "books-harun-und-das-meer-der-geschichten",
          title: 'Harun und das Meer der Geschichten.',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/harun_und_das_meer_der_geschichten/";
            },},{id: "books-a-fine-balance",
          title: 'A Fine Balance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/a_fine_balance/";
            },},{id: "books-the-bottom-billion-why-the-poorest-countries-are-failing-and-what-can-be-done-about-it",
          title: 'The Bottom Billion: Why the Poorest Countries Are Failing and What Can Be...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_bottom_billion_why_the_poorest_countries_are_f/";
            },},{id: "books-über-grenzen-denken-eine-ethik-der-migration",
          title: 'Über Grenzen denken: Eine Ethik der Migration',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/uber_grenzen_denken_eine_ethik_der_migration/";
            },},{id: "books-debating-the-ethics-of-immigration-is-there-a-right-to-exclude",
          title: 'Debating the Ethics of Immigration: Is There a Right to Exclude?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/debating_the_ethics_of_immigration_is_there_a_righ/";
            },},{id: "books-homo-faber",
          title: 'Homo Faber',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/homo_faber/";
            },},{id: "books-why-i-39-m-no-longer-talking-to-white-people-about-race",
          title: 'Why I&amp;#39;m No Longer Talking to White People About Race',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/why_im_no_longer_talking_to_white_people_about_rac/";
            },},{id: "books-kicking-away-the-ladder-development-strategy-in-historical-perspective",
          title: 'Kicking Away the Ladder: Development Strategy in Historical Perspective',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/kicking_away_the_ladder/";
            },},{id: "books-exit-racism-rassismuskritisch-denken-lernen",
          title: 'exit RACISM: rassismuskritisch denken lernen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/exit_racism_rassismuskritisch_denken_lernen/";
            },},{id: "books-god-help-the-child",
          title: 'God Help the Child',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/god_help_the_child/";
            },},{id: "books-homage-to-catalonia",
          title: 'Homage to Catalonia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/homage_to_catalonia/";
            },},{id: "books-night-train-to-lisbon",
          title: 'Night Train to Lisbon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/night_train_to_lisbon/";
            },},{id: "books-song-of-solomon",
          title: 'Song of Solomon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/song_of_solomon/";
            },},{id: "books-deutschland-ein-wintermärchen",
          title: 'Deutschland. Ein Wintermärchen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/deutschland_ein_wintermarchen/";
            },},{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/1984/";
            },},{id: "books-natives-race-and-class-in-the-ruins-of-empire",
          title: 'Natives: Race and Class in the Ruins of Empire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/natives_race_and_class_in_the_ruins_of_empire/";
            },},{id: "books-sapiens-a-brief-history-of-humankind",
          title: 'Sapiens: A Brief History of Humankind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/sapiens_a_brief_history_of_humankind/";
            },},{id: "books-21-lessons-for-the-21st-century",
          title: '21 Lessons for the 21st Century',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/21_lessons_for_the_21st_century/";
            },},{id: "books-gegen-den-hass",
          title: 'Gegen den Hass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/gegen_den_hass/";
            },},{id: "books-el-alquimista",
          title: 'El alquimista',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/el_alquimista/";
            },},{id: "books-the-namesake",
          title: 'The Namesake',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_namesake/";
            },},{id: "books-good-economics-for-hard-times-better-answers-to-our-biggest-problems",
          title: 'Good Economics for Hard Times: Better Answers to Our Biggest Problems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/good_economics_for_hard_times_better_answers_to_ou/";
            },},{id: "books-between-the-world-and-me",
          title: 'Between the World and Me',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/between_the_world_and_me/";
            },},{id: "books-the-globalization-paradox-democracy-and-the-future-of-the-world-economy",
          title: 'The Globalization Paradox: Democracy and the Future of the World Economy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_globalization_paradox_democracy_and_the_future/";
            },},{id: "books-23-things-they-don-39-t-tell-you-about-capitalism",
          title: '23 Things They Don&amp;#39;t Tell You About Capitalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/23_things_they_dont_tell_you_about_capitalism/";
            },},{id: "books-we-were-eight-years-in-power-an-american-tragedy",
          title: 'We Were Eight Years in Power: An American Tragedy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/we_were_eight_years_in_power_an_american_tragedy/";
            },},{id: "books-economics-the-user-39-s-guide",
          title: 'Economics: The User&amp;#39;s Guide',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/economics_the_users_guide/";
            },},{id: "books-gegenwartsbewältigung",
          title: 'Gegenwartsbewältigung',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/gegenwartsbewaltigung/";
            },},{id: "books-notes-on-grief",
          title: 'Notes on Grief',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/notes_on_grief/";
            },},{id: "books-agnes",
          title: 'Agnes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/agnes/";
            },},{id: "books-bad-samaritans-the-myth-of-free-trade-and-the-secret-history-of-capitalism",
          title: 'Bad Samaritans: The Myth of Free Trade and the Secret History of Capitalism...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/bad_samaritans_the_myth_of_free_trade_and_the_secr/";
            },},{id: "books-biedermann-und-die-brandstifter",
          title: 'Biedermann und die Brandstifter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/biedermann_und_die_brandstifter/";
            },},{id: "books-der-besuch-der-alten-dame",
          title: 'Der Besuch der alten Dame',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_besuch_der_alten_dame/";
            },},{id: "books-der-richter-und-sein-henker",
          title: 'Der Richter und sein Henker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_richter_und_sein_henker/";
            },},{id: "books-ein-leben-ist-zu-wenig-die-autobiographie",
          title: 'Ein Leben ist zu wenig. Die Autobiographie',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/ein_leben_ist_zu_wenig_die_autobiographie/";
            },},{id: "books-elefant",
          title: 'Elefant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/elefant/";
            },},{id: "books-giovanni-s-room",
          title: 'Giovanni’s Room',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/giovannis_room/";
            },},{id: "books-homo-deus-a-history-of-tomorrow",
          title: 'Homo Deus: A History of Tomorrow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/homo_deus_a_history_of_tomorrow/";
            },},{id: "books-lila-lila",
          title: 'Lila, Lila',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/lila_lila/";
            },},{id: "books-on-beauty",
          title: 'On Beauty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/on_beauty/";
            },},{id: "books-straight-talk-on-trade-ideas-for-a-sane-world-economy",
          title: 'Straight Talk on Trade: Ideas for a Sane World Economy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/straight_talk_on_trade_ideas_for_a_sane_world_econ/";
            },},{id: "books-woyzeck",
          title: 'Woyzeck',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/woyzeck/";
            },},{id: "books-the-divide-a-brief-guide-to-global-inequality-and-its-solutions",
          title: 'The Divide: A Brief Guide to Global Inequality and its Solutions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_divide_a_brief_guide_to_global_inequality_and/";
            },},{id: "books-axolotl-roadkill",
          title: 'Axolotl Roadkill',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/axolotl_roadkill/";
            },},{id: "books-what-white-people-can-do-next-from-allyship-to-coalition",
          title: 'What White People Can Do Next: From Allyship to Coalition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/what_white_people_can_do_next_from_allyship_to_coa/";
            },},{id: "books-afrotopia",
          title: 'Afrotopia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/afrotopia/";
            },},{id: "books-allegro-pastell",
          title: 'Allegro Pastell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/allegro_pastell/";
            },},{id: "books-sei-kein-mann-warum-männlichkeit-ein-albtraum-für-jungs-ist",
          title: 'Sei kein Mann: Warum Männlichkeit ein Albtraum für Jungs ist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/sei_kein_mann_warum_mannlichkeit_ein_albtraum_fur/";
            },},{id: "books-ökonomie-der-ungleichheit-eine-einführung",
          title: 'Ökonomie der Ungleichheit: Eine Einführung',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/okonomie_der_ungleichheit_eine_einfuhrung/";
            },},{id: "books-home-body",
          title: 'Home Body',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/home_body/";
            },},{id: "books-american-spy",
          title: 'American Spy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/american_spy/";
            },},{id: "books-homegoing",
          title: 'Homegoing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/homegoing/";
            },},{id: "books-nw",
          title: 'NW',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/nw/";
            },},{id: "books-the-value-of-everything-making-and-taking-in-the-global-economy",
          title: 'The Value of Everything: Making and Taking in the Global Economy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_value_of_everything_making_and_taking_in_the_g/";
            },},{id: "books-the-white-man-39-s-burden-why-the-west-39-s-efforts-to-aid-the-rest-have-done-so-much-ill-and-so-little-good",
          title: 'The White Man&amp;#39;s Burden: Why the West&amp;#39;s Efforts to Aid the Rest Have...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_white_mans_burden_why_the_wests_efforts_to_aid/";
            },},{id: "books-people-power-and-profits-progressive-capitalism-for-an-age-of-discontent",
          title: 'People, Power, and Profits: Progressive Capitalism for an Age of Discontent',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/people_power_and_profits_progressive_capitalism_fo/";
            },},{id: "books-ein-ganzes-leben",
          title: 'Ein ganzes Leben',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/ein_ganzes_leben/";
            },},{id: "books-the-promise",
          title: 'The Promise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_promise/";
            },},{id: "books-think-again-the-power-of-knowing-what-you-don-39-t-know",
          title: 'Think Again: The Power of Knowing What You Don&amp;#39;t Know',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/think_again_the_power_of_knowing_what_you_dont_kno/";
            },},{id: "books-unsere-welt-neu-denken-eine-einladung",
          title: 'Unsere Welt neu denken: Eine Einladung',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/unsere_welt_neu_denken_eine_einladung/";
            },},{id: "books-atomic-habits-an-easy-amp-proven-way-to-build-good-habits-amp-break-bad-ones",
          title: 'Atomic Habits: An Easy &amp;amp; Proven Way to Build Good Habits &amp;amp; Break...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/atomic_habits_an_easy_proven_way_to_build_good_hab/";
            },},{id: "books-the-deficit-myth-modern-monetary-theory-and-the-birth-of-the-people-39-s-economy",
          title: 'The Deficit Myth: Modern Monetary Theory and the Birth of the People&amp;#39;s Economy...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_deficit_myth_modern_monetary_theory_and_the_bi/";
            },},{id: "books-guns-germs-and-steel-the-fates-of-human-societies",
          title: 'Guns, Germs, and Steel: The Fates of Human Societies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/guns_germs_and_steel_the_fates_of_human_societies/";
            },},{id: "books-if-beale-street-could-talk-vintage-international",
          title: 'If Beale Street Could Talk (Vintage International)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/if_beale_street_could_talk/";
            },},{id: "books-sonny-39-s-blues-story-collection",
          title: 'Sonny&amp;#39;s Blues (Story collection)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/sonnys_blues/";
            },},{id: "books-der-schatten-des-windes-der-friedhof-der-vergessenen-bücher-1",
          title: 'Der Schatten des Windes (Der Friedhof der Vergessenen Bücher, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/der_schatten_des_windes/";
            },},{id: "books-disgrace",
          title: 'Disgrace',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/disgrace/";
            },},{id: "books-harry-potter-und-der-gefangene-von-askaban-harry-potter-3",
          title: 'Harry Potter und der Gefangene von Askaban (Harry Potter, #3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/harry_potter_und_der_gefangene_von_askaban/";
            },},{id: "books-harry-potter-und-der-stein-der-weisen-harry-potter-1",
          title: 'Harry Potter und der Stein der Weisen (Harry Potter, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/harry_potter_und_der_stein_der_weisen/";
            },},{id: "books-harry-potter-und-die-kammer-des-schreckens-harry-potter-2",
          title: 'Harry Potter und die Kammer des Schreckens (Harry Potter, #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/harry_potter_und_die_kammer_des_schreckens/";
            },},{id: "books-the-oxford-handbook-of-the-ethiopian-economy",
          title: 'The Oxford Handbook of the Ethiopian Economy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_oxford_handbook_of_the_ethiopian_economy/";
            },},{id: "books-the-art-of-thinking-clearly",
          title: 'The Art of Thinking Clearly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_art_of_thinking_clearly/";
            },},{id: "books-another-now-dispatches-from-an-alternative-present",
          title: 'Another Now: Dispatches from an Alternative Present',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/another_now_dispatches_from_an_alternative_present/";
            },},{id: "books-one-economics-many-recipes-globalization-institutions-and-economic-growth",
          title: 'One Economics, Many Recipes: Globalization, Institutions, and Economic Growth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/one_economics_many_recipes_globalization_instituti/";
            },},{id: "books-open-water",
          title: 'Open Water',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/open_water/";
            },},{id: "books-offene-see",
          title: 'Offene See',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/offene_see/";
            },},{id: "books-at-night-all-blood-is-black",
          title: 'At Night All Blood is Black',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/at_night_all_blood_is_black/";
            },},{id: "books-dead-poets-society",
          title: 'Dead Poets Society',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/dead_poets_society/";
            },},{id: "books-desintegriert-euch",
          title: 'Desintegriert euch!',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/desintegriert_euch/";
            },},{id: "books-the-code-of-capital-how-the-law-creates-wealth-and-inequality",
          title: 'The Code of Capital: How the Law Creates Wealth and Inequality',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_code_of_capital_how_the_law_creates_wealth_and/";
            },},{id: "books-brd-noir-die-ungleichzeitigkeit-von-biografie-und-geschichte",
          title: 'BRD Noir: Die Ungleichzeitigkeit von Biografie und Geschichte',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/brd_noir_die_ungleichzeitigkeit_von_biografie_und/";
            },},{id: "books-england-your-england",
          title: 'England Your England',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/england_your_england/";
            },},{id: "books-in-a-free-state",
          title: 'In a Free State',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/in_a_free_state/";
            },},{id: "books-keystroke-kapitalismus-ungleichheit-auf-knopfdruck-kleine-reihe-kurze-interventionen-zu-aktuellen-themen-german-edition",
          title: 'Keystroke-Kapitalismus: Ungleichheit auf Knopfdruck (kleine reihe - kurze Interventionen zu aktuellen Themen) (German...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/keystrokekapitalismus_ungleichheit_auf_knopfdruck/";
            },},{id: "books-the-old-is-dying-and-the-new-cannot-be-born-from-progressive-neoliberalism-to-trump-and-beyond",
          title: 'The Old is Dying and the New Cannot Be Born: From Progressive Neoliberalism...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_old_is_dying_and_the_new_cannot_be_born_from_p/";
            },},{id: "books-dreams-from-my-father-a-story-of-race-and-inheritance",
          title: 'Dreams from My Father: A Story of Race and Inheritance',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/dreams_from_my_father/";
            },},{id: "books-swing-time",
          title: 'Swing Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/swing_time/";
            },},{id: "books-how-will-capitalism-end-essays-on-a-failing-system",
          title: 'How Will Capitalism End? Essays on a Failing System',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/how_will_capitalism_end_essays_on_a_failing_system/";
            },},{id: "books-freedom",
          title: 'Freedom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/freedom/";
            },},{id: "books-a-planet-to-win-why-we-need-a-green-new-deal",
          title: 'A Planet to Win: Why We Need a Green New Deal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/a_planet_to_win_why_we_need_a_green_new_deal/";
            },},{id: "books-geld-oder-leben-wie-unser-irrationales-verhältnis-zum-geld-die-gesellschaft-spaltet",
          title: 'Geld oder Leben: Wie unser irrationales Verhältnis zum Geld die Gesellschaft spaltet',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/geld_oder_leben_wie_unser_irrationales_verhaltnis/";
            },},{id: "books-on-earth-we-39-re-briefly-gorgeous",
          title: 'On Earth We&amp;#39;re Briefly Gorgeous',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/on_earth_were_briefly_gorgeous/";
            },},{id: "books-crashed-how-a-decade-of-financial-crises-changed-the-world",
          title: 'Crashed: How a Decade of Financial Crises Changed the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/crashed/";
            },},{id: "books-the-rise-of-quot-the-rest-quot-challenges-to-the-west-from-late-industrializing-economies",
          title: 'The Rise of &amp;quot;The Rest&amp;quot;: Challenges to the West from Late-Industrializing Economies',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_rise_of_the_rest_challenges_to_the_west_from_l/";
            },},{id: "books-a-short-history-of-nearly-everything",
          title: 'A Short History of Nearly Everything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/a_short_history_of_nearly_everything/";
            },},{id: "books-the-quiet-american",
          title: 'The Quiet American',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_quiet_american/";
            },},{id: "books-home",
          title: 'Home',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/home/";
            },},{id: "books-sula",
          title: 'Sula',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/sula/";
            },},{id: "books-the-dream-of-the-celt",
          title: 'The Dream of the Celt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_dream_of_the_celt/";
            },},{id: "books-the-audacity-of-hope-thoughts-on-reclaiming-the-american-dream",
          title: 'The Audacity of Hope: Thoughts on Reclaiming the American Dream',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_audacity_of_hope_thoughts_on_reclaiming_the_am/";
            },},{id: "books-talking-to-my-daughter-about-the-economy-or-how-capitalism-works-and-how-it-fails",
          title: 'Talking to My Daughter About the Economy: or, How Capitalism Works—and How It...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/talking_to_my_daughter_about_the_economy_or_how_ca/";
            },},{id: "books-the-race-between-education-and-technology",
          title: 'The Race between Education and Technology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_race_between_education_and_technology/";
            },},{id: "books-escape-from-empire-the-developing-world-39-s-journey-through-heaven-and-hell",
          title: 'Escape from Empire: The Developing World&amp;#39;s Journey Through Heaven and Hell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/escape_from_empire_the_developing_worlds_journey_t/";
            },},{id: "books-capitalism-without-capital-the-rise-of-the-intangible-economy",
          title: 'Capitalism without Capital: The Rise of the Intangible Economy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/capitalism_without_capital_the_rise_of_the_intangi/";
            },},{id: "books-home-fire",
          title: 'Home Fire',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/home_fire/";
            },},{id: "books-the-establishment-and-how-they-get-away-with-it",
          title: 'The Establishment: And How They Get Away with It',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_establishment_and_how_they_get_away_with_it/";
            },},{id: "books-platform",
          title: 'Platform',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/platform/";
            },},{id: "books-slow-man",
          title: 'Slow Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/slow_man/";
            },},{id: "books-the-only-story",
          title: 'The Only Story',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_only_story/";
            },},{id: "books-putting-development-first-the-importance-of-policy-space-in-the-wto-and-international-financial-institutions",
          title: 'Putting Development First: The Importance of Policy Space in the WTO and International...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/putting_development_first_the_importance_of_policy/";
            },},{id: "books-crossroads",
          title: 'Crossroads',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/crossroads/";
            },},{id: "books-the-age-of-extremes-a-history-of-the-world-1914-1991",
          title: 'The Age of Extremes: A History of the World, 1914–1991',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/age_of_extremes/";
            },},{id: "books-industrial-policy-and-economic-transformation-in-africa",
          title: 'Industrial Policy and Economic Transformation in Africa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/industrial_policy_and_economic_transformation_in_a/";
            },},{id: "books-pachinko",
          title: 'Pachinko',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/pachinko/";
            },},{id: "books-on-love",
          title: 'On Love',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/on_love/";
            },},{id: "books-trade-wars-are-class-wars-how-rising-inequality-distorts-the-global-economy-and-threatens-international-peace",
          title: 'Trade Wars Are Class Wars: How Rising Inequality Distorts the Global Economy and...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/trade_wars_are_class_wars_how_rising_inequality_di/";
            },},{id: "books-sweet-tooth",
          title: 'Sweet Tooth',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/sweet_tooth/";
            },},{id: "books-hillbilly-elegy-a-memoir-of-a-family-and-culture-in-crisis",
          title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/hillbilly_elegy_a_memoir_of_a_family_and_culture_i/";
            },},{id: "books-tiefrot-und-radikal-bunt-für-eine-neue-linke-erzählung",
          title: 'Tiefrot und radikal bunt: Für eine neue linke Erzählung',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/tiefrot_und_radikal_bunt_fur_eine_neue_linke_erzah/";
            },},{id: "books-how-europe-underdeveloped-africa",
          title: 'How Europe Underdeveloped Africa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/how_europe_underdeveloped_africa/";
            },},{id: "books-ich-weiß-ich-war-39-s",
          title: 'Ich weiß, ich war&amp;#39;s',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/ich_wei_ich_wars/";
            },},{id: "books-clandestine-in-chile-the-adventures-of-miguel-littín",
          title: 'Clandestine in Chile: The Adventures of Miguel Littín',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/clandestine_in_chile_the_adventures_of_miguel_litt/";
            },},{id: "books-my-cat-yugoslavia",
          title: 'My Cat Yugoslavia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/my_cat_yugoslavia/";
            },},{id: "books-down-and-out-in-paris-and-london",
          title: 'Down and Out in Paris and London',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/down_and_out_in_paris_and_london/";
            },},{id: "books-pedro-páramo",
          title: 'Pedro Páramo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/pedro_paramo/";
            },},{id: "books-the-corrections",
          title: 'The Corrections',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_corrections/";
            },},{id: "books-cutting-for-stone",
          title: 'Cutting for Stone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/cutting_for_stone/";
            },},{id: "books-ethiopia-s-developmental-state-political-order-and-distributive-crisis-african-studies-series-number-168",
          title: 'Ethiopia’s ‘Developmental State’: Political Order and Distributive Crisis (African Studies, Series Number 168)...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/ethiopias_developmental_state_political_order_and/";
            },},{id: "books-estates-an-intimate-history",
          title: 'Estates: An Intimate History',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/estates_an_intimate_history/";
            },},{id: "books-eurotrash",
          title: 'Eurotrash',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/eurotrash/";
            },},{id: "books-imperium",
          title: 'Imperium',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/imperium/";
            },},{id: "books-hard-land",
          title: 'Hard Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/hard_land/";
            },},{id: "books-petit-pays",
          title: 'Petit pays',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/petit_pays/";
            },},{id: "books-becks-letzter-sommer",
          title: 'Becks letzter Sommer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/becks_letzter_sommer/";
            },},{id: "books-what-if-we-stopped-pretending",
          title: 'What If We Stopped Pretending?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/what_if_we_stopped_pretending/";
            },},{id: "books-klara-and-the-sun",
          title: 'Klara and the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/klara_and_the_sun/";
            },},{id: "books-drive-your-plow-over-the-bones-of-the-dead",
          title: 'Drive Your Plow Over the Bones of the Dead',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/drive_your_plow_over_the_bones_of_the_dead/";
            },},{id: "books-the-lying-life-of-adults",
          title: 'The Lying Life of Adults',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/the_lying_life_of_adults/";
            },},{id: "books-carmen-o-cómo-me-inicié-en-el-negocio-de-bailar-sin-ropa-spanish-edition",
          title: 'Carmen o cómo me inicié en el negocio de bailar sin ropa (Spanish...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/tillmeissner.github.io/books/carmen_o_como_me_inicie_en_el_negocio_de_bailar_si/";
            },},{id: "news-i-successfully-defended-my-phd-in-economic-geography-at-the-london-school-of-economics-and-political-science-my-supervisor-andrés-rodríguez-posé-kindly-shared-the-news-on-linkedin",
          title: 'I successfully defended my PhD in Economic Geography at the London School of...',
          description: "",
          section: "News",},{id: "projects-china-and-ghana-39-s-economic-transformation",
          title: 'China and Ghana&amp;#39;s Economic Transformation',
          description: "A policy report on China&#39;s role in Ghana&#39;s economic transformation, written for the African Center for Economic Transformation (ACET)",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/china_africa_transformation/";
            },},{id: "projects-migration-in-the-face-of-climate-change",
          title: 'Migration in the Face of Climate Change',
          description: "Assessing the Potential of Ultra-Poor Graduation Programs in Upper Egypt.",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/climate_change_report/";
            },},{id: "projects-urban-africa-growth-tracker",
          title: 'Urban Africa Growth Tracker',
          description: "An interactive dashboard tracking urbanization trends across Sub-Saharan Africa.",
          section: "Projects",handler: () => {
              window.location.href = "/tillmeissner.github.io/projects/urban_africa_growth/";
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
          window.open("https://www.linkedin.com/in/linkedin.com/in/till-arne-meissner", "_blank");
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
