# Colateral — Capitalia

Two pieces recreated from the supplied artwork.

- `AdBanner.jsx` — the 1584×772 landscape ad from `sources/04-ad.png`: plum copy panel closed by an arc, the logo mark blown up as the orange petal cluster at the seam, render bleeding off the right edge, "Conoce más en: **capitalia**.mx" top-right, bone lockup bottom-right.
- `EmailSignature.jsx` — the 1536×340 signature from `sources/05-signature.png`: plum band with square portrait, Light-weight two-line name, oversized bone mark, arrow + block label for the role; orange data band; bone capsule with the domain.

`index.html` shows the ad and a working signature generator — type a name, role and phone and the signature re-renders (it composes the `Input` and `Tabs` primitives).

The portrait masked in the original is a real photograph of a salesperson; `assets/img/retrato-ventas.png` is that crop at screenshot resolution. Replace it per person via the `portrait` prop.
