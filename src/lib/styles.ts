export const globalStyles = `
  :root { 
    --primary: #6366f1; 
    --bg-body: #f1f5f9;
  }
  body { background-color: var(--bg-body); margin: 0; padding: 2rem; font-family: system-ui, sans-serif; }
  .container { max-width: 900px; margin: 0 auto; }
  
  /* Componentes */
  .navbar { display: flex; justify-content: space-between; background: white; padding: 1rem 2rem; border-radius: 1rem; margin-bottom: 2rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
  .hero { padding: 4rem; text-align: center; border-radius: 2rem; color: white; margin-bottom: 2rem; }
  .footer { text-align: center; padding: 3rem; color: #64748b; border-top: 1px solid #e2e8f0; }
`;
