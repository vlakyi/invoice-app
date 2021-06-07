import { FilterStatus, InvoiceObject, InvoiceObjectFormatted } from './types';

export const formatCurrency = (numberToFormat: number, currency = 'GBP'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })
    .format(numberToFormat)
    .replace(/^(\D+)/, '$1 ');
};

export const formatInvoices = (invoices: InvoiceObject[]): InvoiceObjectFormatted[] => {
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

    const formattedStatus = status.split('');
    formattedStatus[0] = formattedStatus[0].toLocaleUpperCase();
    status = formattedStatus.join('');

    const formattedItems = items.map((item) => {
      const itemPriceFormatted = formatCurrency(item.price);
      const itemTotalFormatted = formatCurrency(item.total);

      return { ...item, price: itemPriceFormatted, total: itemTotalFormatted };
    });

    return {
      ...invoice,
      paymentDue: paymentDate,
      createdAt: invoiceDate,
      total: cost,
      status: status as keyof FilterStatus,
      items: formattedItems
    };
  });
};
