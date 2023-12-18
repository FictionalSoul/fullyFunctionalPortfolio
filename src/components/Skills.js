import React from 'react';
import {motion} from "framer-motion";

const Skill =({name,x,y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3  shadow-dark 
            cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
            xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05}}
            initial ={{x:0,y:0}}
            whileInView= {{x:x,y:y,transition:{duration: 1.5 }}} //when we see skills section the items will rearrange itself
            
            viewport={{once:true}} // by setting it to true skills will rearrange itself only once when the site loads 
            >
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full 
        bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'> 
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark 
            cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 '
            whileHover={{scale:1.05}}>
                Web
            </motion.div>

            <Skill name ="HTML" x='-12vw'  y="1.8vw"/>
            <Skill name ="CSS" x='-5vw'  y="-10.5vw"/>
            <Skill name ="JAVASCRIPT" x='15.5vw'  y="6vw"/>
            <Skill name ="BOOTSTRAP" x='19vw'  y="-10vw"/>
            <Skill name ="TAILWIND CSS" x='5.4vw'  y="-17.7vw"/>
            <Skill name ="REACT.JS" x='-10vw'  y="16.7vw"/>
            <Skill name ="React-Frame-work" x='-29vw'  y="-8vw"/>
            <Skill name ="GIT" x='32vw'  y="0vw"/>
            <Skill name ="WEB DESIGN" x='10vw'  y="20.2vw"/>
            <Skill name ="NEXT JS" x='-35vw'  y="8vw"/>

        </div>
    </>
  )
}

export default Skills