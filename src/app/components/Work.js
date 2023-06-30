'use client'
import {motion as m} from 'framer-motion'
import { useContext } from 'react'
import ColorContext from '../ContextAPI/ColorContext'
import WorkCard from './WorkCard'
import { workCard } from '../ContextAPI/Constants'
import PageChanger from './PageChanger'

function Work() {
    const mycolor = useContext(ColorContext)
    const [color, setColor] = mycolor
  return (
    <div className='overflow-auto h-[42.5rem]'>

        <div className='overflow-hidden m-10'>
      <m.p initial={{y:'80%'}} animate={{y:"0%"}} transition={{duration:1}} className='text-3xl lg:text-5xl font-semibold' style={{color:`${color}`}}>
        Work
      </m.p>
      </div>
        <div className='mb-28'>
      {
        workCard.map((e)=>{
            return (
                
                <WorkCard key={e.id} content={e.content} position={e.position} color={color}/>

            )
        })
      }
      </div>
      <PageChanger nextLink='/contact'/>
    </div>
  )
}

export default Work
