'use client'

import React from 'react'

const Data = [
  {
    question: 'Apa itu Cloud Server?',
    answer:
      'Cloud Server atau Virtual Private Server (VPS) adalah layanan sewa server virtual di mana Anda mendapatkan bagian tersendiri dari resource server seperti CPU, RAM, Storage. Anda mendapatkan akses root dan dapat dengan bebas melakukan pilihan instalasi OS dan konfigurasi sistem secara keseluruhan.',
  },
  {
    question: 'Siapa yang cocok menggunakan Cloud Server?',
    answer:
      'Cloud Server cocok untuk Anda yang ingin leluasa dalam melakukan kustomisasi dan kontrol secara penuh. Cocok untuk developer, website startup, atau perusahaan yang belum butuh Dedicated Server.',
  },
  {
    question:
      'Apa hubungannya Domain dan Hosting? Apa Untungnya menggunakan Cloud Server?',
    answer:
      'Cloud Server mengutamakan flexibility dan scalability. Anda hanya membayar sesuai resource yang digunakan, lebih hemat dan efisien.',
  },
  {
    question: 'Dimana lokasi server berada?',
    answer:
      'Anda dapat memilih lokasi Data Center sesuai lokasi yang terdekat dengan Anda, seperti Jakarta, Surabaya, Singapore, dan lainnya.',
  },
  {
    question: 'Mengapa menggunakan Cloud Server Indonesia?',
    answer:
      'Karena lokasi server yang dekat sangat berpengaruh terhadap kecepatan akses. Cloud Server Indonesia cocok jika target pengguna Anda berada di Indonesia.',
  },
  {
    question: 'Bagaimana cara mengelola Cloud Server?',
    answer:
      'Cloud Server mendukung akses full root dan control panel seperti PowerOn/Reboot/Install OS. Anda juga bisa menggunakan cPanel untuk memudahkan manajemen.',
  },
  {
    question: 'Bagaimana cara agar Cloud Server Aman?',
    answer:
      'Gunakan password yang kuat, hindari software bajakan, update sistem secara berkala, dan jangan gunakan server untuk aktivitas ilegal.',
  },
  {
    question: 'Apakah bisa dibantu untuk Install dan Konfigurasi Server?',
    answer:
      'Ya, kami menyediakan bantuan installasi dan konfigurasi server secara GRATIS. Untuk kelola penuh, tersedia layanan Server Management.',
  },
  {
    question: 'Bagaimana jika saya ingin Cloud Server dengan Spesifikasi Khusus?',
    answer:
      'Kami menyediakan paket custom sesuai kebutuhan Anda. Hubungi tim kami untuk diskusi lebih lanjut.',
  },
  {
    question: 'Apakah terdapat layanan backup?',
    answer:
      'Kami melakukan backup rutin untuk menjaga kualitas layanan dan data Anda. Disarankan tetap melakukan backup pribadi juga.',
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <div className="w-full text-center mb-12 mx-auto bg-[#E3F1FE] px-6 pt-12 lg:pt-16 pb-24 lg:pb-30">
        <h1 className="text-[16px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl md:text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold text-black mx-auto">
          KETAHUI INI SEBELUMNYA
        </h1>
        <p className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-4xl 2xl:max-w-5xl mt-3 md:mt-5 xl:mt-7 2xl:mt-10 text-black font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] mx-auto">
          Komunikasi adalah Hal yang sangat penting bagi Kami agar Kami dapat
          memberikan Solusi Terbaik untuk Anda. Berikut adalah Pertanyaan yang
          Sering Ditanyakan pada layanan ini.
        </p>
      </div>

      <div className="md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto columns-1 md:columns-2 gap-6 space-y-6 px-6 sm:px-8 md:px-16 pb-12 xl:pb-16 mt-[-120px]">
        {Data.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] text-gray-800 mb-2 md:mb-3.5 xl:mb-4 break-words">
              {item.question}
            </h2>
            <p className="font-light text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[24px] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
