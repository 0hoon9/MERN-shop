import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // action의 페이로드 product와 state의 cartItems의 product가 일치하면 existItem 변수에 저장
      // 이때, state의 cartItems는 현재 아이템이 추가되기 전 장바구니 상태를 가지고 있음
      const existItem = state.cartItems.find((x) => x.product === item.product);
      // 장바구니에 추가하려는 상품이 이미 있을경우
      if (existItem) {
        // state의 장바구니 현황과 existItem의 product와 일치하면 기존 데이터 유지, 아니면 새로운 상품(x) 등록
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      // filter 메서드를 사용하여 remove item제외한 나머지 cartItems정보 저장
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      // filter 메서드를 사용하여 remove item제외한 나머지 cartItems정보 저장
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      // filter 메서드를 사용하여 remove item제외한 나머지 cartItems정보 저장
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
