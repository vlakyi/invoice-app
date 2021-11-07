import Input from '../Input';
import Select from '../Select';

import { PAYMENT_TERMS } from '../../utils/constants';

const PaymentDetailsSection = (): JSX.Element => {
  return (
    <section className='invoice-form__section invoice-form__section--payment-details'>
      <Input
        label='Invoice Date'
        type='date'
        name='invoice-date'
        formikName='paymentDetails.invoiceDate'
      />
      <Select
        label='Payment Terms'
        options={PAYMENT_TERMS}
        formikName='paymentDetails.paymentTerms'
      />
      <Input
        label='Project Description'
        type='text'
        name='invoice-project-or-description'
        formikName='paymentDetails.projectDescription'
      />
    </section>
  );
};

export default PaymentDetailsSection;
