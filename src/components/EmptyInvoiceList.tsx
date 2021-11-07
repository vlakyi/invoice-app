import { ReactComponent as EmptyIllustration } from '../../public/illustration-empty.svg';

import '../styles/components/empty-invoice-list.scss';

const EmptyInvoiceList = (): JSX.Element => {
  return (
    <section className='invoices-list-empty-container'>
      <EmptyIllustration />
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the <strong>New</strong> button and get
        started
      </p>
    </section>
  );
};

export default EmptyInvoiceList;
