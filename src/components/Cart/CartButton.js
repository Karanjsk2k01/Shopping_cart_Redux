import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartSliceAction } from '../store/cart-slice';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartValue = useSelector(state => state.cartItems.totalQuantity)

  const handleToggle = () => {
    dispatch(cartSliceAction.toggleCart())
  }


  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartValue}</span>
    </button>
  );
};

export default CartButton;
