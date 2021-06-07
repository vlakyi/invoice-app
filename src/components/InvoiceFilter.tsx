import { useEffect, useState } from 'react';

// Redux
import { useSelector } from 'react-redux';
import { InvoicesState } from '../store/slices/invoiceSlice';

import Filter from './Filter';
import '../styles/components/invoice-filter.scss';

import { ReactComponent as IconPlus } from '../../public/icon-plus-circular.svg';
import useViewport from '../hooks/useViewport';

const InvoiceFilter = (): JSX.Element => {
  const filteredInvoices = useSelector((state: InvoicesState) => state.filteredInvoices);
  const filters = useSelector((state: InvoicesState) => state.filters);
  const count = filteredInvoices.length;

  const [countMessage, setCountMessage] = useState('');
  const { width } = useViewport();

  const newButtonText = width >= 768 ? 'New Invoice' : 'New';

  useEffect(() => {
    function populateFilterMessage(): string {
      const activeFilters: string[] = [];

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          activeFilters.push(key.toLowerCase());
        }
      });

      return activeFilters.length !== Object.keys(filters).length ? activeFilters.join(' or ') : 'total';
    }

    if (count > 0) {
      if (width >= 768) {
        setCountMessage(`There are ${count} ${populateFilterMessage()} invoices`);
      } else {
        setCountMessage(`${count} invoices`);
      }
    } else {
      setCountMessage('No invoices');
    }
  }, [count, width]);

  return (
    <div className='invoice-filter-container'>
      <div className='invoice-filter-wrapper'>
        <h2 className='invoice-filter-header'>Invoices</h2>
        <span>{countMessage}</span>
      </div>

      <div className='invoice-filter-wrapper'>
        <Filter />
        <button type='button' className='invoice-filter-new-container'>
          <div className='invoice-filter-new-wrapper'>
            <div className='invoice-filter-new-circle' />
            <IconPlus />
          </div>
          <span className='invoice-filter-new-text'>{newButtonText}</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceFilter;
