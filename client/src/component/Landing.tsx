import React, { useState } from 'react'
import Header from './Header';
import Features from './Features';
import Marquee from "react-fast-marquee";

function Landing() {
    const [name , setName] = useState(0);

  return (
    <div className='bg-white dark:bg-gray-900 text-black dark:text-white w-screen h-screen'>
      <div className='flex flex-col gap-16'>
            <Header></Header>
        <div className='flex flex-col gap-5'>
            <h1 className='font-mono font-bold flex items-center justify-center text-4xl sm:text-5xl'>Your Private Video Hangout Spot</h1>
            <p className='font-mono max-w-3xl mx-auto mb-12 text-base sm:text-lg text-gray-800 flex items-center justify-center sm:w-[500px] lg:w-full dark:text-white'>Talksy lets you anonymous create private video rooms for your friends.</p>
       </div>
      </div>
      <div className='flex items-center justify-center '>
        <button className="font-mono font-bold border-2 border-gray-600 py-3 w-40 hover:bg-black hover:text-white transition-colors duration-300 delay-100">
           Get Started
    </button>
      </div>
      <div className='mt-[20px] lg:mt-[80px] cursor-pointer'>
        <Marquee className='' pauseOnHover={true}>
        <Features title={"No Signup or Login"} description={"Join or host a call instantly — no account needed, ever."}/>
        <Features title={"Instant Video Rooms"} description={"Start a high-quality video call with just one click — no setup needed."}/>
        <Features title={"Private by Default"} description={"Rooms are private and accessible only via your shared link."}/>
        <Features title={"Built-in Chat"} description={"Text chat alongside your video — perfect for links, notes, or quiet messaging."}/>
        <Features title={"Screen Sharing"} description={"Present your screen in real-time. "}/>
        <Features title={" No Installs, Totally Free"} description={" No app to download. Works right in your browser — completely free."}/>
        </Marquee>
        
      </div>
     
    </div>
  )
}

export default Landing



 //className='grid grid-cols-3 gap-5 mt-[20px] lg:mt-[30px] w-fit mx-auto'