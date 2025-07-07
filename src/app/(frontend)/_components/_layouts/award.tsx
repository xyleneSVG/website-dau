'use client'
import Image from 'next/image'
import React, { useState } from 'react'

// background image
import backgroundIcon2 from 'public/assets/landing/service/backgroundIcon2.svg'
import backgroundIcon3 from 'public/assets/landing/service/backgroundIcon3.svg'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: '/assets/landing/award/award.png',
    title: 'Sertifikat MURI untuk:',
    description: 'Desa pertama dengan data penduduk online berdasarkan status sosial mereka.',
  },
  {
    image: '/assets/landing/award/award.png',
    title: 'Penghargaan Transparansi:',
    description: 'Pengelolaan dana desa dengan sistem digital dan transparan.',
  },
  {
    image: '/assets/landing/award/award.png',
    title: 'Award Keterbukaan Informasi:',
    description: 'Penerapan prinsip open-data untuk kebutuhan publik.',
  },
  {
    image: '/assets/landing/award/award.png',
    title: 'Best Innovation in E-Gov:',
    description: 'Inovasi layanan digital dalam pemerintahan desa.',
  },
  {
    image: '/assets/landing/award/award.png',
    title: 'Apresiasi Kementerian Desa:',
    description: 'Percepatan transformasi digital desa mandiri.',
  },
]

export default function Award() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  const current = slides[index]
  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon2}
        alt=""
        className="absolute top-0 right-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon3}
        alt=""
        className="absolute bottom-0 left-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <div className="w-full p-8 flex flex-col items-center md:pt-15 2xl:gap-y-24 max-md:max-w-[440px] lg:w-[1000px] 2xl:w-[1200px]">
        <h1 className="uppercase font-light text-[18px] md:text-[28px] lg:text-[32px] xl:text-[48px] 2xl:text-[64px]">
          media & awards
        </h1>
        <p className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-center mt-[10px] md:mt-[30px] xl:mt-[50px] 2xl:mt-[60px]">
          "Publikasi dan penghargaan adalah ukuran bagaimana kita berkontribusi dalam menciptakan
          kehidupan yang lebih baik bagi klien dan mitra kita."
        </p>
        <div className="h-fit md:flex mt-[50px] md:mt-[70px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={`Award ${index + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-[200px] md:w-[250px] lg:w-[280px] xl:w-[320px] mx-auto"
            />
          </AnimatePresence>

          {/* Text Carousel */}
          <div className="flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title + current.description}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-[#BE9844] text-[16px] md:text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] mt-[30px] md:mt-0">
                  {current.title}
                </h1>
                <p className="font-bold text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] text-justify mt-[10px] mb-[20px] md:mt-[20px] xl:mt-[30px] md:mb-0">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="w-fit rounded-[30px] bg-[#EBF1F6] flex items-center py-[10px] px-[15px] ml-auto">
              <button
                onClick={prevSlide}
                className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[28px] lg:h-[28px]"
              >
                <svg
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M19.09 20.7994L12.5367 14.2462L19.09 7.69294L17.0956 5.69847L8.54778 14.2462L17.0956 22.7939L19.09 20.7994Z"
                    fill="#CECFDB"
                  />
                </svg>
              </button>
              <p className="text-[12px] md:text-[16px] xl:text-[20px] mx-[30px] md:mx-[40px] lg:mx-[50px] xl:mx-[60px]">
                <span className="font-bold">{index + 1}</span>/{slides.length}
              </p>
              <button
                onClick={nextSlide}
                className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[28px] lg:h-[28px]"
              >
                <svg
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M9.90963 20.7994L16.4629 14.2462L9.90963 7.69294L11.9041 5.69847L20.4519 14.2462L11.9041 22.7939L9.90963 20.7994Z"
                    fill="#00DB05"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
