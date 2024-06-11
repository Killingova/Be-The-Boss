import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10 w-full bg-green-900 bg-opacity-75 text-white p-4">
      <ul className="flex justify-around">
        <li><a href="#welcome" className="hover:text-orange-400">Willkommen</a></li>
        <li className="relative">
          <button onClick={toggleDropdown} className="hover:text-orange-400 focus:outline-none">
            Planer
          </button>
          {isOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-green-900 bg-opacity-75 text-white shadow-lg">
              <li><a href="#daily-planner" className="block px-4 py-2 hover:bg-green-800">Tagesplaner</a></li>
              <li><a href="#weekly-planner" className="block px-4 py-2 hover:bg-green-800">Wochenplaner</a></li>
              <li><a href="#monthly-planner" className="block px-4 py-2 hover:bg-green-800">Monatsplaner</a></li>
              <li><a href="#goal-planner" className="block px-4 py-2 hover:bg-green-800">Zielplaner</a></li>
              <li><a href="#habit-tracker" className="block px-4 py-2 hover:bg-green-800">Gewohnheitstracker</a></li>
            </ul>
          )}
        </li>
        <li><a href="#tips-section" className="hover:text-orange-400">Tipps</a></li>
        <li><a href="#reflection-section" className="hover:text-orange-400">Reflexion</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
