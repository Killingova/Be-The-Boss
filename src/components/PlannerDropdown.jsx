// src/components/PlannerDropdown.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PlannerDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
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
              <a href="/planner/daily" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">
                Tagesplaner
              </a>
            </li>
            <li>
              <a href="/planner/weekly" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">
                Wochenplaner
              </a>
            </li>
            <li>
              <a href="/planner/monthly" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">
                Monatsplaner
              </a>
            </li>
            <li>
              <a href="/planner/goals" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">
                Zielplaner
              </a>
            </li>
            <li>
              <a href="/planner/habits" className="hover:underline px-3 py-2 rounded-md text-lg font-medium">
                Gewohnheiten
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default PlannerDropdown;
