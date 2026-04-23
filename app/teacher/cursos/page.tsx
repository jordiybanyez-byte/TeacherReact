'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

interface Curso {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: string;
  estado: 'activo' | 'inactivo' | 'borrador';
  fechaInicio: string;
}

const cursosMock: Curso[] = [
  { id: '1', titulo: 'React para Principiantes', descripcion: 'Aprende React desde cero', duracion: '8 semanas', estado: 'activo', fechaInicio: '2026-01-15' },
  { id: '2', titulo: 'Advanced React Patterns', descripcion: 'Patrones avanzados de React', duracion: '6 semanas', estado: 'inactivo', fechaInicio: '2026-03-01' },
];

export default function CursosPage() {
  const { isDark, t } = useTheme();
  const [cursos, setCursos] = useState<Curso[]>(cursosMock);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({ titulo: '', descripcion: '', duracion: '' });

  const agregarCurso = () => {
    if (!nuevoCurso.titulo.trim()) return;
    
    const curso: Curso = {
      id: String(Date.now()),
      titulo: nuevoCurso.titulo,
      descripcion: nuevoCurso.descripcion,
      duracion: nuevoCurso.duracion,
      estado: 'borrador',
      fechaInicio: new Date().toISOString().split('T')[0],
    };
    
    setCursos([...cursos, curso]);
    setNuevoCurso({ titulo: '', descripcion: '', duracion: '' });
    setMostrarFormulario(false);
  };

  const eliminarCurso = (id: string) => {
    setCursos(cursos.filter(c => c.id !== id));
  };

  const getEstadoColor = (estado: string, isDark: boolean) => {
    switch (estado) {
      case 'activo': return isDark ? 'bg-green-900 text-green-200 border-green-700' : 'bg-green-100 text-green-800 border-green-200';
      case 'inactivo': return isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-200';
      default: return isDark ? 'bg-yellow-900 text-yellow-200 border-yellow-700' : 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getEstadoLabel = (estado: string, t: any) => {
    switch (estado) {
      case 'activo': return t.active;
      case 'inactivo': return t.inactive;
      case 'borrador': return t.draft;
      default: return estado;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.gestionCursos}
          </h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {t.adminCursos}
          </p>
        </div>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className={`px-4 py-2 rounded-lg transition ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {mostrarFormulario ? t.cancel : t.newCourse}
        </button>
      </div>

      {mostrarFormulario && (
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.crearNuevoCurso}
          </h2>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.titulo}</label>
              <input
                type="text"
                value={nuevoCurso.titulo}
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, titulo: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.descripcion}</label>
              <textarea
                value={nuevoCurso.descripcion}
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
                rows={3}
              />
            </div>
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.duracion}</label>
              <input
                type="text"
                value={nuevoCurso.duracion}
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, duracion: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <button
              onClick={agregarCurso}
              className={`px-4 py-2 rounded-lg transition ${
                isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {t.createCourse}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {curso.titulo}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {curso.descripcion}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEstadoColor(curso.estado, isDark)}`}>
                {getEstadoLabel(curso.estado, t)}
              </span>
            </div>
            
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4 space-y-1`}>
              <p>{t.duracion}: {curso.duracion}</p>
              <p>{t.fechaInicio}: {curso.fechaInicio}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => eliminarCurso(curso.id)}
                className="px-4 py-2 rounded-lg transition bg-red-600 hover:bg-red-700 text-white font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {cursos.length === 0 && (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t.noCourses}
        </div>
      )}

      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {t.totalCourses}: {cursos.length}
      </div>
    </div>
  );
}