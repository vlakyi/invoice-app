import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ViewInvoice from '../screens/ViewInvoice';

import dataJSON from '../../data.json';
import { formatInvoices } from '../utils/api';
import { windowResize } from '../../tests/setup';

const formattedInvoices = formatInvoices(dataJSON);

it('renders View Invoice component for desktop view', () => {
  const { getByText, getByTestId, queryByTestId } = render(
    <MemoryRouter initialEntries={['/invoice/XM9141']}>
      <Route path='/invoice/:id' render={(props) => <ViewInvoice routeProps={props} />} />
    </MemoryRouter>
  );

  expect(getByText('Go back')).toBeInTheDocument();
  expect(getByText('Mark as Paid')).toBeInTheDocument();

  expect(getByTestId('view-invoice-status-container')).toBeInTheDocument();
  expect(getByTestId('view-invoice-details-container')).toBeInTheDocument();

  // In the desktop view actions buttons should be inside status container instead of footer;
  expect(getByTestId('view-invoice-status-actions-container')).toBeInTheDocument();
  expect(queryByTestId('view-invoice-footer')).toBeNull();
});

it('renders View Invoice component for mobile view', () => {
  act(() => windowResize(360));
  const { getByText, queryByText, getByTestId, queryByTestId } = render(
    <MemoryRouter initialEntries={['/invoice/XM9141']}>
      <Route path='/invoice/:id' render={(props) => <ViewInvoice routeProps={props} />} />
    </MemoryRouter>
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
