'use client';

import { useMemo, useState, useEffect } from 'react';
import { estudiantes } from '../../data/estudiantes';
import { ListaEstudiantes } from '../features/ListaEstudiantes';
import { Estudiante } from '../../types/estudiante';
import { ThemeToggle } from '../ui/ThemeToggle';

function useEstadisticas(estudiantes: Estudiante[]) {
  return useMemo(() => {
    const total = estudiantes.length;
    const activos = estudiantes.filter((e) => e.estado === 'activo').length;
    const completados = estudiantes.filter((e) => e.estado === 'completado').length;
    const promedioProgreso = Math.round(
      estudiantes.reduce((acc, e) => acc + e.progreso, 0) / total
    );

    return { total, activos, completados, promedioProgreso };
  }, [estudiantes]);
}

function TarjetaEstadistica({
  titulo,
  valor,
  color,
  isDark,
}: {
  titulo: string;
  valor: string | number;
  color: string;
  isDark: boolean;
}) {
  return (
    <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
      <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{titulo}</p>
      <p className={`text-2xl font-bold ${color}`}>{valor}</p>
    </div>
  );
}

export function VistaProfesor() {
  const estadisticas = useEstadisticas(estudiantes);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = saved || 'light';
    document.documentElement.setAttribute('data-theme', initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen p-4 md:p-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              React para Principiantes
            </h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Gestión de estudiantes del MOOC de React
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <TarjetaEstadistica titulo="Total" valor={estadisticas.total} color={isDark ? 'text-white' : 'text-gray-900'} isDark={isDark} />
          <TarjetaEstadistica titulo="Activos" valor={estadisticas.activos} color={isDark ? 'text-green-400' : 'text-green-600'} isDark={isDark} />
          <TarjetaEstadistica titulo="Completados" valor={estadisticas.completados} color={isDark ? 'text-blue-400' : 'text-blue-600'} isDark={isDark} />
          <TarjetaEstadistica titulo="Progreso Promedio" valor={`${estadisticas.promedioProgreso}%`} color={isDark ? 'text-purple-400' : 'text-purple-600'} isDark={isDark} />
        </div>

        <ListaEstudiantes estudiantes={estudiantes} isDark={isDark} />
      </div>
    </div>
  );
}