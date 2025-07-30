'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FooterData } from '../../_interfaces/footers'

interface Props {
  data: FooterData
  domainBlob: string
}

export default function Footer({ data, domainBlob }: Props) {
  return (
    <footer className="relative">
      <div className="w-full flex justify-between items-end relative p-0 m-0">
        <div className="relative aspect-[3/2] w-[100px] sm:w-[140px] md:w-[160px] lg:w-[180px]">
          <Image
            src="/assets/landing/footer/shape1.png"
            alt="shape1"
            fill
            className="object-left object-contain"
            priority
          />
        </div>
        <div className="relative w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[40px] md:h-[50px] lg:h-[70px]">
          <Image
            src="/assets/landing/footer/shape2.png"
            alt="shape2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-black w-full px-6 xl:px-[120px] py-10 lg:py-12 xl:py-14 2xl:py-16 md:flex md:gap-x-12">
        <div className="md:w-[30%] flex flex-col">
          <Image
            src={domainBlob + data.footerLogo.filename}
            alt={data.footerLogo?.filename || ''}
            width={0}
            height={0}
            className="w-[160px] sm:w-[180px] lg:w-[200px] h-auto object-contain"
          />
          <h1 className="text-white font-bold text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-4">
            {data.footerTitle}
          </h1>
          <p className="text-white font-light text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-justify">
            {data.footerDescription}
          </p>
        </div>

        <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-[25px]">
          {Array.isArray(data.footerNavigation) &&
            data.footerNavigation.map((group, index) => (
              <div key={index} className="mt-[35px] sm:mt-0">
                <h1 className="text-white font-bold uppercase mb-4 text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                  {group.navigationGroupTitle}
                </h1>
                <div className="flex flex-col space-y-2 text-white font-light text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  {group.navigationGroupItem.map((navItem, i) => (
                    <Link
                      key={i}
                      href={navItem.navigationPageReference.pageKey}
                      className="hover:underline hover:text-gray-300 transition"
                    >
                      {navItem.navigationPageName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-white py-3">
        <p className="text-center font-light text-black text-[12px] sm:text-[14px] lg:text-[16px]">
          Copyright &copy; PT. Data Andalan Utama All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
