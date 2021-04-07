import { useState, useContext, useEffect, useRef } from 'react';
import useViewport from '../hooks/useViewport';
import FilterOption from './FilterOption';

import { FilterList } from '../utils/constants';

import FilterContext from '../context/filterContext';

// icons
import { ReactComponent as ArrowDown } from '../../public/icon-arrow-down.svg';

import '../styles/components/filter.scss';

const Filter = (): JSX.Element => {
  const { width } = useViewport();
  const isMobile = width < 768;

  const [isOpen, toggleFilter] = useState(false);

  const { invoices, setFilteredInvoices, filterState, updateFilter } = useContext(FilterContext);

  const filterArr = Object.values(FilterList);

  const filterOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filteredInvoices = invoices.filter((invoice) => filterState[invoice.status]);

    setFilteredInvoices(filteredInvoices);
  }, [invoices, filterState]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterOverlayRef.current && !filterOverlayRef.current.contains(event.target as Node)) {
        toggleFilter(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterOverlayRef]);

  const swithFilter = () => toggleFilter(!isOpen);
  return (
    <div className='filter-container' ref={filterOverlayRef}>
      <button type='button' className='filter-container-header' onClick={swithFilter}>
        <h4>{`Filter ${!isMobile ? 'by status' : ''}`}</h4>
        <ArrowDown className={`${isOpen ? 'filter-opened' : ''}`} />
      </button>

      {isOpen ? (
        <div className='filter-overlay-wrapper' data-testid='filter-overlay'>
          {filterArr.length > 0 &&
            filterArr.map((label) => {
              return <FilterOption key={label} label={label} state={filterState} dispatch={updateFilter} />;
            })}
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
