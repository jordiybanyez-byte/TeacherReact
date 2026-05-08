'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../../components/ThemeContext';
import { ejerciciosReact, Ejercicio } from '../../data/ejercicios';

interface Bloque {
  titulo: Record<string, string>;
  descripcion: Record<string, string>;
  nivel: 'básico' | 'intermedio' | 'avanzado';
  ejercicios: Ejercicio[];
}

const bloques: Bloque[] = [
  {
    titulo: { es: 'Fundamentos de React', ca: 'Fonaments de React', en: 'React Fundamentals' },
    descripcion: { es: 'Aprende la sintaxis básica, componentes y JSX', ca: 'Aprèn la sintaxi bàsica, components i JSX', en: 'Learn basic syntax, components and JSX' },
    nivel: 'básico',
    ejercicios: ejerciciosReact.filter(e => ['JSX', 'Componentes', 'Props'].includes(e.categoria))
  },
  {
    titulo: { es: 'Estado y Eventos', ca: 'Estat i Events', en: 'State and Events' },
    descripcion: { es: 'Maneja el estado con useState y eventos del DOM', ca: 'Gestiona l\'estat amb useState i events del DOM', en: 'Manage state with useState and DOM events' },
    nivel: 'básico',
    ejercicios: ejerciciosReact.filter(e => ['Estado', 'Eventos'].includes(e.categoria))
  },
  {
    titulo: { es: 'Renderizado y Listas', ca: 'Renderitzat i Llistes', en: 'Rendering and Lists' },
    descripcion: { es: 'Aprende a renderizar condicionalmente y manejar listas', ca: 'Aprèn a renderitzar condicionalment i gestionar llistes', en: 'Learn conditional rendering and handle lists' },
    nivel: 'básico',
    ejercicios: ejerciciosReact.filter(e => ['Renderizado'].includes(e.categoria))
  },
  {
    titulo: { es: 'Efectos y Ciclo de Vida', ca: 'Efectes i Cicle de Vida', en: 'Effects and Lifecycle' },
    descripcion: { es: 'Usa useEffect y maneja el ciclo de vida del componente', ca: 'Fes servir useEffect i gestiona el cicle de vida del component', en: 'Use useEffect and manage component lifecycle' },
    nivel: 'intermedio',
    ejercicios: ejerciciosReact.filter(e => ['Efectos'].includes(e.categoria))
  },
  {
    titulo: { es: 'Formularios', ca: 'Formularis', en: 'Forms' },
    descripcion: { es: 'Crea formularios controlados y maneja inputs', ca: 'Crea formularis controlats i gestiona inputs', en: 'Create controlled forms and handle inputs' },
    nivel: 'intermedio',
    ejercicios: ejerciciosReact.filter(e => ['Formularios'].includes(e.categoria))
  },
  {
    titulo: { es: 'Contexto y Comunicación', ca: 'Context i Comunicació', en: 'Context and Communication' },
    descripcion: { es: 'Comparte datos entre componentes con Context y Patrones', ca: 'Comparteix dades entre components amb Context i Patrons', en: 'Share data between components with Context and Patterns' },
    nivel: 'intermedio',
    ejercicios: ejerciciosReact.filter(e => ['Contexto', 'Patrones'].includes(e.categoria))
  },
  {
    titulo: { es: 'Referencias y Portales', ca: 'Referències i Portals', en: 'References and Portals' },
    descripcion: { es: 'Accede a DOM directamente y renderiza fuera del árbol', ca: 'Accedeix al DOM directament i renderitza fora de l\'arbre', en: 'Access DOM directly and render outside the tree' },
    nivel: 'intermedio',
    ejercicios: ejerciciosReact.filter(e => ['Referencias', 'Portales'].includes(e.categoria))
  },
  {
    titulo: { es: 'Hooks Personalizados', ca: 'Hooks Personalitzats', en: 'Custom Hooks' },
    descripcion: { es: 'Crea tus propios hooks reutilizables', ca: 'Crea els teus propis hooks reutilitzables', en: 'Create your own reusable hooks' },
    nivel: 'avanzado',
    ejercicios: ejerciciosReact.filter(e => ['Hooks'].includes(e.categoria))
  },
  {
    titulo: { es: 'Optimización y Performance', ca: 'Optimització i Performance', en: 'Optimization and Performance' },
    descripcion: { es: 'Memoiza componentes y mejora el rendimiento', ca: 'Memoritza components i millora el rendiment', en: 'Memoize components and improve performance' },
    nivel: 'avanzado',
    ejercicios: ejerciciosReact.filter(e => ['Optimización', 'Performance'].includes(e.categoria))
  },
  {
    titulo: { es: 'Manejo de Errores y Testing', ca: 'Gestió d\'Errors i Testing', en: 'Error Handling and Testing' },
    descripcion: { es: 'Maneja errores con Boundaries y testa componentes', ca: 'Gestiona errors amb Boundaries i testa components', en: 'Handle errors with Boundaries and test components' },
    nivel: 'avanzado',
    ejercicios: ejerciciosReact.filter(e => ['Manejo de Errores', 'Testing'].includes(e.categoria))
  }
];

export default function ListaEjerciciosPage() {
  const { t, isDark, language } = useTheme();
  const [bloqueAbierto, setBloqueAbierto] = useState<string | null>(null);

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'básico': return isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700';
      case 'intermedio': return isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700';
      case 'avanzado': return isDark ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700';
      default: return isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  const toggleBloque = (index: string) => {
    setBloqueAbierto(bloqueAbierto === index ? null : index);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Link href="/teacher/ejercicios" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            ← {language === 'es' ? 'Volver' : language === 'ca' ? 'Tornar' : 'Back'}
          </Link>
        </div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.ejerciciosReact}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t.ejerciciosCortos}
        </p>
      </div>

      <div className="space-y-4">
        {bloques.map((bloque, bloqueIndex) => (
          <div
            key={bloqueIndex}
            className={`rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <button
              onClick={() => toggleBloque(String(bloqueIndex))}
              className={`w-full p-4 flex items-center justify-between hover:bg-opacity-50 transition ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  bloque.nivel === 'básico' 
                    ? (isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700')
                    : bloque.nivel === 'intermedio'
                    ? (isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                    : (isDark ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700')
                }`}>
                  {bloqueIndex + 1}
                </div>
                <div className="text-left">
                  <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {bloque.titulo[language]}
                  </h2>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {bloque.descripcion[language]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-3 py-1 rounded-full ${
                  bloque.nivel === 'básico' 
                    ? (isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700')
                    : bloque.nivel === 'intermedio'
                    ? (isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700')
                    : (isDark ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700')
                }`}>
                  {bloque.ejercicios.length} {language === 'es' ? 'ejercicios' : language === 'ca' ? 'exercicis' : 'exercises'}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${isDark ? 'text-gray-400' : 'text-gray-600'} ${
                    bloqueAbierto === String(bloqueIndex) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {bloqueAbierto === String(bloqueIndex) && (
              <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} p-4 space-y-3`}>
                {bloque.ejercicios.map((ejercicio, index) => (
                  <div
                    key={ejercicio.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border transition hover:shadow-md ${
                      isDark ? 'bg-gray-700 border-gray-600 hover:border-gray-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {ejercicio.titulo[language]}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getNivelColor(ejercicio.nivel)}`}>
                          {ejercicio.nivel}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                          {ejercicio.categoria}
                        </span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {ejercicio.descripcion[language]}
                      </p>
                    </div>

                    <Link
                      href={`/teacher/ejercicios?ejercicio=${ejercicio.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                    >
                      {language === 'es' ? 'Ver' : language === 'ca' ? 'Veure' : 'View'}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
