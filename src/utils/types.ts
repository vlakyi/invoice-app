import { Dispatch } from 'react';

export interface InvoiceItems {
  [index: number]: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  };
}

interface InvoiceObjectBase {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: InvoiceItems;
}

export interface InvoiceObject extends InvoiceObjectBase {
  status: string;
  total: number;
}

export interface InvoiceObjectFormated extends InvoiceObjectBase {
  status: keyof FilterStatus;
  total: string;
}

export interface FilterStatus {
  Draft: boolean;
  Pending: boolean;
  Paid: boolean;
}

export type FilterContextType = {
  invoices: InvoiceObjectFormated[] | [];
  setInvoices: (state: InvoiceObjectFormated[] | []) => void;
  filteredInvoices: InvoiceObjectFormated[] | [];
  setFilteredInvoices: (state: InvoiceObjectFormated[] | []) => void;
  filterState: FilterStatus;
  updateFilter: Dispatch<ReducerAction>;
};

export interface ReducerAction {
  type: string;
  payload?: { [index: string]: boolean };
}
