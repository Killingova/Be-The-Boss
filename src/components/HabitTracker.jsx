import React from 'react';

function HabitTracker() {
  return (
    <section className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
      <h2 className="text-center text-orange-400 text-4xl md:text-8xl font-bold">Gewohnheitstracker</h2>
      <div className="text-center w-full pt-8 px-4">
        {/* Implementiere hier die spezifischen Funktionen des Habit Trackers */}
        <p className="text-stone-300 mt-2 max-w-2xl mx-auto">
          Hier können Sie Ihre Gewohnheiten verfolgen und neue Gewohnheiten definieren.
        </p>
      </div>
    </section>
  );
}

export default HabitTracker;
