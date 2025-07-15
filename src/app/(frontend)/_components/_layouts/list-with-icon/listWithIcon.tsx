'use client'
import React from 'react'
import ListCard from './ListCard'

const titles = [
  'Merancang Arsitektur Sistem',
  'Pengambilan Keputusan Teknis',
  'Menentukan Standar dan Protokol',
  'Mengelola Kompleksitas Sistem',
  'Memastikan Skalabilitas dan Kinerja',
  'Mengintegrasikan Sistem',
  'Menjamin Keamanan',
  'Dokumentasi Teknis',
  'Kolaborasi dengan Tim',
  'Penyelesaian Masalah Teknis',
]

const images = [
  { url: '/assets/landing/list-with-icon/Layer_1.png', alt: 'Layer_1.png' },
  { url: '/assets/landing/list-with-icon/Layer_2.png', alt: 'Layer_2.png' },
  { url: '/assets/landing/list-with-icon/Layer_3.png', alt: 'Layer_3.png' },
  { url: '/assets/landing/list-with-icon/Layer_4.png', alt: 'Layer_4.png' },
  { url: '/assets/landing/list-with-icon/Layer_5.png', alt: 'Layer_5.png' },
  { url: '/assets/landing/list-with-icon/Layer_6.png', alt: 'Layer_6.png' },
  { url: '/assets/landing/list-with-icon/Layer_7.png', alt: 'Layer_7.png' },
  { url: '/assets/landing/list-with-icon/Layer_8.png', alt: 'Layer_8.png' },
  { url: '/assets/landing/list-with-icon/Layer_9.png', alt: 'Layer_9.png' },
  { url: '/assets/landing/list-with-icon/Layer_10.png', alt: 'Layer_10.png' },
]

export default function ListWithIcon() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E9F4FE] -z-10" />

      <div className="relative z-10 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] px-4">
        <h2 className="text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-4 sm:mb-6 md:mb-8 xl:mb-10 text-center">
          TUGAS DAN TANGGUNG JAWAB
        </h2>
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10 xl:p-14 w-full">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-14"
          >
            {images.map((image, index) => (
              <ListCard key={index} icon={image.url} title={titles[index]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
