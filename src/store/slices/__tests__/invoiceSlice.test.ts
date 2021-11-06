import { formatInvoices } from '../../../utils/api';
import reducer, {
  initialState,
  filterInvoices,
  changeInvoiceStatus,
  initialFilters,
} from '../invoiceSlice';

const testInvoices = [
  {
    id: 'RT3080',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  },
  {
    id: 'XM9141',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  },
  {
    id: 'RG0314',
    createdAt: '2021-09-24',
    paymentDue: '2021-10-01',
    description: 'Website Redesign',
    paymentTerms: 7,
    clientName: 'John Morrison',
    clientEmail: 'jm@myco.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '79 Dover Road',
      city: 'Westhall',
      postCode: 'IP19 3PF',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Website Redesign',
        quantity: 1,
        price: 14002.33,
        total: 14002.33,
      },
    ],
    total: 14002.33,
  },
];

const formatedInvoices = formatInvoices(testInvoices);

it('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

it('should filter invoices based on the filters', async () => {
  const previousState = { ...initialState, invoices: formatedInvoices };
  const filters = { ...initialFilters, Paid: false };

  expect(
    reducer(previousState, filterInvoices(filters)).filteredInvoices[0]
  ).toStrictEqual(formatedInvoices[1]);
});

it('should change status of the specific invoice in filteredInvoices and invoices', async () => {
  const previousState = {
    ...initialState,
    invoices: formatedInvoices,
    filteredInvoices: formatedInvoices,
  };
  const invoice = formatedInvoices[0];

  const newState = reducer(
    previousState,
    changeInvoiceStatus({ invoice, status: 'Pending' })
  );

  expect(newState.invoices.find((item) => item.id === invoice.id)?.status).toBe(
    'Pending'
  );

  expect(
    newState.filteredInvoices.find((item) => item.id === invoice.id)?.status
  ).toBe('Pending');
});
