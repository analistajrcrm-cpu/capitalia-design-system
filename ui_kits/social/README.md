# Social — Capitalia

Recreation of `sources/06-social.png`: three 1080×1080 post templates inside a feed frame.

- `PostPlum.jsx` — plum field, circle-masked photo bleeding off the right edge, orange emphasis word, offer stack, URL capsule.
- `PostFoto.jsx` — defocused render as ground, centred copy split by a 1px vertical rule. The only place the brand blurs an image.
- `PostTarjeta.jsx` — full-bleed render with a cream card laid over it, oval photo inside, offer in orange, delivery date on the photo below.
- `Feed.jsx` — the surrounding chrome: bone avatar carrying the plum mark, lowercase `capitalia` handle, Lucide outline actions (heart/comment/save toggle on click).

Photography is the screenshot-resolution material in `assets/img/`; swap in real renders via the `photo` / `cardPhoto` props. The family and couple photographs in the original posts were not extractable at usable quality.
