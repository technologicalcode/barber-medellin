# MEDELLIN Barber Premium — Landing

Landing page de una sola vista para **MEDELLIN Barber Premium**, hecha con React + Vite + Tailwind CSS + Framer Motion.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm

## Cómo correr en local

```bash
cd medellin-barber-premium
npm install
npm run dev
```

Abre la URL que indique Vite (por defecto `http://localhost:5173`).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Vista previa del build |

## Estructura

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    Gallery.jsx
    About.jsx
    Location.jsx
    Footer.jsx
    WhatsAppButton.jsx
    BrushStroke.jsx
  constants/
    whatsapp.js   ← número y mensaje de WhatsApp
    gallery.js    ← URLs de fotos (placeholders → reales)
  App.jsx
  index.css
```

## Personalización rápida

### WhatsApp

Edita `src/constants/whatsapp.js`:

- `WHATSAPP_NUMBER`: número real con código de país (ej. `51987654321`)
- `WHATSAPP_MESSAGE`: texto prellenado del chat

### Fotos del local

1. Sube las imágenes a `public/gallery/`
2. Actualiza los `src` en `src/constants/gallery.js`

### Mapa

En `Location.jsx`, reemplaza el `src` del iframe por el embed de Google Maps del local.

### Redes y contacto

Actualiza enlaces de Instagram/Facebook y datos en `Footer.jsx`.

## Créditos

Desarrollado por [technologicalCode](https://technologicalcode.com).
