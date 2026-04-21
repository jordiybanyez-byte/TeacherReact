'use client';

import { useState } from 'react';
import { estudiantes } from '../data/estudiantes';
import { ListaEstudiantes } from '../components/features/ListaEstudiantes';
import { useTheme } from '../components/ThemeContext';

export default function EstudiantesPage() {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  });

  const estadisticas = {
    total: estudiantes.length,
    activos: estudiantes.filter(e => e.estado === 'activo').length,
    completados: estudiantes.filter(e => e.estado === 'completado').length,
    promedioProgreso: Math.round(estudiantes.reduce((acc, e) => acc + e.progreso, 0) / estudiantes.length),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Gestión de Estudiantes
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Administra los estudiantes del curso de React
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Total</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{estadisticas.total}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Activos</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{estadisticas.activos}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Completados</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{estadisticas.completados}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Progreso Promedio</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{estadisticas.promedioProgreso}%</p>
        </div>
      </div>

      <ListaEstudiantes estudiantes={estudiantes} isDark={isDark} />
    </div>
  );
}