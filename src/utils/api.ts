import { InvoiceObject, InvoiceObjectFormated } from './types';

/* eslint-disable import/prefer-default-export */
export const formatInvoices = (invoices: InvoiceObject[]): InvoiceObjectFormated[] => {
  return invoices.map((invoice) => {
    const { paymentDue, total } = invoice;
    let { status } = invoice;

    const date = new Date(paymentDue);
    const dueDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const cost = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    })
      .format(total)
      .replace(/^(\D+)/, '$1 ');

    const formatedStatus = status.split('');
    formatedStatus[0] = formatedStatus[0].toLocaleUpperCase();
    status = formatedStatus.join('');

    return { ...invoice, paymentDue: dueDate, total: cost, status };
  });
};
