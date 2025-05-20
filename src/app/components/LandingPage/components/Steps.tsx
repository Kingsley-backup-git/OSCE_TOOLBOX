import React from 'react'
import StepImg1 from "@/assets/stepsIcon1.png"
import Image from 'next/image'
import { PiArrowCircleRightBold } from "react-icons/pi";
import Button from '../../ui/Button';
import { FaArrowRight } from 'react-icons/fa6';
export default function Steps() {
  return (
  <div className='mt-16 py-16 px-14 relative'>
    <Image src ={StepImg1} className='absolute -top-5 left-12 z-[-999]' width={80} height={80} alt='' />
      <div className='max-w-[550px] block mx-auto mt-5'>
    <h1 className='text-[#121331]  mx-auto block text-2xl font-extrabold font-nunito italic text-center'>Easily Get OSCE-Ready in <span className='text-[#31AFB4]'>3 Steps</span></h1>
    <p className='text-sm mt-1 text-[#5D576B] text-center'>Explore how our all-in-one pharmacy exam prep tool stands out against other options, and discover why students choose OSCE Toolbox for achieving better outcomes.</p>
    </div>


    <div className='mt-8 flex items-stretch  mx-auto gap-2 max-w-[1000px]'>
<div className='bg-[#EF798A14] h-full flex-1 rounded-3xl p-6'>

<div className='max-w-[70px] w-full mx-auto flex items-center justify-center rounded-2xl bg-[#EF798A] h-[70px] text-white font-bold text-2xl '>
1
</div>

<p className='text-[#5D576B] font-bold font-nunito text-base mt-8 text-center'>Build your foundation</p>
<p className='text-[#5D576B] font-normal text-sm mt-3 text-center'>Use our Info Capsules to sharpen your knowledge of conditions and their management.</p>
</div>

<div className="self-center">
    <PiArrowCircleRightBold className='text-2xl'/>
</div>

{/* second */}

<div className='bg-[#31AFB414]  h-auto flex-1 rounded-3xl p-6'>
 
<div className='max-w-[70px] w-full mx-auto flex items-center justify-center rounded-2xl bg-[#31AFB4] h-[70px] text-white font-bold text-2xl '>
2
</div>

<p className='text-[#5D576B] font-bold font-nunito text-base mt-8 text-center'>Practice like it&apos;s game day</p>
<p className='text-[#5D576B] font-normal text-sm mt-3 text-center'>Tackle OSCE scenarios with full mark schemes to test your skills under pressure.</p>
</div>

<div className="self-center">
    <PiArrowCircleRightBold className='text-2xl'/>
</div>

{/* Third */}
<div className='bg-[#FFC73814] h-full flex-1 rounded-3xl p-6'>

<div className='max-w-[70px] w-full mx-auto flex items-center justify-center rounded-2xl bg-[#FFC738] h-[70px] text-white font-bold text-2xl '>
3
</div>

<p className='text-[#5D576B] font-bold font-nunito text-base mt-8 text-center'>Watch and refine</p>
<p className='text-[#5D576B] font-normal text-sm mt-3 text-center'>Learn from exemplar videos to improve your delivery, clinical reasoning, and phrasing.</p>
</div>
    </div>

     <Button className='text-[#121331]  mx-auto bg-[#FFFFFF] cursor-pointer font-bold text-base border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-10 items-center' 
            style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Start Practicing</h1> <FaArrowRight /></Button>
    </div>
  )
}
