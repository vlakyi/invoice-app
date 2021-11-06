import { Dispatch } from 'react';
import ItemListElement from './ItemListElement';
import {
  InvoiceFormListItem,
  InvoiceFormListItemDispatchAction,
} from '../../utils/types';

interface Props {
  itemList: Array<InvoiceFormListItem> | [];
  dispatch: Dispatch<InvoiceFormListItemDispatchAction>;
}

const ItemListSection = ({ itemList, dispatch }: Props): JSX.Element => {
  const addItem = () => {
    dispatch({ type: 'add' });
  };

  return (
    <section className='invoice-form-item-list'>
      <h3 className='invoice-form-item-list__header'>Item List</h3>
      {itemList.map((item) => (
        <ItemListElement key={item.id} item={item} dispatch={dispatch} />
      ))}

      <button
        type='button'
        className='invoice-form-item-list__button'
        onClick={addItem}
      >
        + Add new item
      </button>
    </section>
  );
};

export default ItemListSection;
