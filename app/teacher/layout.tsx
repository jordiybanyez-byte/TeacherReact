'use client';

import { useEffect, ReactNode } from 'react';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider, useTheme } from './components/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function LayoutContent({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar isDark={isDark} />
      <main className="flex-1 flex flex-col">
        <header className={`h-16 border-b flex items-center justify-end px-6 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <ThemeToggle />
        </header>
        <div className="flex-1 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function TeacherLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = saved || 'light';
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}