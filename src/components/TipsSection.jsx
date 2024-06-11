import React, { useRef } from 'react';

const questions = [
  "Was ist dein Hauptziel für heute?",
  "Welche Aufgaben müssen erledigt werden?",
  "Welche Prioritäten hast du heute?",
  "Was sind deine langfristigen Ziele?",
  "Was kannst du heute tun, um deine Ziele zu erreichen?",
];

function TipsSection() {
  const currentQuestion = useRef(Math.floor(Math.random() * questions.length)); // Zufällige Frage

  return (
    <section className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
      <h2 className="text-center text-orange-400 text-4xl md:text-8xl font-bold">Produktivitätstipps</h2>
      <div className="text-center w-full pt-8 px-4">
        <p className="text-stone-300 mt-2 max-w-2xl mx-auto">
          Erhalten Sie nützliche Tipps und Techniken zur Verbesserung Ihrer Produktivität und zur Bekämpfung von Prokrastination.
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-bold-green mb-4">Tagesfrage</h3>
          <p className="text-stone-800">{questions[currentQuestion.current]}</p>
        </div>
      </div>
    </section>
  );
}

export default TipsSection;
