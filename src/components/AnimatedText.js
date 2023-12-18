import React from 'react';
import {motion} from "framer-motion";

const quote = { // to add some styling to our variable we have created this object which has some predeifned keywords and we can assign value to it
    initial:{
        opacity:1, // word is visible i.e opacity =1 if its 0 i.e not visible
        
    },
    animate:{
        opacity:1,
        transition:{
            delay : 0.5, //after 0.5 sec we can see the h1
            staggerChildren:0.08, // it'll display each word after the gap of 0.08 sec
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,

        }
    }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className={` w-full mx-auto  py-2  flex items-center justify-center text-center overflow-hidden 
    sm:py-0`}>
        <motion.h1 className={`${className} inline-block w-full text-dark font-bold captialize text-8xl dark:text-light `}
        variants = {quote}
        initial ="initial"
        animate = "animate"  
        >
        {
            text.split(" ").map((word,index) => 
                <motion.span key={word + "-" + index} className='inline-block'
                variants={singleWord}
                // initial ="initial"
                // animate = "animate" we dont need these because we have used staggerChildren
                >{word}&nbsp;</motion.span>
                /* nbsp menas no breaking space  i.e meaning that strings separated with this entity will not be separated and put into separate lines.*/
        )}
        </motion.h1>
    </div>
  )
}

export default AnimatedText