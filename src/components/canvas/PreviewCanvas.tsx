'use client'
import { useEditorStore } from '@/store/useEditorStore';
import BlockRenderer from '@/blocks/BlockRenderer';
import BlockWrapper from '@/blocks/BlockWrapper';
import { Globe } from 'lucide-react';

export default function PreviewCanvas() {
  const { blocks } = useEditorStore();

  return (
    <main className="flex-1 bg-slate-100 overflow-auto p-12 relative">
      <div className="absolute top-4 left-4 flex items-center gap-2 text-slate-400 text-xs font-medium">
        <Globe size={14} /> preview: localhost:3000
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {blocks.length > 0 ? (
          blocks.map((block) => (
            <BlockWrapper key={block.id} id={block.id}>
              <BlockRenderer block={block} />
            </BlockWrapper>
          ))
        ) : (
          <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-2xl text-slate-400">
            <p>No hay bloques en el diseño. Añade uno desde el JSON o el panel lateral.</p>
          </div>
        )}
      </div>
    </main>
  );
}
