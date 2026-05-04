'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '../components/ThemeContext';
import { estudiantes } from '../data/estudiantes';
import { CodeEditor } from '../components/CodeEditor';
import { CodePreview } from '../components/CodePreview';
import { ejerciciosReact } from '../data/ejercicios';

export default function EjerciciosPage() {
  const searchParams = useSearchParams();
  const { isDark, t, language } = useTheme();
  
  const ejercicioId = searchParams.get('ejercicio');
  const ejercicioInicial = ejerciciosReact.find(e => e.id === ejercicioId) || ejerciciosReact[0];
  
  const [ejercicioActual, setEjercicioActual] = useState(ejercicioInicial);
  const [ejerciciosEnviados, setEjerciciosEnviados] = useState<string[]>([]);
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  useEffect(() => {
    const ejercicio = ejerciciosReact.find(e => e.id === ejercicioId);
    if (ejercicio) {
      setEjercicioActual(ejercicio);
    }
  }, [ejercicioId]);

  const toggleEstudiante = (id: string) => {
    setSeleccionados(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const enviarEjercicios = () => {
    if (seleccionados.length === 0) {
      alert(language === 'es' ? 'Selecciona al menos un estudiante' : language === 'ca' ? 'Selecciona almenys un estudiant' : 'Select at least one student');
      return;
    }
    const nuevosEnviados = [...seleccionados, ejercicioActual.id];
    setEjerciciosEnviados(nuevosEnviados);
    const msg = language === 'es' ? `Ejercicio enviado a ${seleccionados.length} estudiante(s)!` : language === 'ca' ? `Exercici enviat a ${seleccionados.length} estudiant(s)!` : `Exercise sent to ${seleccionados.length} student(s)!`;
    alert(msg);
    setSeleccionados([]);
  };

  const siguienteEjercicio = () => {
    const indiceActual = ejerciciosReact.findIndex(e => e.id === ejercicioActual.id);
    const siguiente = (indiceActual + 1) % ejerciciosReact.length;
    setEjercicioActual(ejerciciosReact[siguiente]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.ejerciciosReact}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t.ejerciciosCortos}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {ejercicioActual.titulo[language]}
            </h2>
            <button
              onClick={siguienteEjercicio}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {t.siguiente}
            </button>
          </div>
          
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {ejercicioActual.descripcion[language]}
          </p>

          <div className="mb-4">
            <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {language === 'es' ? 'Código:' : language === 'ca' ? 'Codi:' : 'Code:'}
            </p>
            <CodeEditor initialCode={ejercicioActual.codigoInicio} isDark={isDark} />
          </div>

          <details className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <summary className={`cursor-pointer font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {t.verPista}
            </summary>
            <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {ejercicioActual.pista[language]}
            </p>
          </details>

          <details className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <summary className={`cursor-pointer font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.verSolucion}
            </summary>
            <pre className={`mt-2 p-4 rounded-lg overflow-x-auto text-sm font-mono ${isDark ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-green-700'}`}>
              {ejercicioActual.solucion}
            </pre>
            <div className="mt-4">
              <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {language === 'es' ? 'Preview solución:' : language === 'ca' ? 'Preview solució:' : 'Solution preview:'}
              </p>
              <CodePreview code={ejercicioActual.solucion} isDark={isDark} />
            </div>
          </details>
        </div>

        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.enviarAEstudiantes}
          </h2>
          
          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.seleccionarEstudiantes}
          </p>

          <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
            {estudiantes.filter(e => e.estado === 'activo' || e.estado === 'completado').map((estudiante) => (
              <label
                key={estudiante.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                  seleccionados.includes(estudiante.id)
                    ? isDark ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'
                    : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                } border ${seleccionados.includes(estudiante.id) ? 'border-blue-500' : 'border-transparent'}`}
              >
                <input
                  type="checkbox"
                  checked={seleccionados.includes(estudiante.id)}
                  onChange={() => toggleEstudiante(estudiante.id)}
                  className="w-4 h-4"
                />
                <span className={isDark ? 'text-white' : 'text-gray-900'}>
                  {estudiante.nombre}
                </span>
                {ejerciciosEnviados.includes(ejercicioActual.id) && (
                  <span className={`ml-auto text-xs px-2 py-1 rounded ${isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                    {t.ejercicioEnviado}
                  </span>
                )}
              </label>
            ))}
          </div>

          <button
            onClick={enviarEjercicios}
            disabled={seleccionados.length === 0}
            className={`w-full py-3 px-4 rounded-lg font-medium transition ${
              seleccionados.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {t.enviarEjercicio} ({seleccionados.length} {t.seleccionados})
          </button>
        </div>
      </div>
    </div>
  );
}