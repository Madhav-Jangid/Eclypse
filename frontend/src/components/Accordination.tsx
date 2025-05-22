import React from 'react'

export default function Accordination() {

  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const accordions = [
    {
      title: "Size & Fit",
      id: "size",
      content: "Our garments follow international sizing standards. Please refer to the size chart for accurate measurements. Fit is relaxed unless specified."
    },
    {
      title: "Delivery & Returns",
      id: "delivery",
      content: "Standard delivery in 5–7 business days. Returns are accepted within 14 days of delivery. Product must be unworn and tags intact."
    },
    {
      title: "How This Was Made",
      id: "made",
      content: "Crafted using sustainable materials with minimal environmental impact. Ethically produced by artisans with care and precision."
    }
  ];



  return (
    <div className='w-full mt-24'>
      {accordions.map(({ title, id, content }) => (
        <div key={id} className='w-full border-b border-[#333]'>
          <button
            onClick={() => toggleSection(id)}
            className='w-full flex items-center justify-between h-[100px]  md:h-[150px] text-left'
          >
            <p className='text-[20px] sm:Text-3xl md:text-4xl lg:text-5xl'>{title}</p>
            <svg width="30" height="30" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={` size-3 md:size-5 lg:size-8 transition-transform duration-300 ${openSection === id ? 'rotate-180' : ''}`}>
              <path d="M5 1V11M5 11L9 7M5 11L1 7" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {openSection === id && (
            <div className='pb-8 text-2xl text-gray-300'>
              <p>{content}</p>
            </div>
          )}
        </div>
      ))}
    </div>

  )
}
