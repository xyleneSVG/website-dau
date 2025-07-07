'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

// background image
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
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const profiles = Array(10).fill(originalProfiles).flat()
  const total = profiles.length

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      let count = 1
      if (width >= 1024) count = 3
      else if (width >= 640) count = 2
      setVisibleCount(count)

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        setCardWidth(containerWidth / count)
      }
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

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

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

      <div className="relative w-full overflow-hidden mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[60px] xl:mt-[80px] 2xl:mt-[100px]" ref={containerRef}>
        {/* Tombol kiri */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#EBF1F6] p-2 rounded-full"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Carousel */}
        <motion.div className="flex gap-3 sm:gap-2.5 md:gap-3 lg:gap-2.5 xl:gap-2.5" animate={controls}>
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

        {/* Tombol kanan */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#EBF1F6] p-2 rounded-full"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
