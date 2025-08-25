/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Breakpoints personalizados para mejor control responsive
      screens: {
        'xs': '475px',      // Móviles pequeños
        'sm': '640px',      // Móviles grandes
        'md': '768px',      // Tablets
        'lg': '1024px',     // Laptops
        'xl': '1280px',     // Desktop
        '2xl': '1536px',    // Desktop grande
      },
      
      colors: {
        // Colores principales de la aplicación
        primary: {
          50: '#f0f9ff',    // Azul muy claro
          100: '#e0f2fe',   // Azul claro
          200: '#bae6fd',   // Azul medio claro
          300: '#7dd3fc',   // Azul medio
          400: '#38bdf8',   // Azul
          500: '#0ea5e9',   // Azul principal
          600: '#0284c7',   // Azul oscuro
          700: '#0369a1',   // Azul muy oscuro
          800: '#075985',   // Azul noche
          900: '#0c4a6e',   // Azul profundo
        },
        
        // Colores secundarios
        secondary: {
          50: '#f8fafc',    // Gris muy claro
          100: '#f1f5f9',   // Gris claro
          200: '#e2e8f0',   // Gris medio claro
          300: '#cbd5e1',   // Gris medio
          400: '#94a3b8',   // Gris
          500: '#64748b',   // Gris principal
          600: '#475569',   // Gris oscuro
          700: '#334155',   // Gris muy oscuro
          800: '#1e293b',   // Gris noche
          900: '#0f172a',   // Gris profundo
        },
        
        // Colores de éxito
        success: {
          50: '#f0fdf4',    // Verde muy claro
          100: '#dcfce7',   // Verde claro
          200: '#bbf7d0',   // Verde medio claro
          300: '#86efac',   // Verde medio
          400: '#4ade80',   // Verde
          500: '#22c55e',   // Verde principal
          600: '#16a34a',   // Verde oscuro
          700: '#15803d',   // Verde muy oscuro
          800: '#166534',   // Verde noche
          900: '#14532d',   // Verde profundo
        },
        
        // Colores de advertencia
        warning: {
          50: '#fffbeb',    // Amarillo muy claro
          100: '#fef3c7',   // Amarillo claro
          200: '#fde68a',   // Amarillo medio claro
          300: '#fcd34d',   // Amarillo medio
          400: '#fbbf24',   // Amarillo
          500: '#f59e0b',   // Amarillo principal
          600: '#d97706',   // Amarillo oscuro
          700: '#b45309',   // Amarillo muy oscuro
          800: '#92400e',   // Amarillo noche
          900: '#78350f',   // Amarillo profundo
        },
        
        // Colores de error
        error: {
          50: '#fef2f2',    // Rojo muy claro
          100: '#fee2e2',   // Rojo claro
          200: '#fecaca',   // Rojo medio claro
          300: '#fca5a5',   // Rojo medio
          400: '#f87171',   // Rojo
          500: '#ef4444',   // Rojo principal
          600: '#dc2626',   // Rojo oscuro
          700: '#b91c1c',   // Rojo muy oscuro
          800: '#991b1b',   // Rojo noche
          900: '#7f1d1d',   // Rojo profundo
        },
        
        // Colores del fondo animado (Vanta.js)
        background: {
          cream: '#FFF9F0',     // Fondo principal crema
          sky: '#4682B4',       // Color del cielo
          cloud: '#D3D3D3',     // Color de las nubes
          cloudShadow: '#708090', // Sombra de nubes
          sun: '#FFD700',       // Color del sol
          earth: '#8B4513',     // Color de la tierra
        },
        
        // Colores del formulario
        form: {
          bg: 'rgba(255, 255, 255, 0.95)',    // Fondo del formulario (transparente)
          border: 'rgba(255, 255, 255, 0.2)',  // Borde del formulario
          shadow: 'rgba(0, 0, 0, 0.1)',        // Sombra del formulario
          input: {
            bg: 'rgba(255, 255, 255, 0.9)',   // Fondo del input
            border: 'rgba(203, 213, 225, 0.5)', // Borde del input
            focus: 'rgba(14, 165, 233, 0.3)',  // Borde del input al enfocar
          }
        }
      },
      
      // Sombras personalizadas
      boxShadow: {
        'form': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'form-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.45)',
        'input': '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
        'input-focus': '0 0 0 3px rgba(14, 165, 233, 0.1)',
      },
      
      // Bordes redondeados personalizados
      borderRadius: {
        'form': '24px',
        'input': '16px',
        'button': '20px',
      },
      
      // Backdrop blur para efectos de cristal
      backdropBlur: {
        'form': '20px',
      },
      
      // Espaciado personalizado para responsive
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },
      
      // Tamaños de fuente personalizados
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
      }
    },
  },
  plugins: [],
}
