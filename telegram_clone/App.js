
import React from 'react';
import StackNavigator from './src/navigator/StackNavigator';
import ThemeProvider from './src/providers/ThemeProvider';


const App = () => {

  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>

  );
};


export default App;
