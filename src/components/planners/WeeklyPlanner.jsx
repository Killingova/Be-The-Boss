// src/components/planners/WeeklyPlanner.jsx
import React, { useState } from 'react';

const WeeklyPlanner = () => {
  const [weekOverview, setWeekOverview] = useState('');
  const [weeklyGoals, setWeeklyGoals] = useState('');
  const [weeklyToDoList, setWeeklyToDoList] = useState([]);
  const [weeklyReview, setWeeklyReview] = useState('');

  const handleAddWeeklyToDo = () => {
    setWeeklyToDoList([...weeklyToDoList, { task: '', completed: false }]);
  };

  const handleWeeklyToDoChange = (index, value) => {
    const newWeeklyToDoList = [...weeklyToDoList];
    newWeeklyToDoList[index].task = value;
    setWeeklyToDoList(newWeeklyToDoList);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Wochenplaner</h2>
      <label>
        Wochenübersicht:
        <textarea
          value={weekOverview}
          onChange={(e) => setWeekOverview(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Wöchentliche Ziele:
        <textarea
          value={weeklyGoals}
          onChange={(e) => setWeeklyGoals(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Wöchentliche To-Do-Liste:
        {weeklyToDoList.map((toDo, index) => (
          <input
            key={index}
            type="text"
            value={toDo.task}
            onChange={(e) => handleWeeklyToDoChange(index, e.target.value)}
            className="block w-full mt-1 mb-4 p-2 border rounded"
          />
        ))}
        <button onClick={handleAddWeeklyToDo} className="bg-blue-500 text-white p-2 rounded">Aufgabe hinzufügen</button>
      </label>
      <label>
        Wochenrückblick:
        <textarea
          value={weeklyReview}
          onChange={(e) => setWeeklyReview(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default WeeklyPlanner;
