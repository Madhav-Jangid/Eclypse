/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
type Product = {
  _id: string;
  name: string;
  description: string;
  sizes: string[];
  mrp: number;
  images: string[];
};

export default function ItemShowcase() {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart({
      productId: product._id,
      name: product.name,
      size: selectedSize,
      quantity: 1,
      price: product.mrp,
      image: product.images[0],
    });
    setSelectedSize(null)
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        if (data.length > 0) {
          setExpandedProductId(data[0]._id); // Expand first product by default
        }
      })
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const toggleProduct = (productId: string) => {
    setSelectedSize(null);
    setExpandedProductId((prev) => (prev === productId ? null : productId));
  };

  return (
    <div className="w-full">
      {products.map((product) => {
        const isExpanded = expandedProductId === product._id;

        return (
          <div key={product._id} className="w-full">
            <button
              onClick={() => toggleProduct(product._id)}
              className="w-full  text-white px-6 py-6 flex items-center justify-between"
            >
              <h2 className={`text-2xl sm:Text-3xl md:text-4xl lg:text-5xl ${expandedProductId === product._id ? 'py-20 md:py-40' : 'py-5 md:py-10'}`}>{product.name}</h2>
              {isExpanded ? <svg width="25" height="25" className='size-3 md:size-5 lg:size-8' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 13L7.00002 7.00002M7.00002 7.00002L1 1M7.00002 7.00002L13 1M7.00002 7.00002L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
                :
                <svg width="30" height="30" className='size-3 md:size-5 lg:size-8' viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1V11M5 11L9 7M5 11L1 7" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}

            </button>

            {isExpanded && (
              <div className="w-full min-h-screen flex flex-col md:flex-row items-start bg-white">
                <div className="h-[270px] sm:h-[300px] md:h-[350px] lg:h-screen w-full lg:w-[50%] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-screen w-full object-cover"
                  />
                </div>

                <div className="w-full md:max-w-[50%] p-5 py-10 text-black flex flex-col justify-start items-start gap-14">
                  <p className="text-sm font-semibold">{product.description}</p>

                  <div className="flex items-center justify-between gap-3">
                    {product.images.slice(1, 4).map((img, index) => (
                      <div key={index} className="size-1/3 object-center">
                        <img className="h-full w-full object-cover" src={img} alt={`demo-${index}`} />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-start gap-2">
                    <p className="text-4xl text-black font-semibold">₹ {product.mrp}</p>
                    <span className="text-[#767676]">MRP incl. of all taxes</span>
                  </div>

                  <div className="flex items-end justify-start gap-4">
                    <p className="text-xl text-[#767676] font-semibold">Please select a size</p>
                    <span className="text-base text-[#767676] font-semibold underline">Size chart</span>
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-[82px] h-[49px] rounded-md border text-sm font-medium transition-colors duration-200 
                          ${selectedSize === size
                            ? 'bg-black text-white'
                            : 'bg-[#D9D9D9] text-gray-700 hover:bg-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  <span className="h-px w-full bg-gray-300"></span>

                  <div className="w-full flex md:flex-row flex-col items-center justify-between gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="h-[66px] text-[20px] w-full md:w-1/3 border-2 rounded-lg"
                    >
                      Add to Cart
                    </button>
                    <a onClick={(e: any) => {

                      handleAddToCart(product)
                      if (!selectedSize) {
                        e.preventDefault();
                      }
                    }} href='/checkout' className="h-[66px] text-[20px] md:flex-1 flex items-center justify-center w-full rounded-lg bg-black text-white hover:bg-[#F63030]">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
