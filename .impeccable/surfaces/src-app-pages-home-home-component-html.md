---
version: 1
slug: "src-app-pages-home-home-component-html"
primary_target: "src/app/pages/home/home.component.html"
related_targets: ["src/app/shared/header/header.component.html","src/app/shared/footer/footer.component.html"]
---

# Página principal de Daniela Catering

## Scope and mode

Página única de `src/app/pages/home/home.component.html`, con cabecera y pie compartidos. Modo Persuade: la visita decide si pide presupuesto.

## Strategy

- Público: parejas, particulares y empresas de Madrid, con peso equilibrado.
- Creencia que debe quedar: hay personas con nombre detrás (Daniela, Henry y Pablo).
- Acción: pedir presupuesto con tipo de evento, fecha, invitados y zona. Se envía abriendo el correo del visitante hacia danielacateringyeventos@gmail.com, sin teléfono por ahora.
- Prueba disponible: fotos reales de comida y eventos, y el equipo con sus fotos. Sin testimonios.
- Lo que haría fallar el resultado: lujo frío, aire casero, exceso de efectos, o confundirse con cualquier catering.
- Ronda de dirección: la persona eligió a propósito el estándar del sector. Listón de acabado: La Cococha, Delirium by Lucía y Montse Lafita.

## Direction contract

THESIS: El catering madrileño de siempre, ejecutado con precisión: foto real a sangre, titular que dice qué y dónde, y presupuesto a mano. Rechaza el velo de color, el adorno animado y los adjetivos sin prueba.

OWN-WORLD: Blanco puro y tinta #1F1F1F con un único acento bronce (#8A5A26 en acciones, #D9A866 sobre tinta). Ibarra Real Nova, la letra del impresor de la Academia, en titulares; Figtree en texto e interfaz. Fotos sin filtro, esquinas rectas de 2px, filetes finos y ninguna sombra decorativa.

STORY: Entiende que es un catering de Madrid para bodas, cumpleaños y empresas; cree que Daniela, Henry y Pablo se ocupan de todo; empieza el presupuesto desde la primera pantalla.

FIRST VIEWPORT: Foto del corte de jamón a sangre con degradado inferior, titular centrado en Ibarra blanco que dice qué y dónde, línea con los tres nombres, y bajo él una barra blanca de presupuesto (tipo, fecha, invitados, Pedir presupuesto) que continúa el formulario final. Cabecera blanca con Pedir presupuesto en escritorio; en móvil la acción vive en la barra del hero y, al bajar, en una barra inferior fija al alcance del pulgar, oculta donde la página ya muestra otra acción de presupuesto.

FORM: Estándar del sector (canon), elegido por la persona sobre la tirada. seed:220e18f6efb75154

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

El presupuesto es un único borrador compartido: la barra del hero, la elección de servicio y el formulario final escriben el mismo estado. Elegir "Pedir presupuesto para una boda" llega al formulario con boda ya marcada. Motion: un único asentamiento de la foto del hero al cargar, nada más.

## Unresolved

Teléfono, menús y precios, horario y redes sociales. Aviso legal y privacidad no son necesarios mientras la web no sea de uso comercial.
