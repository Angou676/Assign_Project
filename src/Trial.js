// src/components/Trial.js
import React, { useState } from 'react';

const Trial = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dashboardCards = [
    { title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { title: 'Card 3', content: 'Praesent auctor vestibulum sem.' },
    // Add more cards as needed
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Drawer */}
      <aside className={`bg-blue-500 w-1/4 p-4 ${isDrawerOpen ? 'block' : 'hidden'}`}>
        <div className="mb-4">
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleDrawer}
          >
            Close Drawer
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Sidebar Navigation</h2>
        {/* Add sidebar navigation links here */}
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white hover:underline">Dashboard</a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">Reports</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={`w-3/4 p-4 ${isDrawerOpen ? 'ml-1/4' : ''}`}>
        <button
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
        </button>
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="flex flex-wrap -mx-4">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Trial;
