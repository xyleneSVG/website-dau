'use client'

import Image from 'next/image'
import React from 'react'
import logoDataAndalanUtama from 'public/assets/logo data utama.svg'
import Link from 'next/link'

export default function Footer() {
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

      <div className="bg-black w-full px-6 xl:px-[120px] py-10 lg:py-12 xl:py-14 2xl:py-16 md:flex">
        <div className="md:w-[30%] flex flex-col">
          <Image
            src={logoDataAndalanUtama}
            alt="logo"
            className="w-[160px] sm:w-[180px] lg:w-[200px] h-auto object-contain"
          />
          <h1 className="text-white font-bold text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-4">
            PT. Data Andalan Utama
          </h1>
          <p className="text-white font-light text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-justify">
            Jl. Selomas Raya B-21, Panggung Lor, Kec. Semarang Utara, Kota Semarang, Jawa Tengah -
            50177
          </p>
        </div>

        <div className="md:w-[70%] sm:flex sm:gap-[60px] md:gap-0 mt-[25px]">
          <div className="md:w-[70%]">
            <div className="md:mx-auto w-fit">
              <h1 className="w-fit text-white font-bold uppercase mb-4 text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
                Layanan
              </h1>
              <div className="md:flex md:gap-8 lg:gap-16">
                <div className="flex flex-col gap-2 text-white font-light text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  <Link href="#">Software Architecture</Link>
                  <Link href="#">Jaringan & Keamanan</Link>
                  <Link href="#">Data Center & Cloud</Link>
                </div>
                <div className="flex flex-col gap-2 text-white mt-1 md:mt-0">
                  <Link href="#">Command Center</Link>
                  <Link href="#">Mobile Device Management</Link>
                  <Link href="#">UIUX</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] mt-[35px] sm:mt-0">
            <h1 className="text-white font-bold uppercase mb-4 text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
              Perusahaan
            </h1>
            <div className="flex flex-col gap-2 text-white font-light text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
              <Link href="#">Tentang Kami</Link>
              <Link href="#">Ketentuan Layanan</Link>
              <Link href="#">Hubungi Kami</Link>
            </div>
          </div>
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
