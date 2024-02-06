import { cartDetailsActions } from "./addToCart-slice";
import { cartSliceAction } from "./cart-slice";


export const fetchedData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartDetailsActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        cartSliceAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Failed in fetching',
        })
      );
    }
  }
}


export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartSliceAction.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sentRequest = async () => {

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
    }

    try {
      sentRequest()

      dispatch(
        cartSliceAction.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        cartSliceAction.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }

  }
}
