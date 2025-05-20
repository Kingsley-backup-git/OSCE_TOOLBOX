import React from 'react'
import { GrSubtractCircle } from "react-icons/gr";
import { GrCircleQuestion } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import WhiteLogo from "@/assets/logos/LogoWhite.png"
import Image from 'next/image';
import styles from "../styles/landingpage.module.css"
import OctBorder from "@/assets/Oct_border.png"
import Button from '../../ui/Button';
import { FaArrowRight } from 'react-icons/fa6';
export default function Why() {
  return (
    <div className='w-full'>
        <div className='max-w-[550px] block mx-auto mt-5'>
    <h1 className='text-[#121331]  mx-auto block text-2xl font-extrabold font-nunito italic text-center'><span className='text-[#EF798A]'>Why</span> Choose OSCE Toolbox?</h1>
    <p className='text-sm mt-1 text-[#5D576B] text-center '>Compare our comprehensive pharmacy exam preparation solution with alternatives and see why students prefer OSCE Toolbox for superior results.</p>
    </div>

    <div className='grid mt-12 grid-cols-5 gap-4 auto-rows-[500px] bg-white p-4 border-[#5D576B1C] border-2 rounded-2xl'>

<div className='rounded-2xl flex flex-col gap-y-4 items-end p-4'>
    <div className='py-12'></div>
<h1 className='text-[#5D576B] font-bold text-base flex-1'>Pharmacist Reviewed</h1>
<h1 className='text-[#5D576B] font-bold text-base flex-1'>Time Saving</h1>
<h1 className='text-[#5D576B] font-bold text-base flex-1'>Model Answers</h1>
<h1 className='text-[#5D576B] font-bold text-base flex-1'>Up-to-date</h1>
<h1 className='text-[#5D576B] font-bold text-base flex-1'>Re-sit Cover</h1>
<h1 className='text-[#5D576B] font-bold text-base'>Cool Octopus Mascot</h1>
</div>



<div className={`rounded-2xl flex gap-y-4 flex-col bg-white relative p-1 pb-4 ${styles.gradient_border}`}>
    <Image src={OctBorder} className='absolute -top-7 -right-5.5' width={130} height={130} alt='' />
    <div className='py-10 bg-[#31AFB4] rounded-2xl'>
<Image src={WhiteLogo} className='block mx-auto' width={130} height={130} alt='' />

</div>
<div className='flex flex-col flex-1 items-center'>
    <div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>

  <div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>


  <div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>

<div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>

</div>

  <div className=''>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>

</div>
</div>






<div className='rounded-2xl flex gap-y-4 flex-col  p-4' style={{backgroundImage : "linear-gradient(180deg, #F6F5F6, #F6F5F600)"}}>
<h1 className='py-10 text-[#5D576B] text-balance max-w-[170px] w-full mx-auto font-bold text-base text-center'>OSCE Books</h1>

<div className='flex flex-col flex-1 items-center'>
    <div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>

  <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>


  <div className='flex-1'>
<FaCheckCircle className='text-[#31AFB4] text-2xl'/>
    </div>

<div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>

</div>

  <div className=''>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

</div>
</div>







<div className='rounded-2xl flex gap-y-2 flex-col  p-4' style={{backgroundImage : "linear-gradient(180deg, #F6F5F6, #F6F5F600)"}}>
<h1 className='py-8 text-[#5D576B] text-balance max-w-[170px] w-full mx-auto font-bold text-base text-center'>Adapting other scenarios</h1>

<div className='flex flex-col flex-1 items-center'>
    <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

  <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>


  <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

<div className='flex-1'>
<GrCircleQuestion className='text-2xl text-[#898493]'/>

</div>

  <div className=''>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

</div>
</div>




<div className='rounded-2xl flex gap-y-2 flex-col  p-4' style={{backgroundImage : "linear-gradient(180deg, #F6F5F6, #F6F5F600)"}}>
<h1 className='py-8 text-[#5D576B]  font-bold text-base max-w-[170px] w-full mx-auto text-center'>Making your own scenarios</h1>

<div className='flex flex-col flex-1 items-center'>
    <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

  <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>


  <div className='flex-1'>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

<div className='flex-1'>
<GrCircleQuestion className='text-2xl text-[#898493]'/>

</div>

  <div className=''>
<GrSubtractCircle className='text-2xl text-[#898493]'/>
    </div>

</div>
</div>
    </div>



         <Button className='text-[#121331]  mx-auto bg-[#FFFFFF] cursor-pointer font-bold text-base border-[2px] border-[#121331] py-2 px-3 flex gap-x-4 rounded-2xl mt-14 items-center' 
                style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Start Practicing</h1> <FaArrowRight /></Button>
    </div>
  )
}
