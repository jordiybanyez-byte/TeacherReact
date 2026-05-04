'use client';

import { useEffect, useRef, useState } from 'react';

interface CodePreviewProps {
  code: string;
  isDark?: boolean;
}

export function CodePreview({ code, isDark = false }: CodePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const backgroundColor = isDark ? '#111827' : '#ffffff';
    const textColor = isDark ? '#f9fafb' : '#171717';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              background: ${backgroundColor};
              color: ${textColor};
              padding: 16px;
              min-height: 100vh;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            const { useState, useEffect, useRef, useMemo, useCallback } = React;
            
            ${code}
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            
            // Detectar qué componente renderizar
            try {
              // Buscar el nombre del componente en el código
              const functionMatch = \`${code}\`.match(/function\\s+(\\w+)\\s*\\(/);
              const constMatch = \`${code}\`.match(/const\\s+(\\w+)\\s*=\\s*(?:function|\\()/);
              const arrowMatch = \`${code}\`.match(/const\\s+(\\w+)\\s*=\\s*\\(/);
              
              let componentName = null;
              if (functionMatch) componentName = functionMatch[1];
              else if (constMatch) componentName = constMatch[1];
              else if (arrowMatch) componentName = arrowMatch[1];
              
              if (componentName && typeof eval(componentName) === 'function') {
                root.render(React.createElement(eval(componentName)));
              } else {
                // Try common names
                const commonNames = ['App', 'Contador', 'MiComponente', 'Saludo', 'HolaMundo', 'BotonMensaje', 'InputControlado'];
                let rendered = false;
                for (const name of commonNames) {
                  try {
                    if (typeof eval(name) === 'function') {
                      root.render(React.createElement(eval(name)));
                      rendered = true;
                      break;
                    }
                  } catch (e) {}
                }
                if (!rendered) {
                  root.render(React.createElement('div', null, 'No se pudo renderizar el componente'));
                }
              }
            } catch (e) {
              root.render(React.createElement('div', { style: { color: '#ef4444' } }, 'Error: ' + e.message));
            }
          </script>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    iframeRef.current.src = url;

    return () => URL.revokeObjectURL(url);
  }, [code, isDark]);

  return (
    <div className="mt-4">
      <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Preview:
      </p>
      <iframe
        ref={iframeRef}
        className={`w-full h-48 rounded-lg border ${isDark ? 'border-gray-600' : 'border-gray-300'}`}
        sandbox="allow-scripts allow-same-origin"
        title="Code Preview"
      />
    </div>
  );
}