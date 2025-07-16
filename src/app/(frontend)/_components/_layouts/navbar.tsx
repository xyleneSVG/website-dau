'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { X, Menu, Triangle, Phone } from 'lucide-react'

import logoDataAndalanUtama from 'public/assets/logo data utama.svg'

const layananData = [
  { title: 'Software Architecture', url: '/assets/landing/navbar/Layer_1.svg' },
  { title: 'Jaringan & Keamanan', url: '/assets/landing/navbar/Layer_2.svg' },
  { title: 'Data Center & Cloud', url: '/assets/landing/navbar/Layer_3.svg' },
  { title: 'Command Center', url: '/assets/landing/navbar/Layer_4.svg' },
  { title: 'Mobile Device Management', url: '/assets/landing/navbar/Layer_5.svg' },
  { title: 'UIUX', url: '/assets/landing/navbar/Layer_6.svg' },
]

const portofolioData = [
  { title: 'Software Architecture', url: '/assets/landing/navbar/Layer_1.svg' },
  { title: 'Jaringan & Keamanan', url: '/assets/landing/navbar/Layer_2.svg' },
  { title: 'Data Center & Cloud', url: '/assets/landing/navbar/Layer_3.svg' },
  { title: 'Command Center', url: '/assets/landing/navbar/Layer_4.svg' },
  { title: 'Mobile Device Management', url: '/assets/landing/navbar/Layer_5.svg' },
  { title: 'UIUX', url: '/assets/landing/navbar/Layer_6.svg' },
]

export default function Navbar() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<'layanan' | 'portofolio' | null>(null)
  const pathname = usePathname()

  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar)

  const handleDropdown = (dropdown: 'layanan' | 'portofolio') => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  return (
    <>
      <div
        className="w-full h-max flex flex-col p-4 fixed top-0 z-50"
        style={{ background: 'linear-gradient(0deg, #D9D9D9 -20.5%, #FFFFFF 39.75%)' }}
      >
        <div className="flex flex-row justify-between items-center md:hidden">
          <Image src={logoDataAndalanUtama} alt={''} className="w-28 h-auto md:hidden" />
          <div className="block md:hidden">
            {isOpenNavbar ? (
              <X
                size={30}
                onClick={toggleNavbar}
                className="cursor-pointer transition-all duration-300"
              />
            ) : (
              <Menu
                size={30}
                onClick={toggleNavbar}
                className="cursor-pointer transition-all duration-300"
              />
            )}
          </div>
        </div>
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden md:overflow-visible
          ${isOpenNavbar ? 'max-h-[1000px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'} md:max-h-full md:opacity-100 md:visible md:block`}
        >
          <div className="p-4 md:w-full md:px-12 min-2xl:px-20">
            <div className="flex flex-col gap-8 text-[16px] font-[400px] md:flex-row xl:gap-0 md:justify-between md:items-center 2xl:text-[24px]">
              <Image
                src={logoDataAndalanUtama}
                alt={''}
                className="w-[100px] lg:w-[135px] h-auto hidden lg:block"
              />

              <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8 xl:gap-10 2xl:gap-12 text-[14px] sm:text-[16px] xl:text-[20px]">
                <li className={pathname === '/' ? 'text-[#00DB05] font-semibold' : 'text-black'}>
                  Beranda
                </li>
                <li
                  className={pathname === '/about' ? 'text-[#00DB05] font-semibold' : 'text-black'}
                >
                  Tentang Kami
                </li>

                {/* Layanan */}
                <li className="relative">
                  <button
                    onClick={() => handleDropdown('layanan')}
                    className="flex items-center gap-2"
                  >
                    <p>Layanan</p>
                    <Triangle
                      className={`rotate-180 size-2 md:size-3 fill-current text-black stroke-none transition-transform duration-300 ${
                        openDropdown === 'layanan' ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </button>

                  <div
                    className={`${
                      openDropdown === 'layanan' ? 'block' : 'hidden'
                    } md:absolute md:left-0 md:top-full md:mt-2 md:opacity-100 md:visible md:translate-y-0 w-full md:w-max bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50`}
                  >
                    <div className="w-full h-1.5 bg-[#00DB05]" />

                    <ul className="p-4 space-y-2">
                      {layananData.map((item) => (
                        <li key={item.title} className="relative group">
                          <button className="flex items-center justify-between w-full text-left hover:text-[#00DB05] gap-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-200 rounded-md flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 p-1 sm:p-1.5 md:p-2 lg:p-2.5">
                                <Image
                                  src={item.url}
                                  alt={item.title}
                                  className="object-contain w-full h-full"
                                  width={24}
                                  height={24}
                                />
                              </div>

                              {item.title}
                            </div>
                            <Triangle className="rotate-90 size-2 md:size-3 ml-2 fill-current text-black stroke-none" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Portofolio */}
                <li className="relative">
                  <button
                    onClick={() => handleDropdown('portofolio')}
                    className="flex items-center gap-2"
                  >
                    <p>Portofolio</p>
                    <Triangle
                      className={`rotate-180 size-2 md:size-3 fill-current text-black stroke-none transition-transform duration-300 ${
                        openDropdown === 'portofolio' ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </button>

                  <div
                    className={`${
                      openDropdown === 'portofolio' ? 'block' : 'hidden'
                    } md:absolute md:left-0 md:top-full md:mt-2 md:opacity-100 md:visible md:translate-y-0 w-full md:w-max bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50`}
                  >
                    <div className="w-full h-1.5 bg-[#00DB05]" />

                    <ul className="p-4 space-y-2">
                      {portofolioData.map((item) => (
                        <li key={item.title} className="relative group">
                          <button className="flex items-center justify-between w-full text-left hover:text-[#00DB05] gap-4">
                            <div className="flex items-center gap-4">
                              <div className="bg-gray-200 rounded-md flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 p-1 sm:p-1.5 md:p-2">
                                <Image
                                  src={item.url}
                                  alt={item.title}
                                  className="object-contain w-full h-full"
                                  width={24}
                                  height={24}
                                />
                              </div>

                              {item.title}
                            </div>
                            <Triangle className="rotate-90 size-2 md:size-3 ml-2 fill-current text-black stroke-none" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>

              <ul className="flex flex-col gap-4 md:flex-row md:items-cente md:gap-5 2xl:gap-10">
                <li>
                  <Link
                    href={'/contact'}
                    className="bg-[#00DB05] text-white text-[12px] sm:text-[14px] md:text-[16px] xl:text-[20px] flex items-center w-max gap-x-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg md:rounded-xl md:px-5"
                  >
                    Hubungi Kami
                    <Phone className="size-3 md:size-4 fill-current stroke-none" />
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px]">
                    IN
                  </p>
                  <Triangle className="rotate-180 size-2 md:size-3 fill-current text-black stroke-none" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[78px] lg:h-[108px]"></div>
    </>
  )
}
