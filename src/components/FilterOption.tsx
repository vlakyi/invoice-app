import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import { FilterStatus, ReducerAction } from '../utils/types';
import { FilterList } from '../utils/constants';

import '../styles/components/filter-option.scss';

interface Props {
  label: keyof typeof FilterList;
  state: FilterStatus;
  dispatch: React.Dispatch<ReducerAction>;
}

const FilterOption = ({ label, dispatch, state }: Props): JSX.Element => {
  const handleCheck = () => {
    dispatch({ type: 'toggleFilterOption', payload: { [label]: !state[label] } });
  };

  const checked = state[label];
  return (
    <button type='button' key={label} className='filter-option-container' onClick={handleCheck}>
      <CustomCheckbox checked={checked} handleCheck={handleCheck} />
      <span>{label}</span>
    </button>
  );
};

export default FilterOption;
