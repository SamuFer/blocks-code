'use client'
import Sidebar from '@/components/layout/Sidebar';
import PreviewCanvas from '@/components/canvas/PreviewCanvas';
import EditorPanel from '@/components/layout/EditorPanel';
import Toolbar from '@/components/layout/Toolbar';
import { useEditorStore } from '@/store/useEditorStore';

export default function Page() {
  const { leftPanelVisible, rightPanelVisible } = useEditorStore();

  return (
    <div className="flex h-screen bg-[#0f172a] text-white overflow-hidden relative">
      {/* Sidebar: se oculta moviéndose a la izquierda */}
      <div className={`${leftPanelVisible ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        <Sidebar />
      </div>

      {/* Canvas: se estira solo gracias a flex-1 */}
      <PreviewCanvas />

      {/* Editor: se oculta moviéndose a la derecha */}
      <div className={`${rightPanelVisible ? 'w-[480px]' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        <EditorPanel />
      </div>

      {/* Botones de control flotantes */}
      <Toolbar />
    </div>
  );
}
