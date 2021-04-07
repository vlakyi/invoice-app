import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import App from '../components/App';

it('renders App with Filter Component', () => {
  const { getByText, queryByTestId, getByTestId } = render(<App />);
  const filterHeader = getByText(/Filter/);
  expect(filterHeader).toBeInTheDocument();

  // Test filter toggle
  expect(queryByTestId('filter-overlay')).toBeNull();
  fireEvent.click(filterHeader);
  const filterOverlay = getByTestId('filter-overlay');
  expect(filterOverlay).toBeInTheDocument();
  expect(filterOverlay.children.length).toBeGreaterThan(0);

  // Test invoices filtering
  const invoicesCount = getByTestId('invoices-list').children.length;
  fireEvent.click(filterOverlay.children[0]);
  expect(getByTestId('invoices-list').children.length).toBeLessThan(invoicesCount);

  // Close invoices on mouse down outside
  fireEvent.mouseDown(document);
  expect(queryByTestId('filter-overlay')).toBeNull();
});
