import { useHistory } from 'react-router-dom';
import { InvoiceObjectFormated } from '../utils/types';

import StatusMarker from './StatusMarker';
import '../styles/components/invoice-desktop.scss';

import { ReactComponent as ArrowRight } from '../../public/icon-arrow-right.svg';

interface Props {
  invoice: InvoiceObjectFormated;
}

const InvoiceMobile = ({ invoice }: Props): JSX.Element => {
  const { id, paymentDue, total, status, clientName } = invoice;
  const history = useHistory();

  return (
    <button type='button' className='invoice-container-desktop' onClick={() => history.push(`/invoice/${id}`)}>
      <h4 className='invoice-id'>
        <span>#</span>
        {id}
      </h4>
      <span>{clientName}</span>

      <span className='invoice-due-date'>Due {paymentDue}</span>
      <h2 className='invoice-total'>{total}</h2>

      <div className='invoice-status-marker-container'>
        <StatusMarker status={status} />
        <ArrowRight />
      </div>
    </button>
  );
};

export default InvoiceMobile;
