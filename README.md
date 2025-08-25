🚀 Reto React/Vite + Tailwind (Nivel Junior), elaborado para la empresa "Especialistas en Medios S.A. de C.V."

Autor: Sixpounder39 (github)

# 🚀 Despliegue en Vercel

## 📋 Pasos para Desplegar

### 1. Preparar el Proyecto
```bash
# Asegúrate de que todos los cambios estén commitados
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Crear Cuenta en Vercel
- Ve a [vercel.com](https://vercel.com)
- Regístrate con tu cuenta de GitHub
- Conecta tu repositorio

### 3. Configuración Automática
- Vercel detectará automáticamente que es un proyecto React + Vite
- El archivo `vercel.json` ya está configurado para optimizar el build
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

### 4. Variables de Entorno (si las necesitas)
- En el dashboard de Vercel
- Settings → Environment Variables
- Agregar cualquier API key o configuración

### 5. Despliegue
- Vercel desplegará automáticamente en cada push a `main`
- URL: `https://tu-proyecto.vercel.app`
- SSL gratuito automático
- CDN global incluido

## 🎯 Plan Gratuito de Vercel
- ✅ Dominio personalizado: `tu-proyecto.vercel.app`
- ✅ Bandwidth: 100GB/mes
- ✅ Builds: Ilimitados
- ✅ Funciones serverless: 100GB-Hrs/mes
- ✅ Despliegue automático en cada push
- ✅ Preview deployments para PRs

## 🔧 Comandos Útiles
```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Desplegar manualmente (opcional)
vercel

# Desplegar a producción
vercel --prod
```

---

# Objetivo

Construir una aplicación con React + Tailwind CSS que incluya:

* ✅ Login fake con un usuario “admin”.
* ✅ CRUD de usuarios (crear, editar, eliminar, listar).
* ✅ Listado de posts desde una API pública con paginación y búsqueda.
* ✅ Diseño responsivo, limpio y funcional.

Libertad total: puedes usar el boilerplate sugerido con esta base o empezar desde cero, siempre con React + Vite + Tailwind. Si sabes usar TypeScript, lo puedes emplear.

Extras opcionales (se valoran pero no son obligatorios):

* ⭐ Mejoras visuales y de UX/UI
* ⭐ Validaciones más completas
* ⭐ Demo online (Netlify, Vercel, Render…) -> Este no sumará puntos, es totalmente opcional.

# 📋Requerimientos
- - -

1️⃣ Login fake

* Usuario sugerido: admin
* Contraseña: 1234 (o la que prefieran)
* Si las credenciales son correctas, se debe guardar "fake-jwt-token" en localStorage y redirigir al home
* Si no está logueado, se debe redirigir a /login.
* Puedes manejarlo con:
    * Hook custom (useAuth)
    * Contexto global

- - -

2️⃣ CRUD de usuarios

* Crear, editar, eliminar y listar usuarios.
* Guardar datos en estado interno + localStorage (o método similar).
* Persistencia al recargar.
* No es necesario usar base de datos real.
* Usa el estilo y bibliotecas que quieras para formularios o tablas.

- - -

3️⃣ Listado de posts o comentarios

* Fuente de datos:
    * https://jsonplaceholder.typicode.com/posts
    * o https://jsonplaceholder.typicode.com/comments
* Solo lectura.
* Debe incluir:
    * Paginación (ej. 10 items por página)
    * Búsqueda por título o contenido.
* Muestra en tablas, tarjetas u otro diseño, lo que desees.

- - -

4️⃣ Diseño y UX

* Debe ser claro, usable y responsivo.
* Si decides usar el boilerplate:
    * Incluye una estructura base con una página Home y secciones de usuarios y posts que son solo ejemplos de demostración para probar la base.
    * No es obligatorio mantenerlos; puedes modificarlos o reemplazarlos completamente.
    * Tienes total libertad para aplicar *tu propio diseño, estructura y estilo visual*. Puedes borrar/agregar o cambiar todo lo que desees.
* Se valoran:
    * Colores, tipografía, spacing, animaciones suaves.
    * Mejoras de UX/UI.

- - - 

5️⃣ Extras: Esfuerzo que tomaremos en cuenta.

⭐ Animaciones y microinteracciones.
⭐ Validaciones más completas en formularios.
⭐ Funcionalidades adicionales que mantengan la simplicidad.
* Subir el demo a Netlify/Vercel/Render u otra plataforma (opcional).

El objetivo de estos extras es ver su creatividad. No son obligatorios, pero suman y sirven para tu portafolio.

- - -

📂 Estructura sugerida (opcional)
Puedes seguir esta estructura o adaptarla a tu estilo. Lo importante es que el proyecto esté ordenado y sea fácil de entender.

```bash
src/
│
├── assets/         # Imágenes, íconos y recursos estáticos
├── components/     # Componentes reutilizables
├── hooks/          # Hooks personalizados
├── layouts/        # Layouts o plantillas de diseño
├── pages/          # Páginas principales
├── routes/         # Configuración de rutas
├── utils/          # Funciones auxiliares
└── main.jsx        # Punto de entrada
```

- - -

# 📦 Entrega

* Código limpio, organizado y comentado donde sea necesario.
* Enlace al repositorio GitHub.
* Breve explicación en el README de cómo correr la app.
* En el cuerpo del correo donde envíes tu enlace, puedes incluir cualquier explicación adicional o comentarios que consideres importantes para la revisión.
* Opcional no ponderable: enlace al demo online (Netlify, Vercel, Render, etc.).


# ⏱️Duración

* 7 días desde el día siguiente a la entrevista inicial.
* Puedes entregar antes, pero se recomienda usar todo el tiempo para pulir detalles.

# 🛠️Tecnologías

* React + Vite + Tailwind (obligatorio)
* Boilerplate sugerido:
```bash
npm create vite@latest . --template react-swc
```
* Guía Tailwind + Vite:
https://tailwindcss.com/docs/installation/using-vite
* Si sabes usar TypeScript, puedes emplearlo.


# 📊 Evaluación

Se revisará:

* Cumplimiento de requisitos principales.
* Calidad y organización del código.
* Claridad y usabilidad de la app.
* Comentarios para documentar lo que haces en el código.
* Creatividad y detalles extra (opcional).

# Nota

* Esta será la única prueba técnica que se realizará.
* Si no se tiene conocimiento de Tailwind o Vite, queda a criterio de la persona que aplica la prueba utilizar otras herramientas, siempre que se mantenga el objetivo general del reto.