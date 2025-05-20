import React from 'react'
import Testimony1 from "@/assets/Testimony1.png"
import Testimony2 from "@/assets/Testimony5.png"
import Testimony3 from "@/assets/Testimony3.png"
import Testimony4 from "@/assets/Testimony4.png"
import Testimony5 from "@/assets/Testimony6.png"
import Image from 'next/image'
export default function Testimonies() {
  return (
    <div className='pt-24 mt-4 pb-24 mb-4'>
        <h1 className='font-nunito font-extrabold text-2xl text-center'><span className='text-[#31AFB4]'>Trusted</span> by 1000+ Pharmacy Students</h1>
        <p className='max-w-[500px] mx-auto block text-center mt-1'>Don&apos;t just take our word for it—thousands of students already use OSCE Toolbox to sharpen their clinical skills.</p>
   
   <div className='grid grid-cols-3 gap-6 max-w-[1000px] mx-auto mt-8'>

    <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony1} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Neha Johnson</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
            First, I used it just by myself; I would read the patients description, then move onto to ask all relevant questions and mark what I did well and what I could improve on. Then I used the toolbox with my peers, where one of us pretended to be the patient and one the pharmacist, which was quite useful.
        </div>
        </div>



         <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony2} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Alicja Puchalska</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
           I would recommend it as the subscription price is very reasonable with few subscription options, you can cancel it any time, and you have a lot of scenarios to practice on. It is great for solo practice as well as the group practice.
        </div>
        </div>



         <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony3} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Ibrar Chaudhry</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
          I loved the analytical checklist. This had allowed me to see where the marks were available and the main bits that i was missing throughout the OSCE.
        </div>
        </div>



          <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony4} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Vikesh Kumar Sidhar</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
         The question a day was the best feature. It was exactly like one of the final exams I had in final year. I would answer the question everyday and take a photo of it. At the end of each month I would go through all the questions I had collected and redid them, any that I got wrong I read the reasoning for the correct answer and highlighted that topic as an area for me to focus revision on.
        </div>
        </div>



          <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony2} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Alicja Puchalska</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
         It directed me towards the more effective preparation for osce as I had access to a lot of scenarios rather than about 5 from university and that&apos;s it. I was very motivated to prepare myself for the most challenging scenarios.
        </div>
        </div>



          <div className='bg-[#F5F5F5] p-6 rounded-2xl'>
        <div className='flex items-center gap-x-4'>
<Image src = {Testimony5} className='' alt='' width={50} height={50} />

<h1 className='font-bold text-sm text-[#5D576B]'>Maya Dawood</h1>
        </div>

        <div className='text-[#5D576B] font-normal text-sm mt-4'>
         The most useful features are the checklist on the mark scheme with the red flag sections in particular. The checklist ensures I cover all key points, while the red flag explanations help me understand why it&apos;s so necessary to mention these to the patient.
        </div>
        </div>

   </div>
   
    </div>
  )
}
