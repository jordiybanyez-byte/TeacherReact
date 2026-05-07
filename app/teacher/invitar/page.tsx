'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';
import { cursos } from '../data/cursos';

interface InvitedStudent {
  id: string;
  email: string;
  status: 'pending' | 'invited';
  courseId?: string;
}

export default function InvitarPage() {
  const { t, isDark, language } = useTheme();
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState<InvitedStudent[]>([]);
  const [message, setMessage] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage(language === 'es' ? 'Por favor, introduce un email válido' : 
                   language === 'ca' ? 'Si us plau, introdueix un email válid' :
                   'Please enter a valid email');
      return;
    }
    
    if (!selectedCourse) {
      setMessage(language === 'es' ? 'Por favor, selecciona un curso' : 
                   language === 'ca' ? 'Si us plau, selecciona un curs' :
                   'Please select a course');
      return;
    }
    
    const newStudent: InvitedStudent = {
      id: Date.now().toString(),
      email: email.trim(),
      status: 'invited',
      courseId: selectedCourse,
    };
    
    setStudents([...students, newStudent]);
    setEmail('');
    setSelectedCourse('');
    setMessage('');
  };

  const handleAddToCourse = (studentId: string) => {
    const student = students.find(s => s.id === studentId);
    if (student && student.courseId) {
      setStudents(students.map(s => 
        s.id === studentId ? { ...s, status: 'pending' } : s
      ));
      setMessage(language === 'es' ? `Alumno añadido al curso: ${cursos.find(c => c.id === student.courseId)?.nombre}` : 
                   language === 'ca' ? `Alumne afegit al curs: ${cursos.find(c => c.id === student.courseId)?.nombre}` :
                   `Student added to course: ${cursos.find(c => c.id === student.courseId)?.nombre}`);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const getCourseName = (courseId?: string) => {
    if (!courseId) return '';
    return cursos.find(c => c.id === courseId)?.nombre || '';
  };

  return (
    <div className={`min-h-screen p-6 md:p-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        <div className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h1 className="text-3xl font-bold mb-2">{t.invitarAlumnos || 'Invitar Alumnos'}</h1>
          <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.invitarCorreo || 'Invitar por correo'}
          </p>

          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} mb-8`}>
            <form onSubmit={handleInvite} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailAlumno || 'Email del alumno'}
                  className={`flex-1 px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className={`px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]`}
                >
                  <option value="" disabled>
                    {language === 'es' ? 'Selecciona curso' : 
                     language === 'ca' ? 'Selecciona curs' : 
                     'Select course'}
                  </option>
                  {cursos.filter(c => c.estado === 'activo').map((curso) => (
                    <option key={curso.id} value={curso.id}>
                      {curso.nombre} ({curso.totalEstudiantes} estudiantes)
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap"
                >
                  {t.enviarInvitacion || 'Enviar invitación'}
                </button>
              </div>
              {message && (
                <p className={`text-sm ${message.includes('válido') || message.includes('válid') || message.includes('valid') ? 'text-red-500' : 'text-green-500'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className={`mt-8 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.listaAlumnos || 'Lista de alumnos'}
            </h2>
           
            {students.length === 0 ? (
              <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>{t.noAlumnosInvitados || 'No hay alumnos invitados aún'}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {students.map((student) => {
                  const courseName = getCourseName(student.courseId);
                  return (
                    <div
                      key={student.id}
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        isDark ? 'bg-gray-700' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isDark ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{student.email}</p>
                          <div className="flex items-center gap-3 text-sm">
                            <span className={`${
                              student.status === 'invited' 
                                ? 'text-green-500' 
                                : 'text-yellow-500'
                            }`}>
                              {student.status === 'invited' ? (language === 'es' ? 'Invitado' : language === 'ca' ? 'Invitat' : 'Invited') : (language === 'es' ? 'Pendiente' : language === 'ca' ? 'Pendent' : 'Pending')}
                            </span>
                            {courseName && (
                              <span className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                                {courseName}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCourse(student.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                          student.status === 'pending'
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                        disabled={student.status === 'pending'}
                      >
                        {t.agregarCurso || 'Agregar a curso'}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
