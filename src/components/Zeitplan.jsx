import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react'; // Beispielhafte Symbole

const times = Array.from({ length: 24 }, (_, i) => i); // Stunden von 0 bis 23
const days = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return date;
});

const getEventIcon = (priority) => {
  switch (priority) {
    case 1:
      return <CheckCircle className="text-green-500" />;
    case 2:
      return <AlertCircle className="text-yellow-500" />;
    case 3:
      return <Info className="text-red-500" />;
    default:
      return null;
  }
};

const Zeitplan = forwardRef(({ events }, ref) => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [note, setNote] = useState('');

  useImperativeHandle(ref, () => ({
    save: () => {
      const data = {
        date,
        time,
        note,
      };
      console.log('Data to save:', data);
      return data;
    },
  }));

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

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
            {/* Ereignisse für jede Stunde eines jeden Tages */}
            {days.map((date, dayIndex) => (
              <div
                key={dayIndex}
                className={`row-start-${timeIndex + 1} row-end-${timeIndex + 2} col-start-${dayIndex + 2} col-end-${dayIndex + 3} border border-gray-300 p-2 flex items-center justify-center`}
              >
                {events[date.toISOString().split('T')[0]]?.[`${time}:00`] ? (
                  <div className="flex items-center space-x-2">
                    <span>{events[date.toISOString().split('T')[0]][`${time}:00`].title}</span>
                    {getEventIcon(events[date.toISOString().split('T')[0]][`${time}:00`].priority)}
                  </div>
                ) : null}
              </div>
            ))}
          </React.Fragment>
        ))}

        {/* Zentrierte Textarea */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border-2 border-gray-300 p-2 rounded mb-2"
            />
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="border-2 border-gray-300 p-2 rounded mb-2"
            />
            <textarea
              value={note}
              onChange={handleNoteChange}
              className="border-2 border-gray-300 p-2 rounded w-2/3 h-1/3 shadow-lg"
              placeholder="Notizinhalt"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Zeitplan;
