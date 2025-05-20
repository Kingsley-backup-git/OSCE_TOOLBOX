import Image from 'next/image'
import React from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import QuoteImg4 from "@/assets/QuoteImg4.png"
export default function QuoteFour() {
  return (
    <div className='my-[80px]'>
        <Image src ={QuoteImg4} width={100} height={100} className='block mx-auto' alt="quote-img"/>
<div className="max-w-[500px] relative mx-auto block mt-3">
        <p className='text-[#5D576B] text-balance font-normal italic text-base text-center'>OSCE Toolbox is one of the most helpful resources I&apos;ve used throughout my degree so far. It really bridges the gap between theory and practice, and I&apos;ve recommended it to so many of my coursemates. Whether you&apos;re just starting to prepare or looking for last-minute practice, it&apos;s a tool that can make a real difference. I genuinely feel it&apos;s helped me grow not just as a student, but as a future pharmacist.</p>
        <p className='text-[#5D576B] text-center font-bold text-base mt-4'>Lily Garnett</p>
        <BiSolidQuoteAltLeft className="absolute -top-2 text-[#EF798A80] text-2xl -left-6"/>
   </div>
    </div>
  )
}
