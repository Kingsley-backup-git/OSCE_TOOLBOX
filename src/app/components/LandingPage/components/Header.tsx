'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../../../public/OSCTOOLBOX LOGO.jpg"
import TextInput from '@/app/components/ui/TextInput'
import { LuSearch } from "react-icons/lu";
import Icon from "@/assets/icons/octicon_goal.jpg"
import Icon2 from "@/assets/icons/Group.png"
import styles from "../styles/landingpage.module.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from '@/app/components/ui/Button';
import Link from 'next/link';
import dropDownImg from "@/assets/icons/dropdownImg.png"
import dropDownImg2 from "@/assets/icons/bulbDropdown.png"
import dropDownImg3 from "@/assets/icons/videoDropdown.png"
import dropDownImg4 from "@/assets/icons/articleDropdown.png"
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
const [mode, setMode] = useState("light")

  function openHandler() {
    setIsOpen((val)=> !val)
  }
  function ToggleMode() {
    if(mode === "light") {
setMode("dark")
    } else {
      setMode("light")
    }
  }
  return (
    <div className='fixed top-[50px] max-w-[1400px] mx-auto left-0 z-[9999] right-0 bg-white w-full rounded-full  py-4 px-10 flex items-center' style={{boxShadow:"0px 0px 10px 0px #0000001A"}}>
      <div className='flex-1 flex items-center gap-x-5'>
<Image src = {Logo} alt='logo' className='' width={200} height={200} />

<TextInput  className='outline-0 border-0 px-1 py-1 w-full text-xs placeholder:text-[#757575] text-[#757575] placeholder:text-xs' placeholder='Search resource libary...' parentClassName='flex items-center gap-x-2 bg-[#D9D9D94D] max-w-[390px] w-full rounded-full py-[10px] px-[14px]' name ="">
<LuSearch className='text-2xl text-gray-500'/>
</TextInput>
      </div>

      <div className='flex-1 flex items-center gap-x-6 justify-end'>
<Link href="" className={`flex items-center gap-x-1  ${styles.gradient_button}`}>
  <Image src={Icon} className='w-[16px] h-[16px]' alt="" width={100} height={100} />
<h1 className='text-[#5D576B] font-normal text-sm'>Career Hub</h1>
</Link>


<Link href="" className={`flex items-center gap-x-1 `}>
  <Image src={Icon2} className='w-[20px] h-[20px]' alt="" width={100} height={100} />
<h1 className='text-[#5D576B] font-normal text-sm'>Pricing</h1>
</Link>


<div className={`relative`}>
 
 <div className='flex items-center gap-x-1 cursor-pointer' onClick={openHandler}>
<h1 className='text-[#5D576B] font-normal text-sm'>Browse</h1>
{isOpen ? <IoIosArrowDown  className="text-base"/>
:
<IoIosArrowUp  className="text-base"/> }
 </div>


<div className={`${isOpen ? styles.open : styles.close} absolute top-9 -left-4 border-2 w-[170px] transition-all duration-400 ease-in-out border-white bg-white flex flex-col gap-5 rounded-2xl p-4`} style={{boxShadow: "0px 4px 29px 0px #5D576B26"}}>
<Link href="" className='flex gap-4 items-center'>
<Image src={dropDownImg} width={20} height={20} className='' alt='' />
<h1 className='text-[#5D576B] text-sm font-normal'>Scenerios</h1>
</Link>

<Link href="" className='flex gap-4 items-center'>
<Image src={dropDownImg2} width={20} height={20} className='' alt='' />
<h1 className='text-[#5D576B] text-sm font-normal'>Info Capsules</h1>
</Link>



<Link href="" className='flex gap-4 items-center'>
<Image src={dropDownImg3} width={20} height={20} className='' alt='' />
<h1 className='text-[#5D576B] text-sm font-normal'>Videos</h1>
</Link>


<Link href="" className='flex gap-4 items-center'>
<Image src={dropDownImg4} width={20} height={20} className='' alt='' />
<h1 className='text-[#5D576B] text-sm font-normal'>Articles</h1>
</Link>
</div> 
</div>

<Button className="bg-[#EF798A] py-2 px-4 rounded-2xl text-white font-bold text-sm">Login</Button>



<div onClick={ToggleMode} className='w-[60px] cursor-pointer h-[35px] bg-[#5D576B1F] rounded-4xl p-1'>
<div className={`w-[28px] ${mode === "light" ? styles.slide_right : styles.slide_left} h-[28px] flex justify-center items-center relative bg-white rounded-full`} style={{boxShadow:"0px 2px 2px #DEDDDF"}}>
<IoSunny className={`absolute transition-opacity duration-300 ease-in-out text-[#EF798A] text-xl ${mode === "light" ? "opacity-100" : "opacity-0"}`}/>
<IoMoonSharp className={`absolute text-xl text-[#5D576B63] transition-opacity duration-300 ease-in-out ${mode === "dark" ? "opacity-100" : "opacity-0"}`}/>
</div>
</div>
      </div>

    </div>
  )
}
