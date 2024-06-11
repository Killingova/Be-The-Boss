import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Selector from './components/Selector';
import WelcomeSection from './components/WelcomeSection';
import DailyPlanner from './components/DailyPlanner';
import WeeklyPlanner from './components/WeeklyPlanner';
import MonthlyPlanner from './components/MonthlyPlanner';
import GoalPlanner from './components/GoalPlanner';
import HabitTracker from './components/HabitTracker';
import TipsSection from './components/TipsSection';
import ReflectionSection from './components/ReflectionSection';

function App() {
  const [selectedSection, setSelectedSection] = useState('welcome');

  const renderSection = () => {
    switch (selectedSection) {
      case 'welcome':
        return <WelcomeSection />;
      case 'daily-planner':
        return <DailyPlanner />;
      case 'weekly-planner':
        return <WeeklyPlanner />;
      case 'monthly-planner':
        return <MonthlyPlanner />;
      case 'goal-planner':
        return <GoalPlanner />;
      case 'habit-tracker':
        return <HabitTracker />;
      case 'tips-section':
        return <TipsSection />;
      case 'reflection-section':
        return <ReflectionSection />;
      default:
        return <WelcomeSection />;
    }
  };

  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/Pfeillogo.png)`,
      }}
    >
      <div className="absolute inset-0 bg-green-950 opacity-65"></div>
      
      <Header />
      <Selector setSelectedSection={setSelectedSection} />

      <main className="relative z-3 flex flex-col items-center justify-center flex-1 pt-16 text-center">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
