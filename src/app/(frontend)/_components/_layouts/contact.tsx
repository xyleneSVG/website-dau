'use client'

import Image from 'next/image'

import backgroundIcon1 from 'public/assets/landing/service/backgroundIcon1.svg'
import { ContactSection, OptionRadio, SubFields } from '../../_interfaces/pages'

interface Props {
  data: ContactSection
  domainBlob: string
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)
  const jsonData: { [key: string]: string } = {}

  formData.forEach((value, key) => {
    jsonData[key] = value.toString()
  })

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })

    if (!res.ok) throw new Error('Failed to send')

    const result = await res.json()
    console.log('Message sent:', result)
  } catch (error) {
    console.error('Send error:', error)
  }
}

const renderInputField = (field: any, isSubField: boolean = false) => {
  const baseClass =
    'w-full border border-gray-300 rounded px-4 py-2 mt-1 rounded-lg text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'

  if (isSubField) {
    return (
      <input
        type={field.subFieldType}
        id={field.subFieldId}
        name={field.subFieldId}
        placeholder={field.subFieldPlaceholder}
        required={field.subFieldRequired}
        className={baseClass}
      />
    )
  } else {
    switch (field.fieldTypeSingle) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <input
            type={field.fieldTypeSingle}
            id={field.id}
            name={field.fieldId}
            placeholder={field.fieldPlaceholder}
            required={field.fieldRequired}
            className={baseClass}
          />
        )
      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.fieldId}
            placeholder={field.fieldPlaceholder}
            required={field.fieldRequired}
            rows={4}
            className={baseClass}
          />
        )
      case 'radio':
        return (
          <div className="flex gap-x-6 mt-2">
            {field.fieldRadioOptions.map((opt: OptionRadio, index: number) => (
              <label
                key={index}
                className="flex items-center gap-x-1 text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px]"
              >
                <input
                  type="radio"
                  name={field.fieldId}
                  value={opt.optionRadioValue}
                  required={field.fieldRequired}
                />
                <span>{opt.optionRadioLabel}</span>
              </label>
            ))}
          </div>
        )
      default:
        return null
    }
  }
}

export default function Contact({ data, domainBlob }: Props) {
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
              src={domainBlob + data.sectionIllustration?.filename}
              alt="Illustration"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="w-full">
            <p className="w-full text-start font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
              {data.sectionLabel}
            </p>
            <h1 className="w-full text-start font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] mb-2 md:mt-1 xl:mt-2 md:mb-4 xl:mb-5">
              {data.sectionHeadline}
            </h1>
            <p className="w-full text-justify font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
              {data.sectionDescription}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 w-full mt-10 md:mt-0 flex flex-col gap-y-6">
          {Array.isArray(data.fieldsForm) &&
            data.fieldsForm.map((field, index) => {
              if (field.fieldLayout === 'double' && Array.isArray(field.subFields)) {
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-1/2">
                      <label
                        htmlFor={field.fieldId}
                        className="block font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]"
                      >
                        {field.fieldLabel}
                        {field.fieldRequired && <span className="text-red-500"> *</span>}
                      </label>
                      <input
                        type={field.fieldTypeDouble}
                        id={field.fieldId}
                        name={field.fieldId}
                        placeholder={field.fieldPlaceholder}
                        required={field.fieldRequired}
                        className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-lg text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    {field.subFields.map((subField: SubFields) => (
                      <div key={subField.id} className="w-1/2">
                        <label
                          htmlFor={subField.subFieldId}
                          className="block font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]"
                        >
                          {subField.subFieldLabel}
                          {subField.subFieldRequired && <span className="text-red-500"> *</span>}
                        </label>
                        {renderInputField(subField, true)}
                      </div>
                    ))}
                  </div>
                )
              } else {
                return (
                  <div key={field.id}>
                    <label
                      htmlFor={field.fieldLabel}
                      className="block font-medium text-[14px] lg:text-[16px] 2xl:text-[18px]"
                    >
                      {field.fieldLabel}
                      {field.fieldRequired && <span className="text-red-500"> *</span>}
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
