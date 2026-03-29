import { create } from 'zustand';

interface Block {
  id: string;
  type: 'Hero' | 'Button';
  props: any;
}

interface EditorState {
  blocks: Block[];
  updateBlocks: (newBlocks: Block[]) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  blocks: [
    { id: '1', type: 'Hero', props: { title: 'Blocks & Code', subtitle: 'Desplegado en CubePath', bgColor: '#6366f1' } }
  ],
  updateBlocks: (newBlocks) => set({ blocks: newBlocks }),
}));
