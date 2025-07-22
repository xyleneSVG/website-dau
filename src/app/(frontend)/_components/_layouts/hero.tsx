'use client'

// modules
import { useState, useEffect } from 'react'
import Image from 'next/image'

// images
import background from '/public/assets/landing/hero/backgroundHero.svg'

// icons
import { Circle } from 'lucide-react'

// interface
import { HeroSection } from '../../_interfaces/pages'

export default function Hero({
  heroSection,
  domainBlob,
}: {
  heroSection: HeroSection
  domainBlob: string
}) {
  const greetings = heroSection.greetings.map((item) => ({
    type: item.hasIncludeImage ? 'image-text' : 'text',
    image: item.hasIncludeImage ? `${domainBlob}${item.imageGreeting.filename}` : null,
    text: item.textGreeting,
  }))

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [greetings.length])

  return (
    <div className="w-full min-h-[88vh] lg:min-h-[80vh] flex justify-center items-center relative p-6 sm:p-8 md:p-12 min-2xl:p-20">
      <div className='w-full '>
        <Image
          width={0}
          height={0}
          priority
          src={background}
          alt={''}
          className="w-[420px] md:w-[622px] h-auto absolute top-0 left-0 2xl:w-[1056px]"
        />
        <div className="flex flex-col w-full items-center gap-y-1 mb-4 md:flex-row md:justify-between md:items-end">
          <Image
            width={0}
            height={0}
            src={domainBlob + heroSection.greetingIllustrationLeft.filename}
            alt={''}
            className="hidden w-52 h-auto lg:block 2xl:w-[280px]"
          />
          <div className="font-semibold text-center md:-translate-y-18 w-full max-sm:max-w-[350px] text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] h-50 flex flex-col items-center justify-center lg:w-[512px] 2xl:w-[600px] 2xl:-translate-y-38">
            {greetings[currentIndex].type === 'image-text' ? (
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={greetings[currentIndex].image ?? ''}
                  width={0}
                  height={0}
                  alt="logo"
                  className="w-[250px] h-auto 2xl:w-[500px]"
                />
                <p>{greetings[currentIndex].text}</p>
              </div>
            ) : (
              <p>{greetings[currentIndex].text}</p>
            )}
          </div>
          <Image
            width={0}
            height={0}
            src={domainBlob + heroSection.greetingIllustrationRight.filename}
            alt={''}
            className="w-90 h-auto 2xl:w-[620px]"
          />
        </div>
        <div className="flex flex-row gap-x-2 justify-center mt-6">
          {greetings.map((_, index) => (
            <Circle
              key={index}
              className={`size-3 stroke-none ${index === currentIndex ? 'text-[#00DB05]' : 'text-[#D9D9D9]'} fill-current`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
