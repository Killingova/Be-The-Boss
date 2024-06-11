// src/components/planners/DailyPlanner.jsx
import React, { useState } from 'react';

const DailyPlanner = () => {
  const [date, setDate] = useState('');
  const [priorities, setPriorities] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [notes, setNotes] = useState('');
  const [reminders, setReminders] = useState('');
  const [gratitude, setGratitude] = useState('');

  const handleAddToDo = () => {
    setToDoList([...toDoList, { task: '', completed: false }]);
  };

  const handleToDoChange = (index, value) => {
    const newToDoList = [...toDoList];
    newToDoList[index].task = value;
    setToDoList(newToDoList);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Tagesplaner</h2>
      <label>
        Datum:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Prioritäten:
        <textarea
          value={priorities}
          onChange={(e) => setPriorities(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        To-Do-Liste:
        {toDoList.map((toDo, index) => (
          <input
            key={index}
            type="text"
            value={toDo.task}
            onChange={(e) => handleToDoChange(index, e.target.value)}
            className="block w-full mt-1 mb-4 p-2 border rounded"
          />
        ))}
        <button onClick={handleAddToDo} className="bg-blue-500 text-white p-2 rounded">Aufgabe hinzufügen</button>
      </label>
      <label>
        Notizen:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Erinnerungen:
        <textarea
          value={reminders}
          onChange={(e) => setReminders(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Dankbarkeit:
        <textarea
          value={gratitude}
          onChange={(e) => setGratitude(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default DailyPlanner;
