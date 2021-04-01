import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// .env파일 안에있는 정보를 가져옴
dotenv.config();
// db연결 객체
connectDB();
// express js 사용
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// bodyParser, json형태로 parsing
app.use(express.json());

// 미들웨어 마운트, 서버에서 데이터를 가져옴
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API 구동중 ...');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT | 5000;
app.listen(PORT, console.log(`환경변수 적용 서버가 ${PORT}포트에서 ${process.env.NODE_ENV} 모드로 구동중`));
