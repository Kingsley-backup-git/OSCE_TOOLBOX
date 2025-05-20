import Image from 'next/image'
import React from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import QuoteImg3 from "@/assets/QuoteImg3.png"
export default function QuoteThree() {
  return (
    <div className='mt-[80px]'>
        <Image src ={QuoteImg3} width={100} height={100} className='block mx-auto' alt="quote-img"/>
<div className="max-w-[500px] relative mx-auto block mt-3">
        <p className='text-[#5D576B] text-balance font-normal italic text-base text-center'>I used OSCE toolbox for exam preparation by getting my family members to act out the patient for the scenarios on the website, whilst I acted as the pharmacist. I found that by acting out the scenarios in a similar way to my actual exam to be super helpful and build my confidence.</p>
        <p className='text-[#5D576B] text-center font-bold text-base mt-2'>Ellavina Ribbans</p>
        <BiSolidQuoteAltLeft className="absolute -top-2 text-[#EF798A80] text-2xl -left-6"/>
   </div>
    </div>
  )
}
