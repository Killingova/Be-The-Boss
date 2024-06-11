// src/components/planners/GoalPlanner.jsx
import React, { useState } from 'react';

const GoalPlanner = () => {
  const [longTermGoals, setLongTermGoals] = useState('');
  const [milestones, setMilestones] = useState('');
  const [actionPlan, setActionPlan] = useState('');

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Zielplaner</h2>
      <label>
        Langfristige Ziele:
        <textarea
          value={longTermGoals}
          onChange={(e) => setLongTermGoals(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Meilensteine:
        <textarea
          value={milestones}
          onChange={(e) => setMilestones(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
      <label>
        Aktionsplan:
        <textarea
          value={actionPlan}
          onChange={(e) => setActionPlan(e.target.value)}
          className="block w-full mt-1 mb-4 p-2 border rounded"
        />
      </label>
    </div>
  );
};

export default GoalPlanner;
