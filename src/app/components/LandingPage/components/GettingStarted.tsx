import Image from 'next/image'
import React from 'react'
import MedBottleImg from "@/assets/medBottle.png"
import Book from "@/assets/book.png"
import Star from "@/assets/star.png"
import HandShake from "@/assets/handshake.png"
export default function GettingStarted() {
  return (
    <div className='mt-16 py-8 px-14 relative'>
        <div className='max-w-[500px] block mx-auto mt-5'>
       <h1 className='text-[#121331] max-w-[400px] mx-auto block text-2xl font-extrabold font-nunito italic text-center'>We Have <span className='text-[#31AFB4] font-extrabold not-italic'>Everything</span> You Need to Ace Your OSCEs.</h1> 
       <p className='text-sm text-[#5D576B] text-center mt-1'>Master every scenario with expert-crafted resources, interactive cases, and real-world simulations designed for your success.</p>
       </div>

       <Image src ={MedBottleImg} className='absolute top-0 right-12 z-[-999]' width={80} height={80} alt='' />



       <div className="grid grid-cols-3 mt-8 gap-4">
<div className="bg-[#F5F5F5] flex flex-col gap-y-1 p-6 rounded-2xl">

<div className="flex-1">
 <Image src= {Book} alt="" className='block mx-auto' width={80} height={80} />
    <h1 className="font-nunito font-bold mt-2 text-center text-base text-[#5D576B]">Resources specific to your university.
</h1>
</div>
   
   <div className="text-sm mt-6 font-normal text-center text-[#5D576B]">
No matter what level you are at in your education, we work hard to make sure we have something to offer everyone. Track your progress using our personalised dashboard!
   </div>

</div>



<div className="bg-[#F5F5F5] flex flex-col gap-y-1 p-6 rounded-2xl">

<div className="flex-1">
 <Image src= {Star} alt="" className='block mx-auto' width={80} height={80} />
    <h1 className="font-nunito font-bold mt-2 text-center text-base text-[#5D576B]">Something for everyone
</h1>
</div>
   
   <div className="text-sm mt-6 font-normal text-center text-[#5D576B]">
We want to create a community for students across the UK to learn together and share resources. If you are looking for someone to practice with, join one of our virtual practice sessions on Discord!
   </div>

</div>




<div className="bg-[#F5F5F5] flex flex-col gap-y-1 p-6 rounded-2xl">

<div className="flex-1">
 <Image src= {HandShake} alt="" className='block mx-auto' width={110} height={110} />
    <h1 className="font-nunito mt-2 font-bold text-center text-base text-[#5D576B]">Learn with friends</h1>
</div>
   
   <div className="text-sm mt-6 font-normal text-center text-[#5D576B]">
We work with Pharmacy students at each university across the UK to provide good-quality resources that will tailor your learning to your curriculum.
   </div>

</div>
       </div>
    </div>
  )
}
