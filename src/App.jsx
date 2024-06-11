import React, { useState, useRef } from 'react';
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
import Zeitplan from './components/Zeitplan';

const sampleEvents = {
  '2024-06-19': {
    '9:00': { title: 'Meeting', priority: 1 },
    '14:00': { title: 'Projektarbeit', priority: 2 },
  },
  '2024-06-20': {
    '11:00': { title: 'Workshop', priority: 3 },
  },
  // Weitere Beispielereignisse hinzufügen
};

function App() {
  const [selectedSection, setSelectedSection] = useState('willkommen');
  const zeitplanRef = useRef(null);

  const handleSave = () => {
    const data = zeitplanRef.current.save();
    console.log('Saved data:', data);
    // Hier können Sie die Logik zur Speicherung der Daten hinzufügen
  };

  const handleCancel = () => {
    console.log('Abgebrochen');
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'willkommen':
        return <WelcomeSection />;
      case 'tagesplaner':
        return <DailyPlanner />;
      case 'wochenplaner':
        return <WeeklyPlanner />;
      case 'monatsplaner':
        return <MonthlyPlanner />;
      case 'zielplaner':
        return <GoalPlanner />;
      case 'gewohnheitstracker':
        return <HabitTracker />;
      case 'tipps':
        return <TipsSection />;
      case 'reflexion':
        return <ReflectionSection />;
      case 'zeitplan':
        return <Zeitplan ref={zeitplanRef} events={sampleEvents} />;
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
      <div className="relative z-10 px-4 flex flex-1 w-full">
        <div className="flex-1 p-4 mt-4 bg-yellow-900 bg-opacity-30 rounded-lg">
          {renderSection()}
        </div>
        <Selector setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
