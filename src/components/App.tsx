// Components
import Header from './Header';
import InvoiceList from './InvoicesList';

const App = (): JSX.Element => {
  return (
    <div id='page-fixed-container'>
      <Header />
      <div id='page-scrollable-container'>
        <InvoiceList />
      </div>
    </div>
  );
};

export default App;
