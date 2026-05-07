import { Estudiante } from '../../types/estudiante';
import { BadgeEstado } from '../ui/BadgeEstado';
import { BarraProgreso } from '../ui/BarraProgreso';

interface TablaEstudiantesProps {
  estudiantes: Estudiante[];
}

function formatearFecha(fecha: string): string {
  return new Date(fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function TablaEstudiantes({ estudiantes }: TablaEstudiantesProps) {
  if (estudiantes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No se encontraron estudiantes
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Estudiante</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Estado</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Progreso</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Ejercicios</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Nota</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Último Acceso</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr
              key={estudiante.id}
              className="border-b border-gray-100 transition hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={estudiante.avatar}
                    alt={estudiante.nombre}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{estudiante.nombre}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{estudiante.email}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <BadgeEstado estado={estudiante.estado} />
              </td>
              <td className="py-4 px-4 w-40">
                <BarraProgreso progreso={estudiante.progreso} />
              </td>
              <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                {estudiante.ejerciciosCompletados}/{estudiante.ejerciciosTotales}
              </td>
              <td className="py-4 px-4">
                <span
                  className={`font-medium ${
                    estudiante.notaPromedio >= 90
                      ? 'text-green-600 dark:text-green-400'
                      : estudiante.notaPromedio >= 70
                      ? 'text-blue-600 dark:text-blue-400'
                      : estudiante.notaPromedio > 0
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : 'text-gray-400'
                  }`}
                >
                  {estudiante.notaPromedio > 0 ? `${estudiante.notaPromedio}%` : '—'}
                </span>
              </td>
              <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                {formatearFecha(estudiante.ultimoAcceso)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}