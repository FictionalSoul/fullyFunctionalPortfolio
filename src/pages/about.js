import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills';
//import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    //  lets you reference a value that's not needed for rendering.i.e not change the value every time our state changes
    const motionValue = useMotionValue(0); //used to track the state and velocity of animating value i.e will update the value
    const springValue = useSpring(motionValue, { duration: 3000 }) //By passing a motion value, the returned spring will automatically animate to the latest value of that motion value.
    //i.e will store the latest value comes from useMotionValue
    const isInView = useInView(ref, { once: true }); //useInView is a tiny (0.6kb) hook that detects when the provided element is within the viewport.
    // only applied once when the page loads
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue]);


    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })

    }, [springValue, value])

    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Vivek Saboo | About Page</title>
                <meta name='description' content='
Me, As a front-end virtuoso, crafts seamless interfaces through mastery in HTML, CSS, and JavaScript. My diligent effort drives pixel-perfect designs, responsive layouts, and intuitive user experiences. Each project reflects my dedication, blending technical finesse with creative flair to deliver captivating, user-centric solutions.'></meta>
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"Dynamic Web Developer Profile"} className='mb-16 lg:!text-6xl sm:!text-6xl xs:!text-4xl
                    sm:mb-8 ' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start  
                        xl:col-span-4 md:order-2  md:col-span-8'>
                            {/* 75 is the opacity i.e 0.75 */}
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75' >Biography</h2>
                            <p className='font-medium '>
                                Hi, I am Vivek, Proficient in HTML, CSS, and Bootstrap, I craft responsive web designs. Skilled in JavaScript and Git, 
                                I ensure dynamic functionality and robust version control for project integrity.
                            </p>

                            <p className='font-medium my-4 ' >
                            Embracing Tailwind CSS, I streamline styling workflows. With Next.js and React.js expertise, 
                            I build scalable applications, delivering intuitive user interfaces.
                            </p>

                            <p className='font-medium '>
                            Fascinated by motion design, I explore Framer Motion, adding immersive interactions to web experiences. 
                            This creativity enhances user engagement, pushing boundaries in development.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark
                 dark:border-light  xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                             dark:bg-light  ' />
                            <Image src={ProfilePic} alt="Vivek's Image" className="w-full h-auto rounded-2xl"
                                priority
                                sizes="
                                (max-width:768px) 100vw, 
                                (max-width: 1200px) 50vw,
                                33vw
                                "
                            // so for devices less than 768px image will take full width of screen similarly for 1200px 
                            //33vw is given like else if the width is above 1200px it'll take 1/3th of devices size
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
                        xl:items-center md:order-3 '>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75
                                 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm '>
                                 Projects Made.
                                 </h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={500} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 ml-14 
                                overflow-hidden dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm '>
                                Problems Solved on various platforms.
                                </h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>

                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 ml-14 overflow-hidden
                                 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm '>
                                 Courses completed on Front end.</h2>
                            </div>

                        </div>
                    </div>
                    <Skills />
                </Layout>
                {/* <Experience /> */}
                <Education />
            </main>
        </>
    )
}

export default about