'use client';

import Link from 'next/link';
import { useTheme } from './components/ThemeContext';

export default function TeacherHome() {
  const { isDark } = useTheme();

  const stats = {
    totalEstudiantes: 12,
    ejerciciosPendientes: 8,
    equiposHackathon: 5,
    cursosActivos: 1,
  };

  const quickActions = [
    { title: 'Gestionar Estudiantes', description: 'Ver y administrar estudiantes del curso', href: '/teacher/estudiantes' },
    { title: 'Corregir Ejercicios', description: 'Revisar ejercicios enviados por estudiantes', href: '/teacher/ejercicios' },
    { title: 'Hackathon', description: 'Gestionar equipos y proyectos del hackathon', href: '/teacher/hackathon' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Bienvenido, Profesor
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Panel de control del MOOC de React
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Estudiantes</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.totalEstudiantes}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Ejercicios Pendientes</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>{stats.ejerciciosPendientes}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Equipos Hackathon</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{stats.equiposHackathon}</p>
        </div>
        <div className={`rounded-xl p-6 shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Cursos Activos</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>{stats.cursosActivos}</p>
        </div>
      </div>

      <div>
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`block p-6 rounded-xl border transition hover:shadow-md ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {action.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className={`rounded-xl p-6 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Información del Curso
        </h2>
        <div className="space-y-3">
          <div className={`flex justify-between py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Curso</span>
            <span className={isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}>React para Principiantes</span>
          </div>
          <div className={`flex justify-between py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Duración</span>
            <span className={isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}>8 semanas</span>
          </div>
          <div className={`flex justify-between py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Estado</span>
            <span className="text-green-600 font-medium">Activo</span>
          </div>
          <div className="flex justify-between py-2">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Próximo Hackathon</span>
            <span className={isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}>15 Mayo 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}