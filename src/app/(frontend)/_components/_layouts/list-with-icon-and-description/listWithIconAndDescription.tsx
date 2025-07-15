'use client'

import React from 'react'
import ListCard from './ListCard'

const items = [
  {
    title: 'Strategi Keamanan Siber',
    description: 'Merancang dan menerapkan strategi cyber security.',
    icon: '/assets/landing/list-with-icon-and-description/icon_1.png',
  },
  {
    title: 'Audit Keamanan Rutin',
    description: 'Melakukan audit keamanan secara rutin untuk memastikan kepatuhan.',
    icon: '/assets/landing/list-with-icon-and-description/icon_2.png',
  },
  {
    title: 'Pengelolaan Firewall dan IDS',
    description: 'Mengelola firewall, IDS/IPS, dan alat keamanan lainnya.',
    icon: '/assets/landing/list-with-icon-and-description/icon_3.png',
  },
  {
    title: 'Kebijakan Keamanan Data',
    description: 'Menyusun dan memperbarui kebijakan keamanan data.',
    icon: '/assets/landing/list-with-icon-and-description/icon_4.png',
  },
  {
    title: 'Pemantauan Ancaman Siber',
    description: 'Melakukan pemantauan terhadap ancaman peretasan dan mitigasi risiko.',
    icon: '/assets/landing/list-with-icon-and-description/icon_5.png',
  },
  {
    title: 'Investigasi Insiden Keamanan',
    description: 'Melakukan investigasi insiden keamanan dan memberikan solusi penanganan.',
    icon: '/assets/landing/list-with-icon-and-description/icon_6.png',
  },
]

export default function ListWithIconAndDescription() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10">
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-[#E9F4FE] -z-10" />

      <div className="relative z-10 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
        <h2 className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center">
          TUGAS DAN TANGGUNG JAWAB
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-2 sm:px-4">
          {items.map((item, index) => (
            <ListCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
