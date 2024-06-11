import React, { useRef, useImperativeHandle } from 'react';

const Selector = React.forwardRef(({ setSelectedSection, selectedSection }, ref) => {
  const buttonRefs = useRef([]);

  useImperativeHandle(ref, () => ({
    highlightSelectedButton() {
      buttonRefs.current.forEach((btn) => {
        if (btn.innerText.toLowerCase() === selectedSection) {
          btn.classList.add('text-orange-400');
        } else {
          btn.classList.remove('text-orange-400');
        }
      });
    },
  }));

  const handleButtonClick = (section) => {
    setSelectedSection(section);
    buttonRefs.current.forEach((btn) => {
      if (btn.innerText.toLowerCase() === section) {
        btn.classList.add('text-orange-400');
      } else {
        btn.classList.remove('text-orange-400');
      }
    });
  };

  const sections = [
    'Willkommen',
    'Tagesplaner',
    'Wochenplaner',
    'Monatsplaner',
    'Zielplaner',
    'Gewohnheitstracker',
    'Tipps',
    'Reflexion',
    'Kalender',
    'Zeitplan',
  ];

  return (
    <nav className="w-48 p-4 border border-orange-400 rounded-md ml-4 flex flex-col items-center">
      <ul className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <li key={section}>
            <button
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => handleButtonClick(section.toLowerCase())}
              className={`hover:text-orange-400 px-2 ${selectedSection === section.toLowerCase() ? 'text-orange-400' : ''}`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Selector;
