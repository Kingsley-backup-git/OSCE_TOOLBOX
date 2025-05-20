import React from 'react'
import TopIntro from './components/TopIntro'
import Header from './components/Header'
import Reviews from './components/Reviews'
import About from './components/About'
import Categories from './components/Categories'
import Quote from './components/Quote'
import GettingStarted from './components/GettingStarted'
import QuoteTwo from './components/QuoteTwo'
import Steps from './components/Steps'
import Why from './components/Why'
import QuoteThree from './components/QuoteThree'
import Testimonies from './components/Testimonies'
import Founder from './components/Founder'
import Articles from './components/Articles'
import Contents from './components/Contents'
import Questions from './components/Questions'
import QuoteFour from './components/QuoteFour'
import StartPracticing from './components/StartPracticing'
import Footer from './components/Footer'
import Count from './components/Count'


export default function Landingpage() {
  return (
 <div className='w-full h-[200vh]'>
    <TopIntro />
    <div className='w-full px-6'>
 <Header />
 <Reviews />

 <About />

 <div className='bg-[#F5F5F5] rounded-3xl pt-20 px-10 pb-8 mt-[50px]'>
<Categories />

<Quote />

<Count />
 </div>

 <GettingStarted />
 <QuoteTwo />
 <Steps />

  <div className='bg-[#F5F5F5] rounded-3xl pt-20 pb-20 px-6  mt-[50px]'>
   <Why />

   <QuoteThree />
  </div>

  <Testimonies />


  <div className='bg-[#F5F5F6] rounded-3xl px-12 py-20 my-8'>
<Founder />
  </div>

  <Articles />

  <Contents />

  <div className='bg-[#F5F5F6] rounded-3xl px-12 py-20 my-8'>
<Questions />

<QuoteFour />
  </div >

  <StartPracticing />

  <Footer />
    </div>
   
 </div>
  )
}
