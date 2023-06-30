'use client'
import {motion as m} from 'framer-motion'
import { useContext } from 'react'
import ColorContext from '../ContextAPI/ColorContext'


function Contact() {
    const mycolor = useContext(ColorContext)
    const [color, setColor] = mycolor
  return (
    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='bg-zinc-800 h-72 w-56 m-auto mt-20 rounded-lg flex flex-col items-center justify-evenly'>

      <div className='flex space-x-2 text-lg'><p className='font-bold' style={{color:`${color}`}}>Name:</p><p className='font-semibold'>Aditya Aryan</p></div>

      <div className='flex space-x-2 text-lg'><p className='font-bold' style={{color:`${color}`}}>Email:</p><p className='font-semibold break-words max-w-[8rem]'>adityaaryan987654321@gmail.com</p></div>

      <div className='flex space-x-2 text-lg'><p className='font-bold' style={{color:`${color}`}}>Phone:</p><p className='font-semibold break-words'>9693967364</p></div>

    </m.div>
  )
}

export default Contact
