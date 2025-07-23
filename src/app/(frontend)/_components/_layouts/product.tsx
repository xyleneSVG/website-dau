// modules
import Image from 'next/image'

// images
import background from 'public/assets/landing/product/background1.svg'

// interfaces
import { ProductSection } from '../../_interfaces/pages'

export default function Product({productSection, domainBlob}: {productSection: ProductSection, domainBlob: string}) {
  return (
    <div className="w-full relative p-6 sm:p-8 md:p-12 min-2xl:p-20 py-12 sm:py-14 md:py-16 lg:py-18 xl:md:py-20 2xl:py-24">
      <Image
        priority
        className="h-auto w-[160px] absolute bottom-0 left-0 z-0 sm:w-[340px] md:w-[430px]"
        src={background}
        alt={''}
        width={0}
        height={0}
      />
      <div className="w-full 2xl:gap-y-24 z-10 relative">
        <div className="flex flex-col items-center justify-center gap-y-8 sm:gap-y-12 md:gap-y-16">
          <div className="text-center space-y-3">
            <h1 className="uppercase font-light text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] 2xl:text-[64px]">
              produk kami
            </h1>
            <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              Kreasi kami dalam berteknologi. Karya kami untuk berbagai segmen bisnis.
            </p>
          </div>
          <div className="grid grid-cols-2 justify-items-center gap-4 sm:gap-6 md:gap-8 xl:gap-10 2xl:gap-12">
            {productSection.productLists.map((src, idx) => (
              <div
                key={idx}
                className="rounded-[10px] shadow-md md:shadow-lg md:rounded-[20px] bg-center bg-cover overflow-hidden w-[130px] h-[90px] sm:w-[260px] sm:h-[160px] md:w-[280px] md:h-[200px] lg:w-[340px] lg:h-[240px] xl:w-[440px] xl:h-[300px]"
                style={{ backgroundImage: `url('${domainBlob + src.productDisplay.filename}')` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
