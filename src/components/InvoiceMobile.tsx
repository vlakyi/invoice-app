import { InvoiceObjectFormated } from '../utils/types';
import '../styles/components/invoice-mobile.scss';

interface Props {
  invoice: InvoiceObjectFormated;
}

const InvoiceMobile = (props: Props): JSX.Element => {
  const {
    invoice: { id, paymentDue, total, status, clientName }
  } = props;

  const classStatus = status.toLowerCase();

  return (
    <div className='invoice-container-mobile'>
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
    </div>
  );
};

export default InvoiceMobile;
