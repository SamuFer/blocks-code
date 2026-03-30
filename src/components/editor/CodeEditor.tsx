'use client'
import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useEditorStore } from '@/store/useEditorStore';
import { AlertCircle } from 'lucide-react';

export default function CodeEditor() {
  const { blocks, updateBlocks } = useEditorStore();
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;
    
    try {
      const parsed = JSON.parse(value || '[]');
      updateBlocks(parsed);
      setError(null); // Si el JSON es válido, limpiamos el error
    } catch (e) {
      // Capturamos el error para avisar al usuario en la UI
      setError("JSON Inválido: Revisa comas o llaves");
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col">
      <Editor
        height="100%"
        defaultLanguage="json"
        theme="vs-dark"
        value={JSON.stringify(blocks, null, 2)}
        onChange={handleEditorChange}
        options={{ 
          minimap: { enabled: false }, 
          fontSize: 14,
          automaticLayout: true,
          formatOnPaste: true,
          scrollBeyondLastLine: false
        }}
      />

      {/* Banner de Error Flotante */}
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 backdrop-blur-sm text-white p-2 flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-bottom-2">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
