'use client'
import dynamic from 'next/dynamic';
import { useEditorStore } from '@/store/useEditorStore';
import { Layout, Box, Send } from 'lucide-react';

const CodeEditor = dynamic(() => import('@/components/CodeEditor'), { ssr: false });

export default function Page() {
  const { blocks } = useEditorStore();

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      {/* Sidebar Izquierda */}
      <aside className="w-64 border-r border-slate-800 p-4 space-y-4">
        <h2 className="flex items-center gap-2 font-bold text-blue-400"><Layout size={20}/> Bloques</h2>
        <div className="p-3 bg-slate-800 rounded border border-slate-700 cursor-pointer hover:bg-slate-700 transition">Hero Section</div>
        <div className="p-3 bg-slate-800 rounded border border-slate-700 cursor-pointer hover:bg-slate-700 transition">Button</div>
      </aside>

      {/* Canvas Central */}
      <main className="flex-1 bg-slate-200 overflow-auto p-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {blocks.map((block) => (
            <section 
              key={block.id} 
              style={{ backgroundColor: block.props.bgColor }}
              className="p-16 rounded-xl shadow-lg text-center transition-all"
            >
              <h1 className="text-5xl font-black text-white">{block.props.title}</h1>
              <p className="text-white/80 mt-4 text-xl">{block.props.subtitle}</p>
            </section>
          ))}
        </div>
      </main>

      {/* Editor Derecho */}
      <aside className="w-[450px] border-l border-slate-800 flex flex-col">
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <span className="text-xs font-mono text-slate-400">page.json</span>
          <button className="bg-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-500">Deploy</button>
        </div>
        <div className="flex-1"><CodeEditor /></div>
      </aside>
    </div>
  );
}
