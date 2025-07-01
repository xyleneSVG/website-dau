"use client";

// modules
import { useState, useEffect } from "react"
import Image from "next/image"

// images
import logoDataAndalanUtama from "/public/assets/logo data utama.svg"
import background from "/public/assets/landing/hero/backgroundHero.svg"

// gifs
import gif1 from "/public/assets/landing/hero/gifHero1.gif"
import gif2 from "/public/assets/landing/hero/gifHero2.gif"

// icons
import { Circle } from "lucide-react";

export default function Hero() {
    const greetings = [
        {
            type: "image-text",
            image: logoDataAndalanUtama,
            text: "Kami Siap Mendukung Anda",
        },
        {
            type: "text",
            text: "Sistem yang hebat dimulai dari kesadaran akan kebutuhan",
        },
        {
            type: "text",
            text: "Misi Kami adalah membantu jutaan orang memanfaatkan potensi yang ada di internet untuk membangun kesuksesan online.",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [greetings.length])

    return (
        <div className="w-full h-auto relative p-8 ">
            <Image priority src={background} alt={""} className="w-[420px] md:w-[622px] h-auto absolute top-0 left-0 2xl:w-[1056px]"/>
            <div className="flex flex-col w-full items-center gap-y-1 mb-4 md:flex-row md:justify-between md:items-end">
                <Image src={gif1} alt={""} className="hidden w-52 h-auto lg:block 2xl:w-[280px]"/>
                <div className="font-semibold text-center md:-translate-y-18 w-full max-sm:max-w-[350px] text-[18px] h-50 flex flex-col items-center justify-center lg:text-[34px] lg:w-[512px] 2xl:text-[40px] 2xl:w-[600px] 2xl:-translate-y-38">
                    {greetings[currentIndex].type === "image-text" ? (
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src={greetings[currentIndex].image}
                                alt="logo"
                                className="w-[250px] h-auto 2xl:w-[500px]"
                            />
                            <p>{greetings[currentIndex].text}</p>
                        </div>
                    ) : (
                        <p>{greetings[currentIndex].text}</p>
                    )}
                </div>
                <Image src={gif2} alt={""} className="w-90 h-auto 2xl:w-[620px]"/>
            </div>
            <div className="flex flex-row gap-x-2 justify-center">
                {greetings.map((_, index) => (
                    <Circle
                        key={index}
                        className={`size-3 stroke-none ${index === currentIndex ? "text-[#00DB05]" : "text-[#D9D9D9]"} fill-current`}
                    />
                ))}
            </div>
        </div>
    )
}