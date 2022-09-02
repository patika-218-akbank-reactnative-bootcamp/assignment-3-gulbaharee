import React, {useState} from 'react';
import {ThemeContext} from '../contexts/theme';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme,toggleTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: handleToggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;