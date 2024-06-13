import React, { useState } from 'react';

export default function Login({ onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    onLogin(username, password);
  };

  return (
    <div className="relative bg-[#DAD3BE] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg w-full max-w-md mx-auto">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300">
        &#10005; {/* X icon */}
      </button>
      <h1 className="text-2xl font-bold text-center mb-6 text-[#6B8A7A]">Herzlich Willkommen</h1>
      <div className="mb-4">
        <label htmlFor="username" className="block text-stone-200 mb-2">
          Benutzername:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-[#FBBF24] rounded bg-[#6B8A7A] text-black"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-stone-200 mb-2">
          Passwort:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-[#FBBF24] rounded bg-[#6B8A7A] text-black"
        />
      </div>
      <div className="flex justify-between mb-6 text-sm">
        <a href="#" className="text-[#FBBF24] hover:underline">Passwort zurücksetzen</a>
        <a href="#" className="text-[#FBBF24] hover:underline">Registrieren</a>
      </div>
      <button
        type="button"
        className="w-full bg-[#FBBF24] text-black p-2 rounded hover:bg-[#6B8A7A] hover:text-white"
        onClick={handleLoginClick}
      >
        Login
      </button>
    </div>
  );
}
