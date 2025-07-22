'use client'

// modules
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// assets
import icon1 from 'public/assets/landing/tech/icon1.svg'
import background1 from 'public/assets/landing/tech/background1.svg'
import background2 from 'public/assets/landing/tech/background2.svg'

// interfaces
import { TechnologySection } from '../../_interfaces/pages'

export default function Tech({ technologySection, domainBlob }: { technologySection: TechnologySection; domainBlob: string }) {
  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 768) setVisibleCount(5)
      else if (width >= 640) setVisibleCount(4)
      else setVisibleCount(3)
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const handlePrev = () => {
    setDirection('prev')
    setStartIndex((prev) => (prev - visibleCount + technologySection.technologyLists.length) % technologySection.technologyLists.length)
    setAnimationKey((prev) => prev + 1)
  }

  const handleNext = () => {
    setDirection('next')
    setStartIndex((prev) => (prev + visibleCount) % technologySection.technologyLists.length)
    setAnimationKey((prev) => prev + 1)
  }

  const getVisibleBoxes = () => {
    const items = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % technologySection.technologyLists.length
      const tech = technologySection.technologyLists[index]
      items.push({ ...tech, key: i })
    }
    return items
  }

  const visibleBoxes = getVisibleBoxes()

  const slideVariants = {
    initial: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative p-6 sm:p-8 md:p-12 min-2xl:p-20 bg-[#DEE9FF] overflow-hidden ">
      <Image
        priority
        width={0}
        height={0}
        src={background1}
        className="absolute top-0 right-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1 "
        alt={''}
      />
      <Image
        priority
        width={0}
        height={0}
        src={background2}
        className="absolute bottom-0 left-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1"
        alt={''}
      />

      <div className='w-full'>
        <div className="relative flex flex-col justify-center gap-y-20  2xl:gap-y-25 z-3">
          <div className="text-center flex flex-col gap-y-2.5">
            <h1 className="font-light text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[64px] uppercase">
              Teknologi
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] max-w-md mx-auto lg:max-w-[610px] 2xl:max-w-[980px]">
              Apapun teknologinya, bagi kami yang paling utama adalah membangun bisnis Anda. Beragam
              teknologi kami gunakan untuk menghasilkan karya yang terbaik.
            </p>
          </div>

          <Image
            width={0}
            height={0}
            src={icon1}
            alt=""
            className="w-max h-auto mx-auto sm:w-[440px] lg:w-[720px] xl:w-[840px] 2xl:w-[1002px]"
          />

          <div className="flex flex-row items-center gap-x-3 justify-center overflow-hidden lg:gap-x-7 xl:gap-x-9 2xl:gap-x-12">
            {technologySection.technologyLists.length > visibleCount && (
              <button
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-[#00DB05] flex items-center justify-center lg:w-10 lg:h-10 2xl:w-14 2xl:h-14"
              >
                <ChevronLeft className="text-white w-4 h-4 lg:w-8 lg:h-8" />
              </button>
            )}

            <div className="flex gap-x-3 overflow-hidden lg:gap-x-7 xl:gap-x-10">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={animationKey}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex gap-x-3 lg:gap-x-7 xl:gap-x-10 justify-center w-max"
                >
                  {visibleBoxes.map((item) => (
                    <div
                      key={item.key}
                      className="size-14 rounded-2xl bg-white flex justify-center items-center sm:size-16 lg:size-20 xl:size-23 2xl:size-32"
                    >
                      {item.technologyIcon?.filename && (
                        <Image
                          width={0}
                          height={0}
                          src={domainBlob + item.technologyIcon.filename}
                          className="w-6 h-auto sm:w-10 xl:w-12 2xl:w-16"
                          alt={item.technologyName}
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {technologySection.technologyLists.length > visibleCount && (
              <button
                onClick={handleNext}
                className="w-6 h-6 rounded-full bg-[#00DB05] flex items-center justify-center lg:w-10 lg:h-10 2xl:w-14 2xl:h-14"
              >
                <ChevronRight className="text-white w-4 h-4 lg:w-8 lg:h-8" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
