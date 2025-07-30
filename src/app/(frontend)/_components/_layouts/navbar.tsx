'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { X, Menu, Triangle, Phone, LucideIcon } from 'lucide-react'

import type { NavbarData } from '../../_interfaces/navbars'

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

interface Props {
  data: NavbarData
  domainBlob: string
  getLucideIcon: (name?: string) => LucideIcon | null
}

export default function Navbar({ data, domainBlob, getLucideIcon }: Props) {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<'layanan' | 'portofolio' | null>(null)
  const pathname = usePathname()

  const toggleNavbar = () => setIsOpenNavbar(!isOpenNavbar)

  const handleDropdown = (dropdown: 'layanan' | 'portofolio') => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown))
  }

  return (
    <>
      <div
        className="w-full h-max flex flex-col p-6 md:px-12 min-2xl:px-20 sticky top-0 z-50"
        style={{ background: 'linear-gradient(0deg, #D9D9D9 -20.5%, #FFFFFF 39.75%)' }}
      >
        <div className="flex flex-row justify-between items-center md:hidden">
          <Image
            src={domainBlob + data.navbarLogo?.filename}
            alt={''}
            width={0}
            height={0}
            className="w-24 lg:w-28 h-auto md:hidden"
          />
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
          <div className="md:w-full">
            <div className="flex flex-col gap-8 text-[16px] font-[400px] md:flex-row xl:gap-0 md:justify-between md:items-center 2xl:text-[24px]">
              <Image
                src={domainBlob + data.navbarLogo?.filename}
                alt={''}
                width={0}
                height={0}
                className="w-[100px] lg:w-[135px] h-auto hidden lg:block"
              />

              <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8 xl:gap-10 2xl:gap-12 text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] mt-4 md:mt-0">
                {Array.isArray(data.navbarItemArray) &&
                  data.navbarItemArray.map((item) => {
                    const isActive = pathname === item.navbarItemReference?.pageKey
                    const isDropdown = item.hasDropdown

                    return (
                      <li key={item.id} className="relative">
                        {isDropdown ? (
                          <>
                            <button
                              onClick={() =>
                                handleDropdown(item.navbarItemName.toLowerCase() as any)
                              }
                              className="flex items-center gap-2"
                            >
                              <p>{item.navbarItemName}</p>
                              <Triangle
                                className={`rotate-180 size-2 md:size-3 fill-current text-black stroke-none transition-transform duration-300 ${
                                  openDropdown === item.navbarItemName.toLowerCase()
                                    ? 'rotate-0'
                                    : 'rotate-180'
                                }`}
                              />
                            </button>

                            <div
                              className={`${
                                openDropdown === item.navbarItemName.toLowerCase()
                                  ? 'block'
                                  : 'hidden'
                              } md:absolute md:left-0 md:top-full md:mt-2 md:opacity-100 md:visible md:translate-y-0 w-full md:w-max bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50`}
                            >
                              <div
                                className="w-full h-1.5"
                                style={{ background: data.accentColor }}
                              />

                              <ul className="p-4 space-y-2 lg:space-y-3">
                                {item.navbarDropdown.map((dropdown) => {
                                  const IconComponent = getLucideIcon?.(dropdown.itemDropdownIcon)

                                  return (
                                    <li key={dropdown.id} className="relative group">
                                      <Link
                                        href={dropdown.itemDropdownReference?.pageKey || '/'}
                                        className="flex items-center justify-between w-full text-left gap-4"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="bg-gray-200 rounded-md flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 p-1 sm:p-1.5 md:p-2 lg:p-2.5">
                                            {IconComponent && (
                                              <IconComponent
                                                className="size-6 sm:size-7 md:size-8 lg:size-12"
                                                strokeWidth={1.5}
                                              />
                                            )}
                                          </div>
                                          <p
                                            onMouseEnter={() => setHoveredDropdown(dropdown.id)}
                                            onMouseLeave={() => setHoveredDropdown(null)}
                                            style={{
                                              color:
                                                hoveredDropdown === dropdown.id
                                                  ? data.accentColor
                                                  : '#000000',
                                              transition: 'color 0.2s ease-in-out',
                                            }}
                                          >
                                            {dropdown.itemDropdownTitle}
                                          </p>
                                        </div>
                                        <Triangle className="rotate-90 size-2 md:size-3 ml-2 fill-current text-black stroke-none" />
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.navbarItemReference?.pageKey || '/'}
                            style={{
                              color: isActive ? data.accentColor : '#000000',
                              fontWeight: isActive ? '600' : '400',
                            }}
                          >
                            {item.navbarItemName}
                          </Link>
                        )}
                      </li>
                    )
                  })}
              </ul>

              <ul className="flex flex-col gap-4 md:flex-row md:items-cente md:gap-5 2xl:gap-10">
                {data.hasButtonContact && (
                  <li>
                    <Link
                      href={data.buttonContactReference.pageKey}
                      className="text-white text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] flex items-center w-max gap-x-2.5 px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg md:rounded-xl md:px-5"
                      style={{ backgroundColor: data.buttonContactColor }}
                    >
                      Hubungi Kami
                      <Phone className="size-3 md:size-4 fill-current stroke-none" />
                    </Link>
                  </li>
                )}
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
    </>
  )
}
