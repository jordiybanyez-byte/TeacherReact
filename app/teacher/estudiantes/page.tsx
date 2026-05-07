'use client';

import { useState } from 'react';
import { estudiantes } from '../data/estudiantes';
import { cursos } from '../data/cursos';
import { useTheme } from '../components/ThemeContext';
import { ListaEstudiantes } from '../components/features/ListaEstudiantes';

export default function EstudiantesPage() {
  const { isDark, t } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openCourses, setOpenCourses] = useState<Record<string, boolean>>({});

  useState(() => {
    setMounted(true);
  });

  const toggleCourse = (courseId: string) => {
    setOpenCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const getCourseStats = (courseId: string) => {
    const estudiantesDelCurso = estudiantes.filter(e => {
      // Asumimos que el estudiante tiene un campo cursoId o lo asignamos por el nombre
      // Por ahora filtramos por los primeros 8 estudiantes para el curso 1, etc.
      const courseIndex = cursos.findIndex(c => c.id === courseId);
      const startIndex = courseIndex * 8;
      return estudiantes.indexOf(e) >= startIndex && estudiantes.indexOf(e) < startIndex + 8;
    });

    return {
      total: estudiantesDelCurso.length,
      activos: estudiantesDelCurso.filter(e => e.estado === 'activo').length,
      promedio: Math.round(estudiantesDelCurso.reduce((acc, e) => acc + e.progreso, 0) / (estudiantesDelCurso.length || 1)),
    };
  };

  const getEstudiantesByCourse = (courseId: string) => {
    const courseIndex = cursos.findIndex(c => c.id === courseId);
    const startIndex = courseIndex * 8;
    return estudiantes.slice(startIndex, startIndex + 8);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.gestionEstudiantes || 'Gestión de Estudiantes'}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t.administrarEstudiantes || 'Administra los estudiantes del curso'}
        </p>
      </div>

      <div className="space-y-4">
        {cursos.filter(c => c.estado === 'activo').map((curso) => {
          const isOpen = openCourses[curso.id];
          const stats = getCourseStats(curso.id);
          const estudiantesDelCurso = getEstudiantesByCourse(curso.id);

          return (
            <div 
              key={curso.id}
              className={`border rounded-xl overflow-hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <button
                onClick={() => toggleCourse(curso.id)}
                className={`w-full flex items-center justify-between p-6 transition ${
                  isOpen 
                    ? (isDark ? 'bg-gray-700' : 'bg-gray-50') 
                    : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {curso.nombre}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {curso.descripcion}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden md:flex gap-6 text-sm">
                    <div className="text-center">
                      <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.total}</p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.total || 'Total'}</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{stats.activos}</p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.activos || 'Activos'}</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{stats.promedio}%</p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.progresoPromedio || 'Promedio'}</p>
                    </div>
                  </div>

                  <svg 
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className={`p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <ListaEstudiantes estudiantes={estudiantesDelCurso} isDark={isDark} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mounted && cursos.filter(c => c.estado === 'activo').length === 0 && (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>{t.noCourses || 'No hay cursos activos'}</p>
        </div>
      )}
    </div>
  );
}
