import { createContext } from 'react';
import { FilterContextType } from '../utils/types';

const FilterContext = createContext<FilterContextType>({
  invoices: [],
  setInvoices: () => {},
  filteredInvoices: [],
  setFilteredInvoices: () => {},
  filterState: {
    Draft: true,
    Paid: true,
    Pending: true
  },
  updateFilter: () => {}
});

export default FilterContext;
