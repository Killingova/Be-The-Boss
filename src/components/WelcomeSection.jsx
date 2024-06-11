import React from 'react';

function WelcomeSection() {
  return (
    <section id="welcome" className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
      <h2 className="text-center text-orange-400 text-4xl md:text-8xl font-bold">CREATE YOUR</h2>
      <div className="text-center w-full pt-8 px-4">
        <h1 className="text-stone-200 text-2xl md:text-5xl font-bold">Willkommen</h1>
        <p className="text-stone-300 mt-2 max-w-2xl mx-auto">
          CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
        </p>
      </div>
      <h2 className="text-center text-orange-400 text-4xl md:text-8xl font-bold mt-8">REAL LIFE</h2>
    </section>
  );
}

export default WelcomeSection;
