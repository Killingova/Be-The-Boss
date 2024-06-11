// src/components/planners/MonthlyPlanner.jsx
import React, { useState } from 'react';

const MonthlyPlanner = () => {
  const [monthOverview, setMonthOverview] = useState('');
  const [monthlyGoals, setMonthlyGoals] = useState('');
  const [importantDates, setImportantDates] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Monatsplaner</h2>
      <label>
        Monatsübersicht:
        <textarea
          value={monthOverview}
          onChange={(e) => setMonthOverview(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Monatliche Ziele:
        <textarea
          value={monthlyGoals}
          onChange={(e) => setMonthlyGoals(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Wichtige Termine:
        <textarea
          value={importantDates}
          onChange={(e) => setImportantDates(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Notizen:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default MonthlyPlanner;
