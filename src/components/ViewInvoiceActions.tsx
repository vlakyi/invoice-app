import ActionButton from './ActionButton';

import '../styles/components/view-invoice-actions.scss';
import useViewport from '../hooks/useViewport';

interface Props {
  markAsPaid: () => void;
}

const ViewInvoiceActions = ({ markAsPaid }: Props): JSX.Element => {
  const { width } = useViewport();
  return (
    <div className='view-invoice-actions-container'>
      <ActionButton text='Edit' />
      <ActionButton text='Delete' classModifier='danger' />
      <ActionButton text={`${width >= 370 ? 'Mark as ' : ''}Paid`} classModifier='action' onClick={markAsPaid} />
    </div>
  );
};

export default ViewInvoiceActions;
