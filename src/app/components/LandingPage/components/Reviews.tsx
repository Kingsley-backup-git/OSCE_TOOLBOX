import Image from 'next/image'
import React from 'react'
import UserIcon from "@/assets/icons/Objects.jpg"
import Button from '@/app/components/ui/Button'
import { FaArrowRight } from "react-icons/fa6";
import BackgroundImg from "../../../../../public/Background.png"
import styles from "../styles/landingpage.module.css"

type ReviewItem = {
  comments: string | (() => React.ReactNode)
}
export default function Reviews() {
    const reviews = [
{
    comments: "I'm so happy that there's something like this resource out there for pharmacy students! There's always been nurse and doctor OSCE practices but I could never find pharmacy.  So this is so so nice to see"
},
{
    comments: "Hey, I just wanted to say thank you for making the OSCE Toolbox. I always found myself feeling underprepared, and I used to wing my pharmacy OSCEs. Keep up the good work, guys! You guys are gonna take over the pharmacy OSCE game 💪"
},

{
    comments: "...the resources I did look at were really good - wish I had something like that when I was back in Uni! I think it’s a great resource and seems very high quality 😊 great work!"
},
{
    comments:()=> {
        return <div>Thank you vry much OSCE Toolbox! <br /> You&apos;re a life saver 🤗</div> 
    } 
},

{
    comments: () =>  {
return <div>Thank you so much for creating this programme 👏 <br />
I have passed my OSCEs and got a first 🥳 <br />
I&apos;m so thankful for this resource and I would highly recommend it to all my lower year friends ❤️</div>
    }
},

{
    comments: "...it's given me confidence, appreciate all the help you guys do. I recommended you to my Uni where students can practice for their OSCEs."
},
{
    comments: "I saw all the scenarios available and i love how it has cheatsheets, markschemes and literally practising them helps me learn where i need to focus on for revision and it helps me know exactly what to mention in my osces! ur a life saver 💗💗💗🥰"
},

{
    comments : "I use the scenarios to practice and I also use capsules for information and learning. I use the AI to practice scenarios that require a patient to speak to and its very helpful."
}, 
{
comments : "You're the only one available that offers this type of thing."
}

    ]

   const isEven = function positionHandler(index:number) {
        if(index % 2 === 0) {
            return true
        } else {
            return false
        }
    }
  return (
    <div className='grid grid-cols-12 gap-x-4 auto-cols-max   h-[600px] z-[99]    mt-[150px] rounded-2xl'>
<div className='col-span-7  ps-10 relative'>
    <h1 className="text-5xl text-white text-balance max-w-[550px] w-full font-extrabold italic font-nunito mt-12">Access <span className="text-[#121331]">free</span> scenarios with mark schemes.</h1>
 <Image src = {BackgroundImg} width={900} height={900} className='absolute rounded-2xl top-0 left-0 max-w-[900px] w-full h-auto z-[-9999]' alt = "" />
    <p className="mt-3 text-lg font-normal text-white">Each scenario has been reviewed by a doctor.</p>

    <Button className='text-[#121331] bg-[#FFFFFF] cursor-pointer font-bold text-lg border-[2px] border-[#121331] py-3 px-4 flex gap-x-4 rounded-2xl mt-5 items-center' 
    style = {{boxShadow : "5px 5px 0px 0px #EF798A"}}><h1>Start Practicing</h1> <FaArrowRight /></Button>
</div>

<div className='col-span-4 py-6  flex flex-col overflow-y-auto gap-y-4'>
<h1 className="text-[#5D576B] italic font-normal text-sm">Actual reviews</h1>
<div className='relative top-[10px]'>
    <div className={`${styles.fade} ${styles.top_fade}`}></div>
</div>

<div className='flex-1 overflow-y-hidden overscroll-contain '>
<div className={`${styles.reviews} flex flex-col gap-y-6`}>


{reviews.map((item:ReviewItem, index)=> {
    return <div key={index} className="flex gap-x-4 items-center">
{isEven(index) && <Image src = {UserIcon} alt = "user" width={30} height={30} /> }

<h1 className='bg-[#F5F5F5] text-[#5D576B] font-normal text-sm p-4 rounded-2xl'>
     {typeof item.comments === "function" ? item.comments() : item.comments}
</h1>

{!isEven(index) && <Image src = {UserIcon} alt = "user" width={30} height={30} /> }
    </div>
})}
</div>
</div>
<div className='relative top-[10px]'>
    <div className={`${styles.fade} ${styles.bottom_fade}`}></div>
</div>
</div>
    </div>
  )
}
