'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';

interface SidebarProps {
  isDark: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

function getIcon(icon: string, isActive: boolean, isDark: boolean) {
  const color = isActive ? (isDark ? 'text-blue-400' : 'text-blue-600') : (isDark ? 'text-gray-400' : 'text-gray-500');
  
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

interface MenuItem {
  href: string;
  label: string;
  icon: string;
  children?: MenuItem[];
}

export function Sidebar({ isDark, isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useTheme();
  const [zonaEducativaAbierta, setZonaEducativaAbierta] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sidebar-zona-educativa');
      return saved === 'true';
    }
    return false;
  });

  const menuItems: MenuItem[] = [
    { href: '/teacher', label: t.inicio, icon: 'home' },
    { href: '/teacher/estudiantes', label: t.estudiantes, icon: 'users' },
    {
      href: '/teacher/ejercicios',
      label: t.zonaEducativa || 'Zona Educativa',
      icon: 'clipboard',
      children: [
        { href: '/teacher/ejercicios', label: t.ejercicios, icon: 'clipboard' },
        { href: '/teacher/ejercicios/lista', label: t.listaEjercicios || 'Lista de ejercicios', icon: 'clipboard' },
      ]
    },
    { href: '/teacher/hackathon', label: t.hackathon, icon: 'code' },
    { href: '/teacher/cursos', label: t.cursos, icon: 'book' },
    { href: '/teacher/invitar', label: t.invitarAlumnos, icon: 'mail' },
  ];

  const isZonaEducativaActive = pathname.startsWith('/teacher/ejercicios');

  const toggleZonaEducativa = () => {
    setZonaEducativaAbierta(prev => {
      const newState = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('sidebar-zona-educativa', String(newState));
      }
      return newState;
    });
  };

  const renderMenuItem = (item: MenuItem, isChild = false) => {
    const isActive = pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = zonaEducativaAbierta;
    const shouldHighlight = hasChildren ? (isZonaEducativaActive || isOpen) : isActive;
   

    return (
      <li key={item.href}>
        {hasChildren && !isCollapsed ? (
          <button
            onClick={toggleZonaEducativa}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition ${
              shouldHighlight
                ? (isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900')
                : (isDark ? 'text-gray-400 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-50')
            }`}
          >
            {getIcon(item.icon, shouldHighlight, isDark)}
            <span className="flex-1 text-left">{item.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : hasChildren && isCollapsed ? (
          <Link
            href={item.href}
            className={`flex items-center justify-center gap-3 px-3 py-3 rounded-lg transition ${
              shouldHighlight
                ? (isDark ? 'bg-gray-700' : 'bg-gray-100')
                : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
            } justify-center`}
          >
            {getIcon(item.icon, shouldHighlight, isDark)}
          </Link>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
              isActive
                ? (isDark ? 'bg-gray-700' : 'bg-gray-100')
                : (isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50')
            } ${isCollapsed ? 'justify-center' : ''} ${isChild ? (isDark ? 'ml-6 border-l-2 border-gray-600' : 'ml-6 border-l-2 border-gray-300') : ''}`}
          >
            {getIcon(item.icon, isActive, isDark)}
            {!isCollapsed && (
              <span className={isDark ? 'text-white' : 'text-gray-700'}>
                {item.label}
              </span>
            )}
          </Link>
        )}
        
        {hasChildren && isOpen && !isCollapsed && (
          <ul className="mt-1 space-y-1">
            {item.children.map(child => renderMenuItem(child, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} min-h-screen border-r transition-all duration-300 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex flex-col`}>
      <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        {!isCollapsed && (
          <>
            <div>
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {t.teacherHub}
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {t.moocReact}
              </p>
            </div>
          </>
        )}
        <button
          onClick={onToggleCollapse}
          className={`p-2 rounded-lg transition ${isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
        >
          <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(item => renderMenuItem(item))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => {
            localStorage.removeItem('theme');
            localStorage.removeItem('language');
            window.location.href = '/login';
          }}
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition ${
            isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-50 text-gray-500'
          } ${isCollapsed ? 'justify-center' : ''}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!isCollapsed && (
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
              {t.cerrarSesion || 'Cerrar sesión'}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}