'use client'

import { useEffect, useState } from "react"

function About() {
    const [secondColor, setSecond] = useState('white')
    const [bg, setBg] = useState('black')
    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme==='dark'){
            setSecond('white')
            setBg('black')
        } else if (theme==='light'){
            setSecond('black')
            setBg('white')
        } else {
            return
        }
    },[])
  return (
    <div className="h-screen" style={{color:secondColor, background:bg}}>
      hello my name is aditya aryan
    </div>
  )
}

export default About
