import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react';

const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

const KalenderBalken = forwardRef(({ highlightToday = true }, ref) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentDateDisplayRef = useRef(null);

  const renderMonth = (month) => {
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);

    const daysArray = [];
    const paddingDays = start.getDay();
    for (let i = 0; i < paddingDays; i++) {
      daysArray.push(<div key={`empty-${i}`} className="day-cell"></div>);
    }

    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      const isToday = date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
      const dayClass = isToday && highlightToday ? 'day-number today' : 'day-number';
      daysArray.push(
        <div key={date} className="day-cell">
          <div className={dayClass}>{date.getDate()}</div>
        </div>
      );
    }

    return daysArray;
  };

  const updateCalendar = () => {
    if (currentDateDisplayRef.current) {
      currentDateDisplayRef.current.textContent = currentMonth.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  };

  useImperativeHandle(ref, () => ({
    updateCalendar: () => {
      updateCalendar();
    },
    setCurrentMonth: (newMonth) => {
      setCurrentMonth(newMonth);
      updateCalendar();
    },
  }));

  return (
    <div className="calendar-container flex flex-col items-center p-4 text-[#B7B597]">
      <div className="date-display" ref={currentDateDisplayRef}></div>
      <div className="month-container flex flex-col items-center">
        <div className="calendar-header">{`${months[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`}</div>
        <div className="weekdays grid grid-cols-7 gap-2 text-center">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days-grid grid grid-cols-7 gap-2 text-center">
          {renderMonth(currentMonth)}
        </div>
      </div>
    </div>
  );
});

export default KalenderBalken;
