import Link from 'next/link'
import React from 'react'
import Button from '../../ui/Button'
import { FaArrowRight } from 'react-icons/fa6'
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import Image from 'next/image';
import DonationImg from "@/assets/icons/donation.png"
export default function Footer() {
  return (
    <div className="py-16 px-10">
<div className='flex flex-row items-stretch gap-x-10'>

    <div className='flex flex-col gap-y-6'>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Login</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Create Account</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Contact</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>About Us</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>FAQs</Link>

    </div>

    <div className='flex flex-col gap-y-6'>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Dashboard</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Scenerios</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Info Capsules</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Videos</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Discord</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Hall of Fame</Link>

    </div>






    <div className='flex flex-col gap-y-6'>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Pricing</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Our Friends</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Work with us</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Terms and Conditions</Link>
<Link href="" className='text-[#5D576B] text-sm font-normal'>Refund Policy</Link>


    </div>




    <div className='gap-y-6 flex-1 self-center'>
<h1 className="font-bold font-nunito text-[#121331] text-base text-end">Subscribe to our newsletter</h1>
<p className='text-[#5D576B] text-sm font-normal mt-1 text-end'>There are always new and exciting things from us.</p>
<Button className='text-[white]  ms-auto bg-[#31AFB4] cursor-pointer font-bold text-xs  py-3 px-4 flex gap-x-4 rounded-2xl mt-6 items-center' ><h1>Start Practicing</h1> <FaArrowRight /></Button>

    </div>

</div>


<div className='border-t-1 border-[#5D576B29] pt-6 mt-16 flex gap-4 iitems-center'>
<h1 className='text-[#5D576B] font-normal text-sm flex-1'>©2024 OSCE Toolbox. All rights reserved. <br /> CRN: 15724937</h1>


<div className='flex items-center gap-4'>
<IoLogoTiktok className="text-[#121331] text-4xl bg-[#F6F5F6] p-2 rounded-lg"/>

<FaInstagram className="text-[#121331] text-4xl bg-[#F6F5F6] p-2 rounded-lg"/>

<FaXTwitter className="text-[#121331] text-4xl bg-[#F6F5F6] p-2 rounded-lg"/>

<RiFacebookLine className="text-[#121331] text-4xl bg-[#F6F5F6] p-2 rounded-lg"/>
</div>
</div>


<div className='flex items-center justify-between mt-16 gap-4'>
<div className="flex items-center gap-x-6">
    <Link href="" className='text-[#5D576B] font-normal text-xs'>Work with Us</Link>
<Link href="" className='text-[#5D576B] font-normal text-xs'>Privacy Policy</Link>
<Link href="" className='text-[#5D576B] font-normal text-xs'>Disclaimer</Link>
</div>


<Link href="" className='flex items-center'>
    <Image src={DonationImg} className='' alt='' width={20} height={20} />
    <h1 className='font-bold text-xs text-[#5D576B]'>Make a Donation</h1>
</Link>
</div>
    </div>
  )
}
