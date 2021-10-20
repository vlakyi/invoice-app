import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '../../tests/setup';
import App from '../components/App';

it('checks if user can switch theme', async () => {
  render(<App />);
  const moonIcon = screen.getByTestId('moon-icon');
  expect(moonIcon).toBeInTheDocument();

  fireEvent.click(moonIcon);
  const sunIcon = screen.getByTestId('sun-icon');
  expect(sunIcon).toBeInTheDocument();
});
