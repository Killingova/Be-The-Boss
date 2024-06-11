import React, { useState } from 'react';

function WeeklyPlanner() {
  const [weeklyGoals, setWeeklyGoals] = useState(['']);
  const [weeklyTasks, setWeeklyTasks] = useState(['']);

  const handleGoalChange = (index, value) => {
    const newGoals = [...weeklyGoals];
    newGoals[index] = value;
    setWeeklyGoals(newGoals);
  };

  const handleTaskChange = (index, value) => {
    const newTasks = [...weeklyTasks];
    newTasks[index] = value;
    setWeeklyTasks(newTasks);
  };

  const addGoal = () => {
    setWeeklyGoals([...weeklyGoals, '']);
  };

  const addTask = () => {
    setWeeklyTasks([...weeklyTasks, '']);
  };

  const handleSave = () => {
    // Implementiere hier die Speicherung der Daten
    console.log({ weeklyGoals, weeklyTasks });
  };

  return (
    <section id="weekly-planner" className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
      <h2 className="text-center text-orange-400 text-4xl md:text-8xl font-bold">Wochenplaner</h2>
      <div className="text-center w-full pt-8 px-4">
        <div className="mb-4">
          <h3 className="text-stone-300 text-2xl font-bold">Wöchentliche Ziele</h3>
          {weeklyGoals.map((goal, index) => (
            <textarea
              key={index}
              value={goal}
              onChange={(e) => handleGoalChange(index, e.target.value)}
              className="border-2 border-bold-green p-2 rounded w-full h-20 shadow-lg mb-2"
              placeholder="Wöchentliches Ziel"
            />
          ))}
          <button onClick={addGoal} className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue shadow-lg">
            Ziel hinzufügen
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-stone-300 text-2xl font-bold">Wöchentliche Aufgaben</h3>
          {weeklyTasks.map((task, index) => (
            <textarea
              key={index}
              value={task}
              onChange={(e) => handleTaskChange(index, e.target.value)}
              className="border-2 border-earth-terracotta p-2 rounded w-full h-20 shadow-lg mb-2"
              placeholder="Wöchentliche Aufgabe"
            />
          ))}
          <button onClick={addTask} className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue shadow-lg">
            Aufgabe hinzufügen
          </button>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={handleSave} className="bg-bold-green text-white px-4 py-2 rounded hover:bg-bold-blue shadow-lg">
            Speichern
          </button>
        </div>
      </div>
    </section>
  );
}

export default WeeklyPlanner;
