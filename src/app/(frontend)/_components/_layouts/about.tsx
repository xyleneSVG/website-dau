import Image from 'next/image'
import React from 'react'

import logoDataAndalanUtama from 'public/assets/logo data utama.svg'

export default function about() {
  return (
    <div className="min-h-screen w-full bg-[#E3F1FE] flex flex-col items-center py-[30px] sm:py-[40px] md:py-[60px] xl:py-[80px]">
      <Image src={logoDataAndalanUtama} alt={'logo'} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px] xl:w-[250px] 2xl:w-[290px]"></Image>
      <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1000px]">
        <h1 className="text-black text-center text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-light uppercase">
          perusahaan kami
        </h1>
        <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1000px] text-justify">
          <span className="font-bold">DATA ANDALAN UTAMA</span> adalah perusahaan solusi dan layanan
          terintegrasi yang berbasis di Indonesia, yang menawarkan perangkat lunak dan solusi IT
          untuk berbagai kebutuhan, termasuk layanan perbankan dan keuangan, Internet of Things
          (IoT), Marketplace, Geolokasi, Keamanan, serta layanan cloud computing. Data Andalan Utama
          memiliki keahlian dalam melakukan asesmen dan uji penetrasi. <br /> <br />
          Perusahaan ini dikenal karena solusi kreatifnya untuk sektor swasta dan pemerintahan,
          termasuk: departemen kepolisian, kantor kejaksaan, pemerintah daerah, sekolah swasta, dan
          lainnya. Perusahaan ini menawarkan rangkaian layanan AI siap pakai untuk perusahaan,
          aplikasi, dan alat teknologi lainnya. <br /> <br />
          <span className="font-bold">SEJARAH</span> <br /> <br />
          Pada tahun 1998, perusahaan ini awalnya bernama Innovative Community Center, yang
          didirikan oleh Jerry Susmono sebagai perusahaan penjualan perangkat keras dan perangkat
          lunak komputer. Seiring waktu, perusahaan ini berkembang menjadi pembuat aplikasi komputer
          berbasis Visual Basic dan Borland Delphi. Selanjutnya, perusahaan mulai mengembangkan
          aplikasi berbasis mobile dan web, serta melakukan asesmen terhadap berbagai perusahaan
          untuk membantu mereka dalam manajemen teknologi yang baik dan benar. <br /> <br />
          Selain itu, perusahaan juga aktif melakukan berbagai uji penetrasi, termasuk white, gray,
          dan black penetration, guna membantu perusahaan memiliki sistem keamanan yang lebih baik.
          Oleh karena itu, sejak tahun 2020, didirikanlah PT Data Andalan Utama untuk menaungi
          seluruh aktivitas bisnis tersebut.
        </p>
      </div>
    </div>
  )
}
