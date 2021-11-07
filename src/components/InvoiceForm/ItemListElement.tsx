import { Dispatch, ChangeEvent, useState, useEffect } from 'react';
import Input from '../Input';

import '../../styles/components/invoice-form-item-list.scss';
import { ReactComponent as DeleteIcon } from '../../../public/icon-delete.svg';
import {
  InvoiceFormListItem,
  InvoiceFormListItemDispatchAction as DispatchAction,
} from '../../utils/types';
import { formatNumberToDecimalPlaces } from '../../utils/api';

interface Props {
  item: InvoiceFormListItem;
  dispatch: Dispatch<DispatchAction>;
}

type ChangeInputProps = keyof InvoiceFormListItem;

const ItemListElement = ({ item, dispatch }: Props): JSX.Element => {
  const [itemObject, setItemObject] = useState(item);
  const { id, name, price, qty, total } = itemObject;

  useEffect(() => {
    setItemObject(item);
  }, [item]);

  const deleteItem = () => {
    dispatch({ type: 'delete', payload: id });
  };

  // save locally on change
  const changeInput = (
    event: ChangeEvent<HTMLInputElement>,
    variableName: ChangeInputProps
  ) => {
    const { value } = event.target;

    setItemObject({ ...itemObject, [variableName]: value });
  };

  // format and dispatch on the input blur
  const blurInput = (
    event: ChangeEvent<HTMLInputElement>,
    variableName: ChangeInputProps
  ) => {
    const { value } = event.target;

    let result: number | string = value;

    if (variableName !== 'qty' && variableName !== 'name') {
      result = formatNumberToDecimalPlaces(parseFloat(value), 2);
    } else if (variableName === 'qty') {
      result = parseInt(value, 10) || 0;
    }

    setItemObject({ ...itemObject, [variableName]: result });
    dispatch({
      type: 'update',
      payload: { ...itemObject, [variableName]: result },
    });
  };

  return (
    <article className='invoice-form-item-list__element'>
      <Input
        label='Item Name'
        type='text'
        name='item-list-item-name'
        value={name}
        onChange={(event) => changeInput(event, 'name')}
        onBlur={(event) => blurInput(event, 'name')}
      />
      <section className='invoice-form-item-list__split-section'>
        <Input
          label='Qty.'
          type='text'
          name='item-list-quantity'
          step='1'
          min='0'
          value={qty}
          onChange={(event) => changeInput(event, 'qty')}
          onBlur={(event) => blurInput(event, 'qty')}
        />
        <Input
          label='Price'
          type='text'
          name='item-list-price'
          value={price}
          onChange={(event) => changeInput(event, 'price')}
          onBlur={(event) => blurInput(event, 'price')}
        />
        <Input
          label='Total'
          type='text'
          name='item-list-total'
          readOnly
          value={total}
        />
        <DeleteIcon
          className='invoice-form-item-list__delete-icon'
          onClick={deleteItem}
        />
      </section>
    </article>
  );
};

export default ItemListElement;
