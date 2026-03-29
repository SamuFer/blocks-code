'use client'
import Editor from '@monaco-editor/react';
import { useEditorStore } from '@/store/useEditorStore';

export default function CodeEditor() {
  const { blocks, updateBlocks } = useEditorStore();

  const handleEditorChange = (value: string | undefined) => {
    try {
      const parsed = JSON.parse(value || '[]');
      updateBlocks(parsed);
    } catch (e) {
      // Error silencioso para que no explote la UI mientras escribes
    }
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="json"
      theme="vs-dark"
      value={JSON.stringify(blocks, null, 2)}
      onChange={handleEditorChange}
      options={{ minimap: { enabled: false }, fontSize: 14 }}
    />
  );
}
