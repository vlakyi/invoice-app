import '../styles/components/custom-checkbox.scss';
import { ReactComponent as IconCheck } from '../../public/icon-check.svg';

interface Props {
  checked: boolean;
  handleCheck: () => void;
}

const CustomCheckbox = ({ checked, handleCheck }: Props): JSX.Element => {
  return (
    <div className='custom-checkbox-container'>
      <input type='checkbox' checked={checked} onChange={handleCheck} />
      <span className='custom-checkbox-checkmark'>
        <IconCheck />
      </span>
    </div>
  );
};

export default CustomCheckbox;
