import { Field } from 'formik';
import { InputHTMLAttributes } from 'react';
import '../styles/components/form-elements.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  formikName?: string;
}

const Input = (props: InputProps): JSX.Element => {
  const { formikName, name, label, ...rest } = props;
  return (
    <div className='form-group'>
      <label className='form-group__label' htmlFor={name}>
        {label}
      </label>
      {formikName ? (
        <Field
          name={formikName}
          className='form-group__input'
          id={name}
          {...rest}
        />
      ) : (
        <input className='form-group__input' id={name} {...rest} />
      )}
    </div>
  );
};

export default Input;
