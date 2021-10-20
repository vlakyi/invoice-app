import '@testing-library/jest-dom';
import { Route } from 'react-router-dom';
import { render, waitFor, windowResize, act } from '../../tests/setup';
// import { render } from '@testing-library/react';
import { RootState, initialState } from '../store';
import ViewInvoice from '../screens/ViewInvoice';

import invoices from '../../data.json';
import { formatInvoices } from '../utils/api';

const state: RootState = {
  ...initialState,
  InvoiceSlice: {
    ...initialState.InvoiceSlice,
    invoices: formatInvoices(invoices),
  },
};

it('renders View Invoice component for desktop view', async () => {
  const { getByTestId, queryByTestId, findByText, getByText } = render(
    <Route
      path='/invoice/:id'
      render={(props) => {
        return <ViewInvoice routeProps={props} />;
      }}
    />,
    {
      MemoryRouterOptions: { initialEntries: ['/invoice/XM9141'] },
    },
    state
  );

  // initialEntries={['/invoice/XM9141']}
  await waitFor(() => {
    expect(getByText('Go back')).toBeInTheDocument();
    expect(getByText('Mark as Paid')).toBeInTheDocument();

    expect(getByTestId('view-invoice-status-container')).toBeInTheDocument();
    expect(getByTestId('view-invoice-details-container')).toBeInTheDocument();

    // In the desktop view actions buttons should be inside status container instead of footer;
    expect(
      getByTestId('view-invoice-status-actions-container')
    ).toBeInTheDocument();
    expect(queryByTestId('view-invoice-footer')).toBeNull();
  });
});

it('renders View Invoice component for mobile view', () => {
  act(() => windowResize(360));
  const { getByTestId, queryByTestId, queryByText, getByText } = render(
    <Route
      path='/invoice/:id'
      render={(props) => {
        return <ViewInvoice routeProps={props} />;
      }}
    />,
    {
      MemoryRouterOptions: { initialEntries: ['/invoice/XM9141'] },
    },
    state
  );

  expect(getByText('Go back')).toBeInTheDocument();
  // Mark as Paid button text content should change to Paid for small screens.
  expect(queryByText('Mark as Paid')).toBeNull();
  expect(getByText('Paid')).toBeInTheDocument();

  expect(getByTestId('view-invoice-status-container')).toBeInTheDocument();
  expect(getByTestId('view-invoice-details-container')).toBeInTheDocument();

  // In the mobile view actions buttons shouldn't be inside footer only;
  expect(queryByTestId('view-invoice-status-actions-container')).toBeNull();
  expect(queryByTestId('view-invoice-footer')).toBeInTheDocument();
});
