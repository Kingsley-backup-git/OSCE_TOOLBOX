'use client'
import React, { useState } from 'react'
import { FaChevronUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
export default function Questions() {
const [questions, setQuestions] = useState([
{
    id:1,
    open : false,
    title : "What is OSCE Toolbox?",
    answer : "OSCE Toolbox is an interactive learning platform built to help pharmacy students prepare for OSCEs with realistic scenarios, mark schemes, videos, info capsules, and mentoring support. We're designed by students and pharmacists who've been through the process — so we know exactly what works."

},
{
        id:2,
    open : false,
    title : "Who is OSCE Toolbox for?",
    answer : "Our platform is tailored for UK pharmacy students at all stages of study, from first years wanting to build confidence to final years preparing for summative OSCEs. "
},
{
        id:3,
    open : false,
    title : "How does OSCE Toolbox work?",
    answer : "You sign up, choose a subscription, and get instant access to our growing bank of OSCE scenarios, mark schemes, clinical videos, and info capsules. You can search by topic, bookmark scenarios, and track your progress."
},
{
        id:4,
    open : false,
    title : "Are the resources evidence-based?",
    answer : "Yes! All our content is reviewed by qualified pharmacists and based on UK guidelines including NICE, BNF, and the GPhC standards."
},
{
        id:5,
    open : false,
    title : "How often is content reviewed?",
    answer : "Every scenario is reviewed at least every 6 months and new content is added regularly — including harder stations and prescribing-focused scenarios."
},
{
        id:6,
    open : false,
    title : "I'm new to OSCEs. Where should I start?",
    answer : "We recommend starting with our beginner-friendly scenarios and watching a few exemplar videos. Our info capsules are great for brushing up clinical knowledge before diving into the more complex stations."
},
{
        id:7,
    open : false,
    title : "Do you offer workshops or events?",
    answer : "Yes! We run online and in-person OSCE workshops, attend major pharmacy conferences, and host our own student conferences across the UK. Check our Instagram page for upcoming dates."
},
{
        id:8,
    open : false,
    title : "Can I give feedback or suggest features?",
    answer : ()=> {
        return <span>Absolutely — we LOVE feedback. Head to our <q className='underline text-[#005EB8] font-normal text-sm'>Hall of Fame</q> page to submit ideas and upvote others&apos;. If your suggestion gets implemented, you&apos;ll be featured as a contributor!</span>
    } 
},
{
        id:9,
    open : false,
    title : "What if I need help or have a question?",
    answer : "Just drop us a message via our contact form or DM us on Instagram @oscetoolbox. Our team is small but speedy — we'll get back to you within 24 hours.."
}
])

function OpenHandler(id:number) {
    const list = questions.map((item)=> (
      {...item, open : (item.id === id) ? !item.open : item.open}
    ))

    setQuestions(list)
}
  return (
    <div className='w-full'>
        <h1 className='font-nunito font-extrabold text-2xl italic text-center'>Questions You May Have - <span className='text-[#EF798A]'>Answered</span></h1>

        <div className='flex justify-center items-center mx-auto mt-8 flex-col gap-y-3 max-w-[850px] w-full'>
{questions.map((item)=> {
return <div key={item.id} className='bg-white rounded-3xl p-4 w-full'>

    <div className='flex items-center justify-between cursor-pointer' onClick={()=> OpenHandler(item.id)}>
<h1 className='text-[#5D576B] font-bold text-sm'> 
    {item.title}
</h1>

{item.open ?
<FaChevronUp  className='text-xl text-[#5D576B]' onClick={() => OpenHandler(item.id)}/>
:
    <FaAngleDown className='text-xl text-[#5D576B]' onClick={() => OpenHandler(item.id)}/> }
</div>
{item.open ?
<p className='bg-[#F5F5F6] rounded-xl p-4 text-sm mt-2'>
    {typeof item.answer === "function" ? item.answer() : item.answer}
</p> : null}
</div>
})}
        </div>
    </div>
  )
}
