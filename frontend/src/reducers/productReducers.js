import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstants';

// 전체상품 조회 reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page };
    case PRODUCT_LIST_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// 특정상품 조회 reducer
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// 특정상품 삭제 reducer
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true, ...state };
    case PRODUCT_DELETE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// 새로운 상품 만들기 reducer
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// 새로운 상품 만들기 reducer
export const productUpdateReducer = (state = { prodcut: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { prodcut: {} };
    default:
      return state;
  }
};

// 새로운 상품 만들기 reducer
export const productReviewCreateReducer = (state = { prodcut: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

// 별점 높은 상품 reducer
export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      //request요청이 들어오면 아래 state를 반환
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      //success요청이 들어오면 아래 state를 반환
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      //fail요청이 들어오면 아래 state를 반환
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
