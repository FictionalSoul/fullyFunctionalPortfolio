// import React, { useRef } from 'react'
// import { useScroll,motion } from 'framer-motion'
// import LiIcon from './LiIcon'




// const Details =({position,company,companyLink,time,address,work}) => {
//     const ref = useRef(null);

//     return (
//             <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]  '>
//             <LiIcon reference={ref} />
//                 <motion.div
//                 initial ={{y:50}}
//                 whileInView={{y:0}}
//                 transition={{duration:0.5, type :"spring"}}>
//                     <h3 className='capitalize font-bold text-2xl sm:text-xl  xs:text-lg'>
//                         {position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
//                     </h3>
//                     <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>{time} | {address}</span>
//                     <p className='font-medium w-full md:text-sm'>{work}</p>
//                 </motion.div>
//             </li>
//     )
// }

// const Experience = () => {
//     const ref =useRef(null);
//     const {scrollYProgress} =useScroll(
//         {
//             target: ref,
//             offset: ["start end","center start"] //will srolll line just like our scroll bar so, the length of the scroll will 
//             //increase or decrease whenver we scroll
//         }
//     )
//   return (
//     <div className='my-64'>
//         <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'> 
//         Experience
//         </h2>
//         <div ref={ref} className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full '>
//             <motion.div
//             style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
//              dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] '>

//             </motion.div>
//             <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
//                <Details
//                position="Operations Executive"
//                company="Vplak"
//                time="jun-2023 to Aug-2023" 
//                address=" Sec-48,Gurgaon"
//                work="Worked for a team which is responsible to provide customer support and will dispatch an order through different courier partners
//                keep a keen eyes on vendors and product we sent to customers. Apart from that we are responsible to increase the sales and profit margin for our company "
//                companyLink="https://www.vplak.com/"

//                />
//                <Details
//                position="Operations Executive"
//                company="Vplak"
//                time="jun-2023 to Aug-2023" 
//                address=" Sec-48,Gurgaon"
//                work="Worked for a team which is responsible to provide customer support and will dispatch an order through different courier partners
//                keep a keen eyes on vendors and product we sent to customers. Apart from that we are responsible to increase the sales and profit margin for our company "
//                companyLink="https://www.vplak.com/"

//                />
//                <Details
//                position="Operations Executive"
//                company="Vplak"
//                time="jun-2023 to Aug-2023" 
//                address=" Sec-48,Gurgaon"
//                work="Worked for a team which is responsible to provide customer support and will dispatch an order through different courier partners
//                keep a keen eyes on vendors and product we sent to customers. Apart from that we are responsible to increase the sales and profit margin for our company "
//                companyLink="https://www.vplak.com/"

//                />
//                <Details
//                position="Operations Executive"
//                company="Vplak"
//                time="jun-2023 to Aug-2023" 
//                address=" Sec-48,Gurgaon"
//                work="Worked for a team which is responsible to provide customer support and will dispatch an order through different courier partners
//                keep a keen eyes on vendors and product we sent to customers. Apart from that we are responsible to increase the sales and profit margin for our company "
//                companyLink="https://www.vplak.com/"

//                />
//                <Details
//                position="Operations Executive"
//                company="Vplak"
//                time="jun-2023 to Aug-2023" 
//                address=" Sec-48,Gurgaon"
//                work="Worked for a team which is responsible to provide customer support and will dispatch an order through different courier partners
//                keep a keen eyes on vendors and product we sent to customers. Apart from that we are responsible to increase the sales and profit margin for our company "
//                companyLink="https://www.vplak.com/"

//                />
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Experience