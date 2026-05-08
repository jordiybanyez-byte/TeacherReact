export type Estado = 'activo' | 'inactivo' | 'completado' | 'bloqueado';

export interface Estudiante {
  id: string;
  nombre: string;
  email: string;
  avatar: string;
  estado: Estado;
  progreso: number;
  fechaInscripcion: string;
  ultimoAcceso: string;
  ejerciciosCompletados: number;
  ejerciciosTotales: number;
  notaPromedio: number;
  cursoId: string;
}

export interface Filtros {
  buscar: string;
  estado: Estado | 'todos';
  orden: 'nombre' | 'progreso' | 'ultimoAcceso' | 'nota';
}