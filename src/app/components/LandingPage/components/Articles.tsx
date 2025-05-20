import Image from 'next/image'
import React from 'react'
import ArticleImg from "@/assets/articleImg.png"
import { FaArrowRight, FaRegHourglass } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";
import Button from '../../ui/Button';
import NoteImg from "@/assets/note.png"
export default function Articles() {
  return (
    <div className='w-full my-8 py-20 px-10 relative'>
        <Image src = {NoteImg} className='absolute top-0 right-20' width={80} height={80} alt='' />
         <div className='max-w-[550px] block mx-auto mt-5'>
    <h1 className='text-[#121331]  mx-auto block text-2xl font-extrabold font-nunito italic text-center'><span className='text-[#EF798A] italic'>Learn</span> Smarter, Not Harder</h1>
    <p className='text-sm mt-1 text-[#5D576B] text-center '>Insights, tips, and deep dives written by students, tutors, and clinicians — all to help you prep like a pro.</p>
    </div>


    <div className='grid grid-cols-3 mt-8 max-w-[1100px] gap-8 mx-auto'>
<div className="">
<Image src = {ArticleImg} className='' width={700} height={700} alt='' />

<div className='mt-6 flex items-center gap-x-3 px-2'>
    <div className="flex-1">
<div className='max-w-fit w-full  border-1 border-[#31AFB4] rounded-full py-2 px-4'>
17 August
</div>
</div>

<div className='flex items-center gap-x-1'>
<FaRegHourglass className="text-[#5D576B]"/>
<h1 className="text-[#5D576B] text-sm font-normal">6 min</h1>
</div>


<div className='flex items-center gap-x-1'>
    <IoIosPlay className="text-[#5D576B]"/>
    <h1 className="text-[#5D576B] text-sm font-normal">5</h1>
</div>
</div>

<h1 className='text-[#5D576B] text-[0.938rem] font-extrabold mt-3 text-center'>Lessons from my First Year of Pharmacy - Taslima.</h1>
</div>





<div className="">
<Image src = {ArticleImg} className='' width={700} height={700} alt='' />

<div className='mt-6 flex items-center gap-x-3 px-2'>
    <div className="flex-1">
<div className='max-w-fit w-full  border-1 border-[#31AFB4] rounded-full py-2 px-4'>
17 August
</div>
</div>

<div className='flex items-center gap-x-1'>
<FaRegHourglass className="text-[#5D576B]"/>
<h1 className="text-[#5D576B] text-sm font-normal">6 min</h1>
</div>


<div className='flex items-center gap-x-1'>
    <IoIosPlay className="text-[#5D576B]"/>
    <h1 className="text-[#5D576B] text-sm font-normal">5</h1>
</div>
</div>

<h1 className='text-[#5D576B] text-[0.938rem] font-extrabold mt-3 text-center'>Lessons from my First Year of Pharmacy - Taslima.</h1>
</div>







<div className="">
<Image src = {ArticleImg} className='' width={700} height={700} alt='' />

<div className='mt-6 flex items-center gap-x-3 px-2'>
    <div className="flex-1">
<div className='max-w-fit w-full  border-1 border-[#31AFB4] rounded-full py-2 px-4'>
17 August
</div>
</div>

<div className='flex items-center gap-x-1'>
<FaRegHourglass className="text-[#5D576B]"/>
<h1 className="text-[#5D576B] text-sm font-normal">6 min</h1>
</div>


<div className='flex items-center gap-x-1'>
    <IoIosPlay className="text-[#5D576B]"/>
    <h1 className="text-[#5D576B] text-sm font-normal">5</h1>
</div>
</div>

<h1 className='text-[#5D576B] text-[0.938rem] font-extrabold mt-3 text-center'>Lessons from my First Year of Pharmacy - Taslima.</h1>
</div>
        </div>

             <Button className='text-[#121331]  mx-auto bg-[#FFFFFF] cursor-pointer font-bold text-sm border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-16 items-center' 
                    style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>View All Articles</h1> <FaArrowRight /></Button>
    </div>
  )
}
