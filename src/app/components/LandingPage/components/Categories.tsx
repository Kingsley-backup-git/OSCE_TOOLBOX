import Image from 'next/image'
import React from 'react'
import Scenerio from "@/assets/scenerio.png"
import LightBulb from "@/assets/lightBulb.png"
import Video from "@/assets/video.png"
import Article from "@/assets/article.png"
import { FaArrowRight } from "react-icons/fa6";
import Button from '../../ui/Button'
export default function Categories() {
  return (
    <div className=''>
<h1 className='font-nunito italic font-extrabold text-2xl text-center text-[#121331]'><span className='text-[#EF798A]'>Explore</span> our Categories.</h1>

<p className='text-[#5D576B] text-sm font-normal text-center mt-1'>Prepare efficiently with expert-crafted resources, interactive cases, and real-world simulations designed for your success.</p>
   

   <div className='grid grid-cols-2 max-w-[900px] mx-auto mt-6 gap-5'>
    <div className='flex gap-x-1  bg-white p-5 rounded-2xl'>
<div className='flex flex-col gap-y-1'>
    <div className='justify-center flex-1 flex flex-col gap-y-2'>
<h1 className='font-nunito font-bold text-base text-[#121331]'>Scenarios</h1>
<p className='text-[#5D576B] font-normal text-sm'>Practice OSCE-style cases that mirror the real exam.</p>
</div>
<FaArrowRight className='text-[#EF798A] justify-end'/>
</div>


<Image src ={Scenerio} className='' width={150} height={150} alt="scenerio-img"/>
    </div>



   <div className='flex gap-x-1  bg-white p-5 rounded-2xl'>
<div className='flex flex-col gap-y-1'>
    <div className='justify-center flex-1 flex flex-col gap-y-2'>
<h1 className='font-nunito font-bold text-base text-[#121331]'>Info Capsules</h1>
<p className='text-[#5D576B] font-normal text-sm'>Quick, high-yield summaries you can digest in minutes.</p>
</div>
<FaArrowRight className='text-[#EF798A] justify-end'/>
</div>


<Image src ={LightBulb} className='' width={150} height={150} alt="scenerio-img"/>
    </div>



   



   <div className='flex gap-x-1  bg-white p-5 rounded-2xl'>
<div className='flex flex-col gap-y-1'>
    <div className='justify-center flex-1 flex flex-col gap-y-2'>
<h1 className='font-nunito font-bold text-base text-[#121331]'>Videos</h1>
<p className='text-[#5D576B] font-normal text-sm'>Visual walkthroughs of cases and clinical tips.</p>
</div>
<FaArrowRight className='text-[#EF798A] justify-end'/>
</div>


<Image src ={Video} className='' width={150} height={150} alt="scenerio-img"/>
    </div>



     <div className='flex gap-x-1  bg-white p-5 rounded-2xl'>
<div className='flex flex-col gap-y-1'>
    <div className='justify-center flex-1 flex flex-col gap-y-2'>
<h1 className='font-nunito font-bold text-base text-[#121331]'>Articles</h1>
<p className='text-[#5D576B] font-normal text-sm'>See lots of articles that share tips, guides and more to help with your OSCEs</p>
</div>
<FaArrowRight className='text-[#EF798A] justify-end'/>
</div>


<Image src ={Article} className='' width={150} height={150} alt="scenerio-img"/>
    </div>

   </div>
   
   

   <div className='mt-10 max-w-[900px] mx-auto border-6 border-[#121331] p-8 rounded-3xl' style={{backgroundImage:"linear-gradient(90deg, #31AFB4 67%, rgba(49, 175, 180, .3))"}}>
    <h1 className='text-white italic font-bold text-base'>A <span className='not-italic text-[#121331] font-normal'> FREE</span> GUIDE TO ACING YOUR OSCES</h1>

    <p className='font-extrabold font-nunito text-4xl mt-3 text-white'>THE OCSE METHOD<span className="text-[#FFC738]">™</span></p>

    <Button className='text-[#121331] bg-[#FFFFFF] cursor-pointer font-bold text-base border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-7 items-center' 
        style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Download Now</h1> <FaArrowRight /></Button>
   </div>
    </div>
  )
}
