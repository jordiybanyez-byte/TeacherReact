'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTheme } from '../components/ThemeContext';
import { estudiantes } from '../data/estudiantes';
import { CodeEditor } from '../components/CodeEditor';
import { CodePreview } from '../components/CodePreview';
import { ejerciciosReact } from '../data/ejercicios';

function EjerciciosContent() {
  const searchParams = useSearchParams();
  const { t, language } = useTheme();
  
  const ejercicioId = searchParams.get('ejercicio');
  const ejercicioInicial = ejerciciosReact.find(e => e.id === ejercicioId) || ejerciciosReact[0];
  
  const [ejercicioActual, setEjercicioActual] = useState(ejercicioInicial);
  const [ejerciciosEnviados, setEjerciciosEnviados] = useState<string[]>([]);
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t.ejerciciosReact}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t.ejerciciosCortos}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {ejercicioActual.titulo[language]}
            </h2>
            <button
              onClick={siguienteEjercicio}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {t.siguiente}
            </button>
          </div>
          
           <p className="mb-4 text-gray-700 dark:text-gray-300">
            {ejercicioActual.descripcion[language]}
          </p>

          <div className="mb-4">
             <p className="text-sm font-medium mb-2 text-gray-500 dark:text-gray-400">
              {language === 'es' ? 'Código inicial:' : language === 'ca' ? 'Codi inicial:' : 'Initial code:'}
            </p>
             <CodeEditor initialCode={ejercicioActual.codigoInicio} />
          </div>

           <details className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
             <summary className="cursor-pointer font-medium text-yellow-600 dark:text-yellow-400">
               {t.verPista}
             </summary>
             <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
               {ejercicioActual.pista[language]}
             </p>
           </details>

           <details className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
             <summary className="cursor-pointer font-medium text-blue-600 dark:text-blue-400">
               {t.verSolucion}
             </summary>
             <pre className="mt-2 p-4 rounded-lg overflow-x-auto text-sm font-mono bg-gray-100 text-green-700 dark:bg-gray-900 dark:text-green-400">
               {ejercicioActual.solucion}
             </pre>
           </details>
        </div>

        <div className="p-6 rounded-xl border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            {t.enviarAEstudiantes}
          </h2>
          
           <p className="mb-4 text-gray-600 dark:text-gray-400">
            {t.seleccionarEstudiantes}
          </p>

          <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
            {estudiantes.filter(e => e.estado === 'activo' || e.estado === 'completado').map((estudiante) => (
              <label
                key={estudiante.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                  seleccionados.includes(estudiante.id)
                    ? 'bg-blue-50 border-blue-200 dark:bg-blue-900 dark:border-blue-700'
                    : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
                } border ${seleccionados.includes(estudiante.id) ? 'border-blue-500' : 'border-transparent'}`}
              >
                <input
                  type="checkbox"
                  checked={seleccionados.includes(estudiante.id)}
                  onChange={() => toggleEstudiante(estudiante.id)}
                  className="w-4 h-4"
                />
                <span className="text-gray-900 dark:text-white">
                  {estudiante.nombre}
                </span>
                {ejerciciosEnviados.includes(ejercicioActual.id) && (
                  <span className="ml-auto text-xs px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
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
                : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
            }`}
          >
            {t.enviarEjercicio} ({seleccionados.length} {t.seleccionados})
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EjerciciosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
      <EjerciciosContent />
    </Suspense>
  );
}
