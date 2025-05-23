import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import productRoutes from './routes/product.routes';
import feedbackRoutes from './routes/feedback.routes';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());

app.get('/', (req: any, res: any) => {
  res.send('Server is running');
});
app.use('/api/products', productRoutes);
app.use('/api/feedbacks', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));