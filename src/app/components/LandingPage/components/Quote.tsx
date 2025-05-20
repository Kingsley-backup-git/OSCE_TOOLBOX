import Image from 'next/image'
import React from 'react'
import QuoteImg from "@/assets/QuoteImg.png"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export default function Quote() {
  return (
    <div className='my-[100px]'>
        <Image src ={QuoteImg} width={100} height={100} className='block mx-auto' alt="quote-img"/>
<div className="max-w-[500px] relative mx-auto block mt-3">
        <p className='text-[#5D576B] text-balance font-normal italic text-base text-center'>Definitely, it is a low cost, effective resource that has improved my confidence, my grades and my knowledge.</p>
        <p className='text-[#5D576B] text-center font-bold text-base mt-2'>Vikesh Kumar Sidhar</p>
        <BiSolidQuoteAltLeft className="absolute -top-2 text-[#EF798A80] text-2xl left-8"/>
   </div>
    </div>
  )
}
