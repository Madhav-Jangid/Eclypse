
export default function Footer() {
  return (
    <div className='block  px-0 md:px-10'>
      <div className='flex  items-center justify-between'>
        <p className='flex items-start gap-2 justify-start text-[23px] sm:text-4xl opacity-80'>Eclypse <span className='opacity-50'><svg width="7" height="7" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </span></p>



        <button title='goToTop' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='bg-white rounded-full p-3 md:p-4'>
          <svg width="10" height="12" className='size-2 md:size-4' viewBox="0 0 10 12" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11V1M5 1L1 5M5 1L9 5" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>




      <div className='flex flex-wrap items-end justify-between mt-8 pb-10 md:pb-20 gap-8'>
        <div>
          <a className='text-[10px] md:text-sm mr-0 md:mr-2 opacity-90' href="/">Home</a>
          <span className='opacity-50 mx-1 md:mx-3'>/</span>
          <a className='text-[10px] md:text-sm mr-0 md:mr-2 opacity-90' href="/">About</a>
          <span className='opacity-50 mx-1 md:mx-3'>/</span>
          <a className='text-[10px] md:text-sm mr-0 md:mr-2 opacity-90' href="/checkout">Buy</a>
          <span className='opacity-50 mx-1 md:mx-3'>/</span>
          <br />
          <a className='text-[10px] md:text-sm mr-0 md:mr-2 opacity-90' href="/">Our Customers</a>
          <span className='opacity-50 mx-1 md:mx-3'>/</span>
          <br />
          <a className='text-[10px] md:text-sm mr-0 md:mr-2 opacity-90' href="/">Contact</a>
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <div>
            <p className='text-[8px] sm:text-sm opacity-50'>CONTACT</p>
            <h3 className='text-[14px] md:text-lg opacity-90'>+91 123-456-7890</h3>
          </div>
          <div>
            <p className='text-[8px] sm:text-sm opacity-50'>EMAIL</p>
            <h3 className='text-[10px] md:text-base opacity-70'>eclypse@gmail.com</h3>
          </div>
        </div>
        <p className='text-[7px] md:text-xs opacity-45'>© Eclypse 2025</p>
      </div>
    </div>
  )
}
