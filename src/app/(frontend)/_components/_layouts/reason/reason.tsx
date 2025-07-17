'use client'

import React from 'react'
import ReasonCard from './ReasonCard'

const data = [
  {
    title: 'Keamanan Data',
    description:
      'Melindungi data perusahaan dari kebocoran jika perangkat hilang atau dicuri.',
    image: '/assets/landing/reason/reason1.png',
  },
  {
    title: 'Manajemen Efisien',
    description:
      'Mengelola ratusan perangkat sekaligus secara jarak jauh.',
    image: '/assets/landing/reason/reason2.png',
  },
  {
    title: 'Produktivitas Karyawan',
    description:
      'Membatasi perangkat hanya untuk aplikasi dan aktivitas kerja.',
    image: '/assets/landing/reason/reason3.png',
  },
  {
    title: 'Kepatuhan Regulasi',
    description:
      'Memastikan perangkat mematuhi aturan seperti GDPR, HIPAA, atau ISO 27001.',
    image: '/assets/landing/reason/reason4.png',
  },
  {
    title: 'Pengelolaan BYOD (Bring Your Own Device)',
    description:
      'Memisahkan data pribadi dan perusahaan di perangkat karyawan.',
    image: '/assets/landing/reason/reason5.png',
  },
]

export default function Reason() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-16 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[15%] sm:h-[20%] lg:h-[30%] bg-[#E3F1FE] z-0" />

      <div className="relative z-10 md:w-[85%] xl:max-w-6xl mx-auto">
        <h2 className="text-center text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase">
          MENGAPA PERUSAHAAN MEMBUTUHKAN MDM ?
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {data.map((item, index) => (
            <ReasonCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
