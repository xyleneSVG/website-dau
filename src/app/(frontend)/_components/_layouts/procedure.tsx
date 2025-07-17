'use client'

import Image from 'next/image'
import React from 'react'

const data = [
  {
    title: 'Meningkatkan Interaksi Pengguna',
    description:
      'UI/UX Designer DAU berfokus pada pembuatan interface yang menarik dan mudah digunakan, sehingga dapat meningkatkan interaksi dan kepuasan pengguna.',
    image: '/assets/landing/procedure/image1.png',
  },
  {
    title: 'Menyediakan Solusi Desain yang Fleksibel',
    description:
      'DAU menyediakan desain yang dapat disesuaikan dengan kebutuhan spesifik proyek Anda, mulai dari wireframe hingga prototype interaktif.',
    image: '/assets/landing/procedure/image2.png',
  },
  {
    title: 'Pengoptimalan Desain untuk Konversi',
    description:
      'Perancangan interface yang tidak hanya sekadar estetis, tetapi juga efektif dalam meningkatkan konversi sesuai dengan tujuan bisnis Anda.',
    image: '/assets/landing/procedure/image3.png',
  },
  {
    title: 'Dukungan Berkelanjutan untuk Desain UI/UX',
    description:
      'Kami menawarkan dukungan berkelanjutan untuk memastikan desain Anda tetap relevan dan up-to-date dengan tren terbaru.',
    image: '/assets/landing/procedure/image4.png',
  },
  {
    title: 'Meningkatkan Brand Consistency',
    description:
      'UI/UX Designer kami berfokus dalam menciptakan desain yang konsisten sesuai dengan identitas merek Anda, memastikan bahwa setiap elemen desain memperkuat brand message.',
    image: '/assets/landing/procedure/image5.png',
  },
]

const images = [
  {
    name: 'Adobe XD',
    url: '/assets/landing/procedure/image6.png',
  },
  {
    name: 'Illustrator',
    url: '/assets/landing/procedure/image7.png',
  },
]

export default function Function() {
  return (
    <section className="w-full px-6 py-10 md:py-16 lg:py-20 bg-white">
      <h2 className="text-center text-[14px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-light uppercase mb-8 lg:mb-20">
        Cara UI/UX Designer DAU Membantu Perusahaan Anda
      </h2>

      <div className="lg:w-[80%] xl:w-[75%] flex flex-col-reverse lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mx-auto">
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-white rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    WebkitMaskImage: 'url(/assets/landing/procedure/mask.png)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: 'cover',
                    WebkitMaskComposite: 'destination-out',
                    maskImage: 'url(/assets/landing/procedure/mask.png)',
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover',
                    maskComposite: 'exclude',
                    backgroundColor: 'white',
                  }}
                />

                <Image src={item.image} alt={item.title} fill className="object-cover z-0" />
              </div>

              <div className="flex-1">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-justify lg:mt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-[50%] lg:w-[80%] max-w-[400px] 2xl:max-w-[500px] aspect-square ">
              <Image src={image.url} alt={image.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
