'use client';
import { themeContext } from '@/contexts/ThemeProvider';
import React, { useContext } from 'react';

const Darkmode = ({ children }: { children: React.ReactNode }) => {
  const theme = useContext(themeContext);
  const darkclass = theme[0] === 'dark' ? 'dark' : '';
  return <div className={darkclass}>{children}</div>;
};

export default Darkmode;
