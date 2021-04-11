import { useEffect, useState, useReducer, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './Header';
import InvoiceList from './InvoicesList';
import InvoiceFilter from './InvoiceFilter';

// interfaces
import { FilterStatus, InvoiceObjectFormated, ReducerAction } from '../utils/types';

// utils
import { formatInvoices } from '../utils/api';
import dataJSON from '../../data.json';

// context
import FilterContext from '../context/FilterContext';

// Screens
import ViewInvoice from '../screens/ViewInvoice';

const initialFilterState: FilterStatus = {
  Draft: true,
  Paid: true,
  Pending: true
};

const filterReducer = (prevState: FilterStatus, action: ReducerAction) => {
  switch (action.type) {
    case 'toggleFilterOption':
      return { ...prevState, ...action.payload };
    default:
      return prevState;
  }
};

const App = (): JSX.Element => {
  const [invoices, setInvoices] = useState<InvoiceObjectFormated[] | []>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceObjectFormated[] | []>([]);

  // Filter component state
  const [filterState, updateFilter] = useReducer(filterReducer, initialFilterState);

  useEffect(() => {
    const invoicesArr = formatInvoices(dataJSON);
    setInvoices(invoicesArr);
    setFilteredInvoices(invoicesArr);
  }, []);

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
        <div id='page-fixed-container'>
          <Header />
          <Switch>
            <Route path='/invoice/:id' render={(props) => <ViewInvoice routeProps={props} invoices={invoices} />} />

            <Route
              path='/'
              render={() => (
                <div id='page-scrollable-container'>
                  <FilterContext.Provider
                    value={{
                      invoices,
                      setInvoices,
                      filteredInvoices,
                      setFilteredInvoices,
                      filterState,
                      updateFilter
                    }}
                  >
                    <InvoiceFilter />
                  </FilterContext.Provider>

                  <InvoiceList invoices={filteredInvoices} />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
