import { Formik } from 'formik';
import GoBackLink from '../components/GoBackLink';
import PaymentDetailsSection from '../components/InvoiceForm/PaymentDetailsSection';
import BillFromSection from '../components/InvoiceForm/BillFromFormSection';
import BillToSection from '../components/InvoiceForm/BillToFormSection';
import ItemList from '../components/InvoiceForm/ItemListSection';
import ActionButton from '../components/ActionButton';

import { PAYMENT_TERMS } from '../utils/constants';
import useItemListDispatch from '../hooks/useItemListDispatch';

import '../styles/screens/new-invoice.scss';
import '../styles/components/invoice-form.scss';

const initialValues = {
  billFrom: {
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
  },
  billTo: {
    clientName: '',
    clientEmail: '',
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
  },
  paymentDetails: {
    invoiceDate: new Date().toISOString().split('T')[0],
    paymentTerms: PAYMENT_TERMS[0],
    projectDescription: '',
  },
};

const NewInvoice = (): JSX.Element => {
  const [itemList, dispatch] = useItemListDispatch([]);
  return (
    <div className='new-invoice'>
      <div className='new-invoice__overlay' />
      <Formik initialValues={initialValues} onSubmit={(data) => {}}>
        {({ handleReset, handleSubmit }) => {
          return (
            <form
              className='new-invoice__container'
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <GoBackLink link='/' />
              <h1 className='new-invoice__header'>New Invoice</h1>
              <BillFromSection />
              <BillToSection />
              <PaymentDetailsSection />
              <ItemList itemList={itemList} dispatch={dispatch} />
              <footer className='new-invoice__footer'>
                <ActionButton
                  text='Discard'
                  classModifier='neutral'
                  onClick={() => {
                    handleReset();
                    dispatch({ type: 'reset' });
                  }}
                />
                <ActionButton text='Save as Draft' classModifier='primary' />
                <ActionButton
                  text='Save & Send'
                  classModifier='action'
                  type='submit'
                />
              </footer>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewInvoice;
