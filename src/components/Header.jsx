// Se valora el estilo que quiera el candidato
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false); // Cerrar menú al hacer logout
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg py-5">
      <nav className="container mx-auto px-4">
        {/* Header principal con logo y botón hamburguesa */}
        <div className="flex items-center justify-between">
          {/* Logo/Título */}
          <h1 className="font-extrabold text-xl sm:text-2xl drop-shadow-lg tracking-wide text-white">
            Demo Reto React + Vite Jr
          </h1>
          
          {/* Botón hamburguesa - Solo visible en móviles */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                // Icono X cuando está abierto
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Icono hamburguesa cuando está cerrado
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación - Desktop */}
        <div className="hidden lg:flex items-center justify-end mt-4 lg:mt-0 space-x-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="transition-colors duration-200 px-4 py-2 rounded-md border border-white text-white font-medium hover:bg-white/10"
          >
            Home
          </Link>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>Bienvenido,</span>
            <span className="font-medium">{user?.username}</span>
          </div>
          
          <button
            onClick={handleLogout}
            className="transition-colors duration-200 px-4 py-2 rounded-md border border-white text-white font-medium hover:bg-white/10"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Menú hamburguesa - Móviles y tablets */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3 border border-white/20">
            {/* Enlace Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="block w-full text-center transition-colors duration-200 px-4 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/20"
            >
              Home
            </Link>
            
            {/* Información del usuario */}
            <div className="text-center py-2">
              <div className="text-sm text-white/80">
                <span>Bienvenido,</span>
                <span className="font-medium ml-1">{user?.username}</span>
              </div>
            </div>
            
            {/* Botón cerrar sesión */}
            <button
              onClick={handleLogout}
              className="block w-full transition-colors duration-200 px-4 py-3 rounded-md border border-white/30 text-white font-medium hover:bg-white/20"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
