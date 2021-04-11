import { FilterStatus, InvoiceObject, InvoiceObjectFormated } from './types';

const formatCurrency = (numberToFormat: number, currency = 'GBP'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })
    .format(numberToFormat)
    .replace(/^(\D+)/, '$1 ');
};

export const formatInvoices = (invoices: InvoiceObject[]): InvoiceObjectFormated[] => {
  return invoices.map((invoice) => {
    const { paymentDue, createdAt, total, items } = invoice;
    let { status } = invoice;

    const invoiceDate = new Date(createdAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const paymentDate = new Date(paymentDue).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const cost = formatCurrency(total);

    const formatedStatus = status.split('');
    formatedStatus[0] = formatedStatus[0].toLocaleUpperCase();
    status = formatedStatus.join('');

    const formatedItems = items.map((item) => {
      const itemPriceFormated = formatCurrency(item.price);
      const itemTotalFormated = formatCurrency(item.total);

      return { ...item, price: itemPriceFormated, total: itemTotalFormated };
    });

    return {
      ...invoice,
      paymentDue: paymentDate,
      createdAt: invoiceDate,
      total: cost,
      status: status as keyof FilterStatus,
      items: formatedItems
    };
  });
};
