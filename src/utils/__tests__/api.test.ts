import {
  formatNumberToDecimalPlaces,
  formatCurrency,
  formatDate,
  formatInvoices,
  calculateInvoiceTotal,
} from '../api';

it('formatNumberToDecimalPlaces', () => {
  expect(formatNumberToDecimalPlaces(10.123, 0)).toBe(10);
  expect(formatNumberToDecimalPlaces(10.125, 2)).toBe(10.12);
});

it('formatDate', () => {
  const dateString = '2020-01-01 15:45:21';

  expect(formatDate(dateString)).toBe('1 Jan 2020');
  expect(formatDate(new Date(dateString))).toBe('1 Jan 2020');
});

it('formatCurrency', () => {
  expect(formatCurrency(123.55)).toBe('£ 123.55');
  expect(formatCurrency(123.55, 'USD')).toBe('$ 123.55');
});

it('formatInvoices', () => {
  const invoices = [
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
  ];

  expect(formatInvoices(invoices)).toMatchObject([
    {
      ...invoices[0],
      createdAt: formatDate('2021-08-18'),
      paymentDue: formatDate('2021-08-19'),
      status: 'Paid',

      items: [
        {
          name: 'Brand Guidelines',
          quantity: 1,
          price: formatCurrency(1800.9),
          total: formatCurrency(1800.9),
        },
      ],
      total: formatCurrency(1800.9),
    },
  ]);
});

it('calculateInvoiceTotal', () => {
  expect(calculateInvoiceTotal(2, 2)).toEqual(4);
});
