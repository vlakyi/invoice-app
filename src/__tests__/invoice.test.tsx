import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import InvoiceMobile from '../components/InvoiceMobile';
import InvoiceDesktop from '../components/InvoiceDesktop';
import { InvoiceObjectFormated } from '../utils/types';

const testInvoice: InvoiceObjectFormated = {
  clientAddress: { street: '106 Kendell Street', city: 'Sharrington', postCode: 'NR24 5WQ', country: 'United Kingdom' },
  clientEmail: 'jensenh@mail.com',
  clientName: 'Jensen Huang',
  createdAt: '2021-08-18',
  description: 'Re-branding',
  id: 'RT3080',
  items: [{ name: 'Brand Guidelines', quantity: 1, price: 1800.9, total: 1800.9 }],
  paymentDue: '19 Aug 2021',
  paymentTerms: 1,
  senderAddress: { street: '19 Union Terrace', city: 'London', postCode: 'E1 3EZ', country: 'United Kingdom' },
  status: 'Paid',
  total: '£1,800.90'
};

it('renders Invoice Mobile component with all needed information', async () => {
  // Check if id, paymentDue, total, clientName and status are visible
  const { getByText, queryByText } = render(<InvoiceMobile invoice={testInvoice} />);
  expect(getByText(`${testInvoice.id}`)).toBeInTheDocument();
  expect(getByText(`Due ${testInvoice.paymentDue}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.total}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.clientName}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.status}`)).toBeInTheDocument();

  // Check if additonal information is not visible
  expect(queryByText(`${testInvoice.description}`)).toBeNull();
});

it('renders Invoice Desktop component with all needed information', async () => {
  // Check if id, paymentDue, total, clientName and status are visible
  const { getByText, queryByText } = render(<InvoiceDesktop invoice={testInvoice} />);
  expect(getByText(`${testInvoice.id}`)).toBeInTheDocument();
  expect(getByText(`Due ${testInvoice.paymentDue}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.total}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.clientName}`)).toBeInTheDocument();
  expect(getByText(`${testInvoice.status}`)).toBeInTheDocument();

  // Check if additonal information is not visible
  expect(queryByText(`${testInvoice.description}`)).toBeNull();
});
