import React, {useState} from 'react';
import {ThemeContext} from '../contexts/theme';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

//   const handleToggleTheme = () => {
//     if (theme.type === 'light') {
//       setTheme(darkTheme);
//     } else {
//       setTheme(lightTheme);
//     }
//   };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;