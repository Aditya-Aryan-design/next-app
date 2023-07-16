'use client'
import {motion as m} from 'framer-motion'

function Loading() {

  return (
    <div className="h-[50vh] flex items-center justify-center">
      <m.div animate={{rotateZ:360}} transition={{duration:1, repeat: Infinity, repeatType: 'loop', type: 'spring'}} className="rounded-full" style={{border:'20px double', borderTopColor:'red',borderBottomColor:'red',height:'50px',width:'50px'}}>
      </m.div>
    </div>
  )
}



export default Loading
