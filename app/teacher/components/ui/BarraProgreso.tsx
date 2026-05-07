interface BarraProgresoProps {
  progreso: number;
}

export function BarraProgreso({ progreso }: BarraProgresoProps) {
  const color = 
    progreso >= 80 ? 'bg-green-500' :
    progreso >= 50 ? 'bg-blue-500' :
    progreso >= 25 ? 'bg-yellow-500' :
    'bg-red-500';

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-400">{progreso}%</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${progreso}%` }}
        />
      </div>
    </div>
  );
}