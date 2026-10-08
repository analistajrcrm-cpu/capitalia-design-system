# Nota de integración con la plataforma (2026-10-07)

Este sistema se armó en agosto de 2026 a partir de capturas del brandbook. Para producción en Studio
mandan los recursos oficiales del brandbook nuevo, que viven en el frontend:

- `plantillas/marcas/capitalia/marca.json`: paleta completa de 9 colores, tipografías, temas, reglas y
  estado comercial. Los tres colores primarios coinciden con `tokens/colors.css` (#311E34, #D86F3A, #E9E3D8).
- `plantillas/marcas/capitalia/logos/`: logos en vector (horizontal, vertical, símbolo, pétalo y los seis
  distritos). Los PNG de `assets/logo/` son recortes de capturas: úsalos solo para maquetas.
- Las fuentes DM Sans se cargan desde Google Fonts aquí; en la plataforma se usan los archivos del paquete
  del bono (`plantillas/marcas/capitalia/fuentes/`).
- Recoleta es un distrito de Capitalia, nunca una marca aparte, y siempre lleva el respaldo
  «Un desarrollo de Grupo LINMEX».
- `sources/` y `uploads/` son capturas del brandbook (distribución restringida) y `assets/img/retrato-ventas.png`
  es una persona real: este repositorio es privado y no debe pasar al design system público.
