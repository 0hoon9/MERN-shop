// 에러처리에 대한 미들웨어
const notFound = (req, res, next) => {
  console.log('실행이 되나요?');
  const error = new Error(`${req.originalUrl} 이 발견되지 않았습니다`);
  res.status(404);
  console.log('여기가 실행이 되나요?');
  console.log('뉴 에러: ', error);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  console.log('에러: ', err);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
