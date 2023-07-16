'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion as m, AnimatePresence } from 'framer-motion'
import MoonCanvas from "./MoonCanvas"
import SunCanvas from "./SunCanvas"

function Hero() {
  const [day, setDay] = useState(null)
  const [sunRise, setSunRise] = useState(null)
  const [moonRise, setMoonRise] = useState(null)
  const [btn, setBtn] = useState(false)

  useEffect(()=>{
    const theme = localStorage.getItem('theme')
    if(theme === 'light'){
      setDay(true)
      setSunRise(true)
      setMoonRise(false)
    }
    else if(theme === 'dark'){
      setDay(false)
      setSunRise(false)
      setMoonRise(true)
    } else {
      localStorage.setItem('theme','dark')
      setDay(false)
      setSunRise(false)
      setMoonRise(true)
    }
  },[])
  
  
  useEffect(()=>{
    setBtn(true)
    if(day === true){
      setMoonRise(false)
      setTimeout(() => {
        setSunRise(true)
        localStorage.setItem('theme','light')
        setBtn(false)
      }, 3500);
    } else if(day === false) {
      setSunRise(false)
      setTimeout(() => {
        setMoonRise(true)
        localStorage.setItem('theme','dark')
        setBtn(false)
      }, 3500);
    } else{
      return
    }
    
  }, [day])


  return (
    <div className={`${sunRise ?'bg-neutral-600':'bg-neutral-800'} h-screen`}>
    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="bg-blue-300 h-[60vw] flex flex-col md:h-[50vw] overflow-hidden">

      <AnimatePresence initial={false}>
        {
          !day && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className="absolute bg-zinc-900 h-[60vw] md:h-[50vw] w-screen z-0 overflow-hidden">
            <Image src="/sky.jpg" alt="Sky" height={1000} width={500} className="w-screen" />
          </m.div>
        }
      </AnimatePresence>

      <div className="z-10 text-[3.5vw] m-[2vw] sm:text-[2.5vw] border-2 border-white block w-fit font-semibold rounded-md">

        <button className={`px-1.5 py-1 ${day && 'bg-white text-black'}`} onClick={() => setDay(true)} disabled={btn}>Day</button>

        <button className={`px-1.5 py-1 ${!day && 'bg-white text-black'}`} onClick={() => setDay(false)} disabled={btn}>Night</button>

      </div>

      <div className="z-10 px-[2vw] flex justify-around">
        <div className="flex-1">
        <div className="border-orange-700 border-l-[0.3vw] pl-[1vw] overflow-hidden" >
          <m.p initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }} className="text-[6vw]">
            Hi, I am <span className="text-orange-700 font-bold">Aditya!</span>
          </m.p>
          <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-[3vw] font-semibold text-neutral-500">
            MERN Stack Web developer
          </m.p>
        </div>
        <button className="border-2 border-white text-[3vw] md:text-[1.5vw] px-[2vw] md:px-[1vw] py-[1vw] md:py-[0.5vw] mt-[3.5vw] rounded-full hover:bg-white hover:text-zinc-950 font-bold">Download CV</button>
        </div>

        <div className="flex-1">
        <AnimatePresence>
          {
            sunRise=== true && (
            <m.div initial={{y:"150%"}} animate={{y:"-20%"}} exit={{y:"150%"}} transition={{duration: 3}}>
              <SunCanvas />
            </m.div>
            )
          }
        </AnimatePresence>
        <AnimatePresence>
        {
            moonRise=== true && (
            <m.div initial={{y:"150%"}} animate={{y:"-20%"}} exit={{y:"150%"}} transition={{duration: 3}}>
              <MoonCanvas />
            </m.div>
            )
          }
        </AnimatePresence>
      </div>
      </div>

    </m.div>
    </div>
  )
}

export default Hero
