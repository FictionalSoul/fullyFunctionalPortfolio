import React from 'react'
import {motion} from "framer-motion"

const TransitionEffect = () => {
  return (
    <>
    {/* Transition effect when we change/enter the site */}
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primaryDark '
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            exit={{x:["0%","100%"],width:["0%","100%"]}} 
            // when we leave the site there will be exit animation and it's not useful till we use the element used in app.js check app.js
            transition={{duration:0.8,ease:"easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-ImgLight '
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-ImgDark '
            initial={{x:"100%",width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect