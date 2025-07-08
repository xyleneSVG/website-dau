'use client'

import Image from 'next/image'
import React from 'react'

const Data = {
  title: 'Mobile Device Management',
  subtitle:
    'Meningkatkan Kendali, Produktivitas, dan Keamanan Teknologi dalam Operasional Perusahaan',
  description: `Mengutip Tech Target, MDM adalah tool berupa software yang memungkinkan admin IT untuk memonitor, mengontrol, hingga memberikan proteksi terhadap keamanan perangkat, aplikasi, jaringan, dan data. MDM dapat membantu perusahaan mengelola transisi dari komputasi berbasis desktop ke komputasi mobile yang lebih kompleks dengan tetap mengutamakan faktor keamanan data dan informasi, mengelola jaringan serta software dan hardware dari berbagai platform atau sistem operasi.\n\nFungsi utama MDM tentu sebagai lapisan keamanan tambahan dan memastikan aktivitas pada suatu perangkat tetap terpantau. Beberapa fitur MDM antara lain device encryption, platform specific policies, SD card encryption, geo-location tracking, connectivity profiles (VPN, WiFi, Bluetooth), remote wipe, dan beberapa fitur lainnya.\n\nMDM merupakan salah satu solusi Enterprise Mobility Management (EMM) yang membantu perusahaan tidak merasa khawatir terhadap kemungkinan kerentanan terhadap perangkat dan data perusahaan yang tersimpan pada perangkat mobile tertentu.`,
  images: [
    '/assets/landing/two-column/image1.png',
    '/assets/landing/two-column/image2.png',
    '/assets/landing/two-column/image3.png',
  ],
  background: {
    useBackground: true,
    backgroundColor: '#F8FAFD',
  },
  button: {
    useButton: true,
    text: 'Hubungi Kami',
    icon: '📞',
    link: '/kontak',
    color: '#00DB05',
  },
  align: 'right',
}

export default function TwoColumn() {
  const { title, subtitle, description, images, background, button, align } = Data

  const isLeftAligned = align === 'left'

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center p-6 lg:p-[80px] xl:p-[100px] 2xl:p-[180px]`}
      style={{ backgroundColor: background.backgroundColor }}
    >
      <div
        className={`container mx-auto px-4 flex flex-col ${
          isLeftAligned ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } items-center gap-4 md:gap-10 xl:gap-14 2xl:gap-20`}
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 mb-6 lg:mb-0">
          {images.length > 0 && (
            <div className="w-[60%] sm:w-[50%] lg:w-full relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src={images[0]} alt="MDM Shield" fill priority className="object-cover" />
            </div>
          )}
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            {images.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="w-[70px] sm:w-[120px] lg:w-[180px] xl:w-[250px] aspect-[3/2] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`MDM Illustration ${idx + 1}`}
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
            {title}
          </h3>
          <h2 className="font-bold text-black text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] mb-4 mt-[20px] xl:mt-[35px]">
            {subtitle}
          </h2>
          <p className="text-gray-600 whitespace-pre-line mb-6 text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] font-light text-justify">
            {description}
          </p>

          {button.useButton && (
            <a
              href={button.link}
              className={`inline-flex items-center px-5 py-2 rounded-lg text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] border border-[${button.color}] text-[${button.color}]`}
            >
              {button.text} <span className="ml-2">{button.icon}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
