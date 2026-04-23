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

interface Hackathon {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  premio: string;
  equipos: Equipo[];
}

const hackathonsMock: Hackathon[] = [
  {
    id: '1',
    titulo: 'Hackathon React 2026',
    descripcion: 'Construye la mejor aplicación con React',
    fechaInicio: '2026-05-15',
    fechaFin: '2026-05-22',
    premio: '500€ + Mentoría',
    equipos: [
      { id: '1', nombre: 'ReactMasters', miembros: ['Ana García', 'Carlos Martínez'], proyecto: 'App de gestión de tareas', estado: 'en_progreso' },
      { id: '2', nombre: 'CodeWarriors', miembros: ['Laura López', 'Sofia Hernández'], proyecto: 'Dashboard analytico', estado: 'en_progreso' },
    ],
  },
];

const estudiantesDisponibles = [
  'Ana García', 'Carlos Martínez', 'Laura López', 'Sofia Hernández',
  'David Chen', 'Miguel García', 'Isabella Castro', 'Carmen Kim',
];

export default function HackathonPage() {
  const { isDark, t } = useTheme();
  const [hackathons, setHackathons] = useState<Hackathon[]>(hackathonsMock);
  const [hackathonActual, setHackathonActual] = useState<string>(hackathonsMock[0].id);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [alumnosInvitados, setAlumnosInvitados] = useState<string[]>([]);
  const [nuevoHackathon, setNuevoHackathon] = useState({ titulo: '', descripcion: '', fechaInicio: '', fechaFin: '', premio: '' });

  const hackathon = hackathons.find(h => h.id === hackathonActual) || hackathons[0];

  const toggleAlumno = (nombre: string) => {
    setAlumnosInvitados(prev => 
      prev.includes(nombre) 
        ? prev.filter(a => a !== nombre)
        : [...prev, nombre]
    );
  };

  const agregarHackathon = () => {
    if (!nuevoHackathon.titulo.trim()) return;
    
    const equipos: Equipo[] = [];
    const chunkSize = 4;
    for (let i = 0; i < alumnosInvitados.length; i += chunkSize) {
      const miembros = alumnosInvitados.slice(i, i + chunkSize);
      equipos.push({
        id: String(Date.now()) + i,
        nombre: `Equipo ${Math.floor(i / chunkSize) + 1}`,
        miembros: miembros,
        proyecto: 'Sin proyecto',
        estado: 'inscrito',
      });
    }
    
    const hackathonNuevo: Hackathon = {
      id: String(Date.now()),
      titulo: nuevoHackathon.titulo,
      descripcion: nuevoHackathon.descripcion,
      fechaInicio: nuevoHackathon.fechaInicio,
      fechaFin: nuevoHackathon.fechaFin,
      premio: nuevoHackathon.premio,
      equipos,
    };
    
    setHackathons([...hackathons, hackathonNuevo]);
    setHackathonActual(hackathonNuevo.id);
    setNuevoHackathon({ titulo: '', descripcion: '', fechaInicio: '', fechaFin: '', premio: '' });
    setAlumnosInvitados([]);
    setMostrarFormulario(false);
  };

  const eliminarHackathon = (id: string) => {
    setHackathons(hackathons.filter(h => h.id !== id));
    if (hackathonActual === id && hackathons.length > 1) {
      setHackathonActual(hackathons.find(h => h.id !== id)?.id || '');
    }
  };

  const getEstadoColor = (estado: string, isDark: boolean) => {
    switch (estado) {
      case 'entregado': return isDark ? 'bg-green-900 text-green-200 border-green-700' : 'bg-green-100 text-green-800 border-green-200';
      case 'en_progreso': return isDark ? 'bg-blue-900 text-blue-200 border-blue-700' : 'bg-blue-100 text-blue-800 border-blue-200';
      default: return isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const equiposFiltrados = hackathon?.equipos || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.gestionHackathon}
          </h1>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {t.adminHackathon}
          </p>
        </div>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className={`px-4 py-2 rounded-lg transition ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {mostrarFormulario ? t.cancel : t.newHackathon}
        </button>
      </div>

      <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.selectHackathon}</label>
        <select
          value={hackathonActual}
          onChange={(e) => setHackathonActual(e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg ${
            isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          {hackathons.map(h => (
            <option key={h.id} value={h.id}>{h.titulo}</option>
          ))}
        </select>
      </div>

      {mostrarFormulario && (
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.crearNuevoHackathon}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.titulo}</label>
              <input
                type="text"
                value={nuevoHackathon.titulo}
                onChange={(e) => setNuevoHackathon({ ...nuevoHackathon, titulo: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.premio}</label>
              <input
                type="text"
                value={nuevoHackathon.premio}
                onChange={(e) => setNuevoHackathon({ ...nuevoHackathon, premio: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.fechaInicio}</label>
              <input
                type="date"
                value={nuevoHackathon.fechaInicio}
                onChange={(e) => setNuevoHackathon({ ...nuevoHackathon, fechaInicio: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.fechaFin}</label>
              <input
                type="date"
                value={nuevoHackathon.fechaFin}
                onChange={(e) => setNuevoHackathon({ ...nuevoHackathon, fechaFin: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
              />
            </div>
            <div className="md:col-span-2">
              <label className={`block text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.descripcion}</label>
              <textarea
                value={nuevoHackathon.descripcion}
                onChange={(e) => setNuevoHackathon({ ...nuevoHackathon, descripcion: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-900'
                }`}
                rows={2}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className={`block text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.inviteAlumns} ({alumnosInvitados.length} {t.selectAlumns})
            </label>
            <p className={`text-xs mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {t.inviteAlumnsHint}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {estudiantesDisponibles.map((estudiante) => (
                <button
                  key={estudiante}
                  type="button"
                  onClick={() => toggleAlumno(estudiante)}
                  className={`px-3 py-2 rounded-lg text-sm transition ${
                    alumnosInvitados.includes(estudiante)
                      ? 'bg-blue-600 text-white'
                      : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {alumnosInvitados.includes(estudiante) ? '✓ ' : '+ '}{estudiante}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={agregarHackathon}
              className={`px-4 py-2 rounded-lg transition ${
                isDark ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {t.createHackathon}
            </button>
            <button
              onClick={() => { setMostrarFormulario(false); setAlumnosInvitados([]); }}
              className={`px-4 py-2 rounded-lg transition ${
                isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-400 hover:bg-gray-500'
              } text-white`}
            >
              {t.cancel}
            </button>
          </div>
        </div>
      )}

      {hackathon && (
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {hackathon.titulo}
              </h2>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{hackathon.descripcion}</p>
            </div>
            <button
              onClick={() => eliminarHackathon(hackathonActual)}
              className="px-3 py-1 rounded-lg text-sm transition bg-red-600 hover:bg-red-700 text-white font-medium"
            >
              Eliminar
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.fechaInicio}</p>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{hackathon.fechaInicio || '-'}</p>
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.fechaFin}</p>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{hackathon.fechaFin || '-'}</p>
            </div>
            <div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.premio}</p>
              <p className={`font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>{hackathon.premio || '-'}</p>
            </div>
          </div>
        </div>
      )}

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
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getEstadoColor(equipo.estado, isDark)}`}>
                {equipo.estado}
              </span>
            </div>

            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
              <p>Miembros: {equipo.miembros.join(', ')}</p>
            </div>

            {equipo.estado === 'entregado' && (
              <div className={`text-lg font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                {t.note}: {equipo.nota}/100
              </div>
            )}
          </div>
        ))}
      </div>

      {equiposFiltrados.length === 0 && (
        <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t.noEquipos}
        </div>
      )}

      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {t.totalCourses}: {equiposFiltrados.length} {t.teams}
      </div>
    </div>
  );
}