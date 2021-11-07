import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import { useDispatch } from 'react-redux';
import Header from './Header';

// Screens
import ViewInvoice from '../screens/ViewInvoice';
import NewInvoice from '../screens/NewInvoice';
import MainScreen from '../screens/MainScreen';

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
            <Route path='/invoice/new' component={NewInvoice} />
            <Route
              path='/invoice/:id'
              render={(props) => <ViewInvoice routeProps={props} />}
            />
            <Route path='/' component={MainScreen} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
