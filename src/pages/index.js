import Layout from "../components/Layout";
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect></TransitionEffect>

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '> 
        <Layout className="pt-0 md:pt-16 sm:pt-8">
           <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className="w-1/2 md:w-full">
            {/* 1.priority-> is a next js feature that'll set that element in high priority
            i.e that attribute will load first then other elements which will optimize our google ratings 
            2. sizes-> feature which is similar to media query i.e varies with size or responsive */}
              <Image src={ProfilePic} alt="Developers Image" className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="
                (max-width:768px) 100vw, 
                (max-width: 1200px) 50vw,
                50vw
                "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl "
                
              />
              {/* ! means important in tailwind */}
              <p className="my-4 text-base font-medium md:text-sm sm:text-sm "> As a skilled front-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

                <div className="flex items-center self-start mt-2 lg:self-center ">
                  <Link href="/Web_Vivek_Resume.pdf" target="_blank" // to href to work our resume should be in public folder
                  className="flex items-center bg-dark text-light  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover: border-dark 
                  dark:bg-light  dark:text-dark hover:dark:bg-dark  hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                  download={true} // Now if we click on Resume button it'll download our resume
                  >Resume <LinkArrow className={`w-6 ml-1`} />
                  </Link>
                  <Link href="mailto:saboovivek45@gmail.com" target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">Contact</Link>
                </div>
            </div>
           </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </div>
      </main> 
      </>
  )
}