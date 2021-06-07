import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { InvoiceObjectFormatted, FilterStatus } from '../../utils/types';

// Will be changed to firebase;
import dataJSON from '../../../data.json';
import { formatInvoices } from '../../utils/api';

export interface InvoicesState {
  invoices: InvoiceObjectFormatted[];
  filteredInvoices: InvoiceObjectFormatted[];
  filters: FilterStatus;
}

export const fetchInvoices = createAsyncThunk('invoices/fetchInvoices', async () => {
  return formatInvoices(dataJSON);
});

export const initialFilters = {
  Draft: true,
  Paid: true,
  Pending: true
};

const initialState = { invoices: [], filteredInvoices: [], filters: initialFilters } as InvoicesState;

const InvoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    changeInvoiceStatus(state, action: { payload: { invoice: InvoiceObjectFormatted; status: keyof FilterStatus } }) {
      state.invoices = state.invoices.map((invoice) => {
        if (invoice.id === action.payload.invoice.id) {
          invoice.status = action.payload.status;
        }
        return invoice;
      });

      state.filteredInvoices = state.filteredInvoices.map((invoice) => {
        if (invoice.id === action.payload.invoice.id) {
          invoice.status = action.payload.status;
        }
        return invoice;
      });
    },
    filterInvoices(state, action) {
      state.filters = action.payload;
      state.filteredInvoices = state.invoices.filter((invoice) => action.payload[invoice.status]);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      state.invoices = action.payload;
      state.filteredInvoices = action.payload;
    });
  }
});

export const { changeInvoiceStatus, filterInvoices } = InvoiceSlice.actions;
export default InvoiceSlice.reducer;
