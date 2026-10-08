Renders official Capitalia logo artwork — use it anywhere a mark or lockup belongs, and never redraw the flower in SVG or type the wordmark by hand.

```jsx
<Logo variant="lockup-horizontal" tone="bone" height={28} assetBase="../../assets/logo" />
```

- `variant`: `lockup-horizontal` (default, headers/footers), `lockup-vertical` (covers, centred), `mark` (avatars, favicons, watermarks), `wordmark` (when the mark is already on the page).
- `tone`: `plum` on cream/bone, `bone` on plum or photography, `orange`/`white` for the mark only.
- Clear space: at least one petal-width (about 25% of mark height) on all sides. Minimum lockup height 20px on screen.
- `assetBase` must point at `assets/logo` from wherever the page lives.
