# Cambios visuales — 30 de octubre de 2026

## Alcance

Entrega local del portafolio completo, sin publicación. Se conservan los textos y datos publicados, la estructura funcional, los enlaces, los IDs y los atributos data-* originales. No se añadieron precios, cifras, testimonios ni logros.

## Archivos modificados

- `index.html`: eliminación de Google Fonts externo, precarga del fondo, numeración decorativa de secciones, integración de ocho iconos y dimensiones de las portadas. Los textos alternativos de proyectos describen mockups/composición en lugar de afirmar que son capturas reales.
- `assets/css/tokens.css`: fuentes WOFF2 locales y sombra complementaria.
- `assets/css/styles.css`: fondo del hero integrado, entrada escalonada de una sola ejecución, trazado decorativo, refinamiento de navegación, tarjetas, reels, proyectos y servicios, numeración vertical, modo claro, contraste de acentos y ajustes responsivos.

## Recursos nuevos

Los tamaños se expresan en KiB (1024 bytes). Las imágenes se generaron con la herramienta integrada de imágenes y se optimizaron para uso web. Las composiciones de proyectos son ilustrativas, no capturas de interfaces reales.

| Archivo | Dimensiones | Peso |
| --- | --- | --- |
| `assets/img/hero-bg.webp` | 2400 × 1200 | 63,3 KiB |
| `assets/img/projects/virtuous-body-care.webp` | 1600 × 900 | 123,2 KiB |
| `assets/img/projects/wim100.webp` | 1600 × 900 | 79,6 KiB |
| `assets/img/projects/veterinaria-san-marcos.webp` | 1600 × 900 | 71,8 KiB |
| `assets/img/projects/roang.webp` | 1600 × 900 | 76,1 KiB |
| `assets/img/icons/reels.svg` | viewBox 48 × 48 | 279 bytes |
| `assets/img/icons/long-form.svg` | viewBox 48 × 48 | 283 bytes |
| `assets/img/icons/advertising.svg` | viewBox 48 × 48 | 307 bytes |
| `assets/img/icons/postproduction.svg` | viewBox 48 × 48 | 304 bytes |
| `assets/img/icons/ai-films.svg` | viewBox 48 × 48 | 367 bytes |
| `assets/img/icons/web.svg` | viewBox 48 × 48 | 309 bytes |
| `assets/img/icons/shopify.svg` | viewBox 48 × 48 | 253 bytes |
| `assets/img/icons/apps.svg` | viewBox 48 × 48 | 284 bytes |
| `assets/fonts/jost-latin.woff2` | Variable, normal 300–600 | 26,0 KiB |
| `assets/fonts/unbounded-latin.woff2` | Variable, normal 500–800 | 49,7 KiB |

Los SVG usan trazo 1.6, extremos y uniones redondeadas y currentColor. Se integran como máscaras decorativas para heredar el color del tema. Se incluyen las licencias OFL de ambas fuentes.

## Decisiones de diseño

- Se mantiene el azul noche y la paleta de ROANG. La geometría del fondo es decorativa; no reemplaza ni representa un nuevo logo oficial.
- El fondo reserva oscuridad detrás de los textos. En modo claro se atenúa y los acentos se oscurecen para mejorar legibilidad.
- La entrada del hero es una secuencia breve de una sola ejecución. Se mantiene `prefers-reduced-motion`, foco visible, textos alternativos y `lang="es-CL"`.
- Se introducen variaciones moderadas de ritmo en estadísticas, habilidades y reels, anuladas en móvil.
- Las portadas usan dispositivos genéricos sin afirmar que muestran el producto real. ROANG emplea el logo oficial superpuesto en proporción, sin redibujarlo.
- No se incorpora una edición generativa del retrato: la prueba modificaba ligeramente sus rasgos. Se restauraron `angel-hero.webp` y `og-cover.jpg` originales, byte por byte. La resolución del retrato permanece en 672 × 1275; no se presenta un reescalado como una fotografía nueva de alta resolución.

## Preservación verificada

Comparación automática con el ZIP original:

- Texto publicado idéntico, ignorando espacios de formato.
- IDs y enlaces originales preservados; solo se retiraron enlaces externos de fuentes y se añadió una precarga local.
- 24 archivos idénticos: `main.js`, 6 videos, 6 miniaturas, 7 archivos de marca, 2 CV, retrato y portada social.
- Referencias locales de HTML y CSS existentes; sintaxis de `main.js` comprobada con Node.
- Se conserva `LEEME.md` original como documentación histórica; esta entrega y sus límites de verificación se describen aquí y en `VERIFICACION.md`.

## Pendientes

1. Capturas reales de Virtuous Body Care, WIM100 y Veterinaria San Marcos. La portada ROANG es una composición de marca, no una captura de roang.cl.
2. Fotografía original de mayor resolución o recorte transparente aprobado que conserve exactamente rostro, cabello, lentes y ropa. El archivo incluido permite seguir trabajando sin alterar identidad.
3. Actualización de `og-cover.jpg` usando un recorte fiel aprobado. Se conserva la versión original para evitar publicar un rostro alterado.
4. Mantener las confirmaciones previas a publicación que ya figuran en `LEEME.md` (permisos de reels, datos profesionales y dominio).

## Prompts y procedencia

Se adjunta `RECURSOS-GENERADOS.md` con el conjunto de indicaciones utilizado y las fuentes de las tipografías. No se entrega el retrato generativo rechazado.
