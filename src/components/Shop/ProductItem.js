import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartDetailsActions } from '../store/addToCart-slice'

const ProductItem = (props) => {
  const { title, price, id } = props;

  const dispatch = useDispatch();

  const handleCart = (e) => {

    e.preventDefault()
    dispatch(cartDetailsActions.addItem({
      id,
      price,
      title
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.actions}>
          <button onClick={handleCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
