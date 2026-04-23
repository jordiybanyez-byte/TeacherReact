'use client';

import { useState } from 'react';
import { CodePreview } from './CodePreview';

interface CodeEditorProps {
  initialCode: string;
  isDark?: boolean;
  onCodeChange?: (code: string) => void;
}

export function CodeEditor({ initialCode, isDark = false, onCodeChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className={`flex items-center justify-between px-3 py-2 rounded-t-lg border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
          <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            JSX
          </span>
          <div className="flex gap-2">
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-red-500' : 'bg-red-400'}`} />
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-yellow-500' : 'bg-yellow-400'}`} />
            <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-green-500' : 'bg-green-400'}`} />
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          className={`w-full h-48 p-4 rounded-b-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDark 
              ? 'bg-gray-900 text-green-400 border border-gray-700' 
              : 'bg-gray-900 text-green-400 border border-gray-700'
          }`}
          spellCheck={false}
          style={{ tabSize: 2 }}
        />
      </div>
      <CodePreview code={code} isDark={isDark} />
    </div>
  );
}