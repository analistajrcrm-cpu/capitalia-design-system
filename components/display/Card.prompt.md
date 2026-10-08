The workhorse container: lot listings, etapa summaries, news items.

```jsx
<Card media="../../assets/img/parque-render.png" mediaShape="arc" interactive>
  <h3>Recoleta</h3><p>Etapa 1 · Entrega Julio 2030</p>
</Card>
```

- Resting state has no shadow. Only `interactive` cards pick one up on hover, plus a 2% image zoom.
- Photo bands are cut with an arc or a petal — a plain rectangle is a last resort.
- `tone="ink"` for a single feature card in a grid of light ones.
