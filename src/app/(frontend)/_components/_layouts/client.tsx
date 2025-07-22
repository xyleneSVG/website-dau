'use client'

// modules
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// images
import background from 'public/assets/landing/client/background1.svg'

// interfaces
import { ClientSection } from '../../_interfaces/pages'

export default function Client({ clientSection, domainBlob }: { clientSection: ClientSection, domainBlob: string }) {
  const [visibleCount, setVisibleCount] = useState(4)
  const [startIndex, setStartIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 768) setVisibleCount(10)
      else if (width >= 640) setVisibleCount(6)
      else setVisibleCount(4)
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const handlePrev = () => {
    setDirection('prev')
    setStartIndex((prev) => (prev - visibleCount + clientSection.clientLists.length) % clientSection.clientLists.length)
  }

  const handleNext = () => {
    setDirection('next')
    setStartIndex((prev) => (prev + visibleCount) % clientSection.clientLists.length)
  }

  const getVisibleClient = () => {
    const items = []
    const actualCount = Math.min(visibleCount, clientSection.clientLists.length)
    for (let i = 0; i < actualCount; i++) {
      const index = (startIndex + i) % clientSection.clientLists.length
      const tech = clientSection.clientLists[index]
      items.push({ ...tech, key: i })
    }
    return items
  }

  const visibleClient = getVisibleClient()
  const half = Math.ceil(visibleClient.length / 2)
  const firstRow = visibleClient.slice(0, half)
  const secondRow = visibleClient.slice(half)

  const slideVariants = {
    enter: ({ direction, reverse }: { direction: 'next' | 'prev'; reverse?: boolean }) => ({
      x: direction === 'next' ? (reverse ? -100 : 100) : reverse ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: ({ direction, reverse }: { direction: 'next' | 'prev'; reverse?: boolean }) => ({
      x: direction === 'next' ? (reverse ? 100 : -100) : reverse ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative p-6 sm:p-8 md:p-12 min-2xl:p-20">
      <Image
        className="absolute z-0 w-[205px] h-auto top-0 right-0 md:w-[340px] md:-top-[10%] xl:w-[450px] xl:-top-[50%]"
        src={background}
        alt=""
        width={0}
        height={0}
      />
      <div className="w-full relative z-10 flex flex-col items-center gap-y-7 md:pt-10 2xl:gap-y-24">
        <h1 className="font-light uppercase text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[64px]">
          KLIEN KAMI
        </h1>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-8">
          {clientSection.clientLists.length > visibleCount && (
            <button
              onClick={handlePrev}
              className="w-6 h-6 rounded-full bg-[#00DB05] flex items-center justify-center lg:w-10 lg:h-10 2xl:w-14 2xl:h-14"
            >
              <ChevronLeft className="text-white w-4 h-4 lg:w-8 lg:h-8" />
            </button>
          )}

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait" custom={{ direction }}>
              <motion.div
                key={`row1-${startIndex}`}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-center"
                custom={{ direction }}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {firstRow.map(
                  (item) =>
                    item.clientLogo?.filename && (
                      <div
                        key={item.key}
                        className="flex items-center bg-white justify-center rounded-[10px] shadow-lg w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] lg:w-[120px] lg:h-[110px]"
                      >
                        <Image
                          src={domainBlob + item.clientLogo.filename}
                          alt={`client-${item.key}`}
                          width={0}
                          height={0}
                          className="w-[40px] h-auto sm:w-[55px] lg:w-[70px]"
                        />
                      </div>
                    ),
                )}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={{ direction }}>
              <motion.div
                key={`row2-${startIndex}`}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-center"
                custom={{ direction }}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                {secondRow.map(
                  (item) =>
                    item.clientLogo?.filename && (
                      <div
                        key={item.key}
                        className="flex items-center bg-white justify-center rounded-[10px] shadow-lg w-[90px] h-[80px] sm:w-[100px] sm:h-[90px] lg:w-[120px] lg:h-[110px]"
                      >
                        <Image
                          src={domainBlob + item.clientLogo.filename}
                          alt={`client-${item.key}`}
                          width={0}
                          height={0}
                          className="w-[40px] h-auto sm:w-[55px] lg:w-[70px]"
                        />
                      </div>
                    ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {clientSection.clientLists.length > visibleCount && (
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
  )
}
