'use client'
import {motion as m, AnimatePresence} from 'framer-motion'
import { navLinks } from '@/const'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {CgMenuRightAlt} from 'react-icons/cg'
import {RxCross1} from 'react-icons/rx'
import { useState } from 'react'




function Navbar() {
    const pathname = usePathname()

    const [toggleSidebar, setSidebar] = useState(false)

  return (
    <m.nav initial={{y:"-100%"}} animate={{y:0}} transition={{duration:2}} className='pl-10 shadow-md shadow-zinc-700 flex items-center justify-around z-50' style={{backgroundImage:"linear-gradient(30deg, black, #433)"}}>

      <h1 className="lg:text-2xl font-extrabold text-zinc-200 flex-1"><span className='text-orange-700'>Aditya</span> Aryan</h1>


    <ul className='hidden lg:flex'>

        {
            navLinks.map((e,i)=>{
                const isactive = pathname.startsWith(e.link)

                return <Link key={i} href={e.link} className={`px-6 py-3 text-xl hover:bg-zinc-700 border-orange-700 ${pathname === e.link ? 'text-orange-700 border-b-2':'text-white border-none'}`} >{e.title}</Link>
            })
        }

    </ul>

    <div className='lg:hidden'>

        <div className='mx-10 my-3 text-3xl cursor-pointer' onClick={()=>setSidebar(!toggleSidebar)}>
            {toggleSidebar ? <RxCross1 /> :<CgMenuRightAlt />}
        </div>

        <AnimatePresence>
        {toggleSidebar && <m.ul initial={{y:"-100%"}} animate={{y:0}} exit={{y:"-100%"}} transition={{duration:0.2}} className='flex flex-col absolute top-14 right-1 rounded-md -z-10' style={{background:"linear-gradient(90deg, black, #211)"}}>
        {
            navLinks.map((e,i)=>{

                return <Link key={i} href={e.link} className={`px-6 py-3 text-xl hover:bg-zinc-700 border-orange-700 ${pathname === e.link && 'text-orange-700 border-b-2'}`} >{e.title}</Link>
            })
        }
        </m.ul>}
        </AnimatePresence>
    </div>
    </m.nav>
  )
}

export default Navbar
