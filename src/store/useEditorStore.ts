import { create } from 'zustand';
import { Block } from '@/types'; // Importamos tu interfaz

// Definimos bien la estructura del bloque


interface EditorState {
  blocks: Block[];
  updateBlocks: (newBlocks: Block[]) => void;
  // ... dentro de EditorState añade:
  removeBlock: (id: string) => void;
  leftPanelVisible: boolean;
  rightPanelVisible: boolean;
  toggleLeftPanel: () => void;
  toggleRightPanel: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  blocks: [
    { 
      id: '1', 
      type: 'Hero', 
      props: { 
        title: 'Blocks & Code', 
        subtitle: 'Desplegado en CubePath', 
        bgColor: '#6366f1',
        buttonText: 'Empezar'
      } 
    }
  ],
  updateBlocks: (newBlocks) => set({ blocks: newBlocks }),
  // ... dentro de create añade:
  removeBlock: (id) => set((state) => ({
    blocks: state.blocks.filter(block => block.id !== id)
  })),
  leftPanelVisible: true,
  rightPanelVisible: true,
  toggleLeftPanel: () => set((state) => ({ leftPanelVisible: !state.leftPanelVisible })),
  toggleRightPanel: () => set((state) => ({ rightPanelVisible: !state.rightPanelVisible })),
}));
