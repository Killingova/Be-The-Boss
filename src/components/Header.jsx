import React from 'react';

function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between text-white p-4 w-full">
      <h1 className="text-center text-orange-400 text-4xl md:text-8xl font-bold">CYRL NOTE</h1>
      <div className="flex flex-col items-end space-y-2 relative">
        <button className="hover:underline px-4 py-2 rounded-md text-lg text-orange-400 font-medium border border-orange-500 w-24 md:w-48">
          Anmelden
        </button>
      </div>
    </header>
  );
}

export default Header;
