import { Filtros } from '../../types/estudiante';

interface OrdenacionProps {
  valor: Filtros['orden'];
  onCambio: (valor: Filtros['orden']) => void;
}

const opciones: { value: Filtros['orden']; label: string }[] = [
  { value: 'nombre', label: 'Nombre' },
  { value: 'progreso', label: 'Progreso' },
  { value: 'ultimoAcceso', label: 'Último acceso' },
  { value: 'nota', label: 'Nota promedio' },
];

export function Ordenacion({ valor, onCambio }: OrdenacionProps) {
  return (
    <select
      value={valor}
      onChange={(e) => onCambio(e.target.value as Filtros['orden'])}
      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          Ordenar por: {opcion.label}
        </option>
      ))}
    </select>
  );
}