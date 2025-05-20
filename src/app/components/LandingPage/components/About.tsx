'use client'
import React,{useRef, useState} from 'react'
import { IoIosPlay } from "react-icons/io";
export default function About() {
  const videoref = useRef<HTMLVideoElement>(null)
const [isPlaying, setIsPlaying] = useState(false)
  function togglePlay () {
    if(isPlaying) {

 videoref?.current?.pause()
      
     
    } else {
      videoref?.current?.play()
    }

    setIsPlaying(val => !val)
  }
  return (
    <div className='mt-[150px]'>
      <div onClick={togglePlay} className='block mx-auto max-w-[850px] h-auto relative'>
   <video ref = {videoref}  controls = {false} className=' rounded-2xl w-full h-full'>
    <source src ={'https://res.cloudinary.com/ddc9psajv/video/upload/v1747555910/oscetoolboxintro_c6fxse.mp4'} />
    video not supported
   </video>
   <div className='absolute top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] flex items-center justify-center'>
  {!isPlaying ? <IoIosPlay className='bg-white p-3 text-6xl rounded-full'/> : ""}
   </div>
 
   </div>
   </div>
  )
}
