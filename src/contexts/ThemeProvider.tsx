'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const themeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(['', () => {}]);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useState('dark');
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
