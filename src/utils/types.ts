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
  status: string;
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
  total: number;
}

export interface InvoiceObjectFormated extends InvoiceObjectBase {
  total: string;
}
