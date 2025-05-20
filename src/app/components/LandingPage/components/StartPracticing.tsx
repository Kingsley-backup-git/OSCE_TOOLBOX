import React from 'react'
import Button from '../../ui/Button'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import OctHeart from "@/assets/Oct_sp_heart.png"
export default function StartPracticing() {
  return (
    <div className='border-t-2 py-12 my-6 px-10 border-[#5D576B2B] items-center grid grid-cols-2 rounded-b-2xl' style={{backgroundImage: "linear-gradient(180deg, #F5F5F500, #F5F5F5)"}}>
        <div>
            <h1 className='font-nunito text-[#121331] text-4xl italic font-extrabold'>
                The <span className='text-[#EF798A] not-italic'>toolbox</span> that every Pharmacy student needs

            </h1>
            <p className='text-[#5D576B] mt-3 text-sm font-normal'>Start Practicing Today - Don&apos;t Cram Last Minute!</p>


                 <Button className='text-[#121331] bg-[#FFFFFF] cursor-pointer font-bold text-base border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-4 items-center' 
                        style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Start Practicing</h1> <FaArrowRight /></Button>
        </div>


<div className="flex justify-center items-center">
<Image src = {OctHeart} className='' alt="" width={400} height={400} />
</div>
    </div>
  )
}
