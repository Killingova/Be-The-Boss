import React from 'react';

const reviews = [
  { id: 1, text: "CYRL Note hat mein Leben verändert! Ich bin viel produktiver und organisierter.", author: "Zufriedener Benutzer" },
  { id: 2, text: "Ein großartiges Tool für tägliche Planung und Reflexion.", author: "Anna M." },
  { id: 3, text: "Ich liebe die Benutzerfreundlichkeit und das Design.", author: "Max K." },
  // Weitere Erfahrungsberichte hier hinzufügen
];

function WelcomeSection() {
  return (
    <section className="flex flex-col items-center justify-between text-center p-4 min-h-screen bg-[#254336]">
      
      {/* Obere Überschrift */}
      <div className="self-start pl-4 pt-4 mb-4">
        <h2 className="text-[#FBBF24] text-2xl md:text-4xl font-semibold animate-pulse">
          CREATE YOUR REAL LIFE
        </h2>
      </div>
      
      <div className="relative bg-[#DAD3BE] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg w-full max-w-3xl mx-auto p-8"> 
        
        {/* Hauptinhalt */}
        <div className="text-center w-full pt-4 px-4 mb-8">
          {/* Willkommen Titel */}
          <h2 className="text-orange-400 text-xl md:text-3xl font-semibold mb-4">Willkommen bei CYRL NOTE</h2>

          {/* Beschreibungstext */}
          <p className="text-stone-200 mt-4 max-w-2xl mb-4 mx-auto">
            CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
          </p>
          
          {/* Erfahrungsberichte */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#6B8A7A] bg-opacity-20 text-[#B7B597] p-4 rounded-lg shadow-lg w-56 flex-grow border border-[#FBBF24]">
                <p className="text-sm">{review.text}</p>
                <p className="text-xs mt-2 text-right">- {review.author}</p>
              </div>
            ))}
          </div>
          
          {/* Registrierungsbutton */}
          <div className="flex justify-end mt-8">
            <button className="text-stone-200 hover:underline text-center rounded-md text-lg font-medium border border-orange-400 px-4 py-2">
              Jetzt registrieren
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Untere Überschrift */}
      <div className="self-end pr-4 pb-4">
        <h2 className="text-[#FBBF24] text-2xl mt-4 md:text-4xl font-semibold animate-pulse">
          CREATE YOUR REAL LIFE
        </h2>
      </div>
    </section>
  );
}

export default WelcomeSection;
