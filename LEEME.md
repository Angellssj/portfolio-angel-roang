# Portfolio de Ángel González · 2026

Sitio estático (HTML, CSS y JavaScript), sin dependencias. Une el portfolio de desarrollo y el de edición de video, con la identidad de ROANG.

## Estructura

```
index.html                  Contenido (español)
robots.txt
PROMPT_CHATGPT.md           Instrucciones para ChatGPT/Codex (parte visual)
assets/
  css/tokens.css            Colores, tipografías, medidas
  css/styles.css            Estilos por sección
  js/main.js                Contacto (CONFIG), tema, menú, reels, formulario
  img/                      Retrato, miniaturas de reels, og-cover, projects/
  video/reel-01..06.mp4     Reels reales
  brand/                    Logos oficiales de ROANG
  cv/                       CV Desarrollador y CV Editor de video (PDF)
```

## Cómo editar lo más común

- **Teléfono de WhatsApp:** en `assets/js/main.js` (`CONFIG.whatsapp`) y en los enlaces `wa.me/56920019066` de `index.html`.
- **Correos, Instagram, GitHub:** sección Contacto y barra de enlaces de `index.html`.
- **Colores y tipografías:** `assets/css/tokens.css`.
- **Capturas de proyectos:** guarda la imagen en `assets/img/projects/` con el nombre que pide cada tarjeta (por ejemplo `wim100.webp`, 1600×900). Si el archivo no existe, se muestra una ilustración provisional.
- **Reels nuevos:** copia el MP4 a `assets/video/`, la miniatura a `assets/img/reels/` y repite una tarjeta `.reel` en `index.html` y una fila en `CONFIG.reels`.

## Cómo verlo en tu computador

```bash
cd AG-PORTFOLIO-PREMIUM
python3 -m http.server 8000
```
Abre http://localhost:8000. Abrir `index.html` con doble clic también funciona, pero el visor de reels es más fiable con el servidor.

## Cómo publicarlo

Sube **el contenido de la carpeta** a cualquier hosting estático: GitHub Pages, Vercel, Netlify o `public_html` en Hostinger. Al tener dominio:

1. Agrega `<link rel="canonical" href="https://TU-DOMINIO/">` en el `<head>`.
2. Cambia `og:image` a la URL absoluta de `assets/img/og-cover.jpg` y añade `og:url`.
3. Prueba el formulario, los CV y los reels desde el dominio real.

## Verificado

Probado en Chromium (escritorio 1440 px y móvil 390 px): sin errores de consola, sin scroll horizontal, menú móvil, tema claro/oscuro, menú de CV, visor de reels con flechas y Escape, y formulario con validación. No se midió Core Web Vitals ni se hizo una auditoría de accesibilidad completa, y no se probó el envío real por WhatsApp.

## Pendientes para confirmar antes de publicar

1. **Autorización de los reels.** Muestran a clientes reales (una clínica y otros). Confirma que puedes publicarlos.
2. **Mercado Libre y Cuti Mascotas.** El texto dice que trabajaste como vendedor en Mercado Libre (lo contaste tú) y la línea de tiempo muestra Cuti Mascotas SPA (de tu CV). Confirma si son el mismo trabajo o dos distintos.
3. **“Mi parte” en WIM100 y Veterinaria San Marcos.** Está escrito en términos generales (desarrollo en equipo). Ajusta lo que hiciste tú en concreto.
4. **Correo principal.** Aparecen `ang.gonzalezd@duocuc.cl` (institucional) y `gonzalezdugarte2005@gmail.com` (de tus CV). Los correos institucionales suelen cerrarse al egresar; considera dejar solo el de Gmail.
5. **Virtuous Body Care.** No hay enlace público porque la tienda estaba protegida con contraseña en la última revisión. Agrega el enlace cuando esté publicada.
6. **Capturas reales** de los 4 proyectos (hoy hay ilustraciones provisionales).
7. **LinkedIn.** Se omitió hasta que exista el perfil.
8. **CV en PDF.** Los dos PDF fueron regenerados con tu contenido y un diseño limpio, porque el CV de editor original tenía el título superpuesto. Revisa que todo esté correcto.
9. **Foto.** Es una imagen de 672 px de ancho; en pantallas retina se ve algo suave. Con una versión de mayor resolución quedará más nítida.
10. **Fuentes.** Se cargan desde Google Fonts. Para publicar sin dependencias externas, autoalójalas (ver `PROMPT_CHATGPT.md`).
