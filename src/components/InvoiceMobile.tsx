import { InvoiceObjectFormated } from '../utils/types';
import '../styles/components/invoice-mobile.scss';

interface Props {
  invoice: InvoiceObjectFormated;
}

const InvoiceMobile = ({ invoice }: Props): JSX.Element => {
  const { id, paymentDue, total, status, clientName } = invoice;

  const classStatus = status.toLowerCase();

  return (
    <article className='invoice-container-mobile'>
      <div className='invoice-wrapper'>
        <h4 className='invoice-id'>
          <span>#</span>
          {id}
        </h4>
        <span>{clientName}</span>
      </div>

      <div className='invoice-wrapper'>
        <div>
          <div className='invoice-due-date'>Due {paymentDue}</div>
          <h2 className='invoice-total'>{total}</h2>
        </div>
        <div className={`invoice-status-container invoice-status-container-${classStatus}`}>
          <div className='invoice-status-circle' />
          <span className='invoice-status'>{status}</span>
        </div>
      </div>
    </article>
  );
};

export default InvoiceMobile;
