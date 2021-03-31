import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../components/App/App';

it('initial test', () => {
  expect('1234').toBe('1234');
});

it('initial test with DOM', async () => {
  const { getByText } = render(<App />);
  const header = getByText('Hello World');
  expect(header).toBeInTheDocument();
});
