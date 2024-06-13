import React, { useState, useRef, useEffect } from 'react';
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
import KalenderBalken from './components/KalenderBalken';
import Login from './components/Login';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const zeitplanRef = useRef(null);
  const loginDialog = useRef(null);

  useEffect(() => {
    if (selectedSection === 'zeitplan' && zeitplanRef.current) {
      zeitplanRef.current.scrollToCurrentTime();
    }
  }, [selectedSection]);

  const handleSave = () => {
    const data = zeitplanRef.current.save();
    console.log('Saved data:', data);
    // Hier können Sie die Logik zur Speicherung der Daten hinzufügen
  };

  const handleCancel = () => {
    console.log('Abgebrochen');
  };

  const handleLoginClick = () => {
    loginDialog.current.showModal();
    setErrorMessage('');
  };

  const handleCloseLogin = () => {
    loginDialog.current.close();
    setSelectedSection('willkommen');
  };

  const handleLogin = (username, password) => {
    if (username && password.length >= 6) {
      setIsLoggedIn(true);
      setUsername(username);
      loginDialog.current.close();
      setSelectedSection('willkommen');
    } else {
      setErrorMessage('Benutzername oder Passwort ist ungültig.');
    }
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUsername('');
    setSelectedSection('willkommen');
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

      <Header onLoginClick={handleLoginClick} />
      <div className="relative z-10 flex flex-1 w-full text">
        <KalenderBalken />
        <div className="flex-1 p-4 bg-stone-900 bg-opacity-30 rounded-lg">
          {renderSection()}
        </div>
        <Selector setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
      </div>
      <Footer />
      <dialog ref={loginDialog} className="rounded-lg p-4 dark:bg-gray-800 dark:text-white">
        <Login onClose={handleCloseLogin} onLogin={handleLogin} />
        {errorMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
              <p>{errorMessage}</p>
              <button onClick={() => setErrorMessage('')} className="mt-4 bg-bold-green text-white px-4 py-2 rounded">
                Schließen
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default App;
