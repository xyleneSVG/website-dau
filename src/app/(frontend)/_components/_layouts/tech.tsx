'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import icon1 from 'public/assets/landing/tech/icon1.svg'
import background1 from 'public/assets/landing/tech/background1.svg'
import background2 from 'public/assets/landing/tech/background2.svg'

import { TechnologySection } from '../../_interfaces/pages'

export default function Tech({
  technologySection,
  domainBlob,
}: {
  technologySection: TechnologySection
  domainBlob: string
}) {
  const [visibleCount, setVisibleCount] = useState(3)
  const [items, setItems] = useState(technologySection.technologyLists)
  const [isSliding, setIsSliding] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateVisibleCount = () => {
    const width = window.innerWidth
    if (width >= 768) setVisibleCount(5)
    else if (width >= 640) setVisibleCount(4)
    else setVisibleCount(3)
  }

  useEffect(() => {
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const slide = (dir: 'left' | 'right') => {
    if (isSliding) return
    setIsSliding(true)

    const container = containerRef.current
    if (!container) return

    // Lebar 1 item relatif terhadap container
    const shiftPercent = 100 / items.length

    container.style.transition = 'transform 0.3s ease'
    container.style.transform = `translateX(${dir === 'left' ? shiftPercent : -shiftPercent}%)`

    setTimeout(() => {
      container.style.transition = 'none'
      container.style.transform = 'translateX(0)'

      setItems((prev) => {
        const copy = [...prev]
        if (dir === 'left') {
          const last = copy.pop()
          if (last) copy.unshift(last)
        } else {
          const first = copy.shift()
          if (first) copy.push(first)
        }
        return copy
      })

      setTimeout(() => {
        container.style.transition = 'transform 0.3s ease'
        setIsSliding(false)
      }, 30)
    }, 300)
  }

  return (
    <div className="p-6 sm:p-8 md:p-12 min-2xl:p-20 py-12 sm:py-14 md:py-16 lg:py-18 xl:md:py-20 2xl:py-24 bg-[#DEE9FF] overflow-hidden">
      <Image
        src={background1}
        alt=""
        className="absolute top-0 right-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1"
      />
      <Image
        src={background2}
        alt=""
        className="absolute bottom-0 left-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1"
      />

      <div className="w-full">
        <div className="relative flex flex-col justify-center gap-y-20 z-3">
          <div className="text-center flex flex-col gap-y-2.5">
            <h1 className="font-light text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[48px] 2xl:text-[64px] uppercase">
              Teknologi
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] max-w-md mx-auto lg:max-w-[610px] 2xl:max-w-[980px]">
              Apapun teknologinya, bagi kami yang paling utama adalah membangun bisnis Anda. Beragam
              teknologi kami gunakan untuk menghasilkan karya yang terbaik.
            </p>
          </div>

          <Image
            src={icon1}
            alt=""
            className="w-max h-auto mx-auto sm:w-[440px] lg:w-[560px] xl:w-[740px] 2xl:w-[850px]"
          />

          <div className="flex items-center justify-center gap-x-4 lg:gap-x-6 2xl:gap-x-8">
            {items.length > visibleCount && (
              <button
                onClick={() => slide('left')}
                className="w-6 h-6 rounded-full bg-[#00DB05] flex items-center justify-center lg:w-10 lg:h-10 2xl:w-14 2xl:h-14"
              >
                <ChevronLeft className="text-white w-4 h-4 lg:w-8 lg:h-8" />
              </button>
            )}

            <div className="overflow-hidden w-[75%] sm:w-[70%] md:w-[60%] xl:w-[55%]">
              <div
                ref={containerRef}
                className="flex"
                style={{
                  width: `${(items.length * 100) / visibleCount}%`,
                  transform: 'translateX(0)',
                }}
              >
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2 transition-transform duration-300 ease-in-out"
                    style={{ width: `${100 / items.length}%` }}
                  >
                    <div className="size-14 rounded-2xl bg-white flex justify-center items-center sm:size-16 lg:size-20 xl:size-23 2xl:size-32 mx-auto">
                      {item?.technologyIcon?.filename && (
                        <Image
                          src={domainBlob + item.technologyIcon.filename}
                          alt={item.technologyName}
                          width={40}
                          height={40}
                          className="w-6 h-auto sm:w-10 xl:w-12 2xl:w-16"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {items.length > visibleCount && (
              <button
                onClick={() => slide('right')}
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
