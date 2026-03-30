import { globalStyles } from './styles';

export const generateHTML = (blocks: any) => {
  // BLINDAJE: Si 'blocks' no es un array (ej. el usuario puso {}), 
  // usamos un array vacío para que .map no dé error.
  const safeBlocks = Array.isArray(blocks) ? blocks : [];

  const bodyContent = safeBlocks.map(block => {
    // Si el bloque es nulo o no es un objeto, lo ignoramos
    if (!block || typeof block !== 'object') return '';

    // PROTECCIÓN NIVEL 1: Props seguras
    const p = block.props || {};

    if (block.type === 'Navbar') {
      return `
    <nav class="navbar">
      <div class="nav-logo">${p.logo || 'LOGO'}</div>
      <div class="nav-links">
        ${p.links?.map?.((link: string) => `<a href="#">${link}</a>`).join('') || ''}
      </div>
    </nav>`;
    }

    if (block.type === 'Hero') {
      return `
    <section class="hero" style="background-color: ${p.bgColor || '#6366f1'}">
      <h1>${p.title || 'Título'}</h1>
      <p>${p.subtitle || 'Subtítulo descriptivo'}</p>
      <button class="hero-btn">${p.buttonText || 'Empezar'}</button>
    </section>`;
    }

    if (block.type === 'Features') {
      const itemsHtml = p.items?.map?.((item: any) => `
        <div class="feature-card">
          <h3 style="margin:0">${item.title || 'Característica'}</h3>
          <p style="margin-top:0.5rem">${item.desc || 'Descripción'}</p>
        </div>`).join('') || '';
        
      return `<section class="features">
        <h2 style="text-align:center; margin-bottom:2rem">${p.title || 'Características'}</h2>
        <div class="features-grid">${itemsHtml}</div>
      </section>`;
    }

    if (block.type === 'Footer') {
      return `<footer class="footer">${p.text || '© 2026 Blocks & Code'}</footer>`;
    }

    if (block.type === 'Button') {
      return `
    <div class="btn-block">
      <a href="#" class="btn-item" style="background-color: ${p.color || '#3b82f6'}">${p.label || 'Botón'}</a>
    </div>`;
    }
    return '';
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blocks & Code Preview</title>
    <style>
      ${globalStyles}
    </style>
</head>
<body>
    <div class="container">${bodyContent}</div>
</body>
</html>`;
};
