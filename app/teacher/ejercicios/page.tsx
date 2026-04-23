'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';
import { estudiantes } from '../data/estudiantes';

interface Ejercicio {
  id: string;
  titulo: Record<string, string>;
  descripcion: Record<string, string>;
  codigoInicio: string;
  solucion: string;
  pista: Record<string, string>;
}

const ejerciciosReact: Ejercicio[] = [
  {
    id: '1',
    titulo: { es: 'useState básico', ca: 'useState bàsic', en: 'useState basic' },
    descripcion: { es: 'Crea un contador que starts at 0 y aumenta en 1 al hacer click', ca: 'Crea un comptador que starts at 0 i augmenta en 1 al fer click', en: 'Create a counter that starts at 0 and increases by 1 on click' },
    codigoInicio: `function Contador() {
  // Tu código aquí
}`,
    solucion: `function Contador() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
    pista: { es: 'Usa useState para crear el estado del contador', ca: 'Fes servir useState per crear lestat del comptador', en: 'Use useState to create the counter state' },
  },
  {
    id: '2',
    titulo: { es: 'useEffect simple', ca: 'useEffect simple', en: 'useEffect simple' },
    descripcion: { es: 'Usa useEffect para mostrar un mensaje en consola cuando el componente se monta', ca: 'Fes servir useEffect per mostrar un missatge en consola quan el component es munta', en: 'Use useEffect to show a message in console when the component mounts' },
    codigoInicio: `function MiComponente() {
  // Tu código aquí
  return <div>Mi Componente</div>;
}`,
    solucion: `function MiComponente() {
  useEffect(() => {
    console.log('Componente montado');
  }, []);
  return <div>Mi Componente</div>;
}`,
    pista: { es: 'Usa useEffect con un array de dependencias vacío', ca: 'Fes servir useEffect amb un array de dependències buit', en: 'Use useEffect with an empty dependencies array' },
  },
  {
    id: '3',
    titulo: { es: 'Importar componente', ca: 'Importar component', en: 'Import component' },
    descripcion: { es: 'Importa el componente Button del archivo ./Button', ca: 'Importa el component Button del fitxer ./Button', en: 'Import the Button component from ./Button' },
    codigoInicio: `// Tu código aquí

function App() {
  return <Button>Click me</Button>;
}`,
    solucion: `import { Button } from './Button';

function App() {
  return <Button>Click me</Button>;
}`,
    pista: { es: 'Usa import Named o default según cómo esté exportado', ca: 'Fes servir import Named o default segons com estigui exportat', en: 'Use Named or default import depending on how it is exported' },
  },
  {
    id: '4',
    titulo: { es: 'Props básicas', ca: 'Props bàsiques', en: 'Basic props' },
    descripcion: { es: 'Crea un componente Saludo que reciba una prop "nombre" y muestre "Hola, {nombre}!"', ca: 'Crea un component Saludo que rebi una prop "nombre" i mostri "Hola, {nombre}!"', en: 'Create a Saludo component that receives a "name" prop and shows "Hola, {name}!"' },
    codigoInicio: `// Tu código aquí

function App() {
  return <Saludo nombre="Juan" />;
}`,
    solucion: `function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

function App() {
  return <Saludo nombre="Juan" />;
}`,
    pista: { es: 'Desestructura las props en los parámetros de la función', ca: 'Desestructura les props als paràmetres de la funció', en: 'Destructuring props in the function parameters' },
  },
  {
    id: '5',
    titulo: { es: 'Renderizado condicional', ca: 'Renderitzat condicional', en: 'Conditional rendering' },
    descripcion: { es: 'Muestra "Cargando..." si isLoading es true, o el contenido si es false', ca: 'Mostra "Carregant..." si isLoading és true, o el contingut si és false', en: 'Show "Cargando..." if isLoading is true, or the content if false' },
    codigoInicio: `function MiComponente({ isLoading, contenido }) {
  // Tu código aquí
}`,
    solucion: `function MiComponente({ isLoading, contenido }) {
  if (isLoading) return <p>Cargando...</p>;
  return contenido;
}`,
    pista: { es: 'Usa un if o el operador ternario para conditionally render', ca: 'Fes servir un if o loperador ternari per renderitzar condicionalment', en: 'Use an if or ternary operator for conditional rendering' },
  },
];

export default function EjerciciosPage() {
  const { isDark, t, language } = useTheme();
  const [ejercicioActual, setEjercicioActual] = useState(ejerciciosReact[0]);
  const [ejerciciosEnviados, setEjerciciosEnviados] = useState<string[]>([]);
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const toggleEstudiante = (id: string) => {
    setSeleccionados(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const enviarEjercicios = () => {
    if (seleccionados.length === 0) {
      alert(language === 'es' ? 'Selecciona al menos un estudiante' : language === 'ca' ? 'Selecciona almenys un estudiant' : 'Select at least one student');
      return;
    }
    const nuevosEnviados = [...seleccionados, ejercicioActual.id];
    setEjerciciosEnviados(nuevosEnviados);
    const msg = language === 'es' ? `Ejercicio enviado a ${seleccionados.length} estudiante(s)!` : language === 'ca' ? `Exercici enviat a ${seleccionados.length} estudiant(s)!` : `Exercise sent to ${seleccionados.length} student(s)!`;
    alert(msg);
    setSeleccionados([]);
  };

  const siguienteEjercicio = () => {
    const indiceActual = ejerciciosReact.findIndex(e => e.id === ejercicioActual.id);
    const siguiente = (indiceActual + 1) % ejerciciosReact.length;
    setEjercicioActual(ejerciciosReact[siguiente]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.ejerciciosReact}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {t.ejerciciosCortos}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {ejercicioActual.titulo[language]}
            </h2>
            <button
              onClick={siguienteEjercicio}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {t.siguiente}
            </button>
          </div>
          
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {ejercicioActual.descripcion[language]}
          </p>

          <div className="mb-4">
            <p className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {language === 'es' ? 'Código inicial:' : language === 'ca' ? 'Codi inicial:' : 'Initial code:'}
            </p>
            <pre className={`p-4 rounded-lg overflow-x-auto text-sm font-mono ${isDark ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-green-700'}`}>
              {ejercicioActual.codigoInicio}
            </pre>
          </div>

          <details className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <summary className={`cursor-pointer font-medium ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              {t.verPista}
            </summary>
            <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {ejercicioActual.pista[language]}
            </p>
          </details>

          <details className={`mt-4 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <summary className={`cursor-pointer font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.verSolucion}
            </summary>
            <pre className={`mt-2 p-4 rounded-lg overflow-x-auto text-sm font-mono ${isDark ? 'bg-gray-900 text-green-400' : 'bg-gray-100 text-green-700'}`}>
              {ejercicioActual.solucion}
            </pre>
          </details>
        </div>

        <div className={`p-6 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.enviarAEstudiantes}
          </h2>
          
          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.seleccionarEstudiantes}
          </p>

          <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
            {estudiantes.filter(e => e.estado === 'activo' || e.estado === 'completado').map((estudiante) => (
              <label
                key={estudiante.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                  seleccionados.includes(estudiante.id)
                    ? isDark ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'
                    : isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                } border ${seleccionados.includes(estudiante.id) ? 'border-blue-500' : 'border-transparent'}`}
              >
                <input
                  type="checkbox"
                  checked={seleccionados.includes(estudiante.id)}
                  onChange={() => toggleEstudiante(estudiante.id)}
                  className="w-4 h-4"
                />
                <span className={isDark ? 'text-white' : 'text-gray-900'}>
                  {estudiante.nombre}
                </span>
                {ejerciciosEnviados.includes(ejercicioActual.id) && (
                  <span className={`ml-auto text-xs px-2 py-1 rounded ${isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                    {t.ejercicioEnviado}
                  </span>
                )}
              </label>
            ))}
          </div>

          <button
            onClick={enviarEjercicios}
            disabled={seleccionados.length === 0}
            className={`w-full py-3 px-4 rounded-lg font-medium transition ${
              seleccionados.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : isDark ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {t.enviarEjercicio} ({seleccionados.length} {t.seleccionados})
          </button>
        </div>
      </div>
    </div>
  );
}