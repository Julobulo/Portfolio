import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1' },
  { id: 2, title: 'Project 2' },
  { id: 3, title: 'Project 3' },
  { id: 4, title: 'Project 4' },
  { id: 5, title: 'Project 5' },
  { id: 6, title: 'Project 6' },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleLeftClick = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full max-w-5xl">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(calc(-${selectedIndex} * 33.3333% + 33.3333%))` }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex-none w-1/3 p-2 transition-transform duration-300 transform cursor-pointer ${
                index === selectedIndex
                  ? 'scale-105 brightness-110'
                  : 'scale-95 brightness-75'
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center h-64">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={handleLeftClick}
          disabled={selectedIndex === 0}
          className="bg-gray-300 p-2 rounded-full disabled:opacity-50"
        >
          &#9664;
        </button>
        <button
          onClick={handleRightClick}
          disabled={selectedIndex === projects.length - 1}
          className="bg-gray-300 p-2 rounded-full disabled:opacity-50"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Projects;
