import Link from "next/link"
import { useContext, useState } from "react"
import ColorContext from "../ContextAPI/ColorContext"
import ActiveLinkContext from "../ContextAPI/ActiveLinks"
import { RxCross1 } from "react-icons/rx"
import { FiMenu } from "react-icons/fi"
import { navLinks } from "@/app/ContextAPI/Constants"
import {motion as m, AnimatePresence} from 'framer-motion'

function Navbar() {

    const mycolor = useContext(ColorContext)
    const [color] = mycolor 

    const activeLink = useContext(ActiveLinkContext)
    const [active, setActive] = activeLink
    
    const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16" style={{backgroundImage:"linear-gradient(black,#222222)"}}>

    <Link href="/" onClick={()=>setActive("/")}>
      <h1 className="space-x-2 italic font-extrabold flex flex-col md:text-2xl md:flex-row underline min-w-[70px] -space-y-2 md:space-y-0">
        <m.span initial={{x:-40,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5}} style={{color:`${color}`}}>Aditya</m.span>
        <m.span initial={{x:40,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5,delay:1.5}} className="text-end">Aryan</m.span>
      </h1>
      </Link>

      <div className="flex flex-col md:hidden">
        <div onClick={() => setToggleNav(!toggleNav)} className="cursor-pointer my-3">
          {
            toggleNav ? <RxCross1 size={30} /> : <FiMenu size={30} />
          }
        </div>
        
        <AnimatePresence>
        {toggleNav && 
        <m.ul 
        className="absolute right-0 top-14 flex flex-col rounded-lg overflow-hidden z-10"
         style={{ background: "linear-gradient(to right, #222222, black)" }}
         initial={{x:120}}
         animate={{x:0}} 
         exit={{x:140}} 
         transition={{duration:0.3}}>

          {navLinks.map((e) => {
            return (
              
                <Link className="py-3 pl-5 pr-11 text-xl hover:bg-zinc-800" href={e.link} key={e.link}  onClick={()=>setActive(e.link)} style={{color:`${active === e.link ? color : "white"}`}}>{e.title}</Link>
              
            )
          })}

        </m.ul>}
        </AnimatePresence>
        
      </div>
      <div className="hidden md:flex">
      {navLinks.map((e) => {
            return (
              
                <Link className="py-3 px-4 text-xl hover:bg-zinc-800 border-b-2" href={e.link} key={e.link}  onClick={()=>setActive(e.link)} style={active === e.link ? {color:`${color}`,borderBottomColor: `${color}`}:{border:"none",color:"white"}}>{e.title}</Link>
              
            )
          })}
      </div>
    </nav>

  )
}

export default Navbar
