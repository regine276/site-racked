import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const progress = isPlaying ? 100 : 0; // Simple progress representation
  return (
    <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden bg-black">
      {/* Vidéo en arrière-plan */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source 
          src="background.mp4" 
          type="video/mp4" 
        />
        Votre navigateur ne supporte pas les vidéos.
      </video>

      {/* Overlay dégradé pour le style */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Contenu textuel optionnel 
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Expérience Immersive
        </h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Découvrez notre nouvel univers à travers cette bannière vidéo minimaliste.
        </p>
      </div>
      */}
  
     {/* Bouton Play/Pause "Magnetic Design" */}
      <div className="absolute bottom-10 right-10 z-30">
        <button
          onClick={togglePlay}
          className="relative flex items-center justify-center w-20 h-20 transition-all duration-500 transform hover:scale-110 active:scale-95 group/btn"
        >
          {/* Cercle de progression SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              className="stroke-white/10 fill-none"
              strokeWidth="2"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              className="stroke-white fill-none transition-all duration-300 ease-linear"
              strokeWidth="2"
              strokeDasharray="226.2" // 2 * PI * R (36)
              strokeDashoffset={226.2 - (226.2 * progress) / 100}
              strokeLinecap="round"
            />
          </svg>

          {/* Corps du bouton (Glassmorphism) */}
          <div className="absolute inset-2 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover/btn:bg-white/20 group-hover/btn:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500" />

          {/* Icône */}
          <div className="relative z-10 text-white">
            {isPlaying ? (
              <Pause size={28} className="fill-white" />
            ) : (
              <Play size={28} className="fill-white translate-x-0.5" />
            )}
          </div>
          {/* Effet de halo au repos si pause */}
          {!isPlaying && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          )}
        </button>
      </div>

     
    </section>
  );
};

export default Hero;