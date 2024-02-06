import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartDetailsActions } from '../store/addToCart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch()

  const { title, quantity, total, price, id } = props.item;


  const removeCartHandler = () => {
    dispatch(cartDetailsActions.removeItem(id))
  }

  const addToCartHandler = () => {
    dispatch(cartDetailsActions.addItem({
      id: id,
      title,
      price,
      quantity
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
