import React from 'react';
import { IconContext } from 'react-icons';

export type AvailableThemes = 'light' | 'dark';

export type ThemeData = {
  theme: AvailableThemes;
  setTheme: (theme: AvailableThemes) => void;
};

export const ThemeContext = React.createContext<ThemeData>({
  theme: 'dark',
  setTheme: () => {},
});

const defaultStyles = {
  color: 'var(--text-primary)',
};

const defaultIconStyles = {
  color: 'var(--text-primary)',
  size: '2rem',
};

export const ThemeProvider: React.FC = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = React.useState<AvailableThemes>(
    defaultDark ? 'dark' : 'light',
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <IconContext.Provider value={defaultIconStyles}>
        <div data-theme={theme} style={defaultStyles}>
          {children}
        </div>
      </IconContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
