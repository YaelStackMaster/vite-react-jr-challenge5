import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(credentials);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Error inesperado. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative min-h-screen bg-background-cream text-secondary-900">
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Contenedor principal */}
      <div className="relative z-20 flex items-center justify-center h-screen w-screen">

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-xs 2xl:max-w-xs space-y-6">

          {/* 🔹 Título de Login */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black drop-shadow-lg">
              Iniciar Sesión
            </h1>
          </div>

          {/* Formulario */}
          <div className="bg-form-bg border-2 border-form-border rounded-form shadow-form backdrop-blur-form p-3 sm:p-4 md:p-4 lg:p-4 xl:p-4 transition-all duration-300 hover:shadow-form-hover hover:scale-[1.02]">
            <form className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-6" onSubmit={handleSubmit}>

              {/* Campo usuario */}
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm md:text-base font-semibold text-secondary-700">
                  Usuario
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-4 lg:py-3 xl:px-4 xl:py-3 bg-form-input-bg border-2 border-form-input-border rounded-input text-sm md:text-base text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:border-primary-400 focus:shadow-input-focus transition-all duration-300 hover:border-primary-300 hover:shadow-input"
                  placeholder="Ingresa tu usuario"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </div>

              {/* Campo contraseña */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm md:text-base font-semibold text-secondary-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-4 md:py-3 lg:px-4 lg:py-3 xl:px-4 xl:py-3 bg-form-input-bg border-2 border-form-input-border rounded-input text-sm md:text-base text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:border-primary-400 focus:shadow-input-focus transition-all duration-300 hover:border-primary-300 hover:shadow-input"
                  placeholder="Ingresa tu contraseña"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-input bg-error-50 border-2 border-error-200 p-3 sm:p-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-error-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base font-medium text-error-800">
                      {error}
                    </span>
                  </div>
                </div>
              )}

            {/* 🔑 Credenciales Demo */}
            <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 8A6 6 0 006 8c0 3.866 3.582 7 8 7s8-3.134 8-7a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-blue-800">Credenciales demo</h3>
                  <div className="mt-1 flex items-center space-x-2">
                    <span className="px-2 py-1 bg-white border border-blue-200 rounded text-xs text-blue-700 font-mono">admin</span>
                    <span className="text-blue-400">/</span>
                    <span className="px-2 py-1 bg-white border border-blue-200 rounded text-xs text-blue-700 font-mono">1234</span>
                  </div>
                </div>
              </div>
            </div>

              {/* Botón */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 border-2 border-transparent text-sm md:text-base font-bold rounded-button text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-xl hover:shadow-2xl hover:shadow-primary-500/25"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Iniciando...</span>
                    </>
                  ) : (
                    <span>Iniciar Sesión</span>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
