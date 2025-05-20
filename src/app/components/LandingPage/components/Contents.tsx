import Image from 'next/image'
import React from 'react'
import Video1 from "@/assets/video1.png"
import { FaTiktok } from "react-icons/fa6";
import Video2 from "@/assets/Video2.png"
import Video3 from "@/assets/video3.png"
import Video4 from "@/assets/video4.png"
import Video5 from "@/assets/video5.png"
import Video6 from "@/assets/video6.png"
import Video7 from "@/assets/video8.png"
import Video8 from "@/assets/video9.png"
import WaveImg from "@/assets/wave.png"
import { FaInstagram } from "react-icons/fa";
import styles from "../styles/landingpage.module.css"
import Link from 'next/link'
export default function Contents() {
  return (
    <div className="mt-6 mb-10 pt-8 pb-20 relative">
    <div className={`overflow-auto ${styles.scrollables} flex flex-nowrap gap-6`}>
     
<Link className='cursor-pointer' href="https://www.instagram.com/reel/DHVbt7Dsl4-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video1} className='min-w-[200px] h-[350px]' width={300} height={300} alt='' />
    </Link>

    <Link className='cursor-pointer' href="https://www.instagram.com/reel/DIGVzZ-sCYO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video2} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>


    <Link className='cursor-pointer' href="https://www.instagram.com/reel/DIBLNv1s78j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video3} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>



    <Link className='cursor-pointer' href="https://www.instagram.com/reel/DHvK3gNM1Sr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video4} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>


    <Link className='cursor-pointer' href="https://www.instagram.com/reel/DHYAEmNMtZy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video5} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>



    <Link className='cursor-pointer' href="https://www.instagram.com/reel/DHnbTuBMssk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video6} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>



     <Link className='cursor-pointer' href="https://www.instagram.com/reel/DHF-4X-MwoS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video7} className='min-w-[200px] h-[350px]' width={200} height={200} alt='' />
    </Link>

      <Link className='cursor-pointer' href="https://www.instagram.com/reel/DGNc1wTMulv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
    <Image src={Video8} className='min-w-[200px] h-[350px]' width={300} height={200} alt='' />
    </Link>



 </div>

 <div className="mt-10 flex flex-col items-center justify-center">
<h1 className='font-bold text-[#5D576B] text-base text-center'>Follow Us</h1>

<div className='flex gap-x-6 mt-6'>

    <div className="bg-[#F6F5F6] flex gap-x-2 items-center rounded-2xl py-3 px-4">
<FaTiktok className="text-[#121331] text-lg"/>
<h1 className="text-[#121331] font-normal text-sm">Tiktok</h1>
    </div>


     <div className="bg-[#F6F5F6] flex gap-x-2 items-center rounded-2xl py-3 px-4">
<FaInstagram className="text-[#121331] text-lg"/>
<h1 className="text-[#121331] font-normal text-sm">Instagram</h1>
    </div>
    </div>
 </div>

 <Image src={WaveImg} height={150} width={150} className='absolute bottom-20 left-8' alt='' />
  </div>
  )
}
