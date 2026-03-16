---
title: Mapping Conflict in Ethiopia with ACLED Data
author: Till Meissner
date: "2026-03-16"
output:
  md_document:
    variant: gfm
    preserve_yaml: true
knit: (function(inputFile, encoding) {
    rmarkdown::render(inputFile,
                      encoding = encoding,
                      output_file = file.path(paste0(
                                                  "C:/Users/ADMIN/Documents/GitHub/tillmeissner.github.io/_posts/",
                                                  Sys.Date(),
                                                  '-',
                                                  substr(basename(inputFile), 1, nchar(basename(inputFile)) - 4),
                                                  '.md'
                                                  )
                                              )
                      )
    })
layout: post
tags: [ethiopia, conflict, acled, r-markdown, maps]
always_allow_html: true
---

Ethiopia has experienced some of the most intense and geographically
varied political violence on the continent over the past two decades.
This post uses data from the [Armed Conflict Location & Event Data
Project (ACLED)](https://acleddata.com/) to chart how conflict has
unfolded across the country since 2005 — from the protest waves of the
mid-2010s to the devastating Tigray War that began in late 2020.

------------------------------------------------------------------------

## Conflict Trends Over Time

ACLED records political violence and protest events at the individual
incident level, allowing us to track not only how many events occurred
in a given year but also what types of violence they involved. The
charts below focus on four event categories: **Battles**, **Violence
against civilians**, **Protests**, and **Riots** — the types most
relevant for studying civil conflict and popular mobilisation.

### Number of Events

{% include figure.liquid
  loading="eager"
  path="assets/img/acleddata/plot-event-counts-1.png"
  class="img-fluid rounded z-depth-1"
%}

Two distinct peaks are visible. The first, concentrated in the Protests
and Riots panels, corresponds to the Oromo and Amhara protest movement
of 2015–2017 that ultimately led to the resignation of Prime Minister
Hailemariam Desalegn and Abiy Ahmed’s rise to power. The second, far
larger peak in the Battles and Violence against civilians panels, marks
the Tigray War from November 2020.

### Reported Fatalities

{% include figure.liquid
  loading="eager"
  path="assets/img/acleddata/plot-fatalities-1.png"
  class="img-fluid rounded z-depth-1"
%}

The fatality data amplify the Tigray signal further. The battles panel
shows a catastrophic spike in 2021–2022, consistent with independent
estimates placing the war’s death toll in the hundreds of thousands.
Violence against civilians fatalities also rose sharply over the same
period, reflecting widespread atrocities documented by the UN and human
rights organisations.

------------------------------------------------------------------------

## Where Did the Violence Happen?

To answer the spatial question, the ACLED point events are joined to
wereda (district) polygons from the IPUMS Ethiopia shapefile. Weredas
with no recorded events in a given year are assigned a count of zero so
the maps render without gaps.

### Battles and Violence against Civilians, 2020–2024

{% include figure.liquid
  loading="eager"
  path="assets/img/acleddata/map-battles-events-1.png"
  class="img-fluid rounded z-depth-1"
%}

In 2020 and 2021 fighting was concentrated almost exclusively in Tigray.
By 2022 the front had expanded into Amhara and Afar as the conflict
escalated into a full-scale multi-front war. The Pretoria Agreement of
November 2022 brought a ceasefire that is reflected in the sharp
reduction in event counts for 2023 and 2024.

{% include figure.liquid
  loading="eager"
  path="assets/img/acleddata/map-battles-fatalities-1.png"
  class="img-fluid rounded z-depth-1"
%}

The fatality maps reveal a different pattern from raw event counts: some
weredas record relatively few events but extremely high fatality tolls,
pointing to particularly lethal engagements or mass atrocities rather
than sustained low-level fighting.

### Protests and Riots, 2015–2017

{% include figure.liquid
  loading="eager"
  path="assets/img/acleddata/map-protests-1.png"
  class="img-fluid rounded z-depth-1"
%}

Protests and riots in this period were heavily concentrated in Oromia —
particularly in the zones surrounding Addis Ababa where the Addis Ababa
Integrated Development Master Plan sparked the initial unrest. The
movement broadened in 2016 to include Amhara protesters in the north.

<!-- --- -->

<!-- ## Animated View: The Spread of Battles (2020–Present) -->

<!-- The animation below steps through each year from 2020 onwards, making the geographic expansion and subsequent contraction of the conflict front immediately visible. -->

<!-- ```{r animated-gif, fig.cap="Year-by-year spread of battle events across Ethiopian weredas from 2020. Source: ACLED.", interval=0.2, animation.hook="gifski"} -->

<!-- animated_plot <- event_counts_filled |> -->

<!--   dplyr::filter(event_type == "Battles", -->

<!--                 year >= "2020-01-01") |> -->

<!--   ggplot() + -->

<!--   geom_sf(aes(fill = event_count), color = NA) + -->

<!--   geom_sf(data = eth_regions, color = "gray80", fill = NA, linewidth = 0.4) + -->

<!--   ggrepel::geom_text_repel( -->

<!--     data = eth_regions, -->

<!--     aes(label = NAME_1, geometry = geometry), -->

<!--     stat = "sf_coordinates", -->

<!--     size = 2.5, color = "gray30", -->

<!--     min.segment.length = 0, seed = 42 -->

<!--   ) + -->

<!--   scale_fill_viridis_c(option = "magma", name = "Event Counts", -->

<!--                        direction = -1, na.value = "gray95") + -->

<!--   labs( -->

<!--     title    = "Conflict Event Counts for Battles by Wereda", -->

<!--     subtitle = "Ethiopia — Year: {frame_time}", -->

<!--     caption  = "Source: ACLED" -->

<!--   ) + -->

<!--   transition_time(year) + -->

<!--   ease_aes("linear") + -->

<!--   theme_minimal(base_size = 12) + -->

<!--   theme( -->

<!--     legend.position  = "bottom", -->

<!--     legend.key.width = unit(2, "cm"), -->

<!--     plot.title       = element_text(face = "bold", size = 14, hjust = 0.5), -->

<!--     plot.subtitle    = element_text(size = 12, hjust = 0.5), -->

<!--     plot.caption     = element_text(size = 9, face = "italic"), -->

<!--     axis.title       = element_blank(), -->

<!--     strip.text       = element_text(face = "bold", size = 10), -->

<!--     panel.grid       = element_blank() -->

<!--   ) -->

<!-- gif_path <- paste0("C:/Users/ADMIN/Documents/GitHub/tillmeissner.github.io/", -->

<!--                    "assets/img/acleddata/conflict_battles.gif") -->

<!-- dir.create(dirname(gif_path), recursive = TRUE, showWarnings = FALSE) -->

<!-- gganimate::animate( -->

<!--   animated_plot, -->

<!--   renderer = gifski_renderer(gif_path), -->

<!--   nframes  = 100, -->

<!--   fps      = 5, -->

<!--   width    = 800, -->

<!--   height   = 600 -->

<!-- ) -->

<!-- knitr::include_graphics("/assets/img/acleddata/conflict_battles.gif") -->

<!-- ``` -->

<!-- The animation underscores how geographically contained the initial phase of the conflict was, and how dramatically the area affected expanded in 2021–2022 before the ceasefire took hold. -->

------------------------------------------------------------------------

*Data: [ACLED](https://acleddata.com/). Administrative boundaries: IPUMS
Ethiopia.*
