import ActionButton from './ActionButton';

import '../styles/components/view-invoice-actions.scss';
import useViewport from '../hooks/useViewport';

const ViewInvoiceActions = (): JSX.Element => {
  const { width } = useViewport();
  return (
    <div className='view-invoice-actions-container'>
      <ActionButton text='Edit' />
      <ActionButton text='Delete' classModifier='danger' />
      <ActionButton text={`${width >= 370 ? 'Mark as ' : ''}Paid`} classModifier='action' />
    </div>
  );
};

export default ViewInvoiceActions;
