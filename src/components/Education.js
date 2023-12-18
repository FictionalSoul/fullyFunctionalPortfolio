import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'




const Details =({type,time,place,info}) => {
    const ref = useRef(null);

    return (
            <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
            md:w-[80%] '>
            <LiIcon reference={ref} />
                <motion.div
                initial ={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type :"spring"}}>
                    <h3 className='capitalize font-bold text-2xl sm:text-xl  xs:text-lg'>
                        {type}
                    </h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place}</span>
                    <p className='font-medium w-full md:text-sm'>{info}</p>
                </motion.div>
            </li>
    )
}

const Education = () => {
    const ref =useRef(null);
    const {scrollYProgress} =useScroll(
        {
            target: ref,
            offset: ["start end","center start"] //will srolll line just like our scroll bar so, the length of the scroll will 
            //increase or decrease whenver we scroll
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'> 
        Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full '>
            <motion.div
            style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px] '  

            />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               <Details
               type="Bachelors Of Technology"
               time="2018-2022"
               place="JC BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY, YMCA FARIDABAD" 
               info=" Cgpa -7.61/10"
               />
               <Details
               type="Upper Secondary Education(12th)"
               time="2017-2018"
               place="B.R.C.M PUBLIC SCHOOL,BAHAL" 
               info="Percentage - 87/100"
               />
               <Details
               type="Online Front-End Course"
               time="2022-2023"
               place=" UDEMY FRONT END DEVELOPMENT" 
               info=" This course includes the depth knowledge of HTML,CSS,Javascript,React.Js,Bootstrap etc"
               />
               <span className="ml-5 font-semibold px-[30%] xs:text-sm mx-10">etc.. many more</span>
            </ul>
        </div>
    </div>
  )
}

export default Education