import { useState, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { filterInvoices } from '../store/slices/invoiceSlice';

import CustomCheckbox from './CustomCheckbox';

import { FilterList } from '../utils/constants';

import '../styles/components/filter-option.scss';

interface Props {
  label: keyof typeof FilterList;
}

const FilterOption = ({ label }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState(true);
  const filters = useSelector((state: RootState) => state.InvoiceSlice.filters);
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(filterInvoices({ ...filters, [label]: !filters[label] }));
  };

  useEffect(() => {
    setIsChecked(filters[label]);
  }, [filters]);

  return (
    <button
      type='button'
      key={label}
      className='filter-option-container'
      onClick={handleCheck}
    >
      <CustomCheckbox isChecked={isChecked} handleCheck={handleCheck} />
      <span>{label}</span>
    </button>
  );
};

export default FilterOption;
