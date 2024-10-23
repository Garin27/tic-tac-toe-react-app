


/*import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    console.log('Updated theme: ', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeValues = {
    colors: {
      text: theme === 'light' ? '#000000' : '#ffffff',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeValues }}>
      {children}
    </ThemeContext.Provider>
  );
}*/


// "light" ===lightmode, "dark" ===darkmode
import { useState, createContext } from 'react';

export const ThemeContext = createContext({

});

export function ThemeContextProvider ({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
    
  )
}

