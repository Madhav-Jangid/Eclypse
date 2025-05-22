import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sizes: [{ type: String, enum: ['XS', 'S', 'M', 'L', 'XL'] }],
  mrp: { type: Number, required: true },
  images: [{ type: String, required: true }]
});

export default mongoose.model('Product', productSchema);
