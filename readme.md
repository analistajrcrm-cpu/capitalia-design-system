# Capitalia — Design System

Capitalia is a master-planned residential development (*ciudad planeada*) marketed in Mexico, in Spanish, under the domain **capitalia.mx**. The collateral supplied describes a phased community — the first phase is named **Recoleta** ("Recoleta, donde la vida inicia") — sold by lot with monthly payments (*mensualidades desde $2,900 mxn*, *lotes desde 140 m²*, *entrega Julio 2030*). The pitch is not square metres, it is life: parks, planted streets, plazas, kids playing, families. The line that anchors everything is **"Una ciudad no solo crece: se planea"** and its sales counterpart **"Si se vive, se vende"**.

Capitalia sits in the Grupo Linmex family of brands (LINMEX, Soletta, Recoleta, Capitalia, Almare) and reads as the Yucatán-peninsula, Mérida-area product line.

## Sources this system was built from

Seven screenshots of the Capitalia brand book and campaign collateral, supplied by the user and preserved in `sources/`:

| File | What it shows |
|---|---|
| `sources/01-logo.png` | Vertical logo lockup on cream (mark + wordmark) |
| `sources/02-colors.png` | "Colores primarios" — #311E34, #D86F3A, #E9E3D8 with CMYK/RGB |
| `sources/03-type.png` | Type page 25: "NOMBRE — DM SANS", nine weights + italics |
| `sources/04-ad.png` | Landscape ad/billboard: plum panel, petal photo masks, orange petals, URL capsule |
| `sources/05-signature.png` | Email signature banner (plum + orange + bone bands, arrow motif) |
| `sources/06-social.png` | Three Instagram posts (plum, photo, cream-card-over-photo) |
| `sources/07-slides.png` | Deck template: plum "Beneficios" arcs slide, orange "ETAPA 1 / RECOLETA" slide, cream image+list slide |

**No codebase, Figma file, font binaries or vector logo were provided.** Everything visual in this system is either lifted pixel-for-pixel from those screenshots (logo artwork, photography, exact hex values) or derived from them and labelled as derived. There is no product UI in the sources, so this system contains **brand and collateral surfaces, not an app**: any screen-level pattern beyond what appears above would be invention.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `motion.css`, `base.css`.
- `assets/logo/` — extracted logo artwork: `mark-orange|plum|bone|white.png`, `wordmark-plum|bone.png`, `lockup-vertical.png`, `lockup-vertical-bone.png`, `lockup-horizontal-plum|bone.png`.
- `assets/img/` — photography lifted from the collateral: `parque-render.png`, `plaza-recoleta.png`, `retrato-ventas.png`.
- `components/` — React primitives, grouped: `brand/`, `actions/`, `forms/`, `display/`, `navigation/`, `feedback/`.
- `guidelines/` — 24 foundation specimen cards (Colors, Type, Spacing, Shape, Brand).
- `slides/` — five deck layouts recreated from `sources/07-slides.png`.
- `ui_kits/social/` — the Instagram post set from `sources/06-social.png`.
- `ui_kits/collateral/` — the landscape ad and the email signature.
- `sources/` — the original screenshots, renamed for programmatic access.
- `templates/presentacion/` — a copy-and-edit five-slide deck template (`Presentacion.dc.html`) that consuming projects can start from.
- `SKILL.md` — Agent-Skill front matter for use outside this project.

### Components

**brand/** — `Logo`, `PetalTag`, `PetalFrame`, `ArcSteps`, `PriceCallout`, `Icon`
**actions/** — `Button`, `IconButton`, `ArrowLink`
**forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
**display/** — `Card`, `Badge`, `Tag`, `Stat`
**navigation/** — `Tabs`
**feedback/** — `Dialog`, `Toast`, `Tooltip`

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML sheet showing its states.

#### Intentional additions

The brand book defines no component library, so the primitives above were authored: the brand-specific ones (`Logo`, `PetalTag`, `PetalFrame`, `ArcSteps`, `PriceCallout`) reproduce shapes that appear in the collateral, and the rest are the standard set a Spanish-language sales site or portal needs.

- `Icon` — a wrapper around **Lucide** outline icons served from unpkg. The sources contain no icon set at all; this is a flagged substitution (see Iconography).

## CONTENT FUNDAMENTALS

**Language.** Spanish (Mexico) throughout, with Mexican conventions: `$2,900 mxn`, `140 m²`, `999 315 2501`, `Julio 2030`, accents always typed (`plusvalía`, `Mánager`, `Pérez`).

**Voice.** Declarative and unhurried. The brand states a truth about cities, then lets the offer follow. It never hard-sells inside the headline.

- `Una ciudad no solo crece: se planea`
- `Una ciudad planeada no solo se construye; se vive, se recorre y se convierte en comunidad.`
- `La plusvalía no nace solo del tiempo. Nace de la vida que un lugar es capaz de generar`
- `Recoleta, donde la vida inicia`
- `Si se vive, SE VENDE`

**The signature construction.** A negation followed by a colon or semicolon and the real claim: *"no solo crece: se planea"*, *"no solo se construye; se vive"*, *"no nace solo del tiempo. Nace de…"*. The second half is what gets emphasis — either uppercase (`SE PLANEA`, `SE VENDE`) or orange (`SE VIVE`). Use this device once per piece; twice makes it a formula.

**Casing.** Sentence case for headlines and labels. Uppercase reserved for (a) the emphasised half of the signature line, (b) eyebrow labels (`ETAPA 1`, `LOREM IPSUM`), (c) sub-brand wordmarks (`RECOLETA`). Never uppercase a full sentence.

**Person.** The reader is *tú* (`Conoce más en:`, `Te contactamos en 24 h`), and Capitalia rarely says *nosotros* — the city is the subject, not the developer. Imperatives are soft and few: *Conoce*, *Agenda*, *Descarga*.

**Numbers.** Prices are the loudest element on a sales piece and always carry the unit: `Mensualidades desde $2,900 mxn`, `Desde $2,900 al mes`, `Lotes desde 140 m²`, `Entrega Julio 2030`. Bold the qualifier (`desde`, `al mes`), colour only the figure. Abbreviate the way people speak: `25k`, not `25,000`.

**Punctuation.** Colons and semicolons carry the rhythm. No exclamation marks. No ellipses. Em dashes are rare; the brand prefers a colon.

**Emoji: never.** Not in social captions, not in UI. Nothing in the supplied collateral contains one.

**UI copy** follows the same register: labels are sentence-case nouns (`Etapa de interés`, `Forma de pago`); confirmations are past tense and flat (`Solicitud enviada`); errors name the fix (`Faltan dígitos`), never blame. Buttons are verb + object (`Agendar visita`, `Descargar plano`), two to three words.

## VISUAL FOUNDATIONS

**Palette.** Three printed primaries and nothing else on brand pieces: plum `#311E34`, orange `#D86F3A`, bone `#E9E3D8`, over a cream page `#FBF7F3`. Plum is the dominant field; orange is a single accent (one element per composition — a figure, a petal cluster, a band, a plate); bone is type and light surface. Plum/orange/bone ramps and the muted status trio (`#4F7A52`, `#C08A2E`, `#B33B2B`) were derived in oklch for product use and are marked as derived in `tokens/colors.css`. Orange never means error, and never fills a background behind long text except at display size, where it becomes the whole field (the `ETAPA 1 / RECOLETA` slide).

**Type.** DM Sans alone, at every weight. Display copy is Bold at −2% tracking and 1.05 line-height, tight and stacked in two or three short lines. Headings are Medium; body is Regular at 1.5; eyebrow labels are Regular 12px uppercase at +0.14em. The brand book shows Extralight through Black; product uses Light 300 → Bold 700 only. No second typeface, no serif, no mono.

**Shape — the petal.** The mark is a seven-petal flower, and its petal drives every shape decision. Three forms recur:
1. **Petal capsule** — a pill with one corner squared off (bottom-right by default). It carries URLs (`capitalia.mx`), stage labels (`ETAPA 1`), and stats (`25k`).
2. **Petal photo mask** — photography cropped to `68% 68% 0 68%`, a soft three-lobed shape with one point. Portraits and hero renders live inside it.
3. **Large arcs** — quarter- and half-circle sweeps where a colour panel meets a photo, and hairline concentric arcs behind numbered steps on the plum slide.

Corner radii are otherwise binary: near-square (0–8px) for fields, tables and cards, or fully round for buttons, tags and avatars. Nothing sits at 12px "friendly rounded".

**Backgrounds.** Flat colour fields, never gradients — one exception: a bottom-up plum gradient used purely as text protection over a photo. Full-bleed photography is standard on covers and social; the cream page is the default for reading. Textures appear only as barely-visible large-scale marks on the brand book's cream (a whisper, not a pattern). No hand-drawn illustration, no repeating pattern, no noise overlay.

**Photography.** Warm, late-afternoon light. Architectural renders of parks, plazas, planted medians and flowering *lluvia de oro*/tabachín trees, plus real photographs of families and couples in public space. Colour is warm and slightly desaturated, never cool or teal-shifted, never black and white except as an incidental background texture. People are mid-action, unposed, looking away from camera. Always mask photography into a brand shape or run it full-bleed to an edge — a floating rounded rectangle is off-brand.

**Layout.** Split compositions: a plum copy panel against a photo, divided by an arc rather than a straight line, with the mark or URL capsule pinned to the opposite corner. Web pages use a 12-column grid, 1200px max, 64px margins (32 narrow). Decks are 1280×720 with an 80px margin, title top-left, one idea per slide. The logo/URL lives in a fixed corner; content never crowds within one petal-width of it.

**Transparency and blur.** Transparency is for protection only: plum at 60% over a photo, or bone at 24–40% for hairline rules on plum. Blur is used once, deliberately — a defocused photo standing in as a background for centred copy (social post 2). Never blur over flat colour, never frost a card.

**Borders and rules.** 1px hairlines. On cream they are plum at 12% alpha; on plum they are bone at 24–40%. A 2px orange rule marks an active tab. Thick borders and coloured left-border accents do not exist in this brand.

**Shadows.** The brand is print-flat: default is no shadow. Product UI may use `--shadow-card` on hover for interactive cards, `--shadow-raised` for floating panels and `--shadow-overlay` for modals. There are no inner shadows anywhere.

**Motion.** Restrained and short. Fades and 2–8px translations, 160ms for hover, 240ms for entrances, 420ms for panels, 700ms for a photo reveal, all on `cubic-bezier(.2,.7,.2,1)`. No bounce, no spring, no parallax, no scale-on-hover beyond a 2% image zoom inside a masked frame.

**Interaction states.** Hover darkens a fill (orange 500 → 600, plum 900 → 800) or lays plum at 8% behind a ghost control; it never lightens and never lifts. Press darkens one more step (orange 700) with no shrink or scale. Focus is a 2px orange outline at 2px offset, plus a 3px orange glow ring on fields. Disabled is 40% opacity with the cursor blocked — never a grey repaint.

**Cards.** Flat white (or bone) with a 1px plum-12% hairline, 16px radius, 24px padding, no shadow at rest. When a card carries an image, the image band is cut with an arc or petal, not a straight rounded edge. `tone="ink"` (plum) marks one feature card in a light grid.

## ICONOGRAPHY

**The supplied brand book contains no icon set.** What it does contain, and what should be preferred, is typographic and geometric:

- **Arrow glyphs as icons.** The email signature points at the job title with a thin `↘` set in DM Sans Light — a text character, not an SVG. `→`, `↓`, `↘` are all in-brand.
- **The petal mark as a bullet or divider.** The mark stands in for the letter "C" in the `RECOLETA` sub-brand wordmark, and works as an avatar or watermark on its own.
- **Numbered hairline circles** (1, 2, 3) on the arcs slide instead of icon bullets.
- **Hairline geometry** — thin arcs, circles and vertical rules — carries meaning where another brand would use icons.
- **No emoji, anywhere.** No PNG icons, no icon font, no sprite sheet exists in the sources.

For product surfaces that genuinely need a glyph set, this system substitutes **Lucide** (outline, 2px stroke, rounded caps — the closest match to the brand's hairline geometry), served from `https://unpkg.com/lucide-static@0.441.0/icons/<name>.svg` and tinted with `currentColor` by `components/brand/Icon.jsx`. **This is a substitution, not brand truth** — if Capitalia has an icon library, send it and it should replace Lucide wholesale. Rules while it is in use: 16/18/20/24px only, always at text colour, always beside a label, never as decoration, never filled.

## Known gaps

- **Fonts:** no binaries were supplied. DM Sans loads from Google Fonts (`tokens/fonts.css`) — the same release named in the brand book. Swap in licensed `.woff2` files under `assets/fonts/` if self-hosting is required.
- **Logo:** extracted from `sources/01-logo.png` as transparent PNGs and recoloured programmatically. These are raster. **Vector (SVG/AI/EPS) artwork is needed** for print and large-scale use. Nothing was drawn or reconstructed by hand.
- **Photography:** only the frames visible in the collateral could be extracted, at screenshot resolution. Everything else in this system uses those three images or a plain placeholder surface.
- **No product UI exists in the sources,** so there is no app or website kit — only the collateral surfaces the brand actually showed.
