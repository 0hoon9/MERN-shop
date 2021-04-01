import mongoose from 'mongoose';

// MongoDB와 연결
const connectDB = async () => {
  try {
    // .env에 저장되어있는 MongoDB URL을 연결
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB 연결 : ${conn.connection.host}`);
  } catch (error) {
    console.log('MongoDB 연결실패');
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
