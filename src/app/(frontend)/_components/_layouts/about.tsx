import Image from 'next/image'
import React from 'react'

// Interfaces
import { AboutSection } from '../../_interfaces/pages'
import { RichTextRenderer } from '../richText/richTextRenderer'

export default function about({
  aboutSection,
  domainBlob,
}: {
  aboutSection: AboutSection
  domainBlob: string
}) {
  return (
    <div className="flex justify-center items-center p-6 sm:p-8 md:p-12 min-2xl:p-20 py-14 sm:py-16 md:py-18 lg:py-20 xl:md:py-24 2xl:py-30 bg-[#E3F1FE] relative">
      <Image
        src={domainBlob + aboutSection.sectionAboutLogo.filename}
        alt={'logo'}
        width={0}
        height={0}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[290px]"
      />
      <div className="max-w-[1000px]">
        <h1 className="text-black text-center text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-light uppercase text-wrap">
          {aboutSection.sectionAboutTitle}
        </h1>

        <RichTextRenderer content={aboutSection.sectionAboutContent.root} />
      </div>
    </div>
  )
}
