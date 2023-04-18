import React from 'react'
import { startData } from './retailData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Takeaway() {

    const gettingStarted = startData.map(data => {
        return(
            <div className='flex flex-col items-center space-y-3'>
                <div className='text-center text-4xl text-green-800'>{data.icon}</div>
                <h4 className='text-2xl'>{data.title}</h4>
                <p className='text-center w-3/4'>{data.description}</p>
            </div>
        )
    })
  return (
    <>
    <Navbar />
    <div id='takeaway' className='relative text-center'>
            <div className='bg-gray-400/80 backdrop-brightness-100 w-full h-full pt-20' >
               <h1 className='text-3xl pt-20 font-medium md:text-4xl text-white '>
               Takeaway POS
               </h1>
               <p className='px-20 mx-auto text-center text-white'>
               The quick service industry has never been easier, 
                with SalesDue’s easy-to-use, feature heavy<br/> Takeaway POS, 
                designed to give you faster and more streamlined sales.
               </p>
            </div>  
        </div>
    <section className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-x-10 md:space-y-0 space-y-5 px-20 py-20'>
            <img src='images/iPad.svg' alt='' className=' w-full md:w-1/2 rounded-2xl ' /> 
            
            <div className=' flex flex-col w-full md:w-1/2 space-y-3 md:space-y-12'>
                <h2 className='text-3xl text-center font-medium md:text-left'>Streamlined Takeaway POS</h2>
                <p className='w-full text-center md:text-left'>
                    If you run a takeaway store, you’ll no doubt know and value the meaning of speed and accuracy.
                    SalesDue does too, and that’s why we’ve designed a takeaway POS that’s here to 
                    help you streamline that process exponentially. 
                    Don’t be overrun by long waiting times, during peak periods. SalesDue give you an intuitive, smart 
                    touchscreen POS that is sure to give your business a ‘hike’ in takeaway sales.
                </p>
            </div>
            
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center  space-x-5  px-20 py-10'>
            <div className='space-y-3 w-full md:w-3/4'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium sm:pt-5 md:pt-0'>
                    Takeaway POS that accept all payment types
                </h2>
                <p className='w-full text-center md:text-left'>
                    Being able to accept all payments types for your takeaway store brings you a clear advantage, 
                    and SalesDue integrates with leading payment processors nationwide including ZimSwitch, EcoCash, NetCash. 
                    Create custom payment types, so that you can choose to work with your existing merchant service 
                    provider or even take gift cards and loyalty point payments.
                </p>
            </div>
            <img src='images/payments.svg' alt='' className=' w-full md:w-1/2'/>
        </div>

        <div className='flex flex-col md:flex-row-reverse items-center space-x-12 space-y-6  px-20 py-10'>
            <div className='w-full md:w-1/2 space-y-5'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>
                    Takeaway POS for quicker, smarter business decisions
                </h2>
                <p className='w-full text-center md:text-left'>
                    As an all-in-one retail solution, SalesDue is a brilliant vessel to access how well your store is doing. 
                    From sales charts to inventory reports and even access to how well your staff is doing, SalesDue gives 
                    you the information you need, all accessible with our takeaway POS system. 
                    Access real-time information with just a few clicks (or taps!) and make smarter decisions for your business.
                </p>
            </div>
            <div className=' w-full md:w-3/4'>
                <img src='images/analytics.svg' alt='' className=' w-full md:w-3/4'/>
            </div>
        </div>     
    </section>
    <div className='bg-gray-50 px-20 py-20 space-y-4 mx-auto'>
            <h1 className=' text-center text-2xl md:text-3xl font-medium'>Getting started with SalesDue is very easy</h1>
            <h3 className='text-center'>With powerful data import features, rich support articles and <br/>24/7 support, SalesDue makes it easier.</h3>
            <hr className='w-1/6 stroke-2 mx-auto'/>

            <div className='flex flex-col items-center space-y-8 md:space-y-0 md:flex-row w-full pt-10'>
                {gettingStarted}
            </div>
    </div>

    <div className='px-20 py-20'>
        <h1 className='text-center text-2xl font-medium md:text-3xl pb-3'>You are in good company</h1>
        <hr className='w-1/6 mx-auto'/>
        <div className="grid max-w-screen-xl grid-cols-1 col-gap-6 px-6 mx-auto mb-6 space-y-5 lg:px-8 xl:px-4 md:pt-20 lg:pt-12 sm:grid-cols-2 sm:space-y-3 lg:grid-cols-3 xl:grid-cols-5 xl:gap-12 lg:mb-16">
            <img className="self-end h-10 p-1 justify-self-center opacity-90" src="images/services/jobboard-logo.svg" alt="logo placeholder"/>
            <img className="self-end h-12 p-1 justify-self-center opacity-90" src="images/services/pathway-logo.svg" alt="logo placeholder"/>
            <img className="self-end h-8 p-1 md:pt-0 justify-self-center opacity-90" src="images/services/airstream-logo.svg" alt="logo placeholder"/>
            <img className="self-end h-10 p-1 justify-self-center opacity-90" src="images/services/drops-logo.svg" alt="logo placeholder"/>
            <img className="self-end h-12 p-1 justify-self-center opacity-90" src="images/services/pathway-logo.svg" alt="logo placeholder"/>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default Takeaway