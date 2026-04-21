import { Estado } from '../../types/estudiante';

interface BadgeEstadoProps {
  estado: Estado;
  isDark: boolean;
}

const colores: Record<Estado, { light: string; dark: string }> = {
  activo: { light: 'bg-green-100 text-green-800 border-green-200', dark: 'bg-green-900 text-green-200 border-green-700' },
  inactivo: { light: 'bg-gray-100 text-gray-600 border-gray-200', dark: 'bg-gray-700 text-gray-300 border-gray-600' },
  completado: { light: 'bg-blue-100 text-blue-800 border-blue-200', dark: 'bg-blue-900 text-blue-200 border-blue-700' },
  bloqueado: { light: 'bg-red-100 text-red-800 border-red-200', dark: 'bg-red-900 text-red-200 border-red-700' },
};

const etiquetas: Record<Estado, string> = {
  activo: 'Activo',
  inactivo: 'Inactivo',
  completado: 'Completado',
  bloqueado: 'Bloqueado',
};

export function BadgeEstado({ estado, isDark }: BadgeEstadoProps) {
  const claseColor = isDark ? colores[estado].dark : colores[estado].light;
  
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${claseColor}`}>
      {etiquetas[estado]}
    </span>
  );
}