import { Dispatch } from 'react';

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceItemFormated {
  name: string;
  quantity: number;
  price: string;
  total: string;
}

export type InvoiceItems = Array<InvoiceItem>;
export type InvoiceItemsFormated = Array<InvoiceItemFormated>;

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
}

export interface InvoiceObject extends InvoiceObjectBase {
  status: string;
  total: number;
  items: InvoiceItems;
}

export interface InvoiceObjectFormated extends InvoiceObjectBase {
  status: keyof FilterStatus;
  total: string;
  items: InvoiceItemsFormated;
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
