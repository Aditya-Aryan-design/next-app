'use client'
import { useContext } from "react"
import ColorContext from "../ContextAPI/ColorContext"
import MainCanvas from "./MainCanvas"
import PageChanger from "./PageChanger"

function Main() {
  const mycolor = useContext(ColorContext)
  const [color,setColor] = mycolor


  const ChangeColor = ()=>{
    let R = Math.ceil(Math.random()*255)
    let G = Math.ceil(Math.random()*255)
    let B = Math.ceil(Math.random()*255)

    
    setColor(`rgb(${R},${G},${B})`)
  }

  return (
    <>
      <div className="h-72 w-72 md:h-[32rem] md:w-[32rem] rounded-ee-full opacity-60 absolute -z-10" style={{ background: `radial-gradient(${color},black)` }}>
      </div>
      <section className="opacity-100 flex flex-col justify-around lg:flex-row md:px-20 lg:px-28">
        
        <div className="flex space-x-5 m-10">
          <div className="h-5 w-5 rounded-full flex justify-center items-start p-1" style={{ background: `${color}` }}>
            <div className="h-[20rem] w-1" style={{ background: `linear-gradient(${color},transparent)` }}></div>
          </div>

          <div className="space-y-3">
            <h2 className="font-extrabold text-3xl md:text-6xl">Hello, I am <span style={{color:`${color}`}}>Aditya</span></h2>
            <p className="md:text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div>
        <div onMouseOver={ChangeColor} onClick={ChangeColor} className="m-auto w-fit rounded-full">
        <MainCanvas color={color}/>
        </div>
        </div>

        <PageChanger nextLink={'/about'}/>
      </section>
    </>
  )
}

export default Main
