'use client';

import { useState } from 'react';
import { useTheme } from '../../components/ThemeContext';

interface Ejercicio {
  id: string;
  titulo: Record<string, string>;
  descripcion: Record<string, string>;
  nivel: 'básico' | 'intermedio' | 'avanzado';
  tiempo: string;
  concepto: string;
}

const ejerciciosData: Ejercicio[] = [
  // useState (5 ejercicios)
  {
    id: '1',
    titulo: { es: 'Contador básico', ca: 'Comptador bàsic', en: 'Basic counter' },
    descripcion: { es: 'Crea un contador que empieza en 0 y aumenta en 1 al hacer click', ca: 'Crea un comptador que comença a 0 i augmenta en 1 al fer click', en: 'Create a counter that starts at 0 and increases by 1 on click' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'useState',
  },
  {
    id: '2',
    titulo: { es: 'Contador con límites', ca: 'Comptador amb límits', en: 'Counter with limits' },
    descripcion: { es: 'Crea un contador que no puede bajar de 0 ni subir de 10', ca: 'Crea un comptador que no pot baixar de 0 ni pujar de 10', en: 'Create a counter that cannot go below 0 or above 10' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'useState',
  },
  {
    id: '3',
    titulo: { es: 'Toggle booleano', ca: 'Toggle booleà', en: 'Boolean toggle' },
    descripcion: { es: 'Crea un botón que alterna entre true y false mostrando el estado', ca: 'Crea un botó que alterna entre true i false mostrant l\'estat', en: 'Create a button that toggles between true and false showing the state' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'useState',
  },
  {
    id: '4',
    titulo: { es: 'Input controlado', ca: 'Input controlat', en: 'Controlled input' },
    descripcion: { es: 'Crea un input que actualice el estado en tiempo real', ca: 'Crea un input que actualitzi l\'estat en temps real', en: 'Create an input that updates state in real time' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'useState',
  },
  {
    id: '5',
    titulo: { es: 'Múltiples estados', ca: 'Múltiples estats', en: 'Multiple states' },
    descripcion: { es: 'Crea un componente con estado para nombre, edad y email', ca: 'Crea un component amb estat per nom, edat i email', en: 'Create a component with state for name, age and email' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'useState',
  },

  // useEffect (5 ejercicios)
  {
    id: '6',
    titulo: { es: 'Mensaje al montar', ca: 'Missatge al muntar', en: 'Mount message' },
    descripcion: { es: 'Usa useEffect para mostrar un mensaje en consola cuando el componente se monta', ca: 'Fes servir useEffect per mostrar un missatge en consola quan el component es munta', en: 'Use useEffect to show a message in console when component mounts' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'useEffect',
  },
  {
    id: '7',
    titulo: { es: 'Cronómetro', ca: 'Cronòmetre', en: 'Stopwatch' },
    descripcion: { es: 'Crea un cronómetro que se actualiza cada segundo', ca: 'Crea un cronòmetre que s\'actualitzi cada segon', en: 'Create a stopwatch that updates every second' },
    nivel: 'intermedio',
    tiempo: '30 min',
    concepto: 'useEffect',
  },
  {
    id: '8',
    titulo: { es: 'Fetch de datos', ca: 'Fetch de dades', en: 'Data fetching' },
    descripcion: { es: 'Usa useEffect para obtener datos de una API al montar', ca: 'Fes servir useEffect per obtenir dades d\'una API al muntar', en: 'Use useEffect to fetch data from an API on mount' },
    nivel: 'intermedio',
    tiempo: '35 min',
    concepto: 'useEffect',
  },
  {
    id: '9',
    titulo: { es: 'EventListener', ca: 'EventListener', en: 'EventListener' },
    descripcion: { es: 'Añade un event listener de teclado con useEffect', ca: 'Afegeix un event listener de teclat amb useEffect', en: 'Add a keyboard event listener with useEffect' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'useEffect',
  },
  {
    id: '10',
    titulo: { es: 'Cleanup effect', ca: 'Cleanup effect', en: 'Cleanup effect' },
    descripcion: { es: 'Usa cleanup en useEffect para evitar memory leaks', ca: 'Fes servir cleanup en useEffect per evitar memory leaks', en: 'Use cleanup in useEffect to avoid memory leaks' },
    nivel: 'avanzado',
    tiempo: '30 min',
    concepto: 'useEffect',
  },

  // Props (5 ejercicios)
  {
    id: '11',
    titulo: { es: 'Props básicas', ca: 'Props bàsiques', en: 'Basic props' },
    descripcion: { es: 'Crea un componente Saludo que reciba una prop "nombre"', ca: 'Crea un component Saludo que rebi una prop "nom"', en: 'Create a Saludo component that receives a "name" prop' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'Props',
  },
  {
    id: '12',
    titulo: { es: 'Props con children', ca: 'Props amb children', en: 'Props with children' },
    descripcion: { es: 'Crea un componente Card que acepte children', ca: 'Crea un component Card que accepti children', en: 'Create a Card component that accepts children' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'Props',
  },
  {
    id: '13',
    titulo: { es: 'Props por defecto', ca: 'Props per defecte', en: 'Default props' },
    descripcion: { es: 'Usa defaultProps o destructuring para valores por defecto', ca: 'Fes servir defaultProps o destructuring per valors per defecte', en: 'Use defaultProps or destructuring for default values' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'Props',
  },
  {
    id: '14',
    titulo: { es: 'PropTypes o TypeScript', ca: 'PropTypes o TypeScript', en: 'PropTypes or TypeScript' },
    descripcion: { es: 'Valida las props usando TypeScript interfaces', ca: 'Valida les props fent servir TypeScript interfaces', en: 'Validate props using TypeScript interfaces' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Props',
  },
  {
    id: '15',
    titulo: { es: 'Render props pattern', ca: 'Render props pattern', en: 'Render props pattern' },
    descripcion: { es: 'Implementa el patrón render props en un componente', ca: 'Implementa el patró render props en un component', en: 'Implement the render props pattern in a component' },
    nivel: 'avanzado',
    tiempo: '35 min',
    concepto: 'Props',
  },

  // Conditional Rendering (4 ejercicios)
  {
    id: '16',
    titulo: { es: 'If ternario', ca: 'If ternari', en: 'Ternary operator' },
    descripcion: { es: 'Muestra "Cargando..." si isLoading es true', ca: 'Mostra "Carregant..." si isLoading és true', en: 'Show "Loading..." if isLoading is true' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'Conditional Rendering',
  },
  {
    id: '17',
    titulo: { es: 'Operador &&', ca: 'Operador &&', en: '&& operator' },
    descripcion: { es: 'Muestra un mensaje de error solo si hay error', ca: 'Mostra un missatge d\'error només si hi ha error', en: 'Show an error message only if there is an error' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'Conditional Rendering',
  },
  {
    id: '18',
    titulo: { es: 'Switch rendering', ca: 'Switch rendering', en: 'Switch rendering' },
    descripcion: { es: 'Renderiza diferentes componentes según el valor de status', ca: 'Renderitza diferents components segons el valor de status', en: 'Render different components based on status value' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Conditional Rendering',
  },
  {
    id: '19',
    titulo: { es: 'Renderizado múltiple', ca: 'Renderitzat múltiple', en: 'Multiple rendering' },
    descripcion: { es: 'Combina múltiples condiciones para renderizar', ca: 'Combina múltiples condicions per renderitzar', en: 'Combine multiple conditions for rendering' },
    nivel: 'intermedio',
    tiempo: '30 min',
    concepto: 'Conditional Rendering',
  },

  // Event Handling (4 ejercicios)
  {
    id: '20',
    titulo: { es: 'Click básico', ca: 'Click bàsic', en: 'Basic click' },
    descripcion: { es: 'Maneja el evento onClick en un botón', ca: 'Gestiona l\'event onClick en un botó', en: 'Handle onClick event on a button' },
    nivel: 'básico',
    tiempo: '15 min',
    concepto: 'Event Handling',
  },
  {
    id: '21',
    titulo: { es: 'Formulario submit', ca: 'Formulari submit', en: 'Form submit' },
    descripcion: { es: 'Maneja el evento onSubmit de un formulario', ca: 'Gestiona l\'event onSubmit d\'un formulari', en: 'Handle onSubmit event of a form' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'Event Handling',
  },
  {
    id: '22',
    titulo: { es: 'Eventos de teclado', ca: 'Events de teclat', en: 'Keyboard events' },
    descripcion: { es: 'Detecta cuando se presiona la tecla Enter', ca: 'Detecta quan es prem la tecla Enter', en: 'Detect when Enter key is pressed' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Event Handling',
  },
  {
    id: '23',
    titulo: { es: 'Eventos de mouse', ca: 'Events de ratolí', en: 'Mouse events' },
    descripcion: { es: 'Usa onMouseEnter y onMouseLeave para efectos', ca: 'Fes servir onMouseEnter i onMouseLeave per efectes', en: 'Use onMouseEnter and onMouseLeave for effects' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Event Handling',
  },

  // Lists and Keys (4 ejercicios)
  {
    id: '24',
    titulo: { es: 'Lista básica', ca: 'Llista bàsica', en: 'Basic list' },
    descripcion: { es: 'Renderiza una lista de elementos usando map', ca: 'Renderitza una llista d\'elements fent servir map', en: 'Render a list of items using map' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'Lists and Keys',
  },
  {
    id: '25',
    titulo: { es: 'Keys correctas', ca: 'Keys correctes', en: 'Correct keys' },
    descripcion: { es: 'Asegura que cada elemento de la lista tenga una key única', ca: 'Assegura que cada element de la llista tingui una key única', en: 'Ensure each list item has a unique key' },
    nivel: 'básico',
    tiempo: '20 min',
    concepto: 'Lists and Keys',
  },
  {
    id: '26',
    titulo: { es: 'Lista con botón', ca: 'Llista amb botó', en: 'List with button' },
    descripcion: { es: 'Crea una lista donde cada elemento tiene un botón eliminar', ca: 'Crea una llista on cada element té un botó eliminar', en: 'Create a list where each item has a delete button' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Lists and Keys',
  },
  {
    id: '27',
    titulo: { es: 'Lista filtrada', ca: 'Llista filtrada', en: 'Filtered list' },
    descripcion: { es: 'Filtra una lista basada en un término de búsqueda', ca: 'Filtra una llista basada en un terme de cerca', en: 'Filter a list based on a search term' },
    nivel: 'intermedio',
    tiempo: '30 min',
    concepto: 'Lists and Keys',
  },

  // Forms (4 ejercicios)
  {
    id: '28',
    titulo: { es: 'Input controlado', ca: 'Input controlat', en: 'Controlled input' },
    descripcion: { es: 'Crea un formulario con inputs controlados', ca: 'Crea un formulari amb inputs controlats', en: 'Create a form with controlled inputs' },
    nivel: 'básico',
    tiempo: '25 min',
    concepto: 'Forms',
  },
  {
    id: '29',
    titulo: { es: 'Formulario no controlado', ca: 'Formulari no controlat', en: 'Uncontrolled form' },
    descripcion: { es: 'Usa useRef para manejar un input no controlado', ca: 'Fes servir useRef per gestionar un input no controlat', en: 'Use useRef to handle an uncontrolled input' },
    nivel: 'intermedio',
    tiempo: '25 min',
    concepto: 'Forms',
  },
  {
    id: '30',
    titulo: { es: 'Validación básica', ca: 'Validació bàsica', en: 'Basic validation' },
    descripcion: { es: 'Añade validación simple a un formulario', ca: 'Afegeix validació senzilla a un formulari', en: 'Add simple validation to a form' },
    nivel: 'intermedio',
    tiempo: '30 min',
    concepto: 'Forms',
  },
  {
    id: '31',
    titulo: { es: 'Formulario complejo', ca: 'Formulari complex', en: 'Complex form' },
    descripcion: { es: 'Crea un formulario con múltiples campos y validación', ca: 'Crea un formulari amb múltiples camps i validació', en: 'Create a form with multiple fields and validation' },
    nivel: 'avanzado',
    tiempo: '40 min',
    concepto: 'Forms',
  },

  // useRef (3 ejercicios)
  {
    id: '32',
    titulo: { es: 'Focus input', ca: 'Focus input', en: 'Focus input' },
    descripcion: { es: 'Usa useRef para hacer focus en un input al montar', ca: 'Fes servir useRef per fer focus en un input al muntar', en: 'Use useRef to focus an input on mount' },
    nivel: 'intermedio',
    tiempo: '20 min',
    concepto: 'useRef',
  },
  {
    id: '33',
    titulo: { es: 'Medir elemento', ca: 'Mesurar element', en: 'Measure element' },
    descripcion: { es: 'Usa useRef y ResizeObserver para medir un elemento', ca: 'Fes servir useRef i ResizeObserver per mesurar un element', en: 'Use useRef and ResizeObserver to measure an element' },
    nivel: 'avanzado',
    tiempo: '35 min',
    concepto: 'useRef',
  },
  {
    id: '34',
    titulo: { es: 'Timer con ref', ca: 'Timer amb ref', en: 'Timer with ref' },
    descripcion: { es: 'Usa useRef para almacenar un ID de intervalo', ca: 'Fes servir useRef per emmagatzemar un ID d\'interval', en: 'Use useRef to store an interval ID' },
    nivel: 'avanzado',
    tiempo: '30 min',
    concepto: 'useRef',
  },

  // useMemo/useCallback (3 ejercicios)
  {
    id: '35',
    titulo: { es: 'useMemo básico', ca: 'useMemo bàsic', en: 'useMemo basic' },
    descripcion: { es: 'Usa useMemo para calcular un valor costoso', ca: 'Fes servir useMemo per calcular un valor costós', en: 'Use useMemo to calculate an expensive value' },
    nivel: 'avanzado',
    tiempo: '30 min',
    concepto: 'useMemo/useCallback',
  },
  {
    id: '36',
    titulo: { es: 'useCallback básico', ca: 'useCallback bàsic', en: 'useCallback basic' },
    descripcion: { es: 'Usa useCallback para memoizar una función', ca: 'Fes servir useCallback per memoitzar una funció', en: 'Use useCallback to memoize a function' },
    nivel: 'avanzado',
    tiempo: '30 min',
    concepto: 'useMemo/useCallback',
  },
  {
    id: '37',
    titulo: { es: 'Optimización render', ca: 'Optimització render', en: 'Render optimization' },
    descripcion: { es: 'Optimiza los renders usando useMemo y useCallback', ca: 'Optimitza els renders fent servir useMemo i useCallback', en: 'Optimize renders using useMemo and useCallback' },
    nivel: 'avanzado',
    tiempo: '40 min',
    concepto: 'useMemo/useCallback',
  },

  // Context API (3 ejercicios)
  {
    id: '38',
    titulo: { es: 'Context básico', ca: 'Context bàsic', en: 'Basic context' },
    descripcion: { es: 'Crea un ThemeContext y provee un valor', ca: 'Crea un ThemeContext i proveeix un valor', en: 'Create a ThemeContext and provide a value' },
    nivel: 'intermedio',
    tiempo: '30 min',
    concepto: 'Context API',
  },
  {
    id: '39',
    titulo: { es: 'Context con múltiples valores', ca: 'Context amb múltiples valors', en: 'Context with multiple values' },
    descripcion: { es: 'Crea un contexto que provea estado y funciones', ca: 'Crea un context que proveeix estat i funcions', en: 'Create a context that provides state and functions' },
    nivel: 'avanzado',
    tiempo: '35 min',
    concepto: 'Context API',
  },
  {
    id: '40',
    titulo: { es: 'Multiple contexts', ca: 'Múltiples contexts', en: 'Multiple contexts' },
    descripcion: { es: 'Anida múltiples context providers', ca: 'Aniu múltiples context providers', en: 'Nest multiple context providers' },
    nivel: 'avanzado',
    tiempo: '40 min',
    concepto: 'Context API',
  },
];

export default function ListaEjerciciosPage() {
  const { isDark, language, t } = useTheme();
  const [filtroNivel, setFiltroNivel] = useState<string>('todos');
  const [openConcepts, setOpenConcepts] = useState<Record<string, boolean>>({});

  // Agrupar ejercicios por concepto
  const conceptos = [...new Set(ejerciciosData.map(e => e.concepto))];

  const toggleConcept = (concepto: string) => {
    setOpenConcepts(prev => ({
      ...prev,
      [concepto]: !prev[concepto]
    }));
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'básico': return isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800';
      case 'intermedio': return isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'avanzado': return isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getConceptIcon = (concepto: string) => {
    const isOpen = openConcepts[concepto];
    return (
      <svg 
        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.listaEjercicios || 'Lista de Ejercicios'}
        </h1>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          {language === 'es' ? 'Todos los ejercicios disponibles' : language === 'ca' ? 'Tots els exercicis disponibles' : 'All available exercises'}
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {['todos', 'básico', 'intermedio', 'avanzado'].map((nivel) => (
          <button
            key={nivel}
            onClick={() => setFiltroNivel(nivel)}
            className={`px-4 py-2 rounded-lg capitalize transition ${
              filtroNivel === nivel
                ? 'bg-blue-600 text-white'
                : isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {nivel}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {conceptos.map((concepto) => {
          // Filtrar ejercicios de este concepto por nivel
          const ejerciciosDelConcepto = ejerciciosData.filter(e => 
            e.concepto === concepto && (filtroNivel === 'todos' || e.nivel === filtroNivel)
          );

          // Si no hay ejercicios después de filtrar, no mostrar este concepto
          if (ejerciciosDelConcepto.length === 0) return null;

          const isOpen = openConcepts[concepto];

          return (
            <div 
              key={concepto}
              className={`border rounded-xl overflow-hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <button
                onClick={() => toggleConcept(concepto)}
                className={`w-full flex items-center justify-between p-4 transition ${
                  isOpen 
                    ? (isDark ? 'bg-gray-700' : 'bg-gray-50') 
                    : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
                }`}
              >
                <div className="flex items-center gap-3">
                  {getConceptIcon(concepto)}
                  <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {concepto}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded-full ${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {ejerciciosDelConcepto.length} {language === 'es' ? 'ejercicios' : language === 'ca' ? 'exercicis' : 'exercises'}
                  </span>
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {isOpen ? (language === 'es' ? 'Cerrar' : language === 'ca' ? 'Tancar' : 'Close') : (language === 'es' ? 'Abrir' : language === 'ca' ? 'Obrir' : 'Open')}
                </span>
              </button>

              {isOpen && (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {ejerciciosDelConcepto.map((ejercicio) => (
                    <div
                      key={ejercicio.id}
                      className={`p-4 flex items-center justify-between transition hover:bg-gray-50 dark:hover:bg-gray-700`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-sm font-mono ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            #{ejercicio.id}
                          </span>
                          <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {ejercicio.titulo[language]}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNivelColor(ejercicio.nivel)}`}>
                            {ejercicio.nivel}
                          </span>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} ml-8`}>
                          {ejercicio.descripcion[language]}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          ⏱ {ejercicio.tiempo}
                        </span>
                        <button
                          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                          onClick={() => window.location.href = '/teacher/ejercicios'}
                        >
                          {language === 'es' ? 'Ver' : language === 'ca' ? 'Veure' : 'View'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {language === 'es' ? `Mostrando ejercicios de ${Object.keys(openConcepts).filter(k => openConcepts[k]).length} conceptos` : 
         language === 'ca' ? `Mostrant exercicis de ${Object.keys(openConcepts).filter(k => openConcepts[k]).length} conceptes` :
         `Showing exercises from ${Object.keys(openConcepts).filter(k => openConcepts[k]).length} concepts`}
      </div>
    </div>
  );
}
