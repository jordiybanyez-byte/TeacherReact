export interface Curso {
  id: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  estado: 'activo' | 'inactivo' | 'borrador';
  totalEstudiantes: number;
}

export const cursos: Curso[] = [
  {
    id: '1',
    nombre: 'React para Principiantes',
    descripcion: 'Curso básico de React desde cero',
    duracion: '8 semanas',
    estado: 'activo',
    totalEstudiantes: 12,
  },
  {
    id: '2',
    nombre: 'React Avanzado',
    descripcion: 'Hooks avanzados, Context API, y patrones',
    duracion: '10 semanas',
    estado: 'activo',
    totalEstudiantes: 8,
  },
  {
    id: '3',
    nombre: 'React Native',
    descripcion: 'Desarrollo móvil con React Native',
    duracion: '12 semanas',
    estado: 'borrador',
    totalEstudiantes: 0,
  },
  {
    id: '4',
    nombre: 'Next.js Fundamentals',
    descripcion: 'Framework Next.js desde cero',
    duracion: '6 semanas',
    estado: 'activo',
    totalEstudiantes: 15,
  },
  {
    id: '5',
    nombre: 'TypeScript con React',
    descripcion: 'Tipado estático para aplicaciones React',
    duracion: '4 semanas',
    estado: 'inactivo',
    totalEstudiantes: 5,
  },
];
