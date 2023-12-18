import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';

import Head from "next/head";
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router =useRouter() // To get the path which is unique for ex /about /article etc in our site
  return (
    <>
    <Head>
          <meta name='viewport' content='width = device-width, intial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        
        <Navbar />
        <AnimatePresence mode='wait'>
          {/* First Exit animation will run then the entry animation will run beacuse of  MODE*/}
          <Component key={router.asPath} {...pageProps}/> 
          {/* asPath is the path which is written aftwer our url like /about or/Home */}
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
