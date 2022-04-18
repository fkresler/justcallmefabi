import * as React from 'react';
import { ThemeContext } from './ThemeProvider';
import { Toggle } from './Toggle';

export const ThemeSelect: React.FC = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Toggle
      label="theme-toggle"
      isActive={theme === 'dark'}
      onToggle={toggleTheme}
    />
  );
};

export default ThemeSelect;
