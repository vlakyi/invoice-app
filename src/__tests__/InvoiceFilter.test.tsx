import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';

import App from '../components/App';
import { windowResize } from '../../tests/setup';

it('renders InvoiceFilter component for mobile and desktop resolution', () => {
  const { getByText, rerender } = render(<App />);
  expect(getByText(/(There are ?\d+ total invoices)/)).toBeInTheDocument();

  act(() => windowResize(320));
  rerender(<App />);
  expect(getByText(/(\d+ invoices)/)).toBeInTheDocument();
});
