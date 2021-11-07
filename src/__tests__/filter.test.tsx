import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '../../tests/setup';
import { RootState, initialState } from '../store';
import MainScreen from '../screens/MainScreen';

import invoices from '../../data.json';
import { formatInvoices } from '../utils/api';

const state: RootState = {
  ...initialState,
  InvoiceSlice: {
    ...initialState.InvoiceSlice,
    invoices: formatInvoices(invoices),
  },
};

it('renders MainScreen with Filter Component', async () => {
  const { getByText, queryByText, queryByTestId, getByTestId } = render(
    <MainScreen />,
    undefined,
    state
  );

  const filterHeader = getByText(/Filter/);

  await waitFor(() => {
    expect(queryByText(/Filter/)).not.toBeNull();
  });

  // filter is closed
  expect(queryByTestId('filter-overlay')).not.toBeInTheDocument();

  // try to toggle filter
  fireEvent.click(filterHeader);

  await waitFor(() => {
    const filterOverlay = getByTestId('filter-overlay');
    expect(filterOverlay).toBeInTheDocument();
    expect(filterOverlay.children.length).toBeGreaterThan(0);
  });

  // Test invoices filtering
  await waitFor(() => {
    const invoicesCount = getByTestId('invoices-list').children.length;

    fireEvent.click(getByTestId('filter-overlay').children[0]);
    expect(getByTestId('invoices-list').children.length).toBeLessThan(
      invoicesCount
    );
  });

  // Close invoices on mouse down outside
  fireEvent.mouseDown(document);
  await waitFor(() => expect(queryByTestId('filter-overlay')).toBeNull());
});
