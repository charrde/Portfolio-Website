// Client-side plugin for Particles.js
export default defineNuxtPlugin(() => {
    // Will run only on client-side
    return {
      provide: {
        initParticles: (config) => {
          if (typeof window !== 'undefined') {
            // Ensure particles.js is loaded
            import('particles.js').then(() => {
              if (window.particlesJS) {
                window.particlesJS('particles-js', config);
              }
            }).catch(err => {
              console.error('Failed to load particles.js', err);
            });
          }
        }
      }
    };
  });