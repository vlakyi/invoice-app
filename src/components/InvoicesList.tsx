import { useSelector } from 'react-redux';

import { RootState } from 'src/store';
import useViewport from '../hooks/useViewport';

import InvoiceMobile from './InvoiceMobile';
import InvoiceDesktop from './InvoiceDesktop';
import EmptyInvoiceList from './EmptyInvoiceList';

// interfaces
import { InvoiceObjectFormatted } from '../utils/types';

const InvoicesList = (): JSX.Element => {
  const { width } = useViewport();
  const InvoiceComponent = width < 768 ? InvoiceMobile : InvoiceDesktop;
  const invoices = useSelector(
    (state: RootState) => state.InvoiceSlice.filteredInvoices
  );

  return (
    <section className='invoices-list-container' data-testid='invoices-list'>
      {invoices.length > 0 ? (
        invoices.map((invoice: InvoiceObjectFormatted) => {
          return <InvoiceComponent key={invoice.id} invoice={invoice} />;
        })
      ) : (
        <EmptyInvoiceList />
      )}
    </section>
  );
};

export default InvoicesList;
