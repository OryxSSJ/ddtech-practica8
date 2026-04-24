# DDTech — Sitio Web

Aplicación web desarrollada como parte de la **Práctica 8: Uso de IA para el desarrollo de aplicaciones web con Replit** de la materia Desarrollo de Aplicaciones Web en la Nube y Móviles.

🔗 **Sitio desplegado:** [ddtech-practica8.vercel.app](https://ddtech-practica8.vercel.app/)

---

## Introducción

Este proyecto consiste en la creación de un sitio web funcional para **DDTech**, una tienda de tecnología y componentes de computadora con presencia en la Zona Metropolitana de Guadalajara. El negocio fue seleccionado desde Google Maps y su información real (ubicaciones, horarios, servicios y contacto) fue utilizada para construir una página web representativa.

El desarrollo se realizó utilizando herramientas de Inteligencia Artificial como asistente para la generación del código base, el cual fue posteriormente personalizado y modificado para cumplir con los requerimientos de la práctica.

---

## Explicación del Sistema

El sitio web es una **Single Page Application (SPA)** estática compuesta por los siguientes archivos:

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura principal del sitio con todas las secciones |
| `styles.css` | Estilos visuales con diseño dark mode, animaciones y responsive design |
| `app.js` | Lógica de la aplicación: renderizado de productos, validación de formulario, animaciones de scroll y menú móvil |
| `images/` | Logos reales (DDTech y CUCEI) e imagen del banner principal |

### Secciones del sitio:

- **Hero/Inicio:** Banner principal con imagen de componentes de PC, estadísticas del negocio y botones de navegación.
- **Productos:** Catálogo de 6 productos destacados (GPUs, CPUs, RAM, SSDs, motherboards y gabinetes) con imágenes, precios y badges.
- **Servicios:** 4 tarjetas describiendo los servicios de DDTech: Configurador de PC, Envíos Nacionales, Garantía Directa y PCs Gaming.
- **Sucursales:** Información real de las 3 sucursales de DDTech en la ZMG (Centro, Jardines del Bosque y La Gran Plaza) con direcciones, horarios y teléfonos.
- **Contacto:** Formulario funcional de cotización con validación de campos (nombre, correo, teléfono, presupuesto y mensaje).
- **Footer:** Información del negocio, enlaces de navegación y sección académica con logo de CUCEI, nombre del alumno, materia, profesor y calendario.

### Tecnologías utilizadas:

- HTML5 semántico
- CSS3 (variables CSS, Grid, Flexbox, animaciones, media queries)
- JavaScript vanilla (Intersection Observer API, validación de formularios, DOM manipulation)
- Google Fonts (Inter)

---

## Pasos Realizados

1. **Selección del negocio:** Se eligió DDTech desde Google Maps, una tienda de tecnología y componentes de PC ubicada en Guadalajara, Jalisco.

2. **Recopilación de información:** Se obtuvo la información real del negocio: nombre, descripción, 3 ubicaciones con direcciones y horarios, servicios ofrecidos, teléfonos y correos de contacto.

3. **Generación del prompt:** Se utilizó IA como asistente para generar el código base del sitio web, proporcionando la información del negocio como contexto.

4. **Creación del proyecto:** Se construyó el sitio web con HTML, CSS y JavaScript utilizando un diseño dark mode premium con animaciones y diseño responsivo.

5. **Modificación de imágenes:** Se reemplazó el logo placeholder generado por la IA (un emoji ⚡) por el logo oficial real de DDTech. También se reemplazó el logo de CUCEI generado por IA por el logo institucional oficial. Se generó una imagen personalizada para el banner principal.

6. **Implementación del formulario:** Se creó un formulario de cotización funcional con validación de campos requeridos, validación de formato de correo electrónico y feedback visual al usuario tras el envío.

7. **Personalización del footer:** Se agregó la sección académica con el logo de CUCEI, nombre del alumno (Erick Zaid Medina Torres), código (323002132), materia, profesor (Zeus Emanuel Gutiérrez Cobian) y calendario 2026A.

8. **Subida a GitHub:** Se creó un repositorio público y se realizaron commits con los cambios del proyecto.

9. **Despliegue en Vercel:** Se conectó el repositorio de GitHub con Vercel para el despliegue automático del sitio.

---

## Información Académica

| Campo | Detalle |
|-------|---------|
| **Alumno** | Erick Zaid Medina Torres |
| **Código** | 323002132 |
| **Materia** | Desarrollo de Aplicaciones Web en la Nube y Móviles |
| **Profesor** | Zeus Emanuel Gutiérrez Cobian |
| **Calendario** | 2026A |
| **Universidad** | Universidad de Guadalajara — CUCEI |
