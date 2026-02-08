import React from 'react';

const Hero = () => {

  return (
    <section className="relative w-full h-[60vh] md:h-[95vh] overflow-hidden bg-black">
      {/* Vidéo en arrière-plan */}
      <video

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



    </section>
  );
};

export default Hero;