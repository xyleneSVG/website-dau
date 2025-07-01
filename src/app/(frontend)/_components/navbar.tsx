"use client"

// modules
import { useState } from "react"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import { X, Menu, Triangle, Phone } from 'lucide-react';

// images
import logoDataAndalanUtama from "public/assets/logo data utama.svg"

export default function Navbar() {
    // state
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    
    // path route
    const pathname = usePathname()

    // function
    const toggleNavbar = () => {
        setIsOpenNavbar(!isOpenNavbar)
    }

    return (
        <>
            <div className="w-full h-max flex flex-col gap-y-6 px-4 py-3.5 sticky top-0 z-50" style={{background: "linear-gradient(0deg, #D9D9D9 -20.5%, #FFFFFF 39.75%)"}}>
                <div className="flex flex-row justify-between items-center md:hidden">
                    <Image src={logoDataAndalanUtama} alt={""} className="w-28 h-auto md:hidden"></Image>
                    <div className="block md:hidden">
                        {isOpenNavbar ? (
                            <X size={30} onClick={toggleNavbar} className="cursor-pointer" />
                        ) : (
                            <Menu size={30} onClick={toggleNavbar} className="cursor-pointer" />
                        )}
                    </div>              
                </div>
                <div className={`${isOpenNavbar ? 'block' : 'hidden'} md:block`}>
                    <div className="p-4 md:w-full md:pl-20 md:pr-12 min-2xl:pl-40 min-2xl:pr-20">
                        <div className="flex flex-col gap-10 text-[16px] font-[400px] md:flex-row xl:gap-0 md:justify-between md:items-center 2xl:text-[24px]">
                            <Image src={logoDataAndalanUtama} alt={""} className="w-28 h-auto hidden lg:block" />

                            <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8 2xl:gap-10">
                                <li className={pathname === "/" ? "text-[#00DB05] font-semibold" : "text-black"}>Beranda</li>
                                <li className={pathname === "/about" ? "text-[#00DB05] font-semibold" : "text-black"}>Tentang Kami</li>
                                <li className="flex items-center gap-2">
                                    <p>Layanan</p>
                                    <Triangle className="rotate-180 size-3 fill-current text-black stroke-none" />
                                </li>
                                <li className="flex items-center gap-2">
                                    <p>Portofolio</p>
                                    <Triangle className="rotate-180 size-3 fill-current text-black stroke-none" />
                                </li>
                            </ul>

                            <ul className="flex flex-col gap-4 md:flex-row md:items-cente md:gap-5 2xl:gap-10">
                                <li>
                                    <Link
                                        href={"/contact"}
                                        className="bg-[#00DB05] text-white flex items-center w-max gap-x-2.5 px-4 py-2.5 rounded-xl md:px-5"
                                    >
                                        Hubungi Kami
                                        <Phone className="size-4 fill-current stroke-none" />
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2">
                                    <p>IN</p>
                                    <Triangle className="rotate-180 size-3 fill-current text-black stroke-none" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}