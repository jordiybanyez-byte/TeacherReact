'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

interface Ejercicio {
  id: string;
  titulo: string;
  estudiante: string;
  fecha: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
  nota?: number;
}

const ejerciciosMock: Ejercicio[] = [
  { id: '1', titulo: 'useState Hook', estudiante: 'Ana García', fecha: '2026-04-20', estado: 'pendiente' },
  { id: '2', titulo: 'Componente Contador', estudiante: 'Carlos Martínez', fecha: '2026-04-19', estado: 'pendiente' },
  { id: '3', titulo: 'useEffect con API', estudiante: 'Laura López', fecha: '2026-04-19', estado: 'pendiente' },
  { id: '4', titulo: 'Formulario controlado', estudiante: 'Sofia Hernández', fecha: '2026-04-18', estado: 'aprobado', nota: 85 },
  { id: '5', titulo: 'Lista de tareas', estudiante: 'David Chen', fecha: '2026-04-18', estado: 'aprobado', nota: 92 },
  { id: '6', titulo: 'useMemo Optimization', estudiante: 'Miguel García', fecha: '2026-04-17', estado: 'rechazado', nota: 45 },
  { id: '7', titulo: 'Custom Hook', estudiante: 'Isabella Castro', fecha: '2026-04-17', estado: 'pendiente' },
  { id: '8', titulo: 'Conditional Rendering', estudiante: 'Carmen Kim', fecha: '2026-04-16', estado: 'aprobado', nota: 78 },
];

export default function EjerciciosPage() {
  const { isDark } = useTheme();
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>(ejerciciosMock);
  const [filtro, setFiltro] = useState<'todos' | 'pendiente' | 'aprobado' | 'rechazado'>('todos');

  const ejerciciosFiltrados = filtro === 'todos' 
    ? ejercicios 
    : ejercicios.filter(e => e.estado === filtro);

  const aprobar = (id: string) => {
    setEjercicios(prev => prev.map(e => 
      e.id === id ? { ...e, estado: 'aprobado' as const, nota: 80 } : e
    ));
  };

  const rechazar = (id: string) => {
    setEjercicios(prev => prev.map(e => 
      e.id === id ? { ...e, estado: 'rechazado' as const, nota: 50 } : e
    ));
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'aprobado': return isDark ? 'bg-green-900 text-green-200 border-green-700' : 'bg-green-100 text-green-800 border-green-200';
      case 'rechazado': return isDark ? 'bg-red-900 text-red-200 border-red-700' : 'bg-red-100 text-red-800 border-red-200';
      default: return isDark ? 'bg-yellow-900 text-yellow-200 border-yellow-700' : 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Corrección de Ejercicios
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Revisa y corrige los ejercicios enviados por los estudiantes
        </p>
      </div>

      <div className="flex gap-2">
        {(['todos', 'pendiente', 'aprobado', 'rechazado'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-lg capitalize transition ${
              filtro === f
                ? 'bg-blue-600 text-white'
                : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {ejerciciosFiltrados.map((ejercicio) => (
          <div
            key={ejercicio.id}
            className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {ejercicio.titulo}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {ejercicio.estudiante} • {ejercicio.fecha}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEstadoColor(ejercicio.estado)}`}>
                {ejercicio.estado}
              </span>
            </div>

            {ejercicio.estado === 'pendiente' ? (
              <div className="flex gap-2">
                <button
                  onClick={() => aprobar(ejercicio.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => rechazar(ejercicio.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Rechazar
                </button>
              </div>
            ) : (
              <div className={`text-sm ${ejercicio.nota && ejercicio.nota >= 70 ? (isDark ? 'text-green-400' : 'text-green-600') : (isDark ? 'text-red-400' : 'text-red-600')}`}>
                Nota: {ejercicio.nota}/100
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Mostrando {ejerciciosFiltrados.length} de {ejercicios.length} ejercicios
      </div>
    </div>
  );
}