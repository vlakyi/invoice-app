import InvoiceFilter from '../components/InvoiceFilter';
import InvoicesList from '../components/InvoicesList';

const MainScreen = (): JSX.Element => {
  return (
    <div id='page-scrollable-container'>
      <InvoiceFilter />
      <InvoicesList />
    </div>
  );
};

export default MainScreen;
