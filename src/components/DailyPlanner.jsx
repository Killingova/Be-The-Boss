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
    
      <div className="p-8  max-w-5xl w-full mx-4 mt-16 mb-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-center bg">
          <div>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border-2 border-earth-terracotta p-2 rounded w-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-earth-terracotta text-4xl">{getDayOfWeek(date)}</p>
          </div>
          <div>
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="border-2 border-earth-terracotta p-2 rounded w-full shadow-lg"
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            value={note}
            onChange={handleNoteChange}
            className="border-2 border-bold-green p-2 rounded w-full h-32 shadow-lg"
            placeholder="Notizinhalt"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={goals[0]}
            onChange={(e) => handleGoalChange(0, e.target.value)}
            className="border-2 border-earth-terracotta p-2 rounded w-full h-20 shadow-lg"
            placeholder="Tagesziel"
          />
        </div>
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div key={num} className="flex flex-col items-center mx-1">
                <span>{num}</span>
                <div
                  onClick={() => handlePriorityChange(num)}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 cursor-pointer ${priority === num ? 'bg-bold-green' : 'bg-white'}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSave}
            className="bg-bold-green text-black px-4 py-2 rounded hover:bg-bold-blue shadow-lg"
          >
            Speichern
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 shadow-lg"
          >
            Abbrechen
          </button>
        </div>
      </div>
  
  );
}

export default DailyPlanner;
