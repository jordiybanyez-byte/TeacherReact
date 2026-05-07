import { Estado } from '../../types/estudiante';

type FiltroEstado = Estado | 'todos';

interface FiltroEstadoProps {
  valor: FiltroEstado;
  onCambio: (valor: FiltroEstado) => void;
}

const opciones: { value: FiltroEstado; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'activo', label: 'Activos' },
  { value: 'inactivo', label: 'Inactivos' },
  { value: 'completado', label: 'Completados' },
  { value: 'bloqueado', label: 'Bloqueados' },
];

export function FiltroEstado({ valor, onCambio }: FiltroEstadoProps) {
  return (
    <select
      value={valor}
      onChange={(e) => onCambio(e.target.value as FiltroEstado)}
      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
}