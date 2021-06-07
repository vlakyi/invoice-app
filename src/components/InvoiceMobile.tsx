import { useHistory } from 'react-router-dom';
import { InvoiceObjectFormatted } from '../utils/types';

import StatusMarker from './StatusMarker';

import '../styles/components/invoice-mobile.scss';

interface Props {
  invoice: InvoiceObjectFormatted;
}

const InvoiceMobile = ({ invoice }: Props): JSX.Element => {
  const { id, paymentDue, total, status, clientName } = invoice;
  const history = useHistory();

  return (
    <button type='button' className='invoice-container-mobile' onClick={() => history.push(`/invoice/${id}`)}>
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
        <StatusMarker status={status} />
      </div>
    </button>
  );
};

export default InvoiceMobile;
