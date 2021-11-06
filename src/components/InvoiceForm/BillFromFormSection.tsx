import Input from '../Input';

const BillFromFormSection = (): JSX.Element => {
  return (
    <section className='invoice-form__section'>
      <h2 className='invoice-form__header'>Bill From</h2>
      <Input
        label='Street Address'
        type='text'
        name='bill-from-street-address'
        formikName='billFrom.streetAddress'
      />

      <section className='invoice-form__split-section'>
        <Input
          label='City'
          type='text'
          name='bill-from-city'
          formikName='billFrom.city'
        />
        <Input
          label='Post Code'
          type='text'
          name='bill-from-post-code'
          formikName='billFrom.postCode'
        />
        <Input
          label='Country'
          type='text'
          name='bill-from-country'
          formikName='billFrom.country'
        />
      </section>
    </section>
  );
};

export default BillFromFormSection;
