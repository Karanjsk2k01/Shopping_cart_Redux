import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartSliceAction } from '../store/cart-slice';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(cartSliceAction.toggleCart())
  }


  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
