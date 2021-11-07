import { FilterStatus, InvoiceObject, InvoiceObjectFormatted } from './types';

export const formatCurrency = (
  numberToFormat: number,
  currency = 'GBP'
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  })
    .format(numberToFormat)
    .replace(/^(\D+)/, '$1 ');
};

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const formatInvoices = (
  invoices: InvoiceObject[]
): InvoiceObjectFormatted[] => {
  return invoices.map((invoice) => {
    const { paymentDue, createdAt, total, items } = invoice;
    let { status } = invoice;

    const invoiceDate = formatDate(createdAt);
    const paymentDate = formatDate(paymentDue);

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
      items: formattedItems,
    };
  });
};

export const formatNumberToDecimalPlaces = (
  number: number,
  digits: number
): number => {
  if (digits > 0) {
    const divider = 10 ** digits;
    return Math.floor(number * divider) / divider;
  }
  return Math.floor(number);
};

export const calculateInvoiceTotal = (
  quantity: number,
  price: number
): number => {
  const formattedQuantity = Math.floor(quantity);
  const formattedPrice = formatNumberToDecimalPlaces(price, 2);

  return formatNumberToDecimalPlaces(formattedQuantity * formattedPrice, 2);
};
