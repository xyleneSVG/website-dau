'use client'

import Image from 'next/image'
import React from 'react'
import type { LucideIcon } from 'lucide-react'

import { TextWithImageClusterSection } from '../../_interfaces/pages'
import { RichTextRenderer } from '../_richText/richTextRenderer'

import backgroundIcon2 from 'public/assets/landing/service/backgroundIcon2.svg'

interface Props {
  data: TextWithImageClusterSection
  domainBlob: string
  getLucideIcon: (name?: string) => LucideIcon | null
}

export default function TextWithImageCluster({ data, domainBlob, getLucideIcon }: Props) {
  const {
    sectionHeadline,
    sectionTitle,
    sectionDescription,
    imageLists,
    reverseContent,
    hasBackground,
    backgroundColor,
    hasButton,
    buttonColor,
    buttonText,
    buttonIcon,
    buttonLink,
  } = data

  const IconComponent = getLucideIcon?.(buttonIcon)

  return (
    <div
      className="w-full relative min-h-screen flex items-center justify-center p-6 sm:p-8 md:p-12 min-2xl:p-20 py-14 sm:py-16 md:py-18 lg:py-20 xl:md:py-24 2xl:py-30"
      style={{
        ...(hasBackground
          ? { backgroundColor: backgroundColor || '#ffffff' }
          : {
              backgroundImage: `url(${backgroundIcon2.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top right',
              backgroundSize: 'contain',
            }),
      }}
    >
      <div
        className={`container mx-auto flex flex-col ${
          reverseContent ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } items-center gap-4 md:gap-10 xl:gap-14 2xl:gap-20`}
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 mb-0">
          {imageLists?.length > 0 && (
            <div className="w-[70%] sm:w-[50%] lg:w-full relative aspect-[4/3] rounded-2xl lg:rounded-4xl overflow-hidden">
              <Image
                src={domainBlob + imageLists[0].itemImage?.filename}
                alt="Image"
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            {imageLists?.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="w-[70px] sm:w-[120px] lg:w-[180px] xl:w-[250px] aspect-[3/2] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={domainBlob + img.itemImage?.filename}
                  alt={`Image ${idx + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="italic text-black text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] mb-2 font-extralight">
            {sectionHeadline}
          </h3>
          <h2 className="font-bold text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] mb-4 mt-[20px] xl:mt-[35px]">
            {sectionTitle}
          </h2>
          <div className="text-gray-600 whitespace-pre-line mb-6 sm:mb-8 md:mb-10 text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] font-light text-justify">
            <RichTextRenderer content={sectionDescription?.root} />
          </div>

          {hasButton && (
            <a
              href={buttonLink?.pageKey || '#'}
              className="inline-flex items-center px-5 py-2 rounded-lg text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] border"
              style={{
                borderColor: buttonColor,
                color: buttonColor,
              }}
            >
              {buttonText}
              {IconComponent && <IconComponent className="ml-2 w-5 h-5" strokeWidth={2} />}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
