import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { InvoiceItemFormated, InvoiceObjectFormated } from '../utils/types';

import StatusMarker from '../components/StatusMarker';
import ViewInvoiceActions from '../components/ViewInvoiceActions';

import useViewport from '../hooks/useViewport';

import { ReactComponent as ArrowLeft } from '../../public/icon-arrow-left.svg';

import '../styles/screens/view-invoice.scss';

interface MatchParams {
  id: string;
}

interface Props {
  invoices: InvoiceObjectFormated[] | [];
  routeProps: RouteComponentProps<MatchParams>;
}

const ViewInvoice = ({ invoices, routeProps }: Props): JSX.Element => {
  const [currentInvoice, setCurrentInvoice] = useState<InvoiceObjectFormated | null>(null);
  const { width } = useViewport();

  useEffect(() => {
    if (invoices.length > 0) {
      const invoiceId = routeProps.match.params.id;
      const invoice = invoices.find((el) => el.id === invoiceId) || null;
      setCurrentInvoice(invoice);
    }
  }, [invoices, routeProps]);

  return (
    <>
      {currentInvoice ? (
        <section className='view-invoice-wrapper'>
          <article className='view-invoice-container'>
            <Link to='/' className='view-invoice-homepage-link'>
              <ArrowLeft />
              <h4>Go back</h4>
            </Link>

            <section className='view-invoice-status-container details-container'>
              <div className='view-invoice-status-wrapper'>
                <span className='view-invoice-status-label'>Status</span>
                <StatusMarker status={currentInvoice.status} />
              </div>
              {width >= 768 ? (
                <div>
                  <ViewInvoiceActions />
                </div>
              ) : null}
            </section>

            <section className='view-invoice-section details-container'>
              <h4 className='view-invoice-id'>
                <span>#</span>
                {currentInvoice.id}
              </h4>
              <p className='view-invoice-description'>{currentInvoice.description}</p>

              <div className='view-invoice-address-container'>
                <p className='view-invoice-address-street'>{currentInvoice.senderAddress.street}</p>
                <p className='view-invoice-address-city'>{currentInvoice.senderAddress.city}</p>
                <p className='view-invoice-address-postCode'>{currentInvoice.senderAddress.postCode}</p>
                <p className='view-invoice-address-country'>{currentInvoice.senderAddress.country}</p>
              </div>

              <section className='view-invoice-grid-container'>
                <div className='view-invoice-date'>
                  <p>Invoice Date</p>
                  <h3>{currentInvoice.createdAt}</h3>
                </div>

                <div className='view-invoice-date'>
                  <p>Payment Due</p>
                  <h3>{currentInvoice.paymentDue}</h3>
                </div>

                <div className='view-invoice-bill-to'>
                  <p>Bill To</p>
                  <h3>{currentInvoice.clientName}</h3>
                  <div className='view-invoice-address-container'>
                    <p className='view-invoice-address-street'>{currentInvoice.clientAddress.street}</p>
                    <p className='view-invoice-address-city'>{currentInvoice.clientAddress.city}</p>
                    <p className='view-invoice-address-postCode'>{currentInvoice.clientAddress.postCode}</p>
                    <p className='view-invoice-address-country'>{currentInvoice.clientAddress.country}</p>
                  </div>
                </div>

                <div className='view-invoice-sent-to'>
                  <p>Sent to</p>
                  <h3>{currentInvoice.clientEmail}</h3>
                </div>
              </section>
              <section className='view-invoice-items-container'>
                {width >= 768 ? (
                  <header className='view-invoice-item-header-container'>
                    <p className='view-invoice-item-header-name'>Item Name</p>
                    <p className='view-invoice-item-header-quantity'>QTY.</p>
                    <p className='view-invoice-item-header-price'>Price</p>
                    <p className='view-invoice-item-header-total'>Total</p>
                  </header>
                ) : null}

                {currentInvoice.items.map(({ name, price, quantity, total }: InvoiceItemFormated) => (
                  <div className='view-invoice-item' key={name + price}>
                    {width >= 768 ? (
                      <>
                        <h4 className='view-invoice-item-price'>{price}</h4>
                        <h4 className='view-invoice-item-quantity'>{quantity}</h4>
                      </>
                    ) : (
                      <p className='view-invoice-item-amount'>{`${quantity} x ${price}`}</p>
                    )}

                    <h4 className='view-invoice-item-name'>{name}</h4>
                    <h4 className='view-invoice-item-total'>{total}</h4>
                  </div>
                ))}
              </section>

              <section className='view-invoice-items-amount-due-container'>
                <p>Amount Due</p>
                <h1>{currentInvoice.total}</h1>
              </section>
            </section>
          </article>

          {width < 768 ? (
            <footer className='view-invoice-footer'>
              <ViewInvoiceActions />
            </footer>
          ) : null}
        </section>
      ) : null}
    </>
  );
};

export default ViewInvoice;