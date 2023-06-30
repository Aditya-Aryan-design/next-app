import {motion as m} from 'framer-motion'
import { useContext } from 'react'
import Link from 'next/link'
import ColorContext from '../ContextAPI/ColorContext'
import ActiveLinkContext from '../ContextAPI/ActiveLinks'


function PageChanger({nextLink}) {
  const [color] = useContext(ColorContext)
  const activeLink = useContext(ActiveLinkContext)
  const [active,setActive] = activeLink

  return (
    <div className="absolute bottom-5 w-[100%]" onClick={()=>setActive('/about')}>
      <m.div className="border-2 border-white h-20 w-10 rounded-full m-auto flex justify-center">
      <Link href={nextLink}>

        <m.div 
        animate={{y:[5,46,5]}}
        transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}}
        className='text-7xl'>
          <div className='h-7 w-7 rounded-full' style={{background:`radial-gradient(${color},black)`}}></div>
        </m.div>

      </Link>
      </m.div>
    </div>
  )
}

export default PageChanger
