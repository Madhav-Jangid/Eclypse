import NavbarIcon from '../assets/images/nav-icon.png';
import { useCart } from '../context/CartContext';
export default function Navbar() {
  const { cart } = useCart();
  return (
    <div className='z-50 flex flex-1 w-full items-center justify-between py-3 px-5 md:px-16 lg:px-24  fixed top-0 backdrop-blur-md bg-[#00000080] ' >
      <img src={NavbarIcon} alt='NavbarIcon' />
      <ul className='flex items-center justify-between w-full max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%]'>
        <li className='text-[12px] md:text-[19px] text-white font-normal '>About Us</li>
        <li className='text-[12px] md:text-[19px] text-white font-normal '>Waitlist</li>
        <li className='text-[12px] md:text-[19px] text-white font-normal '>Cart{cart.length ? `(${cart.length})` : ''}</li>
        <li>
          <a href='/checkout' className='flex items-center justify-center bg-white hover:bg-[#F63030] hover:text-white  text-black text-[12px] md:text-[19px] font-semibold w-[64px]  md:w-[111px] h-[30px] md:h-[53px] rounded-lg'>
            Buy
          </a>
        </li>
      </ul>
    </div>
  )
}
