'use client';
import React, { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { themeContext } from '@/contexts/ThemeProvider';

const DarkmodeButton: React.FC = () => {
  const theme = useContext(themeContext);

  const toggleTheme = () => {
    if (theme[0] === 'dark') {
      theme[1]('light');
    } else {
      theme[1]('dark');
    }
  };

  return (
    <div className="">
      <button onClick={toggleTheme}>
        {theme[0] === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default DarkmodeButton;
