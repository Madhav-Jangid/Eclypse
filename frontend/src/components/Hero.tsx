
import IntroVideo from '../assets/videos/into.mp4';
import Intro_Frame_1 from '../assets/images/Intro_Frame_1.png'
import { useState } from 'react';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <div className='flex items-end justify-between'>
        <div className='flex h-max'>
          <h1 className='text-[40px] sm:text-[70px] md:text-[90px] lg:text-[107px]'>Eclypse</h1>
          <span className='size-4 sm:size-5 md:size-6 lg:size-7 nt-0 md:mt-10'><svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.381 26.4307C20.6351 26.4307 26.5233 20.5424 26.5233 13.2884C26.5233 6.03438 20.6351 0.146133 13.381 0.146133C6.12702 0.146133 0.23877 6.03438 0.23877 13.2884C0.23877 20.5424 6.12702 26.4307 13.381 26.4307ZM13.381 24.2402C7.32528 24.2402 2.42915 19.3442 2.42915 13.2884C2.42915 7.23264 7.32528 2.33651 13.381 2.33651C19.4368 2.33651 24.3329 7.23264 24.3329 13.2884C24.3329 19.3442 19.4368 24.2402 13.381 24.2402Z" fill="white" fill-opacity="0.85" />
            <path d="M10.0696 19.1895C10.7396 19.1895 11.1133 18.7515 11.1133 18.0429V14.8345H13.5098L15.7388 18.5066C16.048 19.0092 16.3186 19.1895 16.7696 19.1895C17.3236 19.1895 17.7102 18.8288 17.7102 18.3133C17.7102 18.0299 17.6329 17.8237 17.4653 17.566L15.5327 14.5382C17.053 14.0356 18.0323 12.6828 18.0323 11.0851C18.0323 8.76591 16.3702 7.29707 13.7546 7.29707H10.0568C9.39964 7.29707 9.05176 7.76091 9.05176 8.45669V18.0429C9.05176 18.7256 9.41252 19.1895 10.0696 19.1895ZM11.1133 13.327V8.869H13.5098C14.9915 8.869 15.9966 9.69361 15.9966 11.1367C15.9966 12.5411 15.0173 13.327 13.4582 13.327H11.1133Z" fill="white" fill-opacity="0.85" />
          </svg>
          </span>
        </div>
        <p className='text-xs'>
          © 2025
        </p>
      </div>

      <div className='rounded-md overflow-hidden  max-h-[530px] mt-7 relative'>
        {!videoLoaded && (
          <img
            src={Intro_Frame_1}
            alt="Intro Frame"
            className='  w-full h-full max-h-[530px] object-cover z-10'
          />
        )}

        <video
          preload="auto"
          src={IntroVideo}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        />

        <p className='absolute bottom-5 right-10 text-end text-[14px] sm:text-[28px] md:text-[34px]'>A silhouette worth remembering</p>
      </div>

      <p className='text-[20px] sm:text-[32px] md:text-[37px] lg:text-[42px] max-w-[800px]  mt-20 md:mt-40 mb-20'>Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.</p>

      <div className='w-max mt-20 group hover:bg-white  transition-colors duration-200'>
        <a href="" className='text-[20px] md:text-2xl flex items-center group-hover:text-black transition-colors duration-200 '>
          <p className='group-hover:translate-x-5 transition-transform duration-200'>Learn more about Eclypse</p>
          <svg className='group-hover:opacity-0' width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.802 25.1686L25.1684 13.8021" stroke="#E3E3E3" stroke-width="2.29637" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.802 13.8021H25.1684V25.1686" stroke="#E3E3E3" stroke-width="2.29637" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <span className='block h-px w-full bg-white mt-1'></span>
      </div>
    </>
  )
}
