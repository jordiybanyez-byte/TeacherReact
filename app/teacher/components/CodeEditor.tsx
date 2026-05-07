'use client';

import { useState } from 'react';
import { CodePreview } from './CodePreview';

interface CodeEditorProps {
  initialCode: string;
  onCodeChange?: (code: string) => void;
}

export function CodeEditor({ initialCode, onCodeChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleChange = (newCode: string) => {
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between px-3 py-2 rounded-t-lg border-b bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            JSX
          </span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500" />
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full h-48 p-4 rounded-b-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900 text-green-400 border border-gray-700"
          spellCheck={false}
          style={{ tabSize: 2 }}
        />
      </div>
      <CodePreview code={code} />
    </div>
  );
}