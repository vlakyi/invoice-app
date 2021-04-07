import { fireEvent, render } from '@testing-library/react';

import useTheme from '../src/hooks/useTheme';

interface Props {
  isDarkDefault?: boolean;
}

const ThemedComponent = ({ isDarkDefault = false }: Props) => {
  const [isDark, toggleDark] = useTheme(isDarkDefault);
  return (
    <div>
      <span>{isDark}</span>
      <button onClick={toggleDark}>Toggle</button>
    </div>
  );
};

it('switches theme from light to dark and vice versa', () => {
  const { getByText } = render(<ThemedComponent />);
  expect(document.body.classList.length).toBe(0);

  fireEvent.click(getByText('Toggle'));
  expect(document.body.classList.length).toBe(1);
  expect(document.body.classList[0]).toBe('theme-dark');
});
