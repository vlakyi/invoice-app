import { useReducer, Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculateInvoiceTotal } from '../utils/api';
import {
  InvoiceFormListItem,
  InvoiceFormListItemDispatchAction as DispatchAction,
} from '../utils/types';

type State = Array<InvoiceFormListItem> | [];

function reducer(state: State, action: DispatchAction): State {
  switch (action.type) {
    case 'add': {
      const newItem = {
        id: uuidv4(),
        name: '',
        price: 0,
        qty: 0,
        total: 0,
      };

      return [...state, newItem];
    }
    case 'update': {
      const { payload } = action;
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...payload,
            total: calculateInvoiceTotal(payload.qty, payload.price),
          };
        }
        return item;
      });
    }
    case 'delete':
      return state.filter((el) => el.id !== action.payload);
    case 'reset':
      return [];
    default:
      throw new Error();
  }
}
const useItemListDispatch = (
  initialState: []
): [State, Dispatch<DispatchAction>] => {
  const [itemList, dispatch] = useReducer(reducer, initialState);
  return [itemList, dispatch];
};

export default useItemListDispatch;
