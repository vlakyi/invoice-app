import { combineReducers } from '@reduxjs/toolkit';
import InvoiceSlice from './slices/invoiceSlice';

const rootReducer = combineReducers({
  InvoiceSlice,
});

export default rootReducer;
