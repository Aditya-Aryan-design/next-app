'use client'
import Main from "./components/Main"
import {motion as m} from 'framer-motion'



function page() {
  
  return (
    
    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}}>
      <Main />
    </m.div>
  )
}

export default page
