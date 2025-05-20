import Image from 'next/image'
import React from 'react'
import TepeImg from "@/assets/icons/tepeImg.png"
import styles from "../styles/landingpage.module.css"
import Button from '../../ui/Button'
import { FaArrowRight } from 'react-icons/fa6'
export default function Count() {
  return (
    <div className='bg-white rounded-4xl py-24 my-8 max-w-[1000px] block mx-auto w-full'>
<h1 className="font-nunito font-extrabold text-[#121331] text-2xl text-center">We have up to</h1>


<div className='mt-8 max-w-[900px] w-full mx-auto items-center flex py-6'>
<div className='bg-white max-w-[180px] w-full transform -rotate-5 border-[1.5px] border-[#5D576B14] rounded-md p-3' style={{boxShadow:"0px 15.1px 28.7px 0px #2317390D"}}>
    <div className='flex items-center justify-between'>
<h1 className='text-[#121331] font-nunito font-normal text-[0.563rem]'>6 months ago</h1>
<Image src={TepeImg} width={30} height={30} className='' alt='' />
    </div>


    <p className='font-bold text-[#005EB8] text-xs py-3'>Medication Counselling 2</p>

<div className='max-w-fit w-full block ms-auto '>
    <span className='text-[10px] text-[#EF798A] font-nunito font-bold inline'>FREE</span> 🤖
</div>
</div>



<div className='flex-1 flex gap-x-3 items-center justify-center'>
<div className={`border-1 h-[200px] border-[#5D576B29] rounded-2xl px-10 flex items-center justify-center ${styles.box_edge}`} style={{backgroundImage: "linear-gradient(180deg, white 50%, #F1F9FA 50%)"}}>
<h1 className='text-[#121331] font-nunito font-semibold text-8xl'>2</h1>
</div>


<div className={`border-1 h-[200px] border-[#5D576B29] rounded-2xl px-10 flex items-center justify-center ${styles.box_edge}`} style={{backgroundImage: "linear-gradient(180deg, white 50%, #F1F9FA 50%)"}}>
<h1 className='text-[#121331] font-nunito font-semibold text-8xl'>1</h1>
</div>



<div className={`${styles.box_edge} border-1 h-[200px] border-[#5D576B29] rounded-2xl px-10 flex items-center justify-center`} style={{backgroundImage: "linear-gradient(180deg, white 50%, #F1F9FA 50%)"}}>
<h1 className='text-[#121331] font-nunito font-semibold text-8xl'>0</h1>
</div>
</div>




<div className='bg-white max-w-[180px] w-full transform -rotate-5 border-[1.5px] border-[#5D576B14] rounded-md p-3' style={{boxShadow:"0px 15.1px 28.7px 0px #2317390D"}}>
    <div className='flex items-center justify-between'>
<h1 className='text-[#121331] font-nunito font-normal text-[0.563rem]'>6 months ago</h1>
<Image src={TepeImg} width={30} height={30} className='' alt='' />
    </div>


    <p className='font-bold text-[#005EB8] text-xs py-3'>Medication Counselling 2</p>

<div className='max-w-fit w-full block ms-auto '>
    <span className='text-[10px] text-[#EF798A] font-nunito font-bold inline'>FREE</span> 🤖
</div>
</div>
</div>


<h1 className='mt-2 font-nunito font-extrabold text-2xl mx-auto text-center max-w-[340px] w-full'>OSCE <span className='text-[#EF798A]'>Scenarios</span> to Master Every Exam Station.</h1>
    
    <p className='text-[#5D576B] text-center mt-1 font-normal text-sm'>Start Practicing Today - Don&apos;t Cram Last Minute!</p>


         <Button className='text-[#121331]  mx-auto bg-[#FFFFFF] cursor-pointer font-bold text-base border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-5 items-center' 
                style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Start Practicing</h1> <FaArrowRight /></Button>
    </div>
  )
}
