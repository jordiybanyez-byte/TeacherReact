'use client';

import { useState, useMemo } from 'react';
import { estudiantes } from '../data/estudiantes';
import { ListaEstudiantes } from '../components/features/ListaEstudiantes';
import { useTheme } from '../components/ThemeContext';

interface Curso {
  id: string;
  titulo: string;
  estado: 'activo' | 'inactivo' | 'borrador';
}

const cursos: Curso[] = [
  { id: '1', titulo: 'React para Principiantes', estado: 'activo' },
  { id: '2', titulo: 'Advanced React Patterns', estado: 'activo' },
  { id: '3', titulo: 'React Hooks Deep Dive', estado: 'borrador' },
];

export default function EstudiantesPage() {
  const { isDark, t, language } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState<string | null>(null);

  useState(() => {
    setMounted(true);
  });

  const estudiantesFiltrados = useMemo(() => {
    if (!cursoSeleccionado) return estudiantes;
    return estudiantes.filter(e => e.cursoId === cursoSeleccionado);
  }, [cursoSeleccionado]);

  const estadisticas = {
    total: estudiantesFiltrados.length,
    activos: estudiantesFiltrados.filter(e => e.estado === 'activo').length,
    completados: estudiantesFiltrados.filter(e => e.estado === 'completado').length,
    promedioProgreso: estudiantesFiltrados.length > 0 
      ? Math.round(estudiantesFiltrados.reduce((acc, e) => acc + e.progreso, 0) / estudiantesFiltrados.length)
      : 0,
  };

  const getCursoNombre = (cursoId: string) => {
    const curso = cursos.find(c => c.id === cursoId);
    return curso ? curso.titulo : 'Sin curso';
  };

  const estudiantesPorCurso = useMemo(() => {
    const grupos: Record<string, typeof estudiantes> = {};
    estudiantes.forEach(e => {
      const key = e.cursoId || 'sin-curso';
      if (!grupos[key]) grupos[key] = [];
      grupos[key].push(e);
    });
    return grupos;
  }, []);

  const [cursoAbierto, setCursoAbierto] = useState<string | null>(null);

  const toggleCurso = (cursoId: string) => {
    setCursoAbierto(cursoAbierto === cursoId ? null : cursoId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.gestionEstudiantes}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t.administrarEstudiantes}
        </p>
      </div>

      <div className="flex gap-4 items-center flex-wrap">
        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {language === 'es' ? 'Filtrar por curso:' : language === 'ca' ? 'Filtrar per curs:' : 'Filter by course:'}
        </span>
        <button
          onClick={() => setCursoSeleccionado(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            cursoSeleccionado === null
              ? 'bg-blue-600 text-white'
              : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {language === 'es' ? 'Todos' : language === 'ca' ? 'Tots' : 'All'}
        </button>
        {cursos.map(curso => (
          <button
            key={curso.id}
            onClick={() => setCursoSeleccionado(curso.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              cursoSeleccionado === curso.id
                ? 'bg-blue-600 text-white'
                : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {curso.titulo}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.total}</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{estadisticas.total}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.activos}</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{estadisticas.activos}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.completados}</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{estadisticas.completados}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.progresoPromedio}</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{estadisticas.promedioProgreso}%</p>
        </div>
      </div>

      {cursoSeleccionado === null ? (
        <div className="space-y-4">
          {Object.entries(estudiantesPorCurso).map(([cursoId, estudiantesCurso]) => (
            <div
              key={cursoId}
              className={`rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <button
                onClick={() => toggleCurso(cursoId)}
                className={`w-full p-4 flex items-center justify-between hover:bg-opacity-50 transition ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {estudiantesCurso.length}
                  </div>
                  <div className="text-left">
                    <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {getCursoNombre(cursoId)}
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {estudiantesCurso.length} {language === 'es' ? 'estudiantes' : language === 'ca' ? 'estudiants' : 'students'}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform ${isDark ? 'text-gray-400' : 'text-gray-600'} ${
                    cursoAbierto === cursoId ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {cursoAbierto === cursoId && (
                <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} p-4`}>
                  <ListaEstudiantes estudiantes={estudiantesCurso} isDark={isDark} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <ListaEstudiantes estudiantes={estudiantesFiltrados} isDark={isDark} />
      )}
    </div>
  );
}