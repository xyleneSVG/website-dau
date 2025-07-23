'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ThreeDimensionCarouselSection } from '../../_interfaces/pages'
import { RichTextRenderer } from '../richText/richTextRenderer'

interface ThreeDimensionCarouselProps {
  data: ThreeDimensionCarouselSection
  domainBlob: string
  
}

export default function ThreeDimensionCarousel({data, domainBlob}: ThreeDimensionCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === data.carouselItems.length - 1 ? 0 : prev + 1))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? data.carouselItems.length - 1 : prev - 1))
  }

  const getPosition = (index: number): 'prev' | 'active' | 'next' | 'hidden' => {
    if (index === activeIndex) return 'active'
    if (isMobile) return 'hidden'
    if (index === (activeIndex === 0 ? data.carouselItems.length - 1 : activeIndex - 1)) return 'prev'
    if (index === (activeIndex === data.carouselItems.length - 1 ? 0 : activeIndex + 1)) return 'next'
    return 'hidden'
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    prev: { opacity: 0.4, scale: 0.8, x: '-150%' },
    active: { opacity: 1, scale: 1, x: '0%' },
    next: { opacity: 0.4, scale: 0.8, x: '150%' },
  }

  return (
    <div>
      <div className="w-full bg-[#E3F1FE]">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="text-start text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-light uppercase">
            <RichTextRenderer content={data.sectionTitle.root} />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        <div className="relative flex items-center justify-center gap-6 h-[200px] sm:h-[250px] md:h-[300px] overflow-visible">
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 z-10 bg-green-400 hover:opacity-80 text-white p-2 sm:p-3 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="relative w-full sm:w-[80%] h-full flex items-center justify-center">
            {data.carouselItems.map((item, index) => {
              const position = getPosition(index)
              if (position === 'hidden') return null

              return (
                <motion.div
                  key={item.id}
                  variants={imageVariants}
                  animate={position}
                  transition={{ duration: 0.4 }}
                  className={`absolute ${
                    position === 'active'
                      ? 'w-[120px] sm:w-[180px] md:w-[250px] h-[120px] sm:h-[180px] md:h-[250px]'
                      : 'w-[80px] sm:w-[120px] md:w-[150px] h-[80px] sm:h-[120px] md:h-[150px]'
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image src={domainBlob+item.icon.filename} alt={item.title} fill className="object-contain" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 z-10 bg-green-400 hover:opacity-80 text-white p-2 sm:p-3 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data.carouselItems[activeIndex].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 md:mt-8 text-center max-w-3xl mx-auto px-2"
          >
            <h3 className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold mb-2">{data.carouselItems[activeIndex].title}</h3>
            <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-justify">
              {data.carouselItems[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
