import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle the 'dark' class on the HTML element and store the preference in localStorage
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <div>
      <nav className="py-8 md:px-32 relative dark:bg-gray-900">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Social Media Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Total Followers: 23,004
            </p>
          </div>

          {/* Mobile layout: Line and toggle switch */}
          <div className="block md:hidden w-full flex-col items-center mt-4">
            <div className="w-full border-b border-gray-300 dark:border-gray-600 mb-2"></div>
            <div className="toggle flex items-center px-8 space-x-4">
              <span className="text-gray-800 dark:text-gray-200">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
              <button
                onClick={toggleDarkMode}
                className={`relative w-16 h-8 rounded-full flex items-center p-1 ${
                  darkMode
                    ? 'bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]'
                    : 'bg-[hsl(230,22%,74%)]'
                }`}
              >
                <div
                  className={`absolute w-7 h-7 bg-white dark:bg-blue-950 rounded-full transition-transform duration-300 ${
                    darkMode ? 'translate-x-8' : ''
                  }`}
                ></div>
              </button>
            </div>
          </div>

          {/* Desktop layout: Text and toggle switch */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-800 dark:text-gray-200">
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <button
              onClick={toggleDarkMode}
              className={`relative w-16 h-8 rounded-full flex items-center p-1 ${
                darkMode
                  ? 'bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]'
                  : 'bg-[hsl(230,22%,74%)]'
              }`}
            >
              <div
                className={`absolute w-7 h-7 bg-white dark:bg-blue-950 rounded-full transition-transform duration-300 ${
                  darkMode ? 'translate-x-8' : ''
                }`}
              ></div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
