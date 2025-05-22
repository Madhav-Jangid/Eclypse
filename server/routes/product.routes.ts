import express from 'express';
import Product from '../models/Product';

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

export default router;