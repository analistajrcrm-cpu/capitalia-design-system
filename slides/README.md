# Láminas — Capitalia

Five 1280×720 deck layouts, recreated from `sources/07-slides.png`.

| File | Component | Source |
|---|---|---|
| `etapa.html` | `EtapaSlide` | orange "ETAPA 1 / RECOLETA" slide, verbatim |
| `beneficios.html` | `BeneficiosSlide` | plum "Beneficios" arcs slide, verbatim |
| `detalle.html` | `DetalleSlide` | cream petal-photo + timeline-list slide, verbatim |
| `cover.html` | `CoverSlide` | **extrapolated** — the deck screenshot showed no cover, so this reuses the composition of the print ad (`sources/04-ad.png`) |
| `cierre.html` | `CierreSlide` | **extrapolated** — closing frame built from the social post's headline + offer stack (`sources/06-social.png`) |

`index.html` runs all five as a click-through deck (arrow keys, or the buttons). Position is remembered in `localStorage`.

Rules carried over from the source deck: one idea per slide, 80px margin, title top-left except on the centred "Beneficios" layout, photography always cut by an arc or a petal, exactly one orange element per slide.
