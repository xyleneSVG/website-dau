"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-[#D9FAD9] p-4 text-center overflow-hidden">
      <h1 className="flex text-9xl md:text-[12rem] lg:text-[15rem] font-extrabold">
        <span className="animate-outline-to-solid">4</span>
        <span className="animate-outline-to-solid animation-delay-300">0</span>
        <span className="animate-outline-to-solid animation-delay-600">4</span>
      </h1>
      <p className="text-xl md:text-2xl font-medium mt-4 mb-4 text-gray-800">
        Oops! Halaman yang Anda cari tidak ditemukan.
      </p>
      <p className="text-base text-gray-600 max-w-md">
        Sepertinya Anda tersesat. Jangan khawatir, kami akan membantu Anda kembali ke jalur yang benar.
      </p>
      <Link
        href="/"
        className="mt-8 px-8 py-3 rounded-full bg-[#00DB05] text-white font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Kembali ke Beranda
      </Link>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00DB05] to-transparent opacity-20 z-0"></div>
    </div>
  )
}
