import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import project1 from "../../public/images/projects/Screenshot 2023-12-15 223336.png"
import project2 from "../../public/images/projects/TinDog.png"
import project3 from "../../public/images/projects/OpenAI.png"
import project4 from "../../public/images/projects/Hoo_Bank.png"
import project5 from "../../public/images/projects/HTML_.png"
import project6 from "../../public/images/projects/Latest_Portfolio.png";
import { GithubIcon } from '@/components/icons'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    // Article is used to create more sematic meaning to our codebase like blog,post etc in these we use articles 
    //while div elements are generic elements like for designing etc
    // an article is like a house, sections are like the bedrooms, main is the neighborhood for that matter. just my take on it.
    // Hope you understand what I mean. 
    //“div” elements are generic containers, nothing really specific about them.
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl
    p-12 relative rounded-br-2xl dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark   rounded-br-3xl
    dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem] '/>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
        <FramerImage src={img} alt="project_img" className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
          (max-width:768px) 100vw, 
          (max-width: 1200px) 50vw,
          50vw
          "
        />

      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm '>{title}</h2>
        </Link>
        <p className='my-2 text-dark font-medium dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'> <GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
        font-semibold  dark:bg-light dark:text-dark sm:px-4 sm:text-base'> Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ type, img, link, github, title }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
     bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark   rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
        <FramerImage src={img} alt="project_img" className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
          (max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw,
          50vw
          "
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl '>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'> Visit </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'> <GithubIcon /></Link>
        </div>
      </div>

    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Vivek Saboo's | Projects Page</title>
        <meta name='description' content="In this section we'll talk about the projects that i've done during 2022 to 2023 " />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex items-center justify-center flex-col dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl  
          ' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title="Gericht Modern Restaurant"
                img={project1}
                summary="A featured Modern Web Restaurant App using HTML,CSS,React.Js,Javascript,Media Queries,API
                      .The best dining place available in the market"
                link="https://fictionalsoul.github.io/gericht/"
                type="Featured Project"
                github="https://github.com/FictionalSoul"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="TinDog"
                img={project2}
                link="https://fictionalsoul.github.io/Tindog/"
                type=" Responsive Project"
                github="https://github.com/FictionalSoul"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="OpenAI"
                img={project3}
                link="https://fictionalsoul.github.io/openai/"
                type=" UI/UX Project"
                github="https://github.com/FictionalSoul"
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Hoo_Bank"
                img={project4}
                summary="A featured Modern Bank App made by using HTML,CSS,React.Js,Javascript,Media Queries,Tailwind Css,Gradients
                        .Safe & Secure"
                link="https://fictionalsoul.github.io/hoobank/"
                type="Digital Bank"
                github="https://github.com/FictionalSoul"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Portfolio"
                img={project5}
                link="https://fictionalsoul.github.io/Vivek-s-Website/"
                type="CV"
                github="https://github.com/FictionalSoul"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Latest Portfolio"
                img={project6}
                link="/"
                type="Portfolio Project"
                github="https://github.com/FictionalSoul"
              />
            </div>


          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects;