import { useEffect, useState } from 'react';
import InvoiceMobile from './InvoiceMobile';
import InvoiceDesktop from './InvoiceDesktop';
import useViewport from '../hooks/useViewport';

// interfaces
import { InvoiceObjectFormated } from '../utils/types';
// utils
import { formatInvoices } from '../utils/api';

import dataJSON from '../../data.json';

const InvoicesList = (): JSX.Element => {
  const [invoices, setInvoices] = useState<InvoiceObjectFormated[] | []>([]);
  const { width } = useViewport();

  useEffect(() => {
    const invoicesArr = formatInvoices(dataJSON);
    setInvoices(invoicesArr);
  }, []);

  return (
    <div className='invoices-list-container'>
      {invoices.length > 0 &&
        invoices.map((invoice: InvoiceObjectFormated) => {
          return width < 768 ? (
            <InvoiceMobile key={invoice.id} invoice={invoice} />
          ) : (
            <InvoiceDesktop key={invoice.id} invoice={invoice} />
          );
        })}
    </div>
  );
};

export default InvoicesList;
