export type Language = 'es' | 'ca' | 'en';

export interface Translations {
  inicio: string;
  estudiantes: string;
  ejercicios: string;
  hackathon: string;
  cursos: string;
  teacherHub: string;
  moocReact: string;
  corregirEjercicios: string;
  revisarEjercicios: string;
  ejerciciosReact: string;
  ejerciciosCortos: string;
  enviarAEstudiantes: string;
  seleccionarEstudiantes: string;
  ejercicioEnviado: string;
  verPista: string;
  verSolucion: string;
  siguiente: string;
  enviarEjercicio: string;
  seleccionados: string;
  temaClaro: string;
  temaOscuro: string;
  idioma: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    inicio: 'Inicio',
    estudiantes: 'Estudiantes',
    ejercicios: 'Ejercicios',
    hackathon: 'Hackathon',
    cursos: 'Cursos',
    teacherHub: 'Teacher Hub',
    moocReact: 'MoocReact',
    corregirEjercicios: 'Corrección de Ejercicios',
    revisarEjercicios: 'Revisa y corrige los ejercicios enviados por los estudiantes',
    ejerciciosReact: 'Ejercicios de React',
    ejerciciosCortos: 'Ejercicios cortos para practicar conceptos de React',
    enviarAEstudiantes: 'Enviar a estudiantes',
    seleccionarEstudiantes: 'Selecciona los estudiantes que recibirán este ejercicio:',
    ejercicioEnviado: 'Enviado',
    verPista: 'Ver pista',
    verSolucion: 'Ver solución',
    siguiente: 'Siguiente →',
    enviarEjercicio: 'Enviar ejercicio',
    seleccionados: 'seleccionados',
    temaClaro: 'Cambiar a tema claro',
    temaOscuro: 'Cambiar a tema oscuro',
    idioma: 'Idioma',
  },
  ca: {
    inicio: 'Inici',
    estudiantes: 'Estudiants',
    ejercicios: 'Exercicis',
    hackathon: 'Hackathon',
    cursos: 'Cursos',
    teacherHub: 'Teacher Hub',
    moocReact: 'MoocReact',
    corregirEjercicios: "Correcció d'Exercicis",
    revisarEjercicios: 'Revisa i corregeix els exercicis enviats pels estudiants',
    ejerciciosReact: 'Exercicis de React',
    ejerciciosCortos: 'Exercicis curts per practicar conceptes de React',
    enviarAEstudiantes: 'Enviar a estudiants',
    seleccionarEstudiantes: 'Selecciona els estudiants que rebran aquest exercici:',
    ejercicioEnviado: 'Enviat',
    verPista: 'Veure pista',
    verSolucion: 'Veure solució',
    siguiente: 'Següent →',
    enviarEjercicio: 'Enviar exercici',
    seleccionados: 'seleccionats',
    temaClaro: 'Canviar a tema clar',
    temaOscuro: 'Canviar a tema fosc',
    idioma: 'Idioma',
  },
  en: {
    inicio: 'Home',
    estudiantes: 'Students',
    ejercicios: 'Exercises',
    hackathon: 'Hackathon',
    cursos: 'Courses',
    teacherHub: 'Teacher Hub',
    moocReact: 'MoocReact',
    corregirEjercicios: 'Exercise Correction',
    revisarEjercicios: 'Review and correct exercises sent by students',
    ejerciciosReact: 'React Exercises',
    ejerciciosCortos: 'Short exercises to practice React concepts',
    enviarAEstudiantes: 'Send to students',
    seleccionarEstudiantes: 'Select the students who will receive this exercise:',
    ejercicioEnviado: 'Sent',
    verPista: 'Show hint',
    verSolucion: 'Show solution',
    siguiente: 'Next →',
    enviarEjercicio: 'Send exercise',
    seleccionados: 'selected',
    temaClaro: 'Switch to light theme',
    temaOscuro: 'Switch to dark theme',
    idioma: 'Language',
  },
};