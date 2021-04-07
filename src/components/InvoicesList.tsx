import useViewport from '../hooks/useViewport';

import InvoiceMobile from './InvoiceMobile';
import InvoiceDesktop from './InvoiceDesktop';
import EmptyInvoiceList from './EmptyInvoiceList';

// interfaces
import { InvoiceObjectFormated } from '../utils/types';

interface Props {
  invoices: InvoiceObjectFormated[];
}

const InvoicesList = ({ invoices }: Props): JSX.Element => {
  const { width } = useViewport();

  const InvoiceComponent = width < 768 ? InvoiceMobile : InvoiceDesktop;

  return (
    <div className='invoices-list-container' data-testid='invoices-list'>
      {invoices.length > 0 ? (
        invoices.map((invoice: InvoiceObjectFormated) => {
          return <InvoiceComponent key={invoice.id} invoice={invoice} />;
        })
      ) : (
        <EmptyInvoiceList />
      )}
    </div>
  );
};

export default InvoicesList;
