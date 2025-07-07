import Image from 'next/image'
import React from 'react'

import backgroundVision from 'public/assets/landing/vision/visi.png'
import VisionCard from './VisionCard'

export default function vision() {
  return (
    <div className=''>
        <div className='relative'>
        <Image src={backgroundVision} alt={'background-vision'} className='w-full'></Image>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                <h1 className='text-[#00DB05] text-[18px] md:text-[24px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-bold uppercase'>visi kami</h1>
                <p className='text-white text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] mt-[10px] font-bold tracking-[0.35em]  uppercase'>DATA ANDALAN UTAMA</p>
            </div>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-[20px] xl:gap-[30px] 2xl:gap-[50px] justify-items-center px-[20px] sm:px-[40px] md:px-[80px] xl:px-[150px] mt-[20px] md:mt-[-3.5%]">
            <VisionCard title="Kemajuan Melalui Teknologi" description="Kami percaya bahwa teknologi akan mengubah dunia. Saat ini, kita telah melihat bagaimana perusahaan-perusahaan besar tradisional mengalami gangguan atau bahkan menyerah terhadap pendatang baru yang berorientasi pada teknologi. Untuk menjadi salah satu dari pendatang baru tersebut, kami selalu berpikir tentang bagaimana berkontribusi dalam menciptakan dunia yang lebih baik melalui bidang yang menjadi passion kami: Teknologi."/>
            <VisionCard title="Kelas Utama atau Tidak Sama Sekali" description="Kami tidak pernah mengklaim bahwa produk kami adalah &quot;Yang Terbaik&quot; atau bahkan &quot;Kelas Utama&quot; kepada klien kami. Namun, ketika kami menciptakan produk, kami selalu mencurahkan seluruh pemikiran, hati, dan passion kami ke dalamnya. Standar terberat kami dinilai oleh orang yang kami lihat di cermin. Itulah yang kami anggap sebagai &quot;Kelas Utama&quot;."/>
            <VisionCard title="Perbaikan yang Konstan dan Tiada Henti" description="Tuhan memberi kita dua telinga dan satu mulut, karena kita seharusnya lebih banyak mendengar daripada berbicara. Kami membiarkan klien bahkan pesaing berbicara dan memberikan komentar tentang kami serta produk kami. Kami membiarkan orang lain menilai dan memberi tahu kami apa yang masih belum sempurna, dan untuk itu, kami sangat bersyukur. Sebagai bentuk terima kasih, kami kembali ke papan desain dan terus memperbaiki apa pun yang telah kami buat."/>
        </div>
    </div>
  )
}
