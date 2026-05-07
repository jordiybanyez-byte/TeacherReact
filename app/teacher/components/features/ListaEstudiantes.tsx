'use client';

import { useState, useMemo } from 'react';
import { Estudiante, Filtros } from '../../types/estudiante';
import { Buscador } from './Buscador';
import { FiltroEstado } from './FiltroEstado';
import { Ordenacion } from './Ordenacion';
import { TablaEstudiantes } from './TablaEstudiantes';

interface ListaEstudiantesProps {
  estudiantes: Estudiante[];
}

export function ListaEstudiantes({ estudiantes }: ListaEstudiantesProps) {
  const [filtros, setFiltros] = useState<Filtros>({
    buscar: '',
    estado: 'todos',
    orden: 'nombre',
  });

  const estudiantesFiltrados = useMemo(() => {
    let resultado = [...estudiantes];

    if (filtros.buscar) {
      const busqueda = filtros.buscar.toLowerCase();
      resultado = resultado.filter(
        (e) =>
          e.nombre.toLowerCase().includes(busqueda) ||
          e.email.toLowerCase().includes(busqueda)
      );
    }

    if (filtros.estado !== 'todos') {
      resultado = resultado.filter((e) => e.estado === filtros.estado);
    }

    resultado.sort((a, b) => {
      switch (filtros.orden) {
        case 'nombre':
          return a.nombre.localeCompare(b.nombre);
        case 'progreso':
          return b.progreso - a.progreso;
        case 'ultimoAcceso':
          return new Date(b.ultimoAcceso).getTime() - new Date(a.ultimoAcceso).getTime();
        case 'nota':
          return b.notaPromedio - a.notaPromedio;
        default:
          return 0;
      }
    });

    return resultado;
  }, [estudiantes, filtros]);

  const actualizarFiltro = <K extends keyof Filtros>(clave: K, valor: Filtros[K]) => {
    setFiltros((prev) => ({ ...prev, [clave]: valor }));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Buscador valor={filtros.buscar} onCambio={(v) => actualizarFiltro('buscar', v)} />
        </div>
        <div className="flex gap-2">
          <FiltroEstado
            valor={filtros.estado}
            onCambio={(v) => actualizarFiltro('estado', v)}
          />
          <Ordenacion
            valor={filtros.orden}
            onCambio={(v) => actualizarFiltro('orden', v)}
          />
        </div>
      </div>

      <div className="rounded-xl shadow-sm border overflow-hidden bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <TablaEstudiantes estudiantes={estudiantesFiltrados} />
      </div>

      <p className="text-sm text-right text-gray-500 dark:text-gray-400">
        Mostrando {estudiantesFiltrados.length} de {estudiantes.length} estudiantes
      </p>
    </div>
  );
}