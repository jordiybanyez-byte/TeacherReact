'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

interface InvitedStudent {
  id: string;
  email: string;
  status: 'pending' | 'invited';
}

export default function InvitarPage() {
  const { t, isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState<InvitedStudent[]>([]);
  const [message, setMessage] = useState('');

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Por favor, introduce un email válido');
      return;
    }
    
    const newStudent: InvitedStudent = {
      id: Date.now().toString(),
      email: email.trim(),
      status: 'invited'
    };
    
    setStudents([...students, newStudent]);
    setEmail('');
    setMessage('');
  };

  const handleAddToCourse = (studentId: string) => {
    setStudents(students.map(s => 
      s.id === studentId ? { ...s, status: 'pending' } : s
    ));
  };

  return (
    <div className={`p-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-2">{t.invitarAlumnos}</h1>
      <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {t.invitarCorreo}
      </p>

      <div className={`max-w-2xl p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow`}>
        <form onSubmit={handleInvite} className="mb-8">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailAlumno}
              className={`flex-1 px-4 py-3 rounded-lg border ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {t.enviarInvitacion}
            </button>
          </div>
          {message && (
            <p className="mt-2 text-red-500 text-sm">{message}</p>
          )}
        </form>

        <div>
          <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.listaAlumnos}
          </h2>
          
          {students.length === 0 ? (
            <div className={`text-center py-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>{t.noAlumnosInvitados}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    isDark ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <svg className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{student.email}</p>
                      <span className={`text-xs ${
                        student.status === 'invited' 
                          ? 'text-green-500' 
                          : 'text-yellow-500'
                      }`}>
                        {student.status === 'invited' ? 'Invitado' : 'Pendiente'}
                      </span>
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
                    {t.agregarCurso}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
