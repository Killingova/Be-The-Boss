import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const times = Array.from({ length: 24 }, (_, i) => i); // Stunden von 0 bis 23
const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i - 3); // Aktuellen Tag in der Mitte der Woche
  return date;
});

const Zeitplan = forwardRef((props, ref) => {
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToCurrentTime: () => {
      if (containerRef.current) {
        const currentHour = new Date().getHours();
        const hourRow = times.findIndex((time) => time === currentHour);
        if (hourRow !== -1) {
          const rowHeight = 50; // Assuming each hour row is 50px tall
          containerRef.current.scrollTop = hourRow * rowHeight;
        }
      }
    },
  }));

  return (
    <div ref={containerRef} className="w-full h-screen flex justify-center items-center">
      <div className="relative grid grid-rows-24 grid-cols-8 w-full h-full">
        {/* Kopfzeile für die Tage der Woche */}
        <div className="col-start-2 col-end-9 grid grid-cols-7 gap-0 rounded bg-orange-950 bg-opacity-20 text-stone-300">
          {days.map((date, index) => (
            <div key={index} className="text-center font-bold">
              <div className="border-b border-orange-400 border-opacity-20 p-1">
                {date.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric' })}
              </div>
            </div>
          ))}
        </div>

        {/* Zeilen für jede Stunde des Tages */}
        {times.map((time, timeIndex) => (
          <React.Fragment key={timeIndex}>
            {/* Uhrzeiten links */}
            <div className={`row-start-${timeIndex + 2} row-end-${timeIndex + 3} col-start-1 col-end-2 text-center font-bold`}>
              <div className="border-r border-orange-400 border-opacity-20 p-1 rounded bg-orange-950 bg-opacity-20 text-stone-300">
                {`${time}:00`}
              </div>
            </div>
            {/* Leere Zellen für jede Stunde eines jeden Tages */}
            {days.map((date, dayIndex) => (
              <div
                key={dayIndex}
                className={`row-start-${timeIndex + 2} row-end-${timeIndex + 3} col-start-${dayIndex + 2} col-end-${dayIndex + 3} border border-orange-400 border-opacity-20  rounded p-1 flex items-center justify-center`}
              >
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export default Zeitplan;
