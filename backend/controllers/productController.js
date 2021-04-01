import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc 모든 제품 가져오기
//@route GET /api/products
//@접근 Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//@desc 특정 제품 가져오기
//@route GET /api/products/:id
//@접근 Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('상품을 찾지 못했습니다');
  }
});

//@desc 특정 제품 삭제하기
//@route DELETE /api/products/:id
//@접근 Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: '상품이 삭제되었습니다' });
  } else {
    res.status(404);
    throw new Error('상품을 찾지 못했습니다');
  }
});

//@desc 제품 생성하기
//@route POST /api/products
//@접근 Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: '테스트 상품',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: '테스트 브랜드',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: '테스트 상세정보',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc 제품 수정하기
//@route PUT /api/products/:id
//@접근 Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('상품을 찾지 못했습니다');
  }
});

//@desc 리뷰 생성
//@route POST /api/products/:id/reviews
//@접근 Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('상품에 이미 리뷰를 달았습니다');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

    await product.save();
    res.status(201).json({ message: '리뷰가 추가되었습니다' });
  } else {
    res.status(404);
    throw new Error('상품을 찾지 못했습니다');
  }
});

//@desc 별점 높은 상품 가져오기
//@route GET /api/products/top
//@접근 Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

export { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts };
