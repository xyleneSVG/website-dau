'use client'

// modules
import { useEffect, useState } from 'react'
import Image from 'next/image'

// images
import background from 'public/assets/landing/client/background1.svg'

// interfaces
import { ContactSection, FieldContactLists } from '../../_interfaces/pages'

// templates component
import TextFieldTemplate from '../_messageTemplates/text'

export default function Contact({ contactSection, domainBlob }: { contactSection: ContactSection, domainBlob:string }) {

  const renderTemplate = (field: FieldContactLists, index: number) => {
    const actualField = field.fieldLabel as unknown as FieldContactLists;
    switch (actualField.fieldType) {
      case 'text':
        return <TextFieldTemplate key={index} field={actualField} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full border border-red-600 h-max relative">
      <div className="w-full min-h-[calc(100vh-80px)] p-8 flex flex-col items-center gap-y-8 md:pt-15 2xl:gap-y-24 border md:flex-row md:gap-16 md:justify-between lg:px-24 xl:px-28">
        <div className="flex flex-col items-center gap-y-6 xl:gap-y-10">
          <Image className="w-[160px] h-auto md:w-[240px] xl:w-[420px]" src={domainBlob+contactSection.sectionContactIllustration.filename} width={0} height={0} alt={''} />
          <div className="flex flex-col gap-y-2 lg:gap-y-4 lg:w-[380px] xl:w-[500px]">
            <p className="font-light text-[14px] lg:text-[18px] xl:text-[20px]">{contactSection.sectionContactLabel}</p>
            <h1 className="font-bold text-[18px] lg:text-[24px] lg:text-justify">{contactSection.sectionContactHeadline}</h1>
            <p className="font-light text-[14px] lg:text-[18px] xl:text-[20px] lg:text-justify">{contactSection.sectionContactDescription}</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-3 text-[14px] font-light lg:text-[17px] xl:text-[20px] xl:max-w-[600px] xl:gap-y-6">
          {contactSection.fieldContactLists?.map((field, index) => renderTemplate(field, index))}
        </div>
      </div>
    </div>
  )
}
