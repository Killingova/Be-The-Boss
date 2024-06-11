import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import des Icons

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    // Fügen Sie hier Ihre Logik für den Klick-Handler hinzu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="relative flex flex-col justify-between min-h-screen p-4"
      style={{
        backgroundImage: `url(/Pfeillogo.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay-Div, um den Hintergrund abzudunkeln */}
      <div className="absolute inset-0 bg-green-950 opacity-65"></div>

      <header className="relative z-10 flex items-center justify-between text-white p-4 w-full">
        <h1 className="text-center text-orange-400 text-8xl font-bold">CYRL NOTE</h1>
        <div className="flex flex-col items-end space-y-2 relative">
          <button className="hover:underline px-4 py-2 rounded-md text-lg text-orange-400 font-medium border border-orange-500 w-48">
            Anmelden
          </button>
          <div 
            className="relative" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="hover:underline px-4 py-2 rounded-md text-lg text-orange-400 font-medium border border-orange-500 w-48 flex items-center justify-between"
            >
              <span>Planer</span>
              <ChevronDown color='orange' size={20} />
            </button>

            {isDropdownOpen && (
              <nav className="absolute right-0 mt-2 bg-orange-500/30 text-white rounded-md shadow-lg w-48">
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium" onClick={handleClick}>
                      Tagesplaner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Wochenplaner</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Monatsplaner</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Zielplaner</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Gewohnheiten</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Tagesreflexion</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Wochenreflexion</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">Monatsreflexion</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
        <h2 className="text-center text-orange-400 text-8xl font-bold">CREATE YOUR</h2>
        <div className="text-center w-full pt-8 px-4">
          <h1 className="text-stone-200 text-5xl font-bold">Willkommen</h1>
          <p className="text-stone-300 mt-2 max-w-2xl mx-auto">
            CYRL Note ist Ihre ideale App für effiziente Planung und Selbstreflexion. Finden Sie Struktur und Inspiration für Ihre täglichen, wöchentlichen und monatlichen Ziele.
          </p>
        </div>
        <h2 className="text-center text-orange-400 text-8xl font-bold mt-8">REAL LIFE</h2>
      </main>

      <footer className="relative z-10 text-white text-center p-4 w-full opacity-85">
        <p>
          Copyright © 2024 <a href="#" className="text-green-500 underline">Lissworx.de</a>. Alle Rechte vorbehalten.
        </p>
        <p>
          <a href="#" className="text-green-500 underline">Nutzungsbedingungen</a> | 
          <a href="#" className="text-green-500 underline"> Datenschutz</a> | 
          <a href="#" className="text-green-500 underline"> Impressum</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
