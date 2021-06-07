export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface InvoiceItemFormatted {
  name: string;
  quantity: number;
  price: string;
  total: string;
}

export type InvoiceItems = Array<InvoiceItem>;
export type InvoiceItemsFormatted = Array<InvoiceItemFormatted>;

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

export interface InvoiceObjectFormatted extends InvoiceObjectBase {
  status: keyof FilterStatus;
  total: string;
  items: InvoiceItemsFormatted;
}

export interface FilterStatus {
  Draft: boolean;
  Pending: boolean;
  Paid: boolean;
}

export interface ReducerAction {
  type: string;
  payload?: { [index: string]: boolean };
}
