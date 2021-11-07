import { SelectHTMLAttributes } from 'react';
import { Field } from 'formik';
import { SelectOptions } from '../utils/types';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
  label: string;
  formikName: string;
}

const Select = (props: Props): JSX.Element => {
  const { formikName, label, options } = props;

  return (
    <div className='form-group'>
      <label className='form-group__label' htmlFor={label}>
        {label}
      </label>
      <Field
        name={formikName}
        as='select'
        className='form-group__select'
        id={label}
      >
        {options.map(({ name, value }) => (
          <option className='form-group__option' key={value} value={value}>
            {name}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Select;
