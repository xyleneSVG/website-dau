"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// assets
import icon1 from "public/assets/landing/tech/icon1.svg"
import background1 from "public/assets/landing/tech/background1.svg"
import background2 from "public/assets/landing/tech/background2.svg"

// interfaces
import { TechItem } from "../_interfaces/techItem"

export default function Tech({techs, domainBlob}:{techs: TechItem[], domainBlob: string}) {

  const [startIndex, setStartIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width >= 768) setVisibleCount(5)
      else if (width >= 640) setVisibleCount(4)
      else setVisibleCount(3)
    }
    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - visibleCount + techs.length) % techs.length
    )
  }

  const handleNext = () => {
    setStartIndex((prev) =>
      (prev + visibleCount) % techs.length
    )
  }

  const getVisibleBoxes = () => {
    const items = []

    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % techs.length
      const tech = techs[index]
      items.push({
        ...tech,
        key: i
      })
    }

    return items
  }

  const visibleBoxes = getVisibleBoxes()
  
  // debug
  // console.log(techs)

  return (
    <div className="w-full relative bg-[#DEE9FF]">
      <Image priority width={0} height={0} src={background1} className="absolute top-0 right-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1 " alt={""}/>
      <Image priority width={0} height={0} src={background2} className="absolute bottom-0 left-0 w-[230px] md:w-[420px] lg:w-[540px] 2xl:w-[730px] z-1" alt={""}/>
      <div className="py-5 px-7 lg:py-16">
        <div className="relative flex flex-col justify-center gap-y-5 sm:gap-y-8 xl:gap-y-16 2xl:gap-y-22 z-3">
          <div className="text-center flex flex-col gap-y-2.5">
            <h1 className="font-light text-[18px] uppercase lg:text-[40px] 2xl:text-[64px]">Teknologi</h1>
            <p className="font-normal text-[14px] max-w-md mx-auto lg:text-[16px] lg:max-w-[610px] 2xl:text-[24px] 2xl:max-w-[980px]">
              Apapun teknologinya, bagi kami yang paling utama adalah membangun bisnis Anda. Beragam teknologi kami gunakan untuk menghasilkan karya yang terbaik.
            </p>
          </div>

          <Image width={0} height={0} src={icon1} alt="" className="w-max h-auto mx-auto sm:w-[440px] lg:w-[720px] xl:w-[840px] 2xl:w-[1002px]" />

          <div className="flex flex-row items-center gap-x-3 justify-center overflow-hidden lg:gap-x-7 xl:gap-x-9 2xl:gap-x-12">
            {techs.length > visibleCount && (
              <button
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-[#00DB05] flex items-center justify-center lg:w-10 lg:h-10 2xl:w-14 2xl:h-14"
              >
                <ChevronLeft className="text-white w-4 h-4 lg:w-8 lg:h-8" />
              </button>
            )}

            <div className="flex gap-x-3 overflow-hidden lg:gap-x-7 xl:gap-x-10">
              <AnimatePresence mode="popLayout">
                {visibleBoxes.map((item) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="size-14 rounded-2xl bg-white flex justify-center items-center sm:size-16 lg:size-20 xl:size-23 2xl:size-32"
                  >
                    {item.techIcon?.filename && (
                      <Image
                        width={0}
                        height={0}
                        src={domainBlob + item.techIcon.filename}
                        className="w-6 h-auto sm:w-10 xl:w-12 2xl:w-16"
                        alt={item.techName}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {techs.length > visibleCount && (
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
