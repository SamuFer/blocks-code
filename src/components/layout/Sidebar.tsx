'use client'
import { Layout, Plus, Navigation, Image as ImageIcon, List, MousePointer2, Copyright } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';
import { Block } from '@/types';

export default function Sidebar() {
  const { blocks, updateBlocks } = useEditorStore();

  const addBlock = (type: Block['type'], defaultProps: any) => {
    // BLINDAJE: Aseguramos que 'blocks' sea un array antes de usar el spread operator (...)
    const safeBlocks = Array.isArray(blocks) ? blocks : [];

    const newBlock: Block = {
      id: Math.random().toString(36).substr(2, 9),
      type: type,
      props: defaultProps
    };
    
    if (type === 'Navbar') {
      updateBlocks([newBlock, ...safeBlocks]);
    } else {
      updateBlocks([...safeBlocks, newBlock]);
    }
  };

  const loadModel = (type: number) => {
    const models: Record<number, any[]> = {
      1: [
        { id: 'm1-1', type: 'Navbar', props: { logo: 'LANDING', links: ['Home', 'About'] } },
        { id: 'm1-2', type: 'Hero', props: { title: 'Modelo Clásico', subtitle: 'Simple y efectivo', bgColor: '#1e293b', buttonText: 'Saber más' } },
        { id: 'm1-3', type: 'Footer', props: { text: '© 2026 Modelo 1' } }
      ],
      2: [
        { id: 'm2-1', type: 'Navbar', props: { logo: 'PORTFOLIO', links: ['Proyectos'] } },
        { id: 'm2-2', type: 'Hero', props: { title: 'Soy Developer', subtitle: 'Bienvenido a mi aside interactivo', bgColor: '#4f46e5', buttonText: 'CV' } },
        { id: 'm2-3', type: 'Features', props: { title: 'Habilidades', items: [{title: 'React', desc: 'Frontend'}, {title: 'Node', desc: 'Backend'}] } },
        { id: 'm2-4', type: 'Footer', props: { text: '© 2026 Modelo 2' } }
      ],
      3: [
        { id: 'm3-1', type: 'Hero', props: { title: 'Minimal', subtitle: 'Sin distracciones', bgColor: '#000000', buttonText: 'Entrar' } },
        { id: 'm3-2', type: 'Footer', props: { text: 'Hecho con Blocks & Code' } }
      ]
    };

    // BLINDAJE: Generamos IDs únicos y aseguramos que el modelo sea una lista válida
    const selectedModel = models[type] || [];
    const newBlocks = selectedModel.map(b => ({
      ...b,
      id: Math.random().toString(36).substr(2, 9)
    }));

    updateBlocks(newBlocks);
  };

  return (
    <aside className="w-64 border-r border-slate-800 p-4 space-y-4 bg-[#0f172a] overflow-y-auto">
      <h2 className="flex items-center gap-2 font-bold text-blue-400 border-b border-slate-800 pb-2 text-[11px] uppercase tracking-[0.2em]">
        <Layout size={14}/> Componentes
      </h2>
      
      <div className="space-y-2">
        <button 
          onClick={() => addBlock('Navbar', { logo: 'MI MARCA', links: ['Inicio', 'Servicios', 'Contacto'] })}
          className="w-full p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-between text-sm group text-left"
        >
          <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
            <Navigation size={16} className="text-blue-400" /> Navbar
          </span>
          <Plus size={14} className="text-slate-500 group-hover:text-white" />
        </button>

        <button 
          onClick={() => addBlock('Hero', { title: 'Nuevo Título', subtitle: 'Subtítulo descriptivo', bgColor: '#6366f1', buttonText: 'Empezar' })}
          className="w-full p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-between text-sm group text-left"
        >
          <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
            <ImageIcon size={16} className="text-purple-400" /> Hero Section
          </span>
          <Plus size={14} className="text-slate-500 group-hover:text-white" />
        </button>

        <button 
          onClick={() => addBlock('Footer', { text: '© 2026 Mi Web' })} 
          className="w-full p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-between text-sm group text-left"
        >
          <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
            <Copyright size={16} className="text-slate-400" /> Footer
          </span>
          <Plus size={14} className="text-slate-500 group-hover:text-white" />
        </button>

        <button 
          onClick={() => addBlock('Features', { 
            title: 'Nuestros Servicios', 
            items: [{ title: 'Servicio 1', desc: 'Descripción' }, { title: 'Servicio 2', desc: 'Descripción' }] 
          })}
          className="w-full p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-between text-sm group text-left"
        >
          <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
            <List size={16} className="text-emerald-400" /> Features
          </span>
          <Plus size={14} className="text-slate-500 group-hover:text-white" />
        </button>

        <button 
          onClick={() => addBlock('Button', { label: 'Botón', color: '#2563eb' })}
          className="w-full p-3 bg-slate-800/40 rounded-lg border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all flex items-center justify-between text-sm group text-left"
        >
          <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
            <MousePointer2 size={16} className="text-orange-400" /> Button
          </span>
          <Plus size={14} className="text-slate-500 group-hover:text-white" />
        </button>
      </div>
      
      <div className="mt-8 pt-4 border-t border-slate-800">
        <h2 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">Plantillas Rápidas</h2>
        <div className="grid grid-cols-1 gap-2">
          <button onClick={() => loadModel(1)} className="p-2 bg-blue-600/10 border border-blue-500/50 rounded text-[11px] text-blue-400 hover:bg-blue-600/20 transition-colors">Landing Page</button>
          <button onClick={() => loadModel(2)} className="p-2 bg-purple-600/10 border border-purple-500/50 rounded text-[11px] text-purple-400 hover:bg-purple-600/20 transition-colors">Portfolio</button>
          <button onClick={() => loadModel(3)} className="p-2 bg-emerald-600/10 border border-emerald-500/50 rounded text-[11px] text-emerald-400 hover:bg-emerald-600/20 transition-colors">Minimalist</button>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800">
        <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">
          Tip: Edita el JSON para reordenar
        </p>
      </div>
    </aside>
  );
}
