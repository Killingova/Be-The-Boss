import React from 'react';

const times = Array.from({ length: 24 }, (_, i) => i); // Stunden von 0 bis 23
const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return date;
});

function Kalender() {
  return (
    <div className="overflow-auto w-full h-screen flex justify-center items-center">
      <div className="relative grid grid-rows-24 grid-cols-8 w-full">
        {/* Kopfzeile für die Tage der Woche */}
        {days.map((date, index) => (
          <div key={index} className={`col-start-${index + 2} col-end-${index + 3} text-center font-bold`}>
            <div className="border-b border-gray-300 p-2">
              {date.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric' })}
            </div>
          </div>
        ))}

        {/* Zeilen für jede Stunde des Tages */}
        {times.map((time, timeIndex) => (
          <React.Fragment key={timeIndex}>
            {/* Uhrzeiten links */}
            <div className={`row-start-${timeIndex + 1} row-end-${timeIndex + 2} col-start-1 col-end-2 text-center font-bold`}>
              <div className="border-r border-gray-300 p-2">
                {`${time}:00`}
              </div>
            </div>
            {/* Zellen für jede Stunde eines jeden Tages */}
            {days.map((date, dayIndex) => (
              <div
                key={dayIndex}
                className={`row-start-${timeIndex + 1} row-end-${timeIndex + 2} col-start-${dayIndex + 2} col-end-${dayIndex + 3} border border-gray-300 p-2 flex items-center justify-center`}
              >
                {/* Hier könnten Ereignisse angezeigt werden */}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Kalender;
