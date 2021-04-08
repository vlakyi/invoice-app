import { InvoiceObjectFormated } from '../utils/types';
import '../styles/components/invoice-desktop.scss';

import { ReactComponent as ArrowRight } from '../../public/icon-arrow-right.svg';

interface Props {
  invoice: InvoiceObjectFormated;
}

const InvoiceMobile = ({ invoice }: Props): JSX.Element => {
  const { id, paymentDue, total, status, clientName } = invoice;

  const classStatus = status.toLowerCase();

  return (
    <article className='invoice-container-desktop'>
      <h4 className='invoice-id'>
        <span>#</span>
        {id}
      </h4>
      <span>{clientName}</span>

      <span className='invoice-due-date'>Due {paymentDue}</span>
      <h2 className='invoice-total'>{total}</h2>

      <div className='invoice-status-container-wrapper'>
        <div className={`invoice-status-container invoice-status-container-${classStatus}`}>
          <div className='invoice-status-circle' />
          <span className='invoice-status'>{status}</span>
        </div>
        <ArrowRight />
      </div>
    </article>
  );
};

export default InvoiceMobile;
