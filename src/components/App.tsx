import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { useDispatch } from 'react-redux';
import Header from './Header';
import InvoiceList from './InvoicesList';
import InvoiceFilter from './InvoiceFilter';

// Screens
import ViewInvoice from '../screens/ViewInvoice';

// Redux
import { fetchInvoices } from '../store/slices/invoiceSlice';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  // fetch invoices on initial load
  useEffect(() => {
    dispatch(fetchInvoices());
  }, []);

  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Router>
        <div id='page-fixed-container'>
          <Header />
          <Switch>
            <Route path='/invoice/:id' render={(props) => <ViewInvoice routeProps={props} />} />

            <Route
              path='/'
              render={() => (
                <div id='page-scrollable-container'>
                  <InvoiceFilter />
                  <InvoiceList />
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
