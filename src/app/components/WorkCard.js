import {motion as m} from 'framer-motion'

function WorkCard({content, position, color}) {
  return (
    <div initial={{right:"100%"}} animate={{right:'0%'}} transition={{duration:2}} className="flex" style={{justifyContent:`${position}`}}>

    <m.p initial={position === "end"?{x:"130%"}:{x:"-130%"}} animate={{x:'0%'}} transition={{duration:1,delay:2}} className="mx-10 my-1 w-1/2 bg-zinc-800 p-5 rounded-lg border-2 text-lg" style={{borderColor:`${color}`}}>
      {content}
    </m.p>

    </div>
  )
}

export default WorkCard
