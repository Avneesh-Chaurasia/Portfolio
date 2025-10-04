import React, { useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  useEffect(() => {
    // Replace 'header' selector with your actual navbar selector if different (e.g. '.navbar' or '#navbar')
    const headerSelectorCandidates = ['header', '.navbar', '#navbar', '.site-header'];
    const findHeader = () => headerSelectorCandidates.map(s => document.querySelector(s)).find(Boolean);

    const setScrollMargins = () => {
      const header = findHeader();
      const headerHeight = header ? header.offsetHeight : 0;
      const extra = 16; // px extra spacing under header (adjust as needed)
      const offset = headerHeight + extra;

      document.querySelectorAll('section[id]').forEach(sec => {
        sec.style.scrollMarginTop = `${offset}px`;
      });
    };

    setScrollMargins();
    window.addEventListener('resize', setScrollMargins);
    // If you use client-side routing, also call setScrollMargins on route change if needed.
    return () => window.removeEventListener('resize', setScrollMargins);
  }, []);

  const timelineData = [
    {
      title: 'B.E. in Computer Science and Engineering (AIML)',
      college: "Anjuman-I-Islam's Kalsekar Technical Campus",
      location: 'Navi Mumbai, Maharashtra',
      period: 'Current',
      side: 'right',
    },
    {
      title: 'Higher Secondary Section (Science)',
      college: 'Wilson College',
      location: 'Mumbai, Maharashtra',
      period: '2021–23',
      side: 'left',
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-900 text-white px-4 sm:px-6 py-8 flex flex-col items-center justify-start min-h-screen scroll-mt-24"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-4 mt-0">
        Education
      </h2>

      <div className="relative max-w-6xl w-full mt-0">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-lime-300 via-blue-400 to-purple-500 shadow-[0_0_25px_rgba(100,255,100,0.5)] rounded-full"></div>

        <div className="flex flex-col gap-16 mt-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-center ${
                item.side === 'right' ? 'justify-end text-right' : 'justify-start text-left'
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-lime-300 to-blue-400 rounded-full border-2 border-gray-800 shadow-[0_0_15px_rgba(100,255,100,0.5)] z-10"></div>

              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  item.side === 'right' ? 'right-[calc(50%+1.8rem)]' : 'left-[calc(50%+1.8rem)]'
                } bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-md`}
              >
                {item.period}
              </div>

              <div
                className={`bg-gray-800 border border-gray-700 rounded-xl p-6 w-full sm:w-[43%] relative ${
                  item.side === 'right' ? 'sm:ml-[1.8rem]' : 'sm:mr-[1.8rem]'
                }`}
              >
                <div className="flex items-center mb-3">
                  <FaGraduationCap className="text-lime-300 text-lg sm:text-xl mr-2" />
                  <h3 className="text-lg sm:text-xl font-bold leading-snug">{item.title}</h3>
                </div>

                <p className="text-sm text-gray-400">{item.college}</p>
                <p className="text-sm text-gray-400">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
