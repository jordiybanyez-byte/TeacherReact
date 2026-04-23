export type Language = 'es' | 'ca' | 'en';

export interface Translations {
  inicio: string;
  estudiantes: string;
  ejercicios: string;
  hackathon: string;
  cursos: string;
  teacherHub: string;
  moocReact: string;
  cerrarSesion: string;
  idioma: string;
  temaClaro: string;
  temaOscuro: string;
  note: string;
  
  ejerciciosReact: string;
  ejerciciosCortos: string;
  verPista: string;
  verSolucion: string;
  siguiente: string;
  enviarAEstudiantes: string;
  seleccionarEstudiantes: string;
  ejercicioEnviado: string;
  enviarEjercicio: string;
  seleccionados: string;
  
  gestionEstudiantes: string;
  administrarEstudiantes: string;
  total: string;
  activos: string;
  completados: string;
  progresoPromedio: string;
  filtrarBuscar: string;
  buscarNombreEmail: string;
  estado: string;
  progreso: string;
  ejercicios_: string;
  nota: string;
  ultimoAcceso: string;
  noEstudiantes: string;
  mostrarDe: string;
  
  corregirEjercicios: string;
  revisarEjercicios: string;
  pending: string;
  approved: string;
  rejected: string;
  all: string;
  approve: string;
  reject: string;
  exerciseSubmited: string;
  noExercises: string;
  
  gestionHackathon: string;
  adminHackathon: string;
  newHackathon: string;
  selectHackathon: string;
  crearNuevoHackathon: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  premio: string;
  inviteAlumns: string;
  inviteAlumnsHint: string;
  selectAlumns: string;
  createHackathon: string;
  deleteHackathon: string;
  cancel: string;
  delete: string;
  teams: string;
  noEquipos: string;
  
  gestionCursos: string;
  adminCursos: string;
  newCourse: string;
  crearNuevoCurso: string;
  duracion: string;
  createCourse: string;
  noCourses: string;
  totalCourses: string;
  active: string;
  inactive: string;
  draft: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    inicio: 'Inicio',
    estudiantes: 'Estudiantes',
    ejercicios: 'Ejercicios',
    hackathon: 'Hackathon',
    cursos: 'Cursos',
    teacherHub: 'Teacher Hub',
    moocReact: 'MOOC React',
    idioma: 'Idioma',
    cerrarSesion: 'Cerrar sesión',
    temaClaro: 'Cambiar a tema claro',
    temaOscuro: 'Cambiar a tema oscuro',
    note: 'Nota',
    
    ejerciciosReact: 'Ejercicios de React',
    ejerciciosCortos: 'Ejercicios cortos para practicar conceptos de React',
    verPista: 'Ver pista',
    verSolucion: 'Ver solución',
    siguiente: 'Siguiente →',
    enviarAEstudiantes: 'Enviar a estudiantes',
    seleccionarEstudiantes: 'Selecciona los estudiantes que recibirán este ejercicio:',
    ejercicioEnviado: 'Enviado',
    enviarEjercicio: 'Enviar ejercicio',
    seleccionados: 'seleccionados',
    
    gestionEstudiantes: 'Gestión de Estudiantes',
    administrarEstudiantes: 'Administra los estudiantes del curso',
    total: 'Total',
    activos: 'Activos',
    completados: 'Completados',
    progresoPromedio: 'Progreso Promedio',
    filtrarBuscar: 'Buscar',
    buscarNombreEmail: 'Buscar por nombre o email...',
    estado: 'Estado',
    progreso: 'Progreso',
    ejercicios_: 'Ejercicios',
    nota: 'Nota',
    ultimoAcceso: 'Último Acceso',
    noEstudiantes: 'No se encontraron estudiantes',
    mostrarDe: 'Mostrando',
    
    corregirEjercicios: 'Corrección de Ejercicios',
    revisarEjercicios: 'Revisa y corrige los ejercicios enviados',
    pending: 'pendiente',
    approved: 'aprobado',
    rejected: 'rechazado',
    all: 'todos',
    approve: 'Aprobar',
    reject: 'Rechazar',
    exerciseSubmited: 'ejercicios',
    noExercises: 'No hay ejercicios',
    
    gestionHackathon: 'Gestión de Hackathon',
    adminHackathon: 'Administra hackathons y equipos',
    newHackathon: 'Nuevo Hackathon',
    selectHackathon: 'Seleccionar Hackathon',
    crearNuevoHackathon: 'Crear Nuevo Hackathon',
    titulo: 'Título',
    descripcion: 'Descripción',
    fechaInicio: 'Fecha de inicio',
    fechaFin: 'Fecha de fin',
    premio: 'Premio',
    inviteAlumns: 'Invitar Alumnos',
    inviteAlumnsHint: 'Los alumnos se organizarán automáticamente en equipos',
    selectAlumns: 'seleccionados',
    createHackathon: 'Crear Hackathon',
    deleteHackathon: 'Eliminar Hackathon',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    teams: 'Equipos',
    noEquipos: 'No hay equipos en este hackathon',
    
    gestionCursos: 'Gestión de Cursos',
    adminCursos: 'Crea y administra los cursos',
    newCourse: 'Nuevo Curso',
    crearNuevoCurso: 'Crear Nuevo Curso',
    duracion: 'Duración',
    createCourse: 'Crear Curso',
    noCourses: 'No hay cursos creados',
    totalCourses: 'Total de cursos',
    active: 'activo',
    inactive: 'inactivo',
    draft: 'borrador',
  },
  ca: {
    inicio: 'Inici',
    estudiantes: 'Estudiants',
    ejercicios: 'Exercicis',
    hackathon: 'Hackathon',
    cursos: 'Cursos',
    teacherHub: 'Teacher Hub',
    moocReact: 'MOOC React',
    idioma: 'Idioma',
    cerrarSesion: 'Tancar sessió',
    temaClaro: 'Canviar a tema clar',
    temaOscuro: 'Canviar a tema fosc',
    note: 'Nota',
    
    gestionEstudiantes: "Gestió d'Estudiants",
    administrarEstudiantes: 'Administra els estudiants del curs',
    total: 'Total',
    activos: 'Actius',
    completados: 'Completats',
    progresoPromedio: 'Progress Mitjà',
    filtrarBuscar: 'Buscar',
    buscarNombreEmail: 'Buscar per nom o email...',
    estado: 'Estat',
    progreso: 'Progrés',
    ejercicios_: 'Exercicis',
    nota: 'Nota',
    ultimoAcceso: 'Darrer Accés',
    noEstudiantes: 'No es troben estudiants',
    mostrarDe: 'Mostrant',
    
    ejerciciosReact: 'Exercicis de React',
    ejerciciosCortos: 'Exercicis curts per practicar conceptes de React',
    verPista: 'Veure pista',
    verSolucion: 'Veure solució',
    siguiente: 'Següent →',
    enviarAEstudiantes: 'Enviar a estudiants',
    seleccionarEstudiantes: 'Selecciona els estudiants que rebran aquest exercici:',
    ejercicioEnviado: 'Enviat',
    enviarEjercicio: 'Enviar exercici',
    seleccionados: 'seleccionats',
    
    corregirEjercicios: "Correcció d'Exercicis",
    revisarEjercicios: 'Revisa i corregeix els exercicis enviats',
    pending: 'pendent',
    approved: 'aprovat',
    rejected: 'rebujat',
    all: 'tots',
    approve: 'Aprovar',
    reject: 'Rebujar',
    exerciseSubmited: 'exercicis',
    noExercises: 'No hi ha exercicis',
    
    gestionHackathon: 'Gestió de Hackathon',
    adminHackathon: 'Administra hackathons i equips',
    newHackathon: 'Nou Hackathon',
    selectHackathon: 'Seleccionar Hackathon',
    crearNuevoHackathon: 'Crear Nou Hackathon',
    titulo: 'Titol',
    descripcion: 'Descripció',
    fechaInicio: 'Data de inici',
    fechaFin: 'Data de fi',
    premio: 'Premi',
    inviteAlumns: 'Convidar Alumnes',
    inviteAlumnsHint: "Els alumnes s'organitzaran automàticament en equips",
    selectAlumns: 'seleccionats',
    createHackathon: 'Crear Hackathon',
    deleteHackathon: 'Eliminar Hackathon',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    teams: 'Equips',
    noEquipos: 'No hi ha equips en aquest hackathon',
    
    gestionCursos: 'Gestió de Cursos',
    adminCursos: 'Crea i administra els cursos',
    newCourse: 'Nou Curs',
    crearNuevoCurso: 'Crear Nou Curs',
    duracion: 'Durada',
    createCourse: 'Crear Curs',
    noCourses: 'No hi ha cursos creats',
    totalCourses: 'Total de cursos',
    active: 'actiu',
    inactive: 'inactiu',
    draft: 'esborrany',
  },
  en: {
    inicio: 'Home',
    estudiantes: 'Students',
    ejercicios: 'Exercises',
    hackathon: 'Hackathon',
    cursos: 'Courses',
    teacherHub: 'Teacher Hub',
    moocReact: 'MOOC React',
    idioma: 'Language',
    cerrarSesion: 'Logout',
    temaClaro: 'Switch to light theme',
    temaOscuro: 'Switch to dark theme',
    note: 'Grade',
    
    gestionEstudiantes: 'Student Management',
    administrarEstudiantes: 'Manage course students',
    total: 'Total',
    activos: 'Active',
    completados: 'Completed',
    progresoPromedio: 'Average Progress',
    filtrarBuscar: 'Search',
    buscarNombreEmail: 'Search by name or email...',
    estado: 'Status',
    progreso: 'Progress',
    ejercicios_: 'Exercises',
    nota: 'Grade',
    ultimoAcceso: 'Last Access',
    noEstudiantes: 'No students found',
    mostrarDe: 'Showing',
    
    ejerciciosReact: 'React Exercises',
    ejerciciosCortos: 'Short exercises to practice React concepts',
    verPista: 'Show hint',
    verSolucion: 'Show solution',
    siguiente: 'Next →',
    enviarAEstudiantes: 'Send to students',
    seleccionarEstudiantes: 'Select the students who will receive this exercise:',
    ejercicioEnviado: 'Sent',
    enviarEjercicio: 'Send exercise',
    seleccionados: 'selected',
    
    corregirEjercicios: 'Exercise Correction',
    revisarEjercicios: 'Review and grade student exercises',
    pending: 'pending',
    approved: 'approved',
    rejected: 'rejected',
    all: 'all',
    approve: 'Approve',
    reject: 'Reject',
    exerciseSubmited: 'exercises',
    noExercises: 'No exercises',
    
    gestionHackathon: 'Hackathon Management',
    adminHackathon: 'Manage hackathons and teams',
    newHackathon: 'New Hackathon',
    selectHackathon: 'Select Hackathon',
    crearNuevoHackathon: 'Create New Hackathon',
    titulo: 'Title',
    descripcion: 'Description',
    fechaInicio: 'Start date',
    fechaFin: 'End date',
    premio: 'Prize',
    inviteAlumns: 'Invite Students',
    inviteAlumnsHint: 'Students will be organized into teams automatically',
    selectAlumns: 'selected',
    createHackathon: 'Create Hackathon',
    deleteHackathon: 'Delete Hackathon',
    cancel: 'Cancel',
    delete: 'Delete',
    teams: 'Teams',
    noEquipos: 'No teams in this hackathon',
    cerrarSesion: 'Logout',
    
    gestionCursos: 'Course Management',
    adminCursos: 'Create and manage courses',
    newCourse: 'New Course',
    crearNuevoCurso: 'Create New Course',
    duracion: 'Duration',
    createCourse: 'Create Course',
    noCourses: 'No courses created',
    totalCourses: 'Total courses',
    active: 'active',
    inactive: 'inactive',
    draft: 'draft',
  },
};