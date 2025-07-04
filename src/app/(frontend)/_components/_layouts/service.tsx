'use client'

// modules
import Image from 'next/image'
import Link from 'next/link'

// icons
import { ArrowRight } from 'lucide-react'

// images
import backgroundIcon1 from 'public/assets/landing/service/backgroundIcon1.svg'
import backgroundIcon2 from 'public/assets/landing/service/backgroundIcon2.svg'
import backgroundIcon3 from 'public/assets/landing/service/backgroundIcon3.svg'

// interfaces
import { ServiceLists, ServiceSection } from '../../_interfaces/pages'

export default function Service({
  serviceSection,
  domainBlob,
}: {
  serviceSection: ServiceSection
  domainBlob: string
}) {
  return (
    <div className="w-full relative">
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon1}
        alt=""
        className="absolute top-0 left-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon2}
        alt=""
        className="absolute top-[35%] right-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon3}
        alt=""
        className="absolute bottom-0 left-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <div className="w-full p-8 flex flex-col items-center gap-y-14 md:pt-15 2xl:gap-y-24">
        <div className="flex flex-col items-center gap-y-1">
          <h1 className="uppercase font-light text-[18px] md:text-[40px] 2xl:text-[64px]">
            {serviceSection.sectionServiceTitle}
          </h1>
          <p className="font-bold text-[14px] md:text-[20px] 2xl:text-[36px]">
            {serviceSection.sectionServiceSubtitle}
          </p>
        </div>
        {serviceSection.serviceLists.map(
          (item: ServiceLists, index: number) =>
            item.serviceListIcon?.filename && (
              <div
                key={item.id}
                className={`flex flex-col gap-y-6 items-center max-md:max-w-[440px] ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:justify-start md:items-center lg:w-[1000px] md:gap-x-6 2xl:gap-x-12 2xl:w-[1200px]`}
              >
                <Image
                  src={domainBlob + item.serviceListIcon?.filename}
                  width={0}
                  height={0}
                  alt=""
                  className="w-40 h-auto md:w-70 2xl:w-[430px]"
                />
                <div
                  className={`flex flex-col gap-y-4 text-[14px] ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}
                >
                  <p className="uppercase text-[#00DB05] font-bold text-[18px] md:text-[20px] 2xl:text-[32px]">
                    {item.serviceListTitle}
                  </p>
                  <p className="font-light md:max-w-[480px] md:text-[18px] 2xl:text-[24px] 2xl:max-w-[700px]">
                    {item.serviceListDescription}
                  </p>
                  {/* <Link href={item.url} className="border bg-white border-[#00DB05] flex flex-row gap-x-1 text-[#00DB05] w-max py-1 px-2 items-center rounded-[10px] text-[14px] md:text-[16px] md:py-2 md:px-3 2xl:text-[20px] 2xl:py-3 2xl:px-4">Selengkapnya <ArrowRight /></Link> */}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}
