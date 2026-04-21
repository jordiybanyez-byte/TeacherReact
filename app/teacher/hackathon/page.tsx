'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

interface Equipo {
  id: string;
  nombre: string;
  miembros: string[];
  proyecto: string;
  estado: 'inscrito' | 'en_progreso' | 'entregado';
  nota?: number;
}

const equiposMock: Equipo[] = [
  { id: '1', nombre: 'ReactMasters', miembros: ['Ana García', 'Carlos Martínez'], proyecto: 'App de gestión de tareas', estado: 'en_progreso' },
  { id: '2', nombre: 'CodeWarriors', miembros: ['Laura López', 'Sofia Hernández'], proyecto: 'Dashboard analytico', estado: 'en_progreso' },
  { id: '3', nombre: 'DevTeam', miembros: ['David Chen', 'Miguel García'], proyecto: 'Red social para devs', estado: 'inscrito' },
  { id: '4', nombre: 'TechInnovators', miembros: ['Isabella Castro', 'Carmen Kim'], proyecto: 'Plataforma de learning', estado: 'entregado', nota: 90 },
  { id: '5', nombre: 'DigitalCrafters', miembros: ['Alejandro Díaz', 'Ricardo Sánchez'], proyecto: 'Marketplace online', estado: 'entregado', nota: 85 },
];

export default function HackathonPage() {
  const { isDark } = useTheme();
  const [equipos] = useState<Equipo[]>(equiposMock);
  const [filtro, setFiltro] = useState<'todos' | 'inscrito' | 'en_progreso' | 'entregado'>('todos');

  const equiposFiltrados = filtro === 'todos'
    ? equipos
    : equipos.filter(e => e.estado === filtro);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'entregado': return isDark ? 'bg-green-900 text-green-200 border-green-700' : 'bg-green-100 text-green-800 border-green-200';
      case 'en_progreso': return isDark ? 'bg-blue-900 text-blue-200 border-blue-700' : 'bg-blue-100 text-blue-800 border-blue-200';
      default: return isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Gestión de Hackathon
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Administra los equipos y proyectos del hackathon
        </p>
      </div>

      <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Información del Hackathon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Fecha de inicio</p>
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>15 Mayo 2026</p>
          </div>
          <div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Fecha de entrega</p>
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>22 Mayo 2026</p>
          </div>
          <div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Premio</p>
            <p className={`font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>500€ + Mentoría</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {(['todos', 'inscrito', 'en_progreso', 'entregado'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-lg capitalize transition ${
              filtro === f
                ? 'bg-blue-600 text-white'
                : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {f.replace('_', ' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equiposFiltrados.map((equipo) => (
          <div
            key={equipo.id}
            className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {equipo.nombre}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {equipo.proyecto}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEstadoColor(equipo.estado)}`}>
                {equipo.estado.replace('_', ' ')}
              </span>
            </div>

            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
              <p>Miembros: {equipo.miembros.join(', ')}</p>
            </div>

            {equipo.estado === 'entregado' && (
              <div className={`text-lg font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                Nota: {equipo.nota}/100
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        Mostrando {equiposFiltrados.length} de {equipos.length} equipos
      </div>
    </div>
  );
}