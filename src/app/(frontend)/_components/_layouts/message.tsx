'use client'

// modules
import { useEffect, useState } from 'react'
import Image from 'next/image'

// images
import background from 'public/assets/landing/client/background1.svg'
import icon from 'public/assets/message/icon.svg'

// interfaces
import { MessageItem } from '../../_interfaces/messageItem'

// templates component
import TextFieldTemplate from '../_messageTemplates/text'

export default function Message({ fieldMessages }: { fieldMessages: MessageItem[] }) {
  // const templateFields = [
  //   {text: pathTemplateText},
  //   {email: pathTemplateEmail},
  // ]

  return (
    <div className="w-full relative">
      <div className="w-full p-8 flex flex-col items-center gap-y-8 md:pt-15 2xl:gap-y-24 border">
        <div className="flex flex-col items-center gap-y-6">
          <Image className="w-[160px] h-auto" src={icon} width={0} height={0} alt={''} />
          <div className="flex flex-col gap-y-2">
            <p className="font-light text-[14px]">Hubungi Kami</p>
            <h1 className="font-bold text-[18px]">
              Dapatkan Solusi IT Tepat dengan DATA ANDALAN UTAMA, Konsultasi Sekarang!
            </h1>
            <p className="font-light text-[14px]">
              Diskusikan tantangan IT Anda, dan tim ahli kami yang berpengalaman akan memberikan
              solusi yang tepat untuk mendorong pertumbuhan dan kesuksesan bisnis Anda.
            </p>
          </div>
        </div>
        <div className="border flex flex-col w-full">
          <TextFieldTemplate />
        </div>
      </div>
    </div>
  )
}
