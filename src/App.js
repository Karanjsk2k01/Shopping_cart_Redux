import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { cartSliceAction } from './components/store/cart-slice'
import { useEffect } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

  const dispatch = useDispatch()
  const cartVisible = useSelector(state => state.cart.cartVisible)
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartSliceAction.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        cartSliceAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartSliceAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
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
