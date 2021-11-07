import '@testing-library/jest-dom';

import App from '../components/App';
import { windowResize, render, act } from '../../tests/setup';

it('renders InvoiceFilter component for mobile and desktop resolution', async () => {
  const { findByText, rerender } = render(<App />);
  expect(
    await findByText(/(There are ?\d+ total invoices)/)
  ).toBeInTheDocument();

  act(() => windowResize(320));
  rerender(<App />);
  expect(await findByText(/(\d+ invoices)/)).toBeInTheDocument();
});
