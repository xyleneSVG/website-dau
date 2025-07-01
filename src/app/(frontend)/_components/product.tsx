// modules
import Image from "next/image"

// images
import background from "public/assets/landing/product/background1.svg"
import dump from "public/assets/landing/Group 12030.svg"
import dump1 from "public/assets/landing/Group 12032.svg"
import dump2 from "public/assets/landing/Group 12033.svg"
import dump3 from "public/assets/landing/Group 12036.svg"

export default function Product() {
    return (
        <div className="w-full relative">
            <Image className="h-auto w-[160px] absolute bottom-0 left-0 z-0 sm:w-[340px] md:w-[430px]" src={background} alt={""} width={0} height={0}/>
            <div className="w-full p-4 md:p-15 2xl:gap-y-24 z-10 relative">
                <div className="flex flex-col gap-y-6 items-center justify-center">
                    <div className="text-center space-y-3">
                        <h1 className="uppercase font-light text-[18px] lg:text-[40px] 2xl:text-[64px]">produk kami</h1>
                        <p className="font-normal text-[14px] lg:text-[16px] 2xl:text-[24px]">Kreasi kami dalam berteknologi. Karya kami untuk berbagai segmen bisnis.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 justify-items-center">
                        {[dump, dump1, dump2, dump3].map((src, idx) => (
                            <div
                                key={idx}
                                className="rounded-[20px] overflow-hidden w-full max-w-[160px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px]"
                            >
                                <Image
                                    className="w-full h-auto"
                                    width={0}
                                    height={0}
                                    src={src}
                                    alt={`dump-${idx}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}