import Input from '../Input';

const BillToFormSection = (): JSX.Element => {
  return (
    <section className='invoice-form__section'>
      <h2 className='invoice-form__header'>Bill To</h2>
      <Input
        label="Client's Name"
        type='text'
        name='bill-to-client-name'
        formikName='billTo.clientName'
      />
      <Input
        label="Client's Email"
        type='email'
        name='bill-to-client-email'
        formikName='billTo.clientEmail'
      />
      <Input
        label='Street Address'
        type='text'
        name='bill-to-client-street-address'
        formikName='billTo.streetAddress'
      />

      <section className='invoice-form__split-section'>
        <Input
          label='City'
          type='text'
          name='bill-from-city'
          formikName='billTo.city'
        />
        <Input
          label='Post Code'
          type='text'
          name='bill-from-post-code'
          formikName='billTo.postCode'
        />
        <Input
          label='Country'
          type='text'
          name='bill-from-country'
          formikName='billTo.country'
        />
      </section>
    </section>
  );
};

export default BillToFormSection;
