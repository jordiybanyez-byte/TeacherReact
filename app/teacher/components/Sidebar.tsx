'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface MenuItem {
  href?: string;
  label: string;
  icon: string;
  isAccordion?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  children?: { href: string; label: string; icon: string }[];
}

function getIcon(icon: string, isActive: boolean) {
  const color = isActive ? 'text-blue-400' : 'text-gray-500 dark:text-gray-400';
  
  switch (icon) {
    case 'home':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'users':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'code':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'book':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={`w-5 h-5 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTheme();
  const [zonaLectivaOpen, setZonaLectivaOpen] = useState(true);

  const toggleZonaLectiva = () => {
    setZonaLectivaOpen(!zonaLectivaOpen);
    if (!zonaLectivaOpen && !pathname.startsWith('/teacher/ejercicios')) {
      router.push('/teacher/ejercicios');
    }
  };

  const menuItems = [
    { href: '/teacher', label: t.inicio, icon: 'home' },
    { href: '/teacher/estudiantes', label: t.estudiantes, icon: 'users' },
    { 
      label: t.zonaLectiva || 'Zona Lectiva', 
      icon: 'book',
      isAccordion: true,
      isOpen: zonaLectivaOpen,
      onToggle: toggleZonaLectiva,
      children: [
        { href: '/teacher/ejercicios', label: t.ejercicios, icon: 'clipboard' },
        { href: '/teacher/ejercicios/lista', label: t.listaEjercicios, icon: 'clipboard' },
      ]
    },
    { href: '/teacher/hackathon', label: t.hackathon, icon: 'code' },
    { href: '/teacher/cursos', label: t.cursos, icon: 'book' },
    { href: '/teacher/invitar', label: t.invitarAlumnos || 'Invitar Alumnos', icon: 'mail' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} min-h-screen border-r transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex flex-col`}>
      <div className={`flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700`}>
        {!isCollapsed && (
          <>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {t.teacherHub}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.moocReact}
              </p>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
        >
          <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            if (item.isAccordion) {
              const isActive = item.isOpen || pathname.startsWith('/teacher/ejercicios');
              return (
                <li key={`zona-lectiva-${index}`}>
                  <button
                    onClick={item.onToggle}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-400'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                  >
                    {getIcon(item.icon, isActive)}
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${item.isOpen ? 'rotate-90' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                  {item.isOpen && !isCollapsed && item.children?.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-3 px-3 py-3 ml-4 rounded-lg transition ${
                          isChildActive
                            ? 'bg-gray-100 dark:bg-gray-700'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {getIcon(child.icon, isChildActive)}
                        <span className="text-gray-900 dark:text-white">
                          {child.label}
                        </span>
                      </Link>
                    );
                  })}
                </li>
              );
            } else {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                  >
                    {getIcon(item.icon, isActive)}
                    {!isCollapsed && (
                      <span className="text-gray-900 dark:text-white">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => {
            localStorage.removeItem('theme');
            localStorage.removeItem('language');
            window.location.href = '/';
          }}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!isCollapsed && (
            <span className="text-gray-500 dark:text-gray-400">
              {t.cerrarSesion || 'Cerrar sesión'}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
