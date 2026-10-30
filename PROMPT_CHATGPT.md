# Prompt para ChatGPT / Codex · Parte visual del portfolio de Ángel González

> Cómo usarlo: sube a ChatGPT (o abre en Codex) la carpeta `AG-PORTFOLIO-PREMIUM` completa, adjunta las fotos originales de Ángel y pega todo lo que sigue desde "ROL".

---

## ROL

Eres director de arte y desarrollador front-end senior. Vas a llevar a nivel **premium** la parte **visual** del portfolio de Ángel González, un desarrollador de software y creador multimedia de Santiago de Chile que trabaja con ROANG, su estudio digital.

La estructura, el contenido, la accesibilidad y la lógica **ya están hechas y probadas**. Tu trabajo es visual: generar los recursos gráficos que faltan y pulir el diseño sin romper nada.

## LO QUE YA EXISTE (no lo rehagas)

Sitio estático de una sola página, sin frameworks. Para verlo:

```bash
cd AG-PORTFOLIO-PREMIUM
python3 -m http.server 8000   # abre http://localhost:8000
```

```
index.html                     Contenido y estructura (en español)
assets/css/tokens.css          Colores, tipografías, medidas (modo oscuro y claro)
assets/css/styles.css          Todo el estilo, ordenado por secciones
assets/js/main.js              CONFIG de contacto, tema, menú, visor de reels, formulario → WhatsApp
assets/img/angel-hero.webp     Retrato de Ángel con bordes difuminados (provisional)
assets/img/reels/*.webp        6 miniaturas de reels reales
assets/video/reel-0X.mp4       6 reels reales (480×854, 10 s)
assets/img/projects/           VACÍA: aquí van las portadas de proyectos
assets/brand/                  Logos oficiales de ROANG (blanco y negro, transparentes)
assets/cv/                     2 CV en PDF
```

Secciones: Inicio (hero + 3 tarjetas + barra de enlaces) · Sobre mí · Multimedia (reels) · Proyectos (4 tarjetas) · Servicios · Contacto.

**Dirección visual ya elegida por Ángel** (viene de una referencia suya): fondo azul noche, apellido con degradado azul → cian, tipografía ancha y geométrica, paneles con borde fino, formas triangulares y líneas de circuito que salen del isotipo de ROANG, mucha jerarquía y aire. Paleta oficial: `#0057FF` azul, `#00E5E0` cian, `#0B0B0B` negro, `#F8F8F6` blanco hueso. Eslogan: **Ideas que avanzan.**

## TU TRABAJO

### A. Generar recursos gráficos (con tu generador de imágenes)

Exporta en **WebP**, con estos nombres y rutas exactos. `angel-hero.webp`, las 4 portadas de proyecto y `og-cover.jpg` ya están conectados en el HTML: basta con reemplazar el archivo. `hero-bg.webp` y los íconos **aún no están conectados**: añádelos tú en el CSS/HTML y verifica que el texto siga legible.

| Archivo | Tamaño | Qué es |
|---|---|---|
| `assets/img/angel-hero.webp` | 1344×2550, **fondo transparente** | Recorte limpio de Ángel (de cintura para arriba) tomado de la foto original que se adjunta. |
| `assets/img/hero-bg.webp` | 2400×1200 | Fondo del hero: azul noche con líneas de circuito finas, un gran triángulo/“R” de ROANG en degradado azul→cian y brillo suave a la derecha. Sin texto ni personas. |
| `assets/img/projects/virtuous-body-care.webp` | 1600×900 | Portada del proyecto: tienda Shopify de jabones artesanales. Usar **captura real** si Ángel la entrega; si no, mockup de laptop + móvil con interfaz difuminada, tonos crema y verde oliva. |
| `assets/img/projects/wim100.webp` | 1600×900 | App Android de evaluación de candidatos (Kotlin, Jetpack Compose). Mockup de 2–3 pantallas de móvil en tonos azul noche y cian. |
| `assets/img/projects/veterinaria-san-marcos.webp` | 1600×900 | Tienda web veterinaria (React). Mockup de laptop con catálogo de productos, estilo limpio. |
| `assets/img/projects/roang.webp` | 1600×900 | Sitio del estudio ROANG. Captura real de roang.cl dentro de un mockup, o composición con el logo oficial. |
| `assets/img/og-cover.jpg` | 1200×630 | Imagen para compartir en redes. Hay una versión simple hecha; mejórala. |
| `assets/img/icons/*.svg` (opcional) | 48×48, trazo 1.6 | Íconos de línea para los 8 servicios, con estilo coherente (trazo, esquinas redondeadas, un solo color `currentColor`). |

**Prompts de imagen sugeridos** (ajústalos a tu generador):

- **hero-bg:** "Dark navy tech background, 2400x1200, subtle thin circuit-board lines in electric blue, a large translucent triangle gradient from #0057FF to #00E5E0 on the right side, soft cinematic glow, lots of negative space on the left for text, no text, no people, premium, minimal."
- **Mockups de proyecto:** "Clean product mockup, 16:9, [laptop / phone] floating at a slight angle on a dark navy gradient with a faint cyan rim light, UI on the screen is softly blurred and generic, no readable text, no logos, premium studio lighting."
- **Recorte de Ángel:** quita solo el fondo y mejora levemente la nitidez. **No cambies su rostro, su peinado, sus lentes ni su ropa.** Nada de “embellecer” ni rejuvenecer.

### B. Pulir el diseño (solo visual)

Puedes modificar `tokens.css`, `styles.css` y el marcado cosmético de `index.html` (clases, SVG decorativos, orden visual). Ideas bienvenidas, con medida:

1. Un momento de movimiento orquestado en el hero (entrada escalonada, líneas de circuito que se dibujan una vez, brillo que sigue suavemente al cursor). Uno solo, bien hecho.
2. Un detalle de diseño arriesgado pero coherente: por ejemplo, un “R” gigante de ROANG recortado como marca de agua, o los títulos de sección con numeración vertical.
3. Refinar tipografía: **autoalojar** Unbounded (títulos) y Jost (texto) en `assets/fonts/` en formato `woff2` y quitar el `<link>` de Google Fonts. Se cargan hoy desde Google porque el entorno de origen no pudo descargarlas.
4. Transiciones al pasar el cursor en tarjetas, botones y reels; microinteracciones en el menú.
5. Equilibrar el modo claro (hoy funcional, pero menos trabajado que el oscuro).
6. Revisar el espaciado y el ritmo vertical entre secciones; evitar tarjetas idénticas repetidas sin variación.

### C. Qué NO debes tocar

- **Textos y datos:** no inventes ni cambies cifras, clientes, fechas, testimonios, premios, precios ni logros. Todo lo publicado viene de los CV y de proyectos reales de Ángel. No publiques precios.
- **Contacto y lógica:** `assets/js/main.js` (CONFIG, formulario, visor de reels), ids (`#inicio`, `#sobre-mi`, `#multimedia`, `#proyectos`, `#servicios`, `#contacto`, `#reelDialog`, `#quoteForm`, `#themeToggle`, `#menuToggle`, `#cvMenu`) y atributos `data-*`. Si renombras una clase usada por el JS, actualízala en ambos lados y prueba.
- **Marca:** usa los logos oficiales de `assets/brand/`. No los redibujes ni los deformes.
- **Videos de reels:** son trabajo real de clientes de Ángel. No los reencodes ni los alteres.
- **Accesibilidad y rendimiento:** mantén contraste AA, foco visible, `prefers-reduced-motion`, textos alternativos, `lang="es-CL"`. Imágenes en WebP y por debajo de ~250 KB (el hero puede llegar a ~400 KB). Sin librerías pesadas.

## CÓMO COMPROBAR TU TRABAJO

1. Abre el sitio en 360, 390, 768, 1024 y 1440 px de ancho. No debe haber scroll horizontal.
2. Consola del navegador sin errores.
3. Prueba: menú móvil, botón de tema, menú “Descargar CV”, abrir un reel y pasar al siguiente con las flechas, enviar el formulario vacío (debe avisar) y completo (abre WhatsApp).
4. Revisa que el texto sea legible sobre cualquier imagen que añadas.

## ENTREGA

Devuelve la carpeta completa en un `.zip` con la misma estructura, más un archivo `CHANGELOG.md` que liste: qué archivos cambiaste, qué recursos nuevos generaste (con su tamaño) y qué decisiones de diseño tomaste. Si algo necesita información que no tienes (capturas reales de proyectos, por ejemplo), dilo al final en una lista corta de pendientes en lugar de inventarlo.
