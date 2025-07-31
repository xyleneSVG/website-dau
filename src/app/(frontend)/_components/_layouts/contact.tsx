'use client'

import Image from "next/image"

import backgroundIcon1 from 'public/assets/landing/service/backgroundIcon1.svg'

const contactSection = {
  sectionContactIllustration: {
    filename: '/assets/landing/message/icon.svg',
  },
  sectionContactLabel: 'Hubungi Kami',
  sectionContactHeadline:
    'Dapatkan Solusi IT Tepat dengan DATA ANDALAN UTAMA, Konsultasi Sekarang!',
  sectionContactDescription:
    'Diskusikan tantangan IT Anda, dan tim ahli kami yang berpengalaman akan memberikan solusi yang tepat untuk mendorong pertumbuhan dan kesuksesan bisnis Anda.',
  form: [
    {
      id: 'name',
      label: 'Nama Anda',
      placeholder: 'John Doe',
      type: 'text',
      required: true,
      layout: 'single',
    },
    {
      id: 'email_phone',
      layout: 'double',
      fields: [
        {
          id: 'email',
          label: 'Email Anda',
          placeholder: 'example@gmail.com',
          type: 'email',
          required: true,
        },
        {
          id: 'phone',
          label: 'Telepon Anda',
          placeholder: '08123456xxxx',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      id: 'company',
      label: 'Nama Perusahaan',
      placeholder: 'PT Maju Jaya',
      type: 'text',
      required: false,
      layout: 'single',
    },
    {
      id: 'message',
      label: 'Pesan Anda',
      placeholder: 'Sampaikan kebutuhan Anda...',
      type: 'textarea',
      required: true,
      layout: 'single',
    },
    {
      id: 'contact_via',
      label: 'Dapat dihubungi via',
      type: 'radio',
      options: ['Email', 'Telepon', 'WhatsApp'],
      required: false,
      layout: 'single',
    },
    {
      id: 'email_phone',
      layout: 'double',
      fields: [
        {
          id: 'email',
          label: 'Email Anda',
          placeholder: 'example@gmail.com',
          type: 'email',
          required: true,
        },
        {
          id: 'phone',
          label: 'Telepon Anda',
          placeholder: '08123456xxxx',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default function Contact() {
  const renderInputField = (field: any) => {
    const baseClass =
      'w-full border border-gray-300 rounded px-4 py-2 mt-1 rounded-lg text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            required={field.required}
            className={baseClass}
          />
        )
      case 'textarea':
        return (
          <textarea
            id={field.id}
            placeholder={field.placeholder}
            required={field.required}
            rows={4}
            className={baseClass}
          />
        )
      case 'radio':
        return (
          <div className="flex gap-x-6 mt-2">
            {field.options.map((opt: string, idx: number) => (
              <label
                key={idx}
                className="flex items-center gap-x-1 text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px]"
              >
                <input type="radio" name={field.id} value={opt} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative w-full min-h-[calc(100vh-90px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-108px)] flex items-center p-6 sm:p-8 md:p-12 lg:p-16 min-2xl:p-20 py-14 sm:py-16 md:py-18 lg:py-20 xl:md:py-24 2xl:py-30">
      <Image
        priority
        width={0}
        height={0}
        src={backgroundIcon1}
        alt=""
        className="absolute top-0 left-0 w-[240px] h-auto -z-10 md:w-[420px] 2xl:w-[620px]"
      />
      <div className="lg:w-[90%] mx-auto md:flex md:justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <div className="w-full md:w-1/2 flex flex-col items-center gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 xl:gap-y-14 2xl:gap-y-16">
          <div className="flex justify-center items-center w-full lg:w-[70%]">
            <img
              src={contactSection.sectionContactIllustration.filename}
              alt="Illustration"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="w-full">
            <p className="w-full text-start font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
              {contactSection.sectionContactLabel}
            </p>
            <h1 className="w-full text-start font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] mb-2 md:mt-1 xl:mt-2 md:mb-4 xl:mb-5">
              {contactSection.sectionContactHeadline}
            </h1>
            <p className="w-full text-justify font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
              {contactSection.sectionContactDescription}
            </p>
          </div>
        </div>

        <form className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col gap-y-6">
          {contactSection.form.map((field, index) => {
            if (field.layout === 'double' && Array.isArray(field.fields)) {
              return (
                <div key={index} className="flex gap-4">
                  {field.fields.map((subField: any) => (
                    <div key={subField.id} className="w-1/2">
                      <label
                        htmlFor={subField.id}
                        className="block font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]"
                      >
                        {subField.label}
                        {subField.required && <span className="text-red-500"> *</span>}
                      </label>
                      {renderInputField(subField)}
                    </div>
                  ))}
                </div>
              )
            } else {
              return (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500"> *</span>}
                  </label>
                  {renderInputField(field)}
                </div>
              )
            }
          })}

          <button
            type="submit"
            className="bg-[#00DB05] text-white py-3 font-semibold transition rounded-lg text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] cursor-pointer"
          >
            KIRIM PESAN
          </button>
        </form>
      </div>
    </div>
  )
}
