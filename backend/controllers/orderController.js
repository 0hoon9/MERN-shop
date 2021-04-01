import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc 결제하기
//@route POST /api/orders
//@접근 Private
const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('주문할 상품이 없습니다');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    console.log('현재 user: ', order.user);

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

//@desc ID로 결제 확인
//@route GET /api/orders/:id
//@접근 Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('결제 내역을 찾을 수 없습니다');
  }
});

//@desc 지불정보 갱신
//@route PUT /api/orders/:id/pay
//@접근 Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('주문내역을 찾을 수 없습니다');
  }
});

//@desc 사용자 주문내역 조회
//@route GET /api/orders/myorders
//@접근 Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

//@desc 모든 결제내역 조회
//@route GET /api/orders
//@접근 Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name');
  res.json(orders);
});

//@desc 주문내역 or 배송정보갱신
//@route PUT /api/orders/:id/deliver
//@접근 Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('주문내역을 찾을 수 없습니다');
  }
});

export { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders, updateOrderToDelivered };
