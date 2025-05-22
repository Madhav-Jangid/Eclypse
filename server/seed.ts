import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Product from './models/Product';
import Feedback from './models/Feedback';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected for seeding');

    await Product.deleteMany({});
    await Feedback.deleteMany({});

    const products = await Product.insertMany([
      {
        name: 'Classic Cotton Shirt',
        description: 'Premium cotton shirt with soft texture and durable stitch.',
        sizes: ['S', 'M', 'L', 'XL'],
        mrp: 1499,
        images: [
          'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/p/a/6/l-mn25-shirt-hs-halfwhite-down-pckt-maniac-original-imahbhefctyhqpnh.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/x/i/l-mn25-shirt-hs-halfwhite-down-pckt-maniac-original-imahbhefqrcdd8a7.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/t/j/g/l-mn25-shirt-hs-halfwhite-down-pckt-maniac-original-imahbhef4cbg25mm.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/b/x/w/l-mn25-shirt-hs-halfwhite-down-pckt-maniac-original-imahbhefzhxjmxyd.jpeg?q=70&crop=false'
        ]
      },
      {
        name: 'Denim Jeans',
        description: 'Slim-fit, stretchable denim jeans with deep blue finish.',
        sizes: ['XS', 'S', 'M', 'L'],
        mrp: 1999,
        images: [
          'https://rukminim2.flixcart.com/image/832/832/xif0q/jean/k/i/g/28-z2-mjrp-baggy-04-zaysh-original-imahatbnm5sbpgxr.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/jean/5/c/o/28-z2-mjrp-baggy-04-zaysh-original-imahatbnjnavp4ts.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/jean/x/y/0/28-z2-mjrp-baggy-04-zaysh-original-imahatbnuzhhhrg7.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/jean/p/t/l/28-z2-mjrp-baggy-04-zaysh-original-imahatbnhntkzaxz.jpeg?q=70&crop=false'
        ]
      },
      {
        name: 'Summer Dress',
        description: 'Light and airy dress perfect for summer days.',
        sizes: ['S', 'M', 'L'],
        mrp: 2499,
        images: [
          'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/p/8/8/xl-d1925gkslk-demirner-original-imah5rz7cuyx3yuh.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/v/c/n/xl-d1925gkslk-demirner-original-imah5rz7xtgvvz8u.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/y/p/f/xl-d1925gkslk-demirner-original-imah5rz7sxpgebqq.jpeg?q=70&crop=false',
          'https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/k/w/3/xl-d1925gkslk-demirner-original-imah5rz7gdyhpc24.jpeg?q=70&crop=false'
        ]
      },

    ]);

    const feedbacks = await Feedback.insertMany([
      {
        name: 'Aarav Sharma',
        profileUrl: 'https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg',
        location: 'Delhi, India',
        feedback: 'Loved the quality and fit of the clothes. Great experience!'
      },
      {
        name: 'Meera Kapoor',
        profileUrl: 'https://i.pinimg.com/736x/5d/70/7d/5d707d92695df085b8cf6a88f4d24225.jpg',
        location: 'Mumbai, India',
        feedback: 'Packaging was amazing and delivery was quick. Will buy again!'
      },
      {
        name: 'Rohan Patel',
        profileUrl: 'https://i.pinimg.com/736x/05/78/4a/05784abd5bd891b2c6b777e99cef3645.jpg',
        location: 'Bangalore, India',
        feedback: 'The designs are unique and stylish. Highly recommend!'
      },
      {
        name: 'Priya Singh',
        profileUrl: 'https://i.pinimg.com/736x/0b/ec/6d/0bec6d810ecb85e8a81eb6bb2ba6ce63.jpg',
        location: 'Chennai, India',
        feedback: 'Customer service was excellent. They helped me choose the right size.'
      },
    ]);

    console.log(`Seeded ${products.length} products and ${feedbacks.length} feedbacks`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();