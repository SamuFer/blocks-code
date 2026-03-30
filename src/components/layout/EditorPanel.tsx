'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { FileJson, Code, Send } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';
import { generateHTML } from '@/lib/generateHTML';

const CodeEditor = dynamic(() => import('@/components/editor/CodeEditor'), { ssr: false });
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function EditorPanel() {
  const { blocks } = useEditorStore();
  const [activeTab, setActiveTab] = useState<'json' | 'html'>('json');
  const htmlContent = generateHTML(blocks);

  const handleSave = async () => {
    const res = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(blocks),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <aside className="w-full h-full flex flex-col bg-[#1e1e1e]">
      <div className="flex bg-slate-900 border-b border-slate-800">
        <button onClick={() => setActiveTab('json')} className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition ${activeTab === 'json' ? 'bg-[#1e1e1e] text-blue-400 border-b-2 border-blue-400' : 'text-slate-500 hover:bg-slate-800'}`}>
          <FileJson size={14} /> Editar JSON
        </button>
        <button onClick={() => setActiveTab('html')} className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition ${activeTab === 'html' ? 'bg-[#1e1e1e] text-green-400 border-b-2 border-green-400' : 'text-slate-500 hover:bg-slate-800'}`}>
          <Code size={14} /> Visual HTML
        </button>
      </div>

      {/* Contenedor del Editor con altura asegurada */}
      <div className="flex-1 relative min-h-0 h-full">
        {activeTab === 'json' ? (
          <CodeEditor />
        ) : (
          <MonacoEditor 
            height="100%" 
            defaultLanguage="html" 
            theme="vs-dark" 
            value={htmlContent} 
            options={{ 
              readOnly: true, 
              minimap: { enabled: false }, 
              fontSize: 13, 
              wordWrap: 'on',
              automaticLayout: true // <--- CRÍTICO: Recalcula el tamaño al abrir/cerrar paneles
            }} 
          />
        )}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]">
          <Send size={18} /> Publicar en CubePath
        </button>
      </div>
    </aside>
  );
}
