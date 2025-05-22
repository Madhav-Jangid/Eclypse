
import React from 'react';
import '../App.css';
import ItemShowcase from '../components/ItemShowcase';
import Feedbacks from '../components/Feedbacks';
import Accordination from '../components/Accordination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
const ProductShowcase = React.lazy(() => import('../components/ProductShowcase'));

function HomePage() {

  return (
    <div className='w-full pt-[170px]'>
      <div className='px-5 md:px-12'>
        <Hero />
        <ProductShowcase />
      </div>
      <ItemShowcase />
      <div className='px-5 md:px-12'>
        <Accordination />
        <Feedbacks />
        <span className='block h-px w-full bg-[#333] my-28 '></span>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
