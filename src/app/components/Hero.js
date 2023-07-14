'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion as m, AnimatePresence } from "framer-motion"


function Hero() {
  const [day, setDay] = useState(false)
  const [sunRise, setSunRise] = useState(false)
  const [moonRise, setMoonRise] = useState(true)
  const [btn, setBtn] = useState(false)


  useEffect(() => {

    setBtn(true)
    if (day) {
      setMoonRise(false)
      console.log("moon f");
      setTimeout(() => {
        setSunRise(true)
        console.log("sun true");
        setBtn(false)
      }, 6000)

    }
    else if (!day) {
      setSunRise(false)
      console.log("sun f");
      setTimeout(() => {
        console.log("moon true");
        setMoonRise(true)
        setBtn(false)
      }, 6000)
    }
  }, [day])


  return (
    <div className="" >

      {/* day/night background */}
      <div className="bg-blue-300 h-[60vmin] w-[99.99vmin] m-auto -z-50 overflow-hidden">
        <AnimatePresence initial={false}>
          {
            !day && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 10 }} className="bg-blue-950 h-[60vw] overflow-hidden -z-50"><Image src="/sky.jpg" height={1000} width={1000} alt="sky" className="w-screen" /></m.div>
          }
        </AnimatePresence>
      </div>


      <div className="absolute top-20 h-[70vmin]">

        {/* day/night button */}
        <div className="flex w-fit rounded-full overflow-hidden mx-5 cursor-pointer">
          <button disabled={btn} className={`${day ? 'bg-orange-700' : 'bg-black'} px-3 py-1`} onClick={() => setDay(true)}>Day</button>
          <button disabled={btn} className={`${!day ? 'bg-orange-700' : 'bg-black'} px-3 py-1`} onClick={() => setDay(false)}>Night</button>
        </div>


        {/* sun/moon rise */}
        <div className="absolute top-10 w-screen z-0">
          <AnimatePresence initial={false}>
            {
              moonRise && <m.div initial={{ y: 200 }} animate={{ y: 0 }} exit={{ y: 200 }} transition={{ duration: 4 }} className="bg-zinc-200 h-16 w-16 rounded-full m-auto"></m.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {
              sunRise && <m.div relative className="bg-yellow-300 h-16 w-16 rounded-full m-auto" initial={{ y: 200 }} animate={{ y: 0 }} exit={{ y: 200 }} transition={{ duration: 4 }}></m.div>
            }
          </AnimatePresence>

        </div>


        <div className="w-screen">
          <Image src="/mount.png" alt="Mountain" height={1000} width={2000} className="relative -bottom-[11vmin] w-[99.99vmin] m-auto" />

          <AnimatePresence>
            {day && <m.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }} transition={{ duration: 1 }} className="z-[15] w-[100vw] bg-black flex justify-center">
              
              <Image src="/tree.png" alt="Mountain" height={1000} width={2000} className="absolute bottom-0 w-[99.99vmin]" />
            </m.div>}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {!day && <m.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }} transition={{ duration: 1 }} className="z-[15] w-[100vw] flex justify-center">
              
              <Image src="/tree_n.png" alt="Mountain" height={1000} width={2000} className="absolute bottom-0 w-[99.99vmin] m-auto" />
            </m.div>}
          </AnimatePresence>
        </div>


      </div>



    </div>
  )
}

export default Hero
