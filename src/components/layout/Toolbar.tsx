'use client'
import { PanelLeftIcon, PanelRightIcon } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';
import { cn } from '@/lib/utils';

export default function Toolbar() {
  const { leftPanelVisible, rightPanelVisible, toggleLeftPanel, toggleRightPanel } = useEditorStore();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/80 backdrop-blur border border-slate-700 p-2 rounded-full shadow-2xl z-50">
      <button 
        onClick={toggleLeftPanel}
        className={cn("p-2 rounded-full transition", leftPanelVisible ? "text-blue-400" : "text-slate-500 hover:text-white")}
      >
        <PanelLeftIcon size={20} />
      </button>
      <button 
        onClick={toggleRightPanel}
        className={cn("p-2 rounded-full transition", rightPanelVisible ? "text-blue-400" : "text-slate-500 hover:text-white")}
      >
        <PanelRightIcon size={20} />
      </button>
    </div>
  );
}
