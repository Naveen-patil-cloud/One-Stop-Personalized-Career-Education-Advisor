import React from 'react';

const AnimatedBackground: React.FC = () => {
  const keyframes = `
    @keyframes gradient-pan {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-slate-50">
      <style>{keyframes}</style>
      <div
        className="w-full h-full opacity-40 blur-3xl"
        style={{
          background: `linear-gradient(-45deg, 
            #a855f7, 
            #ec4899,
            #f59e0b, 
            #22d3ee
          )`,
          backgroundSize: '400% 400%',
          animation: 'gradient-pan 15s ease infinite',
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
