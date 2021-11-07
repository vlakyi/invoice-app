import '../styles/components/custom-checkbox.scss';
import { ReactComponent as IconCheck } from '../../public/icon-check.svg';

interface Props {
  isChecked: boolean;
  handleCheck: () => void;
}

const CustomCheckbox = ({ isChecked, handleCheck }: Props): JSX.Element => {
  return (
    <div className='custom-checkbox-container'>
      <input type='checkbox' checked={isChecked} onChange={handleCheck} />
      <span className='custom-checkbox-checkmark'>
        <IconCheck />
      </span>
    </div>
  );
};

export default CustomCheckbox;
