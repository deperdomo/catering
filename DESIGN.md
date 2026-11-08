---
name: Daniela Catering
description: Catering para bodas, cumpleaños y empresas en Madrid; página única para pedir presupuesto.
colors:
  paper: "#ffffff"
  paper-tint: "#f1f1f0"
  ink: "#1f1f1f"
  ink-soft: "#57524c"
  ink-on-dark: "#f4f1ec"
  ink-on-dark-soft: "#cfc9c1"
  rule: "#e2ddd6"
  rule-on-dark: "rgb(255 255 255 / 0.16)"
  control-border: "#8f877e"
  control-placeholder: "#6b645c"
  bronze: "#8a5a26"
  bronze-strong: "#6f4718"
  bronze-light: "#d9a866"
  bronze-light-strong: "#e8bf86"
  error: "#a3241a"
  error-on-dark: "#f4a58f"
typography:
  display:
    fontFamily: "Ibarra Real Nova, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.3rem + 4.4vw, 4.9rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Ibarra Real Nova, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2.6vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Ibarra Real Nova, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 0.8vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  tab:
    fontFamily: "Ibarra Real Nova, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.2rem, 1rem + 0.6vw, 1.45rem)"
    fontWeight: 500
    lineHeight: 1.2
  logo:
    fontFamily: "Ibarra Real Nova, Iowan Old Style, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "lnum"
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
  button:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  radius: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section-y: "clamp(4.5rem, 9vw, 8rem)"
  header-h: "72px"
  header-h-mobile: "60px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.bronze-strong}"
  button-on-dark:
    backgroundColor: "{colors.bronze-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-on-dark-hover:
    backgroundColor: "{colors.bronze-light-strong}"
  button-quiet:
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.radius}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "0.65rem 0.85rem"
    height: "48px"
  quote-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "1.25rem"
    width: "940px"
  tab:
    textColor: "{colors.ink-soft}"
    typography: "{typography.tab}"
    padding: "0.5rem 0 0.9rem"
  tab-active:
    textColor: "{colors.ink}"
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "{spacing.header-h}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-on-dark-soft}"
---

# Design System: Daniela Catering

## Overview

**Creative North Star: "La mesa bien puesta"**

El catering madrileño de siempre, hecho con precisión. El sistema es un mantel blanco con cubertería de bronce: papel blanco puro, tinta casi negra, un único metal cálido para todo lo que se pulsa y la fotografía de comida real como protagonista. La autoridad viene de la tipografía de imprenta en los titulares (Ibarra Real Nova) y del orden, no de efectos.

La densidad es holgada y de catálogo: secciones con mucho aire vertical, rejillas de dos a cuatro columnas, filetes de un píxel en lugar de tarjetas y sombras. La página alterna dos suelos: papel para contar (equipo, servicios, galería) y tinta para decidir (la foto del inicio, el formulario de presupuesto y el pie). El bronce cambia de tono según el suelo para mantener el contraste.

Las fotos se muestran tal cual, sin velos de color ni filtros; solo el inicio lleva un degradado oscuro en la franja inferior donde se apoya el texto. El movimiento se limita a un asentamiento lento de la foto principal al cargar y a transiciones de estado breves.

**Key Characteristics:**
- Blanco y tinta con un único acento bronce, en dos tonos según el fondo.
- Titulares en Ibarra Real Nova 600; todo lo demás en Figtree.
- Esquinas casi rectas (2px) en botones, campos, la barra de presupuesto y fotos.
- Separación por filetes finos, sin sombras decorativas.
- Fotografía real a sangre o en proporciones fijas (4:5, 3:2), sin tratamiento de color.
- Una sola acción principal, "Pedir presupuesto", repetida con el mismo estilo.

## Colors

Una paleta neutra de papel y tinta, apenas templada hacia el cálido, con el bronce como única voz de color.

### Primary
- **Bronce de cubertería** (`bronze`): relleno de toda acción principal sobre papel (cabecera, barra del inicio, servicios, barra inferior móvil), cargo de cada persona del equipo, subrayado de la pestaña activa, anillo de foco, `accent-color` y cursor de texto. Con blanco encima alcanza 5,9:1.
- **Bronce bruñido** (`bronze-strong`): el mismo botón al pasar el cursor.
- **Bronce claro** (`bronze-light`): la versión del acento sobre tinta: botón del formulario final, enlaces de correo en el formulario y el pie, y fondo de la selección de texto. Lleva tinta encima (7,6:1).
- **Bronce claro bruñido** (`bronze-light-strong`): su estado al pasar el cursor.

### Neutral
- **Papel** (`paper`): fondo de la página, la cabecera, la barra inferior móvil, la barra de presupuesto y los campos.
- **Mantel gris** (`paper-tint`): fondo del recuadro de los retratos del equipo; las fotos de estudio se funden con él por multiplicación.
- **Tinta** (`ink`): texto principal sobre papel y fondo de las secciones oscuras (inicio, presupuesto, pie).
- **Tinta suave** (`ink-soft`): entradillas, descripciones, pies de foto y pestañas inactivas (7,7:1 sobre papel).
- **Papel sobre tinta** (`ink-on-dark`): titulares y texto destacado en las secciones oscuras.
- **Papel suave sobre tinta** (`ink-on-dark-soft`): texto secundario sobre tinta (10:1).
- **Filete** (`rule`): líneas de 1px que separan cabecera, secciones, pestañas y el menú móvil.
- **Filete sobre tinta** (`rule-on-dark`): las mismas líneas en las secciones oscuras.
- **Borde de campo** (`control-border`): contorno de 1px de los campos en reposo (3,5:1 sobre papel); pasa a tinta al pasar el cursor o enfocar.
- **Texto de ejemplo** (`control-placeholder`): marcadores de posición de los campos (5,8:1).

### Error
- **Error** (`error`): borde de campo no válido sobre papel.
- **Error sobre tinta** (`error-on-dark`): mensajes y bordes de error en el formulario oscuro (8,3:1 sobre tinta).

### Named Rules
**The One Bronze Rule.** El bronce es el único color de la interfaz. Sobre papel se usa `bronze`; sobre tinta, `bronze-light`. Nunca se cruzan, y ningún otro tono entra en la interfaz.

**The Two Grounds Rule.** Solo hay dos suelos: papel y tinta. Las secciones para contar van en papel; las de decidir (inicio, presupuesto, pie) van en tinta. No hay fondos de color ni grises intermedios para secciones.

## Typography

**Display Font:** Ibarra Real Nova (con Iowan Old Style, Georgia, serif), autoalojada.
**Body Font:** Figtree (con system-ui, sans-serif), autoalojada.

**Character:** Una romana de imprenta clásica, con peso 600 y tracking ligeramente cerrado, da la voz de casa con oficio; una sans geométrica amable lleva la información y los formularios sin competir con ella.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 1.3rem + 4.4vw, 4.9rem)`, 1.08): solo el titular del inicio, centrado sobre la foto, máximo 25ch.
- **Headline** (600, `clamp(2.1rem, 1.4rem + 2.6vw, 3.4rem)`, 1.08): titular de cada sección.
- **Title** (600, `clamp(1.5rem, 1.25rem + 0.8vw, 1.9rem)`, 1.08): nombres del equipo, título del servicio y del mensaje de confirmación.
- **Tab** (500, 600 activa, `clamp(1.2rem, 1rem + 0.6vw, 1.45rem)`, 1.2): pestañas de servicios, en la letra de titulares. El menú móvil usa la misma letra a 1.5rem.
- **Lede** (400, `clamp(1.1rem, 1rem + 0.35vw, 1.25rem)`, 1.6): entradilla de sección, máximo 62ch, en tinta suave.
- **Body** (400, 1.0625rem, 1.6): texto corrido, cifras alineadas (`lining-nums`), líneas de 34 a 54ch.
- **Label** (600, 0.9rem): etiquetas de campo; las aclaraciones "(opcional)" van en 400.
- **Button** (600, 1rem, 1.2): texto de botones, en caja normal.

### Named Rules
**The Printer's Headline Rule.** Ibarra Real Nova se reserva para titulares, el logotipo, las pestañas de servicios y el menú móvil. Todo texto de lectura, etiqueta o botón va en Figtree. Ningún texto va en mayúsculas sostenidas.

## Layout

Contenedor centrado de 1240px máximo con margen lateral fluido (`gutter`). Las secciones respiran con `section-y` arriba y abajo y se separan entre sí con un filete superior cuando dos secciones de papel se tocan. La cabecera es fija arriba (72px, 60px en móvil) y el desplazamiento compensa su altura.

Rejillas por sección, todas con columnas `minmax(0, fr)`: equipo en tres columnas; servicios en foto 7 / texto 5; galería en mosaico de cuatro columnas con fotos 4:5; presupuesto en intro 5 / formulario 7 con el formulario en dos columnas; pie en 2 / 1 / 1.4. El inicio ocupa la altura de la pantalla menos la cabecera (entre 560 y 860px) con el contenido apoyado abajo.

Responsive: a 900px servicios, presupuesto y la cabecera del equipo pasan a una columna y la galería a dos; a 768px desaparecen la navegación y el botón de cabecera, aparece el menú y una barra inferior fija con "Pedir presupuesto"; a 640px el equipo se apila con retrato de 7.5rem a la izquierda y las pestañas forman una rejilla de dos; a 540px el formulario va a una columna y los botones ocupan todo el ancho.

## Elevation & Depth

El sistema es plano. No hay ninguna `box-shadow` de elevación: la profundidad la dan el contraste entre suelos (papel y tinta), los filetes de 1px y la propia fotografía. La barra de presupuesto se separa de la foto solo por ser un bloque blanco sólido.

### Shadow Vocabulary
- **Sombra de legibilidad** (`text-shadow: 0 1px 24px rgb(0 0 0 / 0.35)`): solo en el titular del inicio, sobre la foto.
- **Velo inferior del inicio** (degradado de transparente al 20% a casi negro al 100%): oscurece solo la franja donde está el texto; la comida de arriba queda sin filtrar.
- **Contorno interior** (`box-shadow: inset 0 0 0 1px`): técnica de borde para el botón secundario y el campo con error, no elevación.

### Named Rules
**The Flat Table Rule.** Ninguna superficie flota. Si algo necesita separarse, usa un filete o cambia de suelo.

**The Unfiltered Photo Rule.** Las fotos no llevan velos de color, duotonos ni filtros. El único oscurecimiento permitido es un degradado inferior bajo texto superpuesto.

## Shapes

Un único radio de 2px (`radius`) para botones, campos, la barra de presupuesto y todas las fotos: esquinas casi rectas, como papel cortado. Las líneas son siempre de 1px; el único trazo de 2px es el subrayado de la pestaña activa. Las fotos se recortan a proporciones fijas (4:5 retratos y galería, 3:2 servicios, a sangre en el inicio).

## Components

### Buttons
Firmes y sobrios: un bloque de color plano con texto en negrita, sin iconos ni flechas.
- **Shape:** esquinas casi rectas (2px), alto mínimo de 48px, relleno 0.75rem × 1.5rem.
- **Primary:** bronce con texto blanco; es el estilo de toda acción "Pedir presupuesto" sobre papel o sobre la barra blanca del inicio.
- **On dark:** bronce claro con texto en tinta, para la misma acción sobre tinta.
- **Hover / Focus:** el relleno se oscurece (o aclara, sobre tinta) en 0.2s con `ease-out`; el foco es un contorno bronce de 2px separado 3px.
- **Quiet:** transparente con contorno interior de 1px en el color del texto; acciones secundarias sobre tinta ("Editar la solicitud").

### Inputs / Fields
- **Style:** fondo blanco, borde de 1px `control-border`, radio de 2px, alto mínimo de 48px, Figtree 1rem. Etiqueta encima en 0.9rem 600. Los desplegables llevan una flecha SVG fina en tinta.
- **Focus:** el borde pasa a tinta y aparece el contorno bronce de 2px a 1px de distancia.
- **Error:** borde y contorno interior de 1px en el color de error del suelo, con el mensaje debajo en ese mismo color.

### Navigation
- **Cabecera:** blanca con filete inferior, logotipo en Ibarra 600 a la izquierda, enlaces en Figtree 500 y el botón principal a la derecha. Al pasar el cursor, un subrayado de 1px crece de izquierda a derecha en 0.25s.
- **Móvil:** botón de menú de 48px con icono SVG de trazo fino; el menú se despliega bajo la cabecera con enlaces en Ibarra 1.5rem separados por filetes. Una barra inferior fija, blanca con filete superior, lleva el botón principal a todo el ancho y respeta el área segura.

### Barra de presupuesto
El componente propio del sistema: un bloque blanco de hasta 940px, radio de 2px y relleno de 1.25rem, apoyado sobre la foto del inicio, con tipo de evento, fecha, invitados y el botón principal en una fila (dos columnas en móvil). Usa los mismos campos que el formulario final y escribe el mismo borrador.

### Pestañas de servicios
Texto en Ibarra sobre un filete común; la inactiva en tinta suave, la activa en tinta 600 con un subrayado bronce de 2px que se despliega de izquierda a derecha en 0.3s. Cada panel muestra foto 3:2, título, texto y un botón principal que preselecciona el tipo de evento.

### Retrato del equipo
Foto 4:5 sobre `paper-tint` con fusión por multiplicación, nombre en Title, cargo en bronce 600 y una frase en tinta suave.

## Do's and Don'ts

### Do:
- **Do** usar `bronze` para acciones sobre papel y `bronze-light` para acciones sobre tinta, siempre con el contraste indicado.
- **Do** separar secciones y grupos con filetes de 1px (`rule` / `rule-on-dark`).
- **Do** mantener el radio de 2px en botones, campos, bloques y fotos.
- **Do** dar a todo control un alto mínimo de 48px y el foco bronce de 2px.
- **Do** mostrar las fotos sin tratamiento y en proporciones fijas (4:5, 3:2).
- **Do** reservar el movimiento al asentamiento de la foto del inicio (1.6s) y a transiciones de estado de 0.15 a 0.3s con `cubic-bezier(0.16, 1, 0.3, 1)`, anuladas con movimiento reducido.

### Don't:
- **Don't** añadir sombras de elevación, tarjetas flotantes ni brillos.
- **Don't** poner velos de color o filtros sobre la fotografía.
- **Don't** introducir un segundo color de acento ni recuperar el violeta y el dorado de la identidad anterior.
- **Don't** usar Ibarra Real Nova en texto de lectura, etiquetas o botones, ni Figtree en titulares.
- **Don't** poner antetítulos ni etiquetas en mayúsculas sobre los titulares.
- **Don't** redondear esquinas más allá de 2px.
