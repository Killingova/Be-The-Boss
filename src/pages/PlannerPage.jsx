// src/pages/PlannerPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import DailyPlanner from '../components/planners/DailyPlanner';
import WeeklyPlanner from '../components/planners/WeeklyPlanner';
import MonthlyPlanner from '../components/planners/MonthlyPlanner';
import GoalPlanner from '../components/planners/GoalPlanner';
import HabitTracker from '../components/planners/HabitTracker';

const PlannerPage = () => {
  const { type } = useParams();

  const renderPlanner = () => {
    switch (type) {
      case 'daily':
        return <DailyPlanner />;
      case 'weekly':
        return <WeeklyPlanner />;
      case 'monthly':
        return <MonthlyPlanner />;
      case 'goals':
        return <GoalPlanner />;
      case 'habits':
        return <HabitTracker />;
      default:
        return <div>Planer nicht gefunden</div>;
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {renderPlanner()}
    </div>
  );
};

export default PlannerPage;
