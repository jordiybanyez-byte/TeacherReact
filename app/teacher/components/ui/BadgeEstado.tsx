import { Estado } from '../../types/estudiante';
 
interface BadgeEstadoProps {
  estado: Estado;
}

const colores: Record<Estado, string> = {
  activo: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700',
  inactivo: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
  completado: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700',
  bloqueado: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700',
};

const etiquetas: Record<Estado, string> = {
  activo: 'Activo',
  inactivo: 'Inactivo',
  completado: 'Completado',
  bloqueado: 'Bloqueado',
};

export function BadgeEstado({ estado }: BadgeEstadoProps) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${colores[estado]}`}>
      {etiquetas[estado]}
    </span>
  );
}