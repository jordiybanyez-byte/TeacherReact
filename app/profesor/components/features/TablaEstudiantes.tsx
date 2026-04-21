import { Estudiante } from '../../types/estudiante';
import { BadgeEstado } from '../ui/BadgeEstado';
import { BarraProgreso } from '../ui/BarraProgreso';

interface TablaEstudiantesProps {
  estudiantes: Estudiante[];
  isDark: boolean;
}

function formatearFecha(fecha: string): string {
  return new Date(fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function TablaEstudiantes({ estudiantes, isDark }: TablaEstudiantesProps) {
  if (estudiantes.length === 0) {
    return (
      <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        No se encontraron estudiantes
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Estudiante</th>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Estado</th>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Progreso</th>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Ejercicios</th>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Nota</th>
            <th className={`text-left py-3 px-4 text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Último Acceso</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr
              key={estudiante.id}
              className={`border-b transition ${isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'}`}
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={estudiante.avatar}
                    alt={estudiante.nombre}
                    className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
                  />
                  <div>
                    <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{estudiante.nombre}</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{estudiante.email}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <BadgeEstado estado={estudiante.estado} isDark={isDark} />
              </td>
              <td className="py-4 px-4 w-40">
                <BarraProgreso progreso={estudiante.progreso} isDark={isDark} />
              </td>
              <td className={`py-4 px-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {estudiante.ejerciciosCompletados}/{estudiante.ejerciciosTotales}
              </td>
              <td className="py-4 px-4">
                <span
                  className={`font-medium ${
                    estudiante.notaPromedio >= 90
                      ? isDark ? 'text-green-400' : 'text-green-600'
                      : estudiante.notaPromedio >= 70
                      ? isDark ? 'text-blue-400' : 'text-blue-600'
                      : estudiante.notaPromedio > 0
                      ? isDark ? 'text-yellow-400' : 'text-yellow-600'
                      : 'text-gray-400'
                  }`}
                >
                  {estudiante.notaPromedio > 0 ? `${estudiante.notaPromedio}%` : '—'}
                </span>
              </td>
              <td className={`py-4 px-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {formatearFecha(estudiante.ultimoAcceso)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}