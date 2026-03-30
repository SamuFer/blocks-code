'use client'
import { Trash2 } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';

export default function BlockWrapper({ id, children }: { id: string, children: React.ReactNode }) {
  const removeBlock = useEditorStore((state) => state.removeBlock);

  return (
    <div className="group relative border-2 border-transparent hover:border-blue-500/50 rounded-2xl transition-all">
      {/* Botón de eliminar (solo se ve al pasar el ratón) */}
      <button
        onClick={() => removeBlock(id)}
        className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-600"
        title="Eliminar bloque"
      >
        <Trash2 size={16} />
      </button>
      
      {/* El bloque real */}
      {children}
    </div>
  );
}
