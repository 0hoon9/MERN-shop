import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants';

// 장바구니 추가 action
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // localStorage에 데이터 저장
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// 장바구니 삭제 action
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // localStorage에cartItems의 데이터 저장
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// 배송지 저장 action
export const saveShippingAddress = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  // localStorage에 데이터 저장
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

// 배송지 저장 action
export const savePaymentMethod = (data) => (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  // localStorage에 데이터 저장
  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
