import Image from 'next/image'
import React from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import QuoteImg2 from "@/assets/QuoteImg2.png"
export default function QuoteTwo() {
  return (
    <div className='mt-[80px]'>
        <Image src ={QuoteImg2} width={100} height={100} className='block mx-auto' alt="quote-img"/>
<div className="max-w-[500px] relative mx-auto block mt-3">
        <p className='text-[#5D576B] text-balance font-normal italic text-base text-center'>If I was going to invest in anything as a university student, it would be guaranteeing that I graduate on time and don&apos;t spend my summer resitting exams because of a failed OSCE. Putting in the effort now, with tools like OSCE Toolbox, means I can be confident in my performance and avoid the stress of having to retake anything.</p>
        <p className='text-[#5D576B] text-center font-bold text-base mt-2'>Maya Dawood</p>
        <BiSolidQuoteAltLeft className="absolute -top-2 text-[#EF798A80] text-2xl -left-2"/>
   </div>
    </div>
  )
}
