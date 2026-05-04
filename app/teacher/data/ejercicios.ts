export interface Ejercicio {
  id: string;
  titulo: Record<string, string>;
  descripcion: Record<string, string>;
  codigoInicio: string;
  solucion: string;
  pista: Record<string, string>;
  nivel: 'básico' | 'intermedio' | 'avanzado';
  categoria: string;
}

export const ejerciciosReact: Ejercicio[] = [
  {
    id: '1',
    titulo: { es: 'JSX Básico', ca: 'JSX Bàsic', en: 'Basic JSX' },
    descripcion: { es: 'Crea un componente que renderice un h1 con "Hola Mundo"', ca: 'Crea un component que renderitzi un h1 amb "Hola Món"', en: 'Create a component that renders an h1 with "Hello World"' },
    codigoInicio: `function HolaMundo() {
  // Tu código aquí
}`,
    solucion: `function HolaMundo() {
  return <h1>Hola Mundo</h1>;
}`,
    pista: { es: 'Usa la sintaxis JSX para retornar elementos HTML', ca: 'Fes servir la sintaxi JSX per retornar elements HTML', en: 'Use JSX syntax to return HTML elements' },
    nivel: 'básico',
    categoria: 'JSX'
  },
  {
    id: '2',
    titulo: { es: 'Componente Funcional', ca: 'Component Funcional', en: 'Functional Component' },
    descripcion: { es: 'Crea un componente funcional llamado Saludo que retorne un h2', ca: 'Crea un component funcional anomenat Saludo que retorni un h2', en: 'Create a functional component named Saludo that returns an h2' },
    codigoInicio: `// Crea el componente aquí

function App() {
  return <Saludo />;
}`,
    solucion: `function Saludo() {
  return <h2>Hola desde React</h2>;
}

function App() {
  return <Saludo />;
}`,
    pista: { es: 'Un componente es una función que retorna JSX', ca: 'Un component és una funció que retorna JSX', en: 'A component is a function that returns JSX' },
    nivel: 'básico',
    categoria: 'Componentes'
  },
  {
    id: '3',
    titulo: { es: 'Importar y Exportar', ca: 'Importar i Exportar', en: 'Import and Export' },
    descripcion: { es: 'Importa el componente Button del archivo ./Button y úsalo', ca: 'Importa el component Button del fitxer ./Button i úsa-lo', en: 'Import the Button component from ./Button and use it' },
    codigoInicio: `// Importa aquí

function App() {
  return <Button>Click me</Button>;
}`,
    solucion: `import { Button } from './Button';

function App() {
  return <Button>Click me</Button>;
}`,
    pista: { es: 'Usa import para traer el componente exportado', ca: 'Fes servir import per portar el component exportat', en: 'Use import to bring the exported component' },
    nivel: 'básico',
    categoria: 'Componentes'
  },
  {
    id: '4',
    titulo: { es: 'Props Básicas', ca: 'Props Bàsiques', en: 'Basic Props' },
    descripcion: { es: 'Recibe una prop "nombre" y muestra "Hola, {nombre}!"', ca: 'Rep una prop "nombre" i mostra "Hola, {nombre}!"', en: 'Receive a "name" prop and show "Hola, {name}!"' },
    codigoInicio: `function Saludo() {
  // Tu código aquí
}

function App() {
  return <Saludo nombre="Juan" />;
}`,
    solucion: `function Saludo({ nombre }) {
  return <h1>Hola, {nombre}!</h1>;
}

function App() {
  return <Saludo nombre="Juan" />;
}`,
    pista: { es: 'Desestructura las props en los parámetros de la función', ca: 'Desestructura les props als paràmetres de la funció', en: 'Destructure props in the function parameters' },
    nivel: 'básico',
    categoria: 'Props'
  },
  {
    id: '5',
    titulo: { es: 'Children Props', ca: 'Children Props', en: 'Children Props' },
    descripcion: { es: 'Crea un componente Card que reciba children y los renderice', ca: 'Crea un component Card que rebi children i els renderitzi', en: 'Create a Card component that receives children and renders them' },
    codigoInicio: `function Card() {
  // Tu código aquí
}

function App() {
  return (
    <Card>
      <p>Contenido de la tarjeta</p>
    </Card>
  );
}`,
    solucion: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <p>Contenido de la tarjeta</p>
    </Card>
  );
}`,
    pista: { es: 'React pasa automáticamente children como prop', ca: 'React passa automàticament children com a prop', en: 'React automatically passes children as a prop' },
    nivel: 'básico',
    categoria: 'Props'
  },
  {
    id: '6',
    titulo: { es: 'useState Básico', ca: 'useState Bàsic', en: 'Basic useState' },
    descripcion: { es: 'Crea un contador que incremente en 1 al hacer click', ca: 'Crea un comptador que incrementi en 1 al fer click', en: 'Create a counter that increments by 1 on click' },
    codigoInicio: `import { useState } from 'react';

function Contador() {
  // Tu código aquí
}`,
    solucion: `import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
    pista: { es: 'Usa useState para crear el estado del contador', ca: 'Fes servir useState per crear l\'estat del comptador', en: 'Use useState to create the counter state' },
    nivel: 'básico',
    categoria: 'Estado'
  },
  {
    id: '7',
    titulo: { es: 'useState con Objeto', ca: 'useState amb Objecte', en: 'useState with Object' },
    descripcion: { es: 'Maneja el estado de un formulario con un objeto usando useState', ca: 'Gestiona l\'estat d\'un formulari amb un objecte usant useState', en: 'Manage form state with an object using useState' },
    codigoInicio: `import { useState } from 'react';

function Formulario() {
  // Tu código aquí
}`,
    solucion: `import { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input name="nombre" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
    </form>
  );
}`,
    pista: { es: 'Usa spread operator para mantener las propiedades anteriores', ca: 'Fes servir spread operator per mantenir les propietats anteriors', en: 'Use spread operator to keep previous properties' },
    nivel: 'básico',
    categoria: 'Estado'
  },
  {
    id: '8',
    titulo: { es: 'Renderizado Condicional', ca: 'Renderitzat Condicional', en: 'Conditional Rendering' },
    descripcion: { es: 'Muestra "Cargando..." si isLoading es true, o el contenido si es false', ca: 'Mostra "Carregant..." si isLoading és true, o el contingut si és false', en: 'Show "Loading..." if isLoading is true, or content if false' },
    codigoInicio: `function MiComponente({ isLoading, contenido }) {
  // Tu código aquí
}`,
    solucion: `function MiComponente({ isLoading, contenido }) {
  if (isLoading) {
    return <p>Cargando...</p>;
  }
  return <div>{contenido}</div>;
}`,
    pista: { es: 'Usa un if para decidir qué renderizar', ca: 'Fes servir un if per decidir què renderitzar', en: 'Use an if to decide what to render' },
    nivel: 'básico',
    categoria: 'Renderizado'
  },
  {
    id: '9',
    titulo: { es: 'Listas y Keys', ca: 'Llistes i Keys', en: 'Lists and Keys' },
    descripcion: { es: 'Renderiza una lista de nombres usando map y asigna keys únicas', ca: 'Renderitza una llista de noms usant map i assigna keys úniques', en: 'Render a list of names using map and assign unique keys' },
    codigoInicio: `function ListaNombres() {
  const nombres = ['Ana', 'Juan', 'Pedro'];
  // Tu código aquí
}`,
    solucion: `function ListaNombres() {
  const nombres = ['Ana', 'Juan', 'Pedro'];
  
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
}`,
    pista: { es: 'Usa map para iterar y no olvides la prop key', ca: 'Fes servir map per iterar i no oblidis la prop key', en: 'Use map to iterate and don\'t forget the key prop' },
    nivel: 'básico',
    categoria: 'Renderizado'
  },
  {
    id: '10',
    titulo: { es: 'Eventos onClick', ca: 'Events onClick', en: 'onClick Events' },
    descripcion: { es: 'Maneja el evento click de un botón y muestra un mensaje', ca: 'Gestiona l\'esdeveniment click d\'un botó i mostra un missatge', en: 'Handle button click event and show a message' },
    codigoInicio: `function BotonMensaje() {
  // Tu código aquí
}`,
    solucion: `function BotonMensaje() {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return <button onClick={handleClick}>Click me</button>;
}`,
    pista: { es: 'Los eventos en React reciben una función, no se ejecutan directamente', ca: 'Els esdeveniments en React reben una funció, no s\'executen directament', en: 'Events in React receive a function, not executed directly' },
    nivel: 'básico',
    categoria: 'Eventos'
  },
  {
    id: '11',
    titulo: { es: 'Formulario Controlado', ca: 'Formulari Controlat', en: 'Controlled Form' },
    descripcion: { es: 'Crea un input controlado con useState que muestre lo que escribes', ca: 'Crea un input controlat amb useState que mostri el que escrius', en: 'Create a controlled input with useState that shows what you type' },
    codigoInicio: `import { useState } from 'react';

function InputControlado() {
  // Tu código aquí
}`,
    solucion: `import { useState } from 'react';

function InputControlado() {
  const [valor, setValor] = useState('');

  return (
    <div>
      <input 
        value={valor} 
        onChange={(e) => setValor(e.target.value)} 
      />
      <p>Escribe: {valor}</p>
    </div>
  );
}`,
    pista: { es: 'El value del input debe estar conectado al estado', ca: 'El value de l\'input ha d\'estar connectat a l\'estat', en: 'The input value must be connected to the state' },
    nivel: 'intermedio',
    categoria: 'Formularios'
  },
  {
    id: '12',
    titulo: { es: 'useEffect Básico', ca: 'useEffect Bàsic', en: 'Basic useEffect' },
    descripcion: { es: 'Ejecuta un console.log cuando el componente se monta', ca: 'Executa un console.log quan el component es munta', en: 'Run a console.log when the component mounts' },
    codigoInicio: `import { useEffect } from 'react';

function MiComponente() {
  // Tu código aquí
  
  return <div>Mi Componente</div>;
}`,
    solucion: `import { useEffect } from 'react';

function MiComponente() {
  useEffect(() => {
    console.log('Componente montado');
  }, []);

  return <div>Mi Componente</div>;
}`,
    pista: { es: 'Usa useEffect con un array de dependencias vacío', ca: 'Fes servir useEffect amb un array de dependències buit', en: 'Use useEffect with an empty dependencies array' },
    nivel: 'intermedio',
    categoria: 'Efectos'
  },
  {
    id: '13',
    titulo: { es: 'useEffect con Dependencias', ca: 'useEffect amb Dependències', en: 'useEffect with Dependencies' },
    descripcion: { es: 'Ejecuta un efecto cada vez que cambia el valor de count', ca: 'Executa un efecte cada vegada que canvia el valor de count', en: 'Run an effect every time count value changes' },
    codigoInicio: `import { useState, useEffect } from 'react';

function ContadorEfecto() {
  const [count, setCount] = useState(0);
  // Tu código aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function ContadorEfecto() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('El contador cambió a:', count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
    pista: { es: 'Pon count en el array de dependencias', ca: 'Posa count a l\'array de dependències', en: 'Put count in the dependencies array' },
    nivel: 'intermedio',
    categoria: 'Efectos'
  },
  {
    id: '14',
    titulo: { es: 'Fetch de Datos', ca: 'Fetch de Dades', en: 'Data Fetching' },
    descripcion: { es: 'Obtén datos de una API y guárdalos en el estado', ca: 'Obtén dades d\'una API i guarda-les a l\'estat', en: 'Fetch data from an API and save it in state' },
    codigoInicio: `import { useState, useEffect } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  // Tu código aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    pista: { es: 'Usa fetch dentro de useEffect y actualiza el estado con los datos', ca: 'Fes servir fetch dins de useEffect i actualitza l\'estat amb les dades', en: 'Use fetch inside useEffect and update state with data' },
    nivel: 'intermedio',
    categoria: 'Efectos'
  },
  {
    id: '15',
    titulo: { es: 'useRef Básico', ca: 'useRef Bàsic', en: 'Basic useRef' },
    descripcion: { es: 'Accede a un elemento DOM input usando useRef para hacer focus', ca: 'Accedeix a un element DOM input usant useRef per fer focus', en: 'Access a DOM input element using useRef to focus it' },
    codigoInicio: `import { useRef } from 'react';

function InputFocus() {
  // Tu código aquí
}`,
    solucion: `import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Hacer Focus</button>
    </div>
  );
}`,
    pista: { es: 'Asigna la ref al elemento con el atributo ref', ca: 'Assigna la ref a l\'element amb l\'atribut ref', en: 'Assign the ref to the element with the ref attribute' },
    nivel: 'intermedio',
    categoria: 'Referencias'
  },
  {
    id: '16',
    titulo: { es: 'Context API Básico', ca: 'Context API Bàsic', en: 'Basic Context API' },
    descripcion: { es: 'Crea un contexto para el tema y provee datos a componentes', ca: 'Crea un context per al tema i proveeix dades als components', en: 'Create a theme context and provide data to components' },
    codigoInicio: `import { createContext, useContext } from 'react';

// Crea el contexto aquí

function BotonTema() {
  // Tu código aquí
}`,
    solucion: `import { createContext, useContext } from 'react';

const TemaContext = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}

function BotonTema() {
  const { tema, setTema } = useContext(TemaContext);
  
  return (
    <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
      Tema: {tema}
    </button>
  );
}`,
    pista: { es: 'Usa createContext, Provider y useContext', ca: 'Fes servir createContext, Provider i useContext', en: 'Use createContext, Provider, and useContext' },
    nivel: 'intermedio',
    categoria: 'Contexto'
  },
  {
    id: '17',
    titulo: { es: 'Custom Hook', ca: 'Custom Hook', en: 'Custom Hook' },
    descripcion: { es: 'Crea un hook personalizado useCounter que maneje un contador', ca: 'Crea un hook personalitzat useCounter que gestioni un comptador', en: 'Create a custom hook useCounter that manages a counter' },
    codigoInicio: `import { useState } from 'react';

// Crea el hook aquí

function Contador() {
  // Usa el hook aquí
}`,
    solucion: `import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function Contador() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
    pista: { es: 'Un custom hook es una función que empieza con "use" y puede usar otros hooks', ca: 'Un custom hook és una funció que comença amb "use" i pot usar altres hooks', en: 'A custom hook is a function starting with "use" that can use other hooks' },
    nivel: 'intermedio',
    categoria: 'Hooks'
  },
  {
    id: '18',
    titulo: { es: 'useEffect Cleanup', ca: 'useEffect Cleanup', en: 'useEffect Cleanup' },
    descripcion: { es: 'Limpia una suscripción o temporizador en useEffect', ca: 'Neteja una subscripció o temporitzador en useEffect', en: 'Clean up a subscription or timer in useEffect' },
    codigoInicio: `import { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  // Tu código aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Segundos: {segundos}</p>;
}`,
    pista: { es: 'La función de retorno en useEffect se ejecuta al desmontar', ca: 'La funció de retorn en useEffect s\'executa al desmuntar', en: 'The return function in useEffect runs on unmount' },
    nivel: 'avanzado',
    categoria: 'Efectos'
  },
  {
    id: '19',
    titulo: { es: 'React.memo', ca: 'React.memo', en: 'React.memo' },
    descripcion: { es: 'Optimiza un componente con React.memo para evitar renders innecesarios', ca: 'Optimitza un component amb React.memo per evitar renders innecessaris', en: 'Optimize a component with React.memo to avoid unnecessary renders' },
    codigoInicio: `import { useState } from 'react';

// Aplica React.memo aquí
function ContadorHijo({ valor }) {
  return <p>Valor: {valor}</p>;
}

function Padre() {
  const [count, setCount] = useState(0);
  const [otro, setOtro] = useState(0);
  
  return (
    <div>
      <ContadorHijo valor={count} />
      <button onClick={() => setOtro(otro + 1)}>Otro: {otro}</button>
    </div>
  );
}`,
    solucion: `import { useState } from 'react';

const ContadorHijo = React.memo(({ valor }) => {
  return <p>Valor: {valor}</p>;
});

function Padre() {
  const [count, setCount] = useState(0);
  const [otro, setOtro] = useState(0);
  
  return (
    <div>
      <ContadorHijo valor={count} />
      <button onClick={() => setOtro(otro + 1)}>Otro: {otro}</button>
    </div>
  );
}`,
    pista: { es: 'React.memo envuelve al componente para memorizarlo', ca: 'React.memo embolcalla el component per memoritzar-lo', en: 'React.memo wraps the component to memoize it' },
    nivel: 'avanzado',
    categoria: 'Optimización'
  },
  {
    id: '20',
    titulo: { es: 'useCallback', ca: 'useCallback', en: 'useCallback' },
    descripcion: { es: 'Memoriza una función con useCallback para evitar que se recree', ca: 'Memoritza una funció amb useCallback per evitar que es recrei', en: 'Memoize a function with useCallback to avoid recreation' },
    codigoInicio: `import { useState, useCallback } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  // Tu código aquí
}`,
    solucion: `import { useState, useCallback } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = useCallback(() => {
    setTareas(prev => [...prev, \`Tarea \${prev.length + 1}\`]);
  }, []);

  return (
    <div>
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, i) => (
          <li key={i}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}`,
    pista: { es: 'useCallback recibe la función y las dependencias como argumentos', ca: 'useCallback rep la funció i les dependències com a arguments', en: 'useCallback receives the function and dependencies as arguments' },
    nivel: 'avanzado',
    categoria: 'Optimización'
  },
  {
    id: '21',
    titulo: { es: 'useMemo', ca: 'useMemo', en: 'useMemo' },
    descripcion: { es: 'Memoiza un cálculo costoso usando useMemo', ca: 'Memoritza un càlcul costós usant useMemo', en: 'Memoize an expensive calculation using useMemo' },
    codigoInicio: `import { useMemo, useState } from 'react';

function CalculoCostoso() {
  const [numero, setNumero] = useState(1);
  // Tu código aquí: calcula el factorial
}`,
    solucion: `import { useMemo, useState } from 'react';

function CalculoCostoso() {
  const [numero, setNumero] = useState(1);

  const factorial = useMemo(() => {
    let result = 1;
    for (let i = 2; i <= numero; i++) {
      result *= i;
    }
    return result;
  }, [numero]);

  return (
    <div>
      <input 
        type="number" 
        value={numero} 
        onChange={(e) => setNumero(Number(e.target.value))} 
      />
      <p>Factorial: {factorial}</p>
    </div>
  );
}`,
    pista: { es: 'useMemo recibe una función de cálculo y un array de dependencias', ca: 'useMemo rep una funció de càlcul i un array de dependències', en: 'useMemo receives a calculation function and a dependencies array' },
    nivel: 'avanzado',
    categoria: 'Optimización'
  },
  {
    id: '22',
    titulo: { es: 'Render Props', ca: 'Render Props', en: 'Render Props' },
    descripcion: { es: 'Crea un componente que usa render props para compartir lógica', ca: 'Crea un component que usa render props per compartir lògica', en: 'Create a component that uses render props to share logic' },
    codigoInicio: `function ContadorRenderProps({ render }) {
  // Tu código aquí
}

function App() {
  return (
    <ContadorRenderProps
      render={(count, increment) => (
        <button onClick={increment}>{count}</button>
      )}
    />
  );
}`,
    solucion: `function ContadorRenderProps({ render }) {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  
  return render(count, increment);
}

function App() {
  return (
    <ContadorRenderProps
      render={(count, increment) => (
        <button onClick={increment}>{count}</button>
      )}
    />
  );
}`,
    pista: { es: 'La prop render es una función que recibe datos y retorna JSX', ca: 'La prop render és una funció que rep dades i retorna JSX', en: 'The render prop is a function that receives data and returns JSX' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '23',
    titulo: { es: 'Higher-Order Component (HOC)', ca: 'Higher-Order Component (HOC)', en: 'Higher-Order Component (HOC)' },
    descripcion: { es: 'Crea un HOC que añada props de logging a un componente', ca: 'Crea un HOC que afegeixi props de logging a un component', en: 'Create a HOC that adds logging props to a component' },
    codigoInicio: `// Crea el HOC withLogging aquí

function Saludo({ nombre, log }) {
  return (
    <h1 onClick={() => log('click')}>Hola {nombre}</h1>
  );
}`,
    solucion: `import { useState } from 'react';

function withLogging(WrappedComponent) {
  return function(props) {
    const [logs, setLogs] = useState([]);
    
    const log = (evento) => {
      const nuevoLog = \`\${evento} en \${new Date().toISOString()}\`;
      setLogs([...logs, nuevoLog]);
      console.log(nuevoLog);
    };
    
    return <WrappedComponent {...props} log={log} />;
  };
}

function Saludo({ nombre, log }) {
  return (
    <h1 onClick={() => log('click')}>Hola {nombre}</h1>
  );
}

const SaludoConLogging = withLogging(Saludo);`,
    pista: { es: 'Un HOC es una función que recibe un componente y retorna uno nuevo', ca: 'Un HOC és una funció que rep un component i retorna un de nou', en: 'A HOC is a function that receives a component and returns a new one' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '24',
    titulo: { es: 'Error Boundary', ca: 'Error Boundary', en: 'Error Boundary' },
    descripcion: { es: 'Crea un Error Boundary usando componentes de clase', ca: 'Crea un Error Boundary usant components de classe', en: 'Create an Error Boundary using class components' },
    codigoInicio: `// Crea el ErrorBoundary aquí

function App() {
  return (
    <ErrorBoundary>
      <ComponenteQueFalla />
    </ErrorBoundary>
  );
}`,
    solucion: `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ComponenteQueFalla />
    </ErrorBoundary>
  );
}`,
    pista: { es: 'Los Error Boundaries usan componentes de clase con getDerivedStateFromError', ca: 'Els Error Boundaries usen components de classe amb getDerivedStateFromError', en: 'Error Boundaries use class components with getDerivedStateFromError' },
    nivel: 'avanzado',
    categoria: 'Manejo de Errores'
  },
  {
    id: '25',
    titulo: { es: 'Portal', ca: 'Portal', en: 'Portal' },
    descripcion: { es: 'Usa React Portal para renderizar un modal fuera del árbol del componente', ca: 'Fes servir React Portal per renderitzar un modal fora de l\'arbre del component', en: 'Use React Portal to render a modal outside the component tree' },
    codigoInicio: `import { useState } from 'react';
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  // Tu código aquí
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Contenido del Modal</h2>
      </Modal>
    </div>
  );
}`,
    solucion: `import { useState } from 'react';
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        {children}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Contenido del Modal</h2>
      </Modal>
    </div>
  );
}`,
    pista: { es: 'createPortal recibe el JSX y el elemento DOM donde renderizar', ca: 'createPortal rep el JSX i l\'element DOM on renderitzar', en: 'createPortal receives JSX and the DOM element to render into' },
    nivel: 'avanzado',
    categoria: 'Portales'
  },
  {
    id: '26',
    titulo: { es: 'Suspense y Lazy', ca: 'Suspense i Lazy', en: 'Suspense and Lazy' },
    descripcion: { es: 'Implementa code splitting con React.lazy y Suspense', ca: 'Implementa code splitting amb React.lazy i Suspense', en: 'Implement code splitting with React.lazy and Suspense' },
    codigoInicio: `import { Suspense } from 'react';

// Tu código aquí para importar lazy

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      {/* Componente lazy aquí */}
    </Suspense>
  );
}`,
    solucion: `import { lazy, Suspense } from 'react';

const ComponentePesado = lazy(() => import('./ComponentePesado'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ComponentePesado />
    </Suspense>
  );
}`,
    pista: { es: 'React.lazy recibe una función que retorna una importación dinámica', ca: 'React.lazy rep una funció que retorna una importació dinàmica', en: 'React.lazy receives a function that returns a dynamic import' },
    nivel: 'avanzado',
    categoria: 'Performance'
  },
  {
    id: '27',
    titulo: { es: 'Custom Hook useLocalStorage', ca: 'Custom Hook useLocalStorage', en: 'Custom Hook useLocalStorage' },
    descripcion: { es: 'Crea un hook personalizado para persistir estado en localStorage', ca: 'Crea un hook personalitzat per persistir estat en localStorage', en: 'Create a custom hook to persist state in localStorage' },
    codigoInicio: `// Crea useLocalStorage aquí

function App() {
  // Usa useLocalStorage aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [nombre, setNombre] = useLocalStorage('nombre', '');
  
  return (
    <input 
      value={nombre} 
      onChange={(e) => setNombre(e.target.value)} 
    />
  );
}`,
    pista: { es: 'Usa useState con función inicial y useEffect para sincronizar', ca: 'Fes servir useState amb funció inicial i useEffect per sincronitzar', en: 'Use useState with initial function and useEffect to sync' },
    nivel: 'avanzado',
    categoria: 'Hooks'
  },
  {
    id: '28',
    titulo: { es: 'Custom Hook useFetch', ca: 'Custom Hook useFetch', en: 'Custom Hook useFetch' },
    descripcion: { es: 'Crea un hook personalizado para hacer fetch de datos', ca: 'Crea un hook personalitzat per fer fetch de dades', en: 'Create a custom hook for fetching data' },
    codigoInicio: `// Crea useFetch aquí

function Usuarios() {
  // Usa useFetch aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function Usuarios() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;
  
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
    pista: { es: 'El hook debe manejar los estados de loading, data y error', ca: 'El hook ha de gestionar els estats de loading, data i error', en: 'The hook must handle loading, data, and error states' },
    nivel: 'avanzado',
    categoria: 'Hooks'
  },
  {
    id: '29',
    titulo: { es: 'Compound Components', ca: 'Compound Components', en: 'Compound Components' },
    descripcion: { es: 'Crea un patrón de Compound Components para un Accordion', ca: 'Crea un patró de Compound Components per a un Accordion', en: 'Create a Compound Components pattern for an Accordion' },
    codigoInicio: `// Crea el patrón de Compound Components aquí

function App() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>Sección 1</Accordion.Header>
        <Accordion.Panel>Contenido 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}`,
    solucion: `import { useState, createContext, useContext } from 'react';

const AccordionContext = createContext();

function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Item = function({ index, children }) {
  return <div>{children}</div>;
};

Accordion.Header = function({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(AccordionContext);
  
  return (
    <h3 onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
      {children}
    </h3>
  );
};

Accordion.Panel = function({ index, children }) {
  const { activeIndex } = useContext(AccordionContext);
  
  if (activeIndex !== index) return null;
  return <div>{children}</div>;
};`,
    pista: { es: 'Asigna subcomponentes como propiedades del componente principal', ca: 'Assigna subcomponents com a propietats del component principal', en: 'Assign subcomponents as properties of the main component' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '30',
    titulo: { es: 'Ref Forwarding', ca: 'Ref Forwarding', en: 'Ref Forwarding' },
    descripcion: { es: 'Usa forwardRef para pasar refs a componentes hijos', ca: 'Fes servir forwardRef per passar refs a components fills', en: 'Use forwardRef to pass refs to child components' },
    codigoInicio: `import { useRef } from 'react';

// Crea FancyInput con forwardRef aquí

function App() {
  const inputRef = useRef();
  
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}`,
    solucion: `import { useRef, forwardRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      style={{ border: '2px solid blue', padding: '8px' }}
      {...props}
    />
  );
});

function App() {
  const inputRef = useRef();
  
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}`,
    pista: { es: 'forwardRef recibe una función con (props, ref) como argumentos', ca: 'forwardRef rep una funció amb (props, ref) com a arguments', en: 'forwardRef receives a function with (props, ref) as arguments' },
    nivel: 'avanzado',
    categoria: 'Referencias'
  },
  {
    id: '31',
    titulo: { es: 'State Lifting', ca: 'State Lifting', en: 'State Lifting' },
    descripcion: { es: 'Eleva el estado a un componente padre para compartir datos', ca: 'Eleva l\'estat a un component pare per compartir dades', en: 'Lift state up to a parent component to share data' },
    codigoInicio: `function TemperatureInput({ scale }) {
  // Tu código aquí
}

function Calculator() {
  // Tu código aquí: eleva el estado
}`,
    solucion: `function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <input
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder={scale === 'c' ? 'Celsius' : 'Fahrenheit'}
    />
  );
}

function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');
  
  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={scale === 'c' ? temperature : ''}
        onTemperatureChange={(val) => { setTemperature(val); setScale('c'); }}
      />
      <TemperatureInput
        scale="f"
        temperature={scale === 'f' ? temperature : ''}
        onTemperatureChange={(val) => { setTemperature(val); setScale('f'); }}
      />
    </div>
  );
}`,
    pista: { es: 'El estado debe vivir en el componente padre, no en los hijos', ca: 'L\'estat ha de viure al component pare, no als fills', en: 'State should live in the parent component, not in children' },
    nivel: 'intermedio',
    categoria: 'Estado'
  },
  {
    id: '32',
    titulo: { es: 'Prop Drilling Solution', ca: 'Prop Drilling Solution', en: 'Prop Drilling Solution' },
    descripcion: { es: 'Usa Context para evitar pasar props manualmente por muchos niveles', ca: 'Fes servir Context per evitar passar props manualment per molts nivells', en: 'Use Context to avoid manually passing props through many levels' },
    codigoInicio: `// Crea un contexto para el usuario y úsalo

function App() {
  return <Nivel1 />;
}

function Nivel1() {
  return <Nivel2 />;
}

function Nivel2() {
  return <Nivel3 />;
}

function Nivel3() {
  // Muestra el nombre del usuario aquí
}`,
    solucion: `import { createContext, useContext } from 'react';

const UsuarioContext = createContext();

function App() {
  return (
    <UsuarioContext.Provider value={{ nombre: 'Juan', rol: 'admin' }}>
      <Nivel1 />
    </UsuarioContext.Provider>
  );
}

function Nivel1() {
  return <Nivel2 />;
}

function Nivel2() {
  return <Nivel3 />;
}

function Nivel3() {
  const usuario = useContext(UsuarioContext);
  return <p>Usuario: {usuario.nombre}</p>;
}`,
    pista: { es: 'Context permite acceder a datos sin pasar props manualmente', ca: 'Context permet accedir a dades sense passar props manualment', en: 'Context allows accessing data without manually passing props' },
    nivel: 'intermedio',
    categoria: 'Contexto'
  },
  {
    id: '33',
    titulo: { es: 'Reducer Pattern', ca: 'Reducer Pattern', en: 'Reducer Pattern' },
    descripcion: { es: 'Usa useReducer para manejar estado complejo', ca: 'Fes servir useReducer per gestionar estat complex', en: 'Use useReducer to handle complex state' },
    codigoInicio: `import { useReducer } from 'react';

// Define el reducer aquí

function ContadorReducer() {
  // Tu código aquí
}`,
    solucion: `import { useReducer } from 'react';

function contadorReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function ContadorReducer() {
  const [state, dispatch] = useReducer(contadorReducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`,
    pista: { es: 'useReducer recibe una función reducer y un estado inicial', ca: 'useReducer rep una funció reducer i un estat inicial', en: 'useReducer receives a reducer function and initial state' },
    nivel: 'avanzado',
    categoria: 'Estado'
  },
  {
    id: '34',
    titulo: { es: 'Controlled vs Uncontrolled', ca: 'Controlled vs Uncontrolled', en: 'Controlled vs Uncontrolled' },
    descripcion: { es: 'Crea un formulario con inputs controlados y no controlados', ca: 'Crea un formulari amb inputs controlats i no controlats', en: 'Create a form with controlled and uncontrolled inputs' },
    codigoInicio: `import { useState, useRef } from 'react';

function FormularioMixto() {
  // Input controlado: nombre
  // Input no controlado: email (usa useRef)
}`,
    solucion: `import { useState, useRef } from 'react';

function FormularioMixto() {
  const [nombre, setNombre] = useState('');
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log({ nombre, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre (controlado)"
      />
      <input
        ref={emailRef}
        placeholder="Email (no controlado)"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}`,
    pista: { es: 'Los inputs controlados usan value+onChange, los no controlados usan ref', ca: 'Els inputs controlats usen value+onChange, els no controlats usen ref', en: 'Controlled inputs use value+onChange, uncontrolled use ref' },
    nivel: 'intermedio',
    categoria: 'Formularios'
  },
  {
    id: '35',
    titulo: { es: 'Event Bus Personalizado', ca: 'Event Bus Personalitzat', en: 'Custom Event Bus' },
    descripcion: { es: 'Crea un sistema de eventos personalizado para comunicar componentes', ca: 'Crea un sistema d\'esdeveniments personalitzat per comunicar components', en: 'Create a custom event system to communicate between components' },
    codigoInicio: `// Crea el eventBus aquí

function ComponenteA() {
  // Emite un evento
}

function ComponenteB() {
  // Escucha el evento
}`,
    solucion: `import { useEffect } from 'react';

const eventBus = {
  events: {},
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
};

function ComponenteA() {
  const handleClick = () => {
    eventBus.emit('mensaje', 'Hola desde A');
  };
  
  return <button onClick={handleClick}>Enviar mensaje</button>;
}

function ComponenteB() {
  useEffect(() => {
    const callback = (data) => console.log('Recibido:', data);
    eventBus.on('mensaje', callback);
  }, []);

  return <p>Componente B (escuchando eventos)</p>;
}`,
    pista: { es: 'Crea un objeto que almacene funciones callback por evento', ca: 'Crea un objecte que emmagatzemi funcions callback per esdeveniment', en: 'Create an object that stores callback functions by event' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '36',
    titulo: { es: 'Animaciones con useLayoutEffect', ca: 'Animacions amb useLayoutEffect', en: 'Animations with useLayoutEffect' },
    descripcion: { es: 'Usa useLayoutEffect para animaciones sin parpadeo', ca: 'Fes servir useLayoutEffect per animacions sense parpelleig', en: 'Use useLayoutEffect for flicker-free animations' },
    codigoInicio: `import { useLayoutEffect, useRef, useState } from 'react';

function AnimacionAncho() {
  const divRef = useRef();
  // Tu código aquí
}`,
    solucion: `import { useLayoutEffect, useRef, useState } from 'react';

function AnimacionAncho() {
  const divRef = useRef();
  const [width, setWidth] = useState(100);

  useLayoutEffect(() => {
    divRef.current.style.width = \`\${width}px\`;
    divRef.current.style.transition = 'width 0.3s';
  }, [width]);

  return (
    <div>
      <div
        ref={divRef}
        style={{ height: '50px', backgroundColor: 'blue' }}
      />
      <button onClick={() => setWidth(width + 50)}>
        Aumentar ancho
      </button>
    </div>
  );
}`,
    pista: { es: 'useLayoutEffect se ejecuta síncronamente después del render pero antes del paint', ca: 'useLayoutEffect s\'executa síncronament després del render però abans del paint', en: 'useLayoutEffect runs synchronously after render but before paint' },
    nivel: 'avanzado',
    categoria: 'Efectos'
  },
  {
    id: '37',
    titulo: { es: 'Polymorphic Components', ca: 'Polymorphic Components', en: 'Polymorphic Components' },
    descripcion: { es: 'Crea un componente que pueda renderizarse como diferentes elementos HTML', ca: 'Crea un component que pugui renderitzar-se com a diferents elements HTML', en: 'Create a component that can render as different HTML elements' },
    codigoInicio: `// Crea un componente Box que pueda ser div, button, etc.

function App() {
  return (
    <>
      <Box as="div">Soy un div</Box>
      <Box as="button">Soy un botón</Box>
    </>
  );
}`,
    solucion: `import { ElementType, ComponentProps } from 'react';

function Box<T extends ElementType = 'div'>({ as, children, ...props }: {
  as?: T;
} & ComponentProps<T>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}

function App() {
  return (
    <>
      <Box as="div" style={{ padding: '10px', background: 'lightblue' }}>
        Soy un div
      </Box>
      <Box as="button" onClick={() => alert('click')}>
        Soy un botón
      </Box>
    </>
  );
}`,
    pista: { es: 'Usa genéricos de TypeScript y la prop "as" para cambiar el elemento', ca: 'Fes servir genèrics de TypeScript i la prop "as" per canviar l\'element', en: 'Use TypeScript generics and the "as" prop to change the element' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '38',
    titulo: { es: 'React.Children y cloneElement', ca: 'React.Children i cloneElement', en: 'React.Children and cloneElement' },
    descripcion: { es: 'Usa React.Children y cloneElement para modificar los hijos', ca: 'Fes servir React.Children i cloneElement per modificar els fills', en: 'Use React.Children and cloneElement to modify children' },
    codigoInicio: `function RadioGroup({ children, value, onChange }) {
  // Tu código aquí: clona los hijos y añade props
}

function App() {
  return (
    <RadioGroup value="a" onChange={() => {}}>
      <input type="radio" value="a" />
      <input type="radio" value="b" />
    </RadioGroup>
  );
}`,
    solucion: `import { Children, cloneElement } from 'react';

function RadioGroup({ children, value, onChange }) {
  return (
    <div>
      {Children.map(children, child => 
        cloneElement(child, {
          checked: child.props.value === value,
          onChange: () => onChange(child.props.value)
        })
      )}
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState('a');
  
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <input type="radio" value="a" />
      <input type="radio" value="b" />
    </RadioGroup>
  );
}`,
    pista: { es: 'React.Children.map itera sobre children y cloneElement crea una copia con nuevas props', ca: 'React.Children.map itera sobre children i cloneElement crea una còpia amb noves props', en: 'React.Children.map iterates over children and cloneElement creates a copy with new props' },
    nivel: 'avanzado',
    categoria: 'Patrones'
  },
  {
    id: '39',
    titulo: { es: 'Custom Hook useDebounce', ca: 'Custom Hook useDebounce', en: 'Custom Hook useDebounce' },
    descripcion: { es: 'Crea un hook useDebounce para retrasar actualizaciones', ca: 'Crea un hook useDebounce per retardar actualitzacions', en: 'Create a useDebounce hook to delay updates' },
    codigoInicio: `// Crea useDebounce aquí

function Buscador() {
  const [query, setQuery] = useState('');
  // Usa useDebounce aquí
}`,
    solucion: `import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

function Buscador() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Buscando:', debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar..."
    />
  );
}`,
    pista: { es: 'Usa setTimeout y clearTimeout para retrasar la actualización', ca: 'Fes servir setTimeout i clearTimeout per retardar l\'actualització', en: 'Use setTimeout and clearTimeout to delay the update' },
    nivel: 'avanzado',
    categoria: 'Hooks'
  },
  {
    id: '40',
    titulo: { es: 'Testeo de Componentes (Estructura)', ca: 'Testeig de Components (Estructura)', en: 'Component Testing (Structure)' },
    descripcion: { es: 'Crea la estructura para testear un componente con React Testing Library', ca: 'Crea l\'estructura per testejar un component amb React Testing Library', en: 'Create the structure to test a component with React Testing Library' },
    codigoInicio: `// Escribe el test estructural para este componente

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
    solucion: `import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

describe('Counter', () => {
  it('should render with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should increment when button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});`,
    pista: { es: 'Usa render, screen y fireEvent para simular interacciones', ca: 'Fes servir render, screen i fireEvent per simular interaccions', en: 'Use render, screen, and fireEvent to simulate interactions' },
    nivel: 'avanzado',
    categoria: 'Testing'
  }
];
