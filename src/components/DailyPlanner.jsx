import React, { useState } from 'react';

function DailyPlanner({ onSave, onCancel }) {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10)); // Datum
  const [time, setTime] = useState(new Date().toLocaleTimeString()); // Uhrzeit
  const [note, setNote] = useState(''); // Notiz
  const [goals, setGoals] = useState(Array(1).fill('')); // Ziele
  const [priority, setPriority] = useState(null); // Priorität

  const handleDateChange = (e) => setDate(e.target.value); // Datum ändern
  const handleTimeChange = (e) => setTime(e.target.value); // Uhrzeit ändern
  const handleNoteChange = (e) => setNote(e.target.value); // Notiz ändern
  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals); // Ziel ändern
  };
  const handlePriorityChange = (value) => setPriority(value); // Priorität ändern

  const handleSave = () => {
    const data = { date, time, note, goals: goals[0], priority };
    onSave(data); // Daten speichern
  };

  const getDayOfWeek = (date) => {
    const days = ['SONNTAG', 'MONTAG', 'DIENSTAG', 'MITTWOCH', 'DONNERSTAG', 'FREITAG', 'SAMSTAG'];
    return days[new Date(date).getDay()]; // Wochentag ermitteln
  };

  return (
    <section className="flex flex-col items-center justify-between text-center p-4 min-h-screen bg-[#254336]">
      
      {/* Obere Überschrift */}
      <div className="self-start pl-4 pt-4 mb-4">
        <h2 className="text-[#FBBF24] text-2xl md:text-4xl font-semibold animate-pulse">
          TAGESPLANER
        </h2>
      </div>
      
      <div className="relative bg-[#DAD3BE] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg w-full max-w-3xl mx-auto p-8"> 
        
        {/* Hauptinhalt */}
        <div className="text-center w-full pt-4 px-4 mb-8">
          {/* Datum und Zeit */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-center">
            <div>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="border-2 border-[#FBBF24] bg-[#6B8A7A] p-2 rounded w-full shadow-lg text-[#B7B597]"
              />
            </div>
            <div>
              <p className="text-[#FBBF24] text-2xl">{getDayOfWeek(date)}</p>
            </div>
            <div>
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                className="border-2 border-[#FBBF24] bg-[#6B8A7A] p-2 rounded w-full shadow-lg text-[#B7B597]"
              />
            </div>
          </div>
          
          {/* Notiz */}
          <div className="mb-4">
            <textarea
              value={note}
              onChange={handleNoteChange}
              className="border-2 border-[#FBBF24] bg-[#6B8A7A] p-2 rounded w-full h-32 shadow-lg text-stone-200"
              placeholder="Notizinhalt"
            />
          </div>
          
          {/* Ziel */}
          <div className="mb-4">
            <textarea
              value={goals[0]}
              onChange={(e) => handleGoalChange(0, e.target.value)}
              className="border-2 border-[#FBBF24] bg-[#6B8A7A]  p-2 rounded w-full h-20 shadow-lg text-stone-200"
              placeholder="Tagesziel"
            />
          </div>
          
          {/* Priorität */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num} className="flex flex-col items-center mx-1">
                  <span className="text-black">{num}</span>
                  <div
                    onClick={() => handlePriorityChange(num)}
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 cursor-pointer ${priority === num ? 'bg-[#FBBF24]' : 'border-[#FBBF24]'}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSave}
              className="text-stone-200 hover:underline text-center rounded-md text-lg font-medium border border-green-400 px-4 py-2"
            >
              Speichern
            </button>
            <button
              onClick={onCancel}
              className="text-stone-200 hover:underline text-center rounded-md text-lg font-medium border border-red-500 px-4 py-2 ml-4"
            >
              Abbrechen
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default DailyPlanner;
