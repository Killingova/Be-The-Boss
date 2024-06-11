import React from 'react';

function Selector({ setSelectedSection }) {
  return (
    <nav className="relative z-10 w-full bg-green-900 bg-opacity-75 text-white p-4">
      <ul className="flex justify-around">
        <li>
          <button onClick={() => setSelectedSection('welcome')} className="hover:text-orange-400">
            Willkommen
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('daily-planner')} className="hover:text-orange-400">
            Tagesplaner
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('weekly-planner')} className="hover:text-orange-400">
            Wochenplaner
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('monthly-planner')} className="hover:text-orange-400">
            Monatsplaner
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('goal-planner')} className="hover:text-orange-400">
            Zielplaner
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('habit-tracker')} className="hover:text-orange-400">
            Gewohnheitstracker
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('tips-section')} className="hover:text-orange-400">
            Tipps
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedSection('reflection-section')} className="hover:text-orange-400">
            Reflexion
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Selector;
