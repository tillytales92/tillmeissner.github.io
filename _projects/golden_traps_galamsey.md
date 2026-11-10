---
layout: page
title: "Golden Traps? Artisanal Mining in Ghana"
description: Self-reinforcing dynamics in the shift from agriculture to illegal artisanal gold mining (galamsey), studied with remote sensing and a structural model of land use
img: assets/img/galamsey_map.jpg
importance: 1
category: work
---

**Golden Traps? Self-Reinforcing Dynamics of Artisanal Mining** &nbsp;|&nbsp; with Sreevidya Ayyar, Hemawathy Balarama and Yoshiki Wiskamp &nbsp;|&nbsp; _work in progress_

<div class="row justify-content-sm-center mt-3">
  <div class="col-sm-12">
    {% include figure.liquid loading="eager" path="assets/img/galamsey_map.jpg" title="Detected mining extent in 2017 and 2024" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Mining extent detected by our classifier in 2017 (purple) and 2024 (red), with true-colour satellite imagery of the same area in 2017 and 2024 (right). Awomaso, Ashanti Region.
</div>

<div class="mt-3 mb-4">
  <a href="https://rgee-auth-tillam.projects.earthengine.app/view/galamsey-tracker" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Open the Galamsey Tracker</a>
</div>

Transient shocks, such as weather and swings in global commodity prices, increasingly drive land-use transitions in developing economies. Where land-use decisions generate externalities, small deviations from the status quo can trigger self-reinforcing dynamics that lead to large and potentially irreversible shifts between equilibria.

This project studies these dynamics in the shift from agriculture to **illegal artisanal gold mining** — known in Ghana as _galamsey_. Artisanal mining employs an estimated 45 million households in Sub-Saharan Africa, and in Ghana it has caused severe land degradation, water pollution, and irreversible forest loss, much of it on former farmland and in the country's cocoa-growing regions.

We ask two questions:

- To what extent are land-use changes driven by individual, poverty-driven decisions, and to what extent by **spatial externalities and strategic complementarities** between neighbouring land users?
- How can **policy interventions** help coordinate land-use decisions towards socially optimal outcomes?

## Approach

We assemble a novel dataset combining **remote-sensing data** and **administrative records** to document the spatial and temporal spread of mining activity and its determinants across Ghana. Building on these data, we will estimate a **structural model of land-use decisions** to quantify how environmental externalities, market forces, and community characteristics shape the transition from agriculture to mining. We then use the model to identify how and when policy interventions can align land-use decisions with socially optimal outcomes, preventing costly and potentially irreversible land degradation.

## Galamsey Tracker

The [Galamsey Tracker](https://rgee-auth-tillam.projects.earthengine.app/view/galamsey-tracker) is an interactive Google Earth Engine app I built to show how much of Ghana's gold-mining expansion between 2017 and 2025 has come at the expense of forest, district by district. It combines:

- **Mining extent** from our own Random Forest classifier trained on Google's AlphaEarth satellite embeddings, run annually for 2017–2025 and shown as the cumulative mined area to date.
- **Forest type** from the [Forest Typology (ForTy) 2020](https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/) map by Google DeepMind, Google Research, WRI and IIASA, which separates primary, naturally regenerating and planted forest from plantations, tree crops and other land.
- **Protected areas** (mostly forest reserves) from the World Database on Protected Areas.

Users can pick a region or district in the five main galamsey regions (Western, Western North, Ashanti, Central and Eastern), view mining trends and the land types lost to mining, scrub through the years with a slider, and generate animated time-lapses from Sentinel-2 and Landsat imagery (2015–2025).
