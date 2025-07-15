'use client'

import React from 'react'

const images = [
  { url: "/assets/landing/tech2/figma.png", name: "Figma" },
  { url: "/assets/landing/tech2/laravel.png", name: "Laravel" },
  { url: "/assets/landing/tech2/node.png", name: "Node.js" },
  { url: "/assets/landing/tech2/ios.png", name: "iOS" },
  { url: "/assets/landing/tech2/android.png", name: "Android" },
  { url: "/assets/landing/tech2/html.png", name: "HTML5" },
  { url: "/assets/landing/tech2/css.png", name: "CSS3" },
  { url: "/assets/landing/tech2/json.png", name: "JSON" },
]

export default function Tech2() {
  return (
    <div className="w-full px-6 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20">
      <h1 className='text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-black font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center'>
        Teknologi
      </h1>
      
      <div className='md:w-[80%] lg:w-[75%] border border-[#CECFDB] py-4 sm:py-6 md:py-8 xl:py-10 2xl:py-12 overflow-hidden rounded-2xl mx-auto'>
        <div className="relative w-full">
          <div className="flex scroll-container">
            {[...images, ...images].map((img, index) => (
              <div key={index} className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 xl:mx-10">
                <div className="w-16 md:w-20 lg:w-24 xl:w-28 flex items-center justify-center">
                  <img 
                    src={img.url} 
                    alt={img.name || 'Technology'} 
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
