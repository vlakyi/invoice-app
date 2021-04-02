import { useState, useLayoutEffect } from 'react';

const useTheme = (isDarkDefault = false): [boolean, () => void] => {
  const [isDark, setDarkTheme] = useState(isDarkDefault);
  const toggleTheme = () => {
    setDarkTheme(!isDark);
  };

  useLayoutEffect(() => {
    if (isDark) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, [isDark]);
  return [isDark, toggleTheme];
};

export default useTheme;
