'use client';

import { useEffect, useState, ReactNode } from 'react';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { Language } from './components/i18n';

function ThemeToggle() {
  const { toggleTheme, t } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={typeof window !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark' ? t.temaClaro : t.temaOscuro}
      className="p-2 rounded-lg transition bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {typeof window !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark' ? (
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

function LanguageToggle() {
  const { setLanguage, t } = useTheme();
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') as 'es' | 'ca' | 'en' || 'es';
    }
    return 'es';
  });

  const handleSetLanguage = (lang: 'es' | 'ca' | 'en') => {
    setLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700">
      {(['es', 'ca', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => handleSetLanguage(lang)}
          className={`px-2 py-1 text-sm rounded transition ${
            currentLang === lang
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function LayoutContent({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isCollapsed={isCollapsed} onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />
      <main className="flex-1 flex flex-col transition-all duration-300">
        <header className="h-16 border-b flex items-center justify-end gap-3 px-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <LanguageToggle />
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
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}
