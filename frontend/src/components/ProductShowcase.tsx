
import HeroSectionIntoVideo from '../assets/videos/hero-section.mp4';
import ProductImage1 from '../assets/images/products-1.png';
import ProductImage2 from '../assets/images/products-2.png';
import ProductImage3 from '../assets/images/products-3.png';
import ProductIcon from '../assets/images/products-icon.png';
import CompanyIcon from '../assets/images/company-icon.png';




export default function ProductShowcase() {
  return (
    <div className='mt-40 flex flex-col gap-3 md:gap-6'>
      <div className='flex items-end justify-between gap-2  md:gap-5'>


        <div className='flex-1 h-full max-h-[462px] relative group rounded-md overflow-hidden'>
          <div className='w-full h-full object-cover overflow-hidden'>
            <video
              src={HeroSectionIntoVideo}
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full  object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 h-full w-full bg-[#36363699] flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-4 pb-6 items-end">
            <p className='text-4xl'>
              Structured tailoring for all-<br />day movement
            </p>
          </div>
        </div>



        <div className='w-[32.5%] aspect-square rounded-lg overflow-hidden lg:block hidden relative group'>
          <img
            loading="lazy"
            src={ProductImage1}
            alt="productImage1"
            className='h-full w-full object-cover'
          />
          <div className="absolute top-0 right-0 h-full w-full bg-[#36363699] flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-4 pb-6 items-end">
            <p className='text-4xl text-white'>
              Premium wool blend in<br />signature vermilion
            </p>
          </div>
        </div>

      </div>


      <div className='flex items-center justify-between gap-2  md:gap-5'>
        <div className='w-1/3 aspect-square rounded-lg overflow-hidden lg:hidden block relative group'>
          <img
            loading="lazy"
            src={ProductImage1}
            alt="productImage1"
            className='h-full w-full object-cover'
          />
          <div className="absolute top-0 right-0 h-full w-full bg-[#36363699] flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-4 pb-6 items-end">
            <p className='text-4xl text-white'>
              Premium wool blend in<br />signature vermilion
            </p>
          </div>
        </div>



        <div className="w-1/3 aspect-square rounded-lg overflow-hidden relative group">
          <img
            loading="lazy"
            src={ProductImage2}
            alt="productImage2"
            className='h-full w-full object-cover'
          />
          <div className="absolute top-0 right-0 h-full w-full bg-[#36363699] flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-4 pb-6 items-end">
            <p className="text-4xl">
              Discreet side pockets<br />with clean finish
            </p>
          </div>
        </div>


        <div className='w-1/3 aspect-square rounded-lg overflow-hidden relative group'>
          <img
            loading="lazy"
            src={ProductImage3}
            alt="productImage3"
            className='h-full w-full object-cover'
          />
          <div className="absolute top-0 right-0 h-full w-full bg-[#36363699] flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-4 pb-6 items-end">
            <p className='text-4xl '>
              Hand-cut and<br />assembled in small<br />batches
            </p>
          </div>
        </div>


        <div className='hidden w-1/3 rounded-lg overflow-hidden aspect-square lg:block relative group'>
          <img loading="lazy" className='h-full w-full object-cover group-hover:hidden transition-all' src={ProductIcon} alt="ProductIcon" />
          <img loading="lazy" className='h-full w-full object-cover group-hover:block   hidden group-hover:opacity-100 opacity-0 transition-opacity duration-75 text-4xl ' src={CompanyIcon} alt="CompanyIcon" />
        </div>
      </div>
    </div>
  )
}
