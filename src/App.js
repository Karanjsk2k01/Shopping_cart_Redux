import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './components/store/cart-actions';
import { fetchedData } from './components/store/cart-actions';

let isInitial = true;

function App() {

  const dispatch = useDispatch()
  const cartVisible = useSelector(state => state.cart.cartVisible)
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector((state) => state.cart.notification);



  useEffect(() => {

    dispatch(fetchedData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));

  }, [cart, dispatch]);


  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>

  );
}

export default App;
