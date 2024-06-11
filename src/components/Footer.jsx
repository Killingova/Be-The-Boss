// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
