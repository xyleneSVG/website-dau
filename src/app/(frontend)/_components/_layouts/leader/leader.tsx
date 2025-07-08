'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

import backgroundIcon2 from 'public/assets/landing/service/backgroundIcon2.svg'
import backgroundIcon3 from 'public/assets/landing/service/backgroundIcon3.svg'
import LeaderCard from './LeaderCard'

const originalProfiles = [
  {
    photo: '/assets/landing/leader/jerry-susmono.png',
    name: 'Jerry Susmono',
    position: 'CEO & Founder',
  },
  {
    photo: '/assets/landing/leader/sentot-andalas.png',
    name: 'Sentot Andalas',
    position: 'CMO & Founder',
  },
  {
    photo: '/assets/landing/leader/budi-wiyono.png',
    name: 'Budi Wiyono',
    position: 'CTO',
  },
]

export default function LeaderCarousel() {
  const [visibleCount, setVisibleCount] = useState(1)
  const [cardWidth, setCardWidth] = useState(0)
  const [index, setIndex] = useState(0)
  const [minItemsToShowButton, setMinItemsToShowButton] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const profiles = originalProfiles
  const total = profiles.length

  const maxIndex = Math.max(0, total - visibleCount)
  const shouldShowButtons = total >= minItemsToShowButton

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      let count = 1
      let minItems = 2

      if (width >= 1024) {
        count = 3
        minItems = 4
      } else if (width >= 640) {
        count = 2
        minItems = 3
      }

      setVisibleCount(count)
      setMinItemsToShowButton(minItems)

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setCardWidth(containerWidth / count)
      }

      setIndex(0)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  useEffect(() => {
    if (cardWidth === 0) return
    controls.start({
      x: -index * (cardWidth + 12),
      transition: { duration: 0.4 },
    })
  }, [index, cardWidth])

  const next = () => {
    if (!shouldShowButtons || index >= maxIndex) return
    setIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prev = () => {
    if (!shouldShowButtons || index <= 0) return
    setIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20">
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

      <h1 className="text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-light uppercase mb-6 text-center">
        Tim Kepemimpinan
      </h1>

      <div
        className="relative w-full overflow-hidden mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px] 2xl:mt-[100px]"
        ref={containerRef}
      >
        {shouldShowButtons && (
          <button
            onClick={prev}
            disabled={index <= 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <svg
              className={`rotate-180 ${
                index <= 0 ? 'opacity-40' : ''
              } w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[50px] lg:h-[50px]`}
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill={index <= 0 ? '#ccc' : '#00DB05'} />
              <path
                d="M40 25C40 28.9782 38.4196 32.7936 35.6066 35.6066C32.7936 38.4196 28.9782 40 25 40C23.0302 40 21.0796 39.612 19.2597 38.8582C17.4399 38.1044 15.7863 36.9995 14.3934 35.6066C11.5804 32.7936 10 28.9782 10 25C10 21.0218 11.5804 17.2064 14.3934 14.3934C17.2064 11.5804 21.0218 10 25 10C26.9698 10 28.9204 10.388 30.7403 11.1418C32.5601 11.8956 34.2137 13.0005 35.6066 14.3934C36.9995 15.7863 38.1044 17.4399 38.8582 19.2597C39.612 21.0796 40 23.0302 40 25ZM37 25C37 21.8174 35.7357 18.7652 33.4853 16.5147C31.2348 14.2643 28.1826 13 25 13C21.8174 13 18.7652 14.2643 16.5147 16.5147C14.2643 18.7652 13 21.8174 13 25C13 28.1826 14.2643 31.2348 16.5147 33.4853C18.7652 35.7357 21.8174 37 25 37C28.1826 37 31.2348 35.7357 33.4853 33.4853C35.7357 31.2348 37 28.1826 37 25ZM19.9 31.9L26.8 25L19.9 18.1L22 16L31 25L22 34L19.9 31.9Z"
                fill="white"
              />
            </svg>
          </button>
        )}

        <motion.div
          className="flex gap-0"
          animate={controls}
        >
          {profiles.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="shrink-0 flex justify-center"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <LeaderCard {...item} />
            </div>
          ))}
        </motion.div>

        {shouldShowButtons && (
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <svg
              className={`${
                index >= maxIndex ? 'opacity-40' : ''
              } w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[50px] lg:h-[50px]`}
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill={index >= maxIndex ? '#ccc' : '#00DB05'} />
              <path
                d="M40 25C40 28.9782 38.4196 32.7936 35.6066 35.6066C32.7936 38.4196 28.9782 40 25 40C23.0302 40 21.0796 39.612 19.2597 38.8582C17.4399 38.1044 15.7863 36.9995 14.3934 35.6066C11.5804 32.7936 10 28.9782 10 25C10 21.0218 11.5804 17.2064 14.3934 14.3934C17.2064 11.5804 21.0218 10 25 10C26.9698 10 28.9204 10.388 30.7403 11.1418C32.5601 11.8956 34.2137 13.0005 35.6066 14.3934C36.9995 15.7863 38.1044 17.4399 38.8582 19.2597C39.612 21.0796 40 23.0302 40 25ZM37 25C37 21.8174 35.7357 18.7652 33.4853 16.5147C31.2348 14.2643 28.1826 13 25 13C21.8174 13 18.7652 14.2643 16.5147 16.5147C14.2643 18.7652 13 21.8174 13 25C13 28.1826 14.2643 31.2348 16.5147 33.4853C18.7652 35.7357 21.8174 37 25 37C28.1826 37 31.2348 35.7357 33.4853 33.4853C35.7357 31.2348 37 28.1826 37 25ZM19.9 31.9L26.8 25L19.9 18.1L22 16L31 25L22 34L19.9 31.9Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>

      {shouldShowButtons && maxIndex > 0 && (
        <div className="flex items-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-green-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
