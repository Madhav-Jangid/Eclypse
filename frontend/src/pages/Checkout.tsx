import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


type Address = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
};


export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 200;
  const tax = +(subtotal * 0.18).toFixed(2);
  const total = subtotal + shipping + tax;


  const [address, setAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
  });


  const [isEditing, setIsEditing] = useState(true);



  useEffect(() => {
    const storedAddress = localStorage.getItem("shippingAddress");
    if (storedAddress) {
      setAddress(JSON.parse(storedAddress));
      setIsEditing(false);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setAddress((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveAddress = () => {
    localStorage.setItem("shippingAddress", JSON.stringify(address));
    setIsEditing(false);
  };

  const handleCancel = () => {
    const stored = localStorage.getItem("shippingAddress");
    if (stored) setAddress(JSON.parse(stored));
    setIsEditing(false);
  };

  const handlePlaceOrder = () => {
    if (!address.firstName) {
      alert('First add you address');
      return
    }
    if (cart.length === 0) return;
    alert("🎉 Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "/";
  };


  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12 pt-40">
        <div className="flex items-center mb-8">
          <a title="go back" href="/" className="mr-4">
            <svg width="5" height="8" className="size-3 md:size-5" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7L1 4L4 1" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>{' '}
          </a>
          <h1 className="text-2xl font-medium">Shipping Address</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Address Form */}
          <div className="border border-[#C8C8C8] rounded-lg p-8">
            <div className="flex items-center mb-6 justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-[#f63030] flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-[#f63030]"></div>
                </div>
                <span className="text-xl">Shipping Address</span>
              </div>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)} className="text-blue-600 underline text-sm">
                  Edit
                </button>
              )}
            </div>

            {isEditing ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">First Name</label>
                    <input type="text" id="firstName" value={address.firstName} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2">Last Name</label>
                    <input type="text" id="lastName" value={address.lastName} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="streetAddress" className="block mb-2">Street Address</label>
                  <input type="text" id="streetAddress" value={address.streetAddress} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label htmlFor="aptNumber" className="block mb-2">Apt Number</label>
                    <input type="text" id="aptNumber" value={address.aptNumber} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block mb-2">State</label>
                    <input type="text" id="state" value={address.state} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block mb-2">Zip</label>
                    <input type="text" id="zip" value={address.zip} onChange={handleChange} className="w-full border border-[#c3c3c3] rounded-lg p-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button onClick={handleCancel} className="border border-[#c3c3c3] rounded-lg py-3 px-4 hover:bg-[#f0f0f0]">Cancel</button>
                  <button onClick={handleSaveAddress} className="bg-black text-white rounded-lg py-3 px-4 hover:bg-[#333333]">Save This Address</button>
                </div>
              </>
            ) : (
              <div className="text-[#333] space-y-2">
                <p><strong>{address.firstName} {address.lastName}</strong></p>
                <p>{address.streetAddress}{address.aptNumber && `, Apt ${address.aptNumber}`}</p>
                <p>{address.state} - {address.zip}</p>
              </div>
            )}
          </div>


          {/* Order Summary */}
          <div className="bg-[#f0f0f0] rounded-lg p-8">
            <p className="text-[#575757] mb-4">
              By placing your order, you agree to our company{" "}
              <a href="/" className="text-black">Privacy policy</a>{" "}
              and{" "}
              <a href="/" className="text-black">Conditions of use</a>.
            </p>

            <div className="border-t border-[#C8C8C8] my-6"></div>

            <h2 className="text-2xl font-medium mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="group flex justify-between items-center bg-white p-4 rounded-lg">
                    <div className="flex gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-[#575757]">Size: {item.size}</p>
                        <p className="text-sm text-[#575757]">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div>
                      <button className="group-hover:block hidden text-red-500" onClick={() => removeFromCart(item.productId, item.size)}>Remove</button>
                      <span className="font-medium group-hover:hidden block">₹ {item.price * item.quantity}</span>
                    </div>
                  </div>
                ))
              )}

              <div className="flex justify-between pt-2">
                <span>Subtotal:</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>₹ {shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18% GST):</span>
                <span>₹ {tax}</span>
              </div>
            </div>

            <div className="border-t border-[#C8C8C8] my-6"></div>

            <div className="flex justify-between text-xl font-medium mb-8">
              <span>Total:</span>
              <span>₹ {cart.length === 0 ? '0' : total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
              className={`w-full rounded py-4 px-6 ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-900'}`}>
              Place Order
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
