'use client'

import Image from 'next/image'
import React from 'react'

const data = [
  {
    title: 'Manajemen Perangkat',
    description: 'Pendaftaran, konfigurasi, dan pembaruan perangkat secara terpusat.',
    icon: '/assets/landing/function/Layer_1.svg',
  },
  {
    title: 'Keamanan',
    description: 'Enkripsi data, penguncian perangkat, dan penghapusan data jarak jauh.',
    icon: '/assets/landing/function/Layer_2.svg',
  },
  {
    title: 'Penerapan Kebijakan',
    description: 'Membatasi penggunaan perangkat sesuai dengan kebutuhan bisnis.',
    icon: '/assets/landing/function/Layer_3.svg',
  },
  {
    title: 'Pemantauan dan Pelaporan',
    description: 'Melacak lokasi perangkat, status koneksi, dan penggunaan aplikasi.',
    icon: '/assets/landing/function/Layer_4.svg',
  },
  {
    title: 'Distribusi Aplikasi',
    description: 'Instalasi, pembaruan, atau penghapusan aplikasi secara otomatis.',
    icon: '/assets/landing/function/Layer_5.svg',
  },
]

export default function Function() {
  return (
    <section className="w-full min-h-screen px-4 py-8 md:py-12 lg:py-20 flex flex-col justify-center items-center">
      <h2 className="text-center text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-8">
        Fungsi Utama MDM
      </h2>

      <div className="lg:w-[80%] xl:w-[75%] flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 mx-auto">
        <div className="w-[70%] sm:w-[60%] lg:w-1/2 flex justify-center">
          <Image
            src="/assets/landing/specification/specification.png"
            alt="Ilustrasi MDM"
            width={500}
            height={500}
            className="w-full h-auto max-w-[500px]"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6">
              <div className='p-2 sm:p-2 md:p-3 xl:p-4 bg-[#D9FAD9] rounded-full'>
                <div className="w-4 sm:w-5 md:w-6 lg:w-8 aspect-square relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-justify">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
