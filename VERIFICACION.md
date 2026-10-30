# Verificación de entrega

Fecha: 30 de octubre de 2026. Sitio servido localmente por HTTP y comprobado en el navegador integrado Chromium.

## Responsividad

| Ancho solicitado | Ancho útil con barra vertical | Ancho del documento | Resultado |
| --- | --- | --- | --- |
| 360 px | 345 px | 345 px | Sin scroll horizontal ni elementos de contenido fuera del ancho |
| 390 px | 375 px | 375 px | Sin scroll horizontal ni elementos de contenido fuera del ancho |
| 768 px | 753 px | 753 px | Sin scroll horizontal ni elementos de contenido fuera del ancho |
| 1024 px | 1009 px | 1009 px | Sin scroll horizontal ni elementos de contenido fuera del ancho |
| 1440 px | 1425 px | 1425 px | Sin scroll horizontal ni elementos de contenido fuera del ancho |

Los cinco anchos se comprobaron en modo oscuro y en modo claro, con los mismos resultados. La inspección excluyó geometría SVG decorativa recortada dentro del hero. Además del ancho del documento, se revisaron los límites de los elementos para detectar contenido oculto por overflow. Se ajustó el tamaño del apellido al encontrar un recorte en móvil y escritorio.

## Interacciones

- Menú móvil: abre, actualiza aria-expanded y se cierra al elegir un enlace.
- Tema: cambia entre claro y oscuro, actualiza la etiqueta y conserva la elección.
- Descargar CV: despliega las dos opciones PDF y cierra con Escape. Los dos PDF se conservan idénticos al original; no se verificó el diálogo de descarga del sistema.
- Reels: apertura del primero, avance al segundo con botón y al tercero con ArrowRight, cierre con Escape. Los MP4 permanecen idénticos; no se reencodificaron.
- Formulario vacío: muestra el aviso de campos obligatorios.
- Formulario completo con datos ficticios: muestra la confirmación de apertura de WhatsApp. No se envió ningún mensaje y no se verificó la entrega en WhatsApp.
- Fuentes locales cargadas. Cuatro portadas cargadas correctamente.
- Consola del sitio sin errores ni advertencias en la consulta de verificación; la ruta de iconos se corrigió posteriormente y se revisó de nuevo.

## Límites

No constituye una certificación completa de WCAG AA. Se mantuvieron foco visible, reduced-motion, etiquetas y alternativas; se mejoraron los tonos claros. No se midieron Core Web Vitals ni se hicieron pruebas de lector de pantalla, navegadores alternativos o dispositivos físicos. No se publicó el sitio ni se verificaron servicios externos de terceros.
