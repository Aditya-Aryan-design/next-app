'use client'
import { motion as m } from 'framer-motion'
import { useContext } from 'react'
import ColorContext from '../ContextAPI/ColorContext'
import { aboutCard } from '../ContextAPI/Constants'
import AboutCard from './AboutCard'
import PageChanger from './PageChanger'

function About() {
    const mycolor = useContext(ColorContext)
    const [color, setColor] = mycolor
    return (
        <>
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className='-z-10 h-screen p-5 space-y-3'>

            <p className="text-slate-400 font-semibold lg:text-lg">
                INTRODUCTION
            </p>
            <div className='text-center lg:text-start space-y-3 lg:space-y-5'>
                <h2 className="font-bold text-3xl lg:text-5xl" style={{ color: `${color}` }}>
                    Overview
                </h2>
                <p className='lg:text-xl font-semibold'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque facere blanditiis non consequuntur laborum ducimus quaerat dolore ratione sapiente, quisquam harum adipisci voluptate sed voluptatum veniam repellendus nesciunt rem quo dolores, a laboriosam? Impedit esse iste tempora, optio nihil omnis eos ad, quo dolor sequi fugiat. Ipsa distinctio velit placeat?
                </p>
            </div>

            <div className='flex flex-wrap justify-around'>
                {aboutCard.map((e) => {
                    return (
                            <AboutCard key={e.img} title={e.title} img={e.img} color={color}/>
                    )
                })}
            </div>
        </m.div>
            <PageChanger nextLink='/work'/>
        </>
    )
}

export default About
