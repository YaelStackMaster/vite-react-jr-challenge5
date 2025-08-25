import { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Verificar que estemos en el navegador
    if (typeof window === 'undefined') return;

    let mounted = true;

    const initVanta = async () => {
      try {
        console.log('🚀 Iniciando carga de Vanta.js...');
        
        // Usar Three.js del CDN (que ya está funcionando)
        let THREE;
        if (window.THREE) {
          console.log('✅ Three.js ya está cargado globalmente');
          THREE = window.THREE;
        } else {
          console.log('📥 Cargando Three.js desde CDN...');
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/three@0.128.0/build/three.min.js';
            script.onload = () => {
              console.log('✅ Three.js cargado exitosamente');
              THREE = window.THREE;
              resolve();
            };
            script.onerror = (error) => {
              console.error('❌ Error al cargar Three.js:', error);
              reject(error);
            };
            document.head.appendChild(script);
          });
        }

        // Usar Vanta.js local (que ya tienes instalado)
        let VANTA;
        try {
          console.log('📥 Cargando Vanta.js desde librería local...');
          
          // Intentar diferentes formas de importar Vanta.js
          try {
            // Primero intentar importar el módulo principal
            const vantaModule = await import('vanta');
            console.log('🔍 Estructura del módulo Vanta.js:', vantaModule);
            
            // Verificar si las funciones están disponibles
            if (vantaModule.default && vantaModule.default.CLOUDS && vantaModule.default.BIRDS) {
              VANTA = vantaModule.default;
              console.log('✅ Vanta.js cargado exitosamente desde librería local (default)');
            } else if (vantaModule.CLOUDS && vantaModule.BIRDS) {
              VANTA = vantaModule;
              console.log('✅ Vanta.js cargado exitosamente desde librería local (directo)');
            } else {
              // Intentar importar efectos específicos
              console.log('📥 Intentando importar efectos específicos...');
              const CLOUDS = await import('vanta/dist/vanta.clouds.min.js');
              const BIRDS = await import('vanta/dist/vanta.birds.min.js');
              
              VANTA = {
                CLOUDS: CLOUDS.default || CLOUDS,
                BIRDS: BIRDS.default || BIRDS
              };
              console.log('✅ Vanta.js cargado exitosamente desde efectos específicos');
            }
          } catch (importError) {
            console.warn('⚠️ Error al importar módulos específicos:', importError);
            throw importError;
          }
          
        } catch (localError) {
          console.warn('⚠️ Fallback a CDN para Vanta.js...', localError);
          // Si falla local, intentar CDN
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/vanta@0.5.24/dist/vanta.min.js';
            script.onload = () => {
              console.log('✅ Vanta.js cargado exitosamente desde CDN');
              VANTA = window.VANTA;
              resolve();
            };
            script.onerror = (error) => {
              console.error('❌ Error al cargar Vanta.js desde CDN:', error);
              reject(error);
            };
            document.head.appendChild(script);
          });
        }
        
        if (!mounted || !containerRef.current || !THREE || !VANTA) {
          console.warn('⚠️ Condiciones no cumplidas para inicializar Vanta.js');
          return;
        }

        // Verificar que las funciones estén disponibles
        if (!VANTA.CLOUDS || !VANTA.BIRDS) {
          console.error('❌ Funciones CLOUDS o BIRDS no disponibles en VANTA:', VANTA);
          
          // Intentar acceder a las funciones de diferentes maneras
          if (VANTA.default && VANTA.default.CLOUDS && VANTA.default.BIRDS) {
            console.log('🔄 Usando VANTA.default...');
            VANTA = VANTA.default;
          } else if (window.VANTA && window.VANTA.CLOUDS && window.VANTA.BIRDS) {
            console.log('🔄 Usando window.VANTA...');
            VANTA = window.VANTA;
          } else {
            // Último intento: cargar desde CDN
            console.log('🔄 Último intento: cargando desde CDN...');
            try {
              await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/vanta@0.5.24/dist/vanta.min.js';
                script.onload = () => {
                  console.log('✅ Vanta.js cargado exitosamente desde CDN (fallback)');
                  VANTA = window.VANTA;
                  resolve();
                };
                script.onerror = (error) => {
                  console.error('❌ Error al cargar Vanta.js desde CDN (fallback):', error);
                  reject(error);
                };
                document.head.appendChild(script);
              });
            } catch (cdnError) {
              console.error('❌ Fallback a CDN también falló:', cdnError);
              return;
            }
          }
        }

        console.log('🎨 Inicializando efectos de Vanta.js...');

        // Crear contenedor para nubes
        const cloudsContainer = document.createElement('div');
        cloudsContainer.style.cssText = 'position: absolute; inset: 0; z-index: 0; opacity: 0.75;';
        containerRef.current.appendChild(cloudsContainer);
        console.log('☁️ Contenedor de nubes creado');

        // Crear contenedor para pájaros
        const birdsContainer = document.createElement('div');
        birdsContainer.style.cssText = 'position: absolute; inset: 0; z-index: 10;';
        containerRef.current.appendChild(birdsContainer);
        console.log('🐦 Contenedor de pájaros creado');

        // Inicializar efecto de nubes
        console.log('☁️ Inicializando efecto de nubes...');
        const cloudsEffect = VANTA.CLOUDS({
          el: cloudsContainer,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0xFFF9F0,
          skyColor: 0x7DCBE8,        // Cielo azul #7DCBE8
          cloudColor: 0xC0C4C8,      // Nubes grises #C0C4C8
          cloudShadowColor: 0xA0A4A8, // Sombra de nubes un poco más oscura
          sunColor: 0xFFD700,
          speed: 0.3,
        });
        console.log('✅ Efecto de nubes inicializado');

        // Inicializar efecto de pájaros
        console.log('🐦 Inicializando efecto de pájaros...');
        const birdsEffect = VANTA.BIRDS({
          el: birdsContainer,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundAlpha: 0.0,
          // Colores originales de los pájaros
          color1: 0xFF2D20,          // Rojo-Naranja original
          color2: 0x2ECC71,          // Verde Esmeralda original
          birdSize: 1.8,             // Tamaño original
          wingSpan: 35.00,           // Alas originales
          speedLimit: 5.00,          // Velocidad original
          separation: 25.00,         // Separación original
          alignment: 20.00,          // Alineación original
          cohesion: 20.00,           // Cohesión original
          quantity: 3.50,            // Cantidad original
        });
        console.log('✅ Efecto de pájaros inicializado');

        console.log('🎉 ¡Vanta.js inicializado correctamente!');

        // Cleanup function
        return () => {
          try {
            if (cloudsEffect && typeof cloudsEffect.destroy === 'function') {
              cloudsEffect.destroy();
            }
            if (birdsEffect && typeof birdsEffect.destroy === 'function') {
              birdsEffect.destroy();
            }
          } catch (e) {
            console.warn('Error al limpiar efectos:', e);
          }
        };

      } catch (error) {
        console.error('❌ Error al cargar Vanta.js:', error);
        // No mostrar fallback estático, solo dejar el contenedor vacío
      }
    };

    // Inicializar con un pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(initVanta, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      
      // Limpiar contenedores
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* Los efectos se insertarán aquí dinámicamente */}
    </div>
  );
}
