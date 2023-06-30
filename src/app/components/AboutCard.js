'use client'
import Image from "next/image"
import {motion} from 'framer-motion'


function AboutCard({title, img, color}) {
  return (
    
    <div className="w-36 h-44 flex items-center justify-around border-[1px] flex-col rounded-lg m-5 mt-10 lg:mt-14 lg:mx-14" style={{borderColor:`${color}`,boxShadow:"0px 0px 20px 6px #555555",background:"linear-gradient(to top right,#222222,black)"}}
    >
      <Image src={img} alt="image" height={5} width={5} className="h-10 w-10"/>
      <motion.p initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.5, delay:1}} className="text-center font-bold text-lg" style={{color:`${color}`}}>{title}</motion.p>
    </div>
    
  )
}

export default AboutCard
