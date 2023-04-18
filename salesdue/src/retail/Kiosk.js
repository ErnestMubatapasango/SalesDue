import React from 'react'
import Footer from '../components/Footer'
import { startData } from './retailData'
import Navbar from '../components/Navbar'

function Kiosk() {

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
        <div id='kiosk' className='relative text-center '>
            <div className='bg-gray-400/80 backdrop-brightness-100 w-full h-full pt-20'>
                <h1 className='text-3xl pt-20 font-medium md:text-4xl text-white '>Kiosk POS</h1>
                <p className='px-20 mx-auto text-center text-white'>
                    A cloud-based Kiosk POS that blends a smart design with a rich list of features<br/> designed to get 
                    the most out of your business.
                </p>
            </div>
        </div>
    <section className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-x-10 space-y-5 md:space-y-0 px-20 py-20'>
            <img src='images/iPad.svg' alt='' className='w-full md:w-1/2 rounded-2xl bg-blend-overlay' /> 
            
            <div className=' flex flex-col w-full items-center md:w-1/2 space-y-12'>
                <h2 className='text-3xl text-center font-medium md:text-left'>iPad retailing for faster Kiosk POS experiences</h2>
                <p className='w-full text-center md:text-left'>
                  With SalesDue’s specifically designed iPad app, managing your store’s sales just got a 
                  whole lot easier. Take the service directly to your customers, with your iPad in tow, 
                  and process sales on the spot. Make things easier for you and your staff, while 
                  improving your customer service experience.
                </p>
            </div>
            
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center space-x-5 px-20 md:py-10 py-0'>
            <div className='space-y-3 w-full md:w-3/4'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>
                  Kiosk POS with compact hardware
                </h2>
                <p className='w-full text-center md:text-left'>
                  Don’t restrict yourself by having large hardware taking up valuable retail space. 
                  Not only does our iPad app let you manage your business form the palm of your hand, 
                  but it is also compatible with industry leading POS hardware. SalesDue supports plug-n-play 
                  Wi-Fi and Bluetooth hardware such as receipt printers and barcode scanners.
                </p>
            </div>
            <img src='images/hardware.png' alt='' className='w-full md:w-1/2'/>
        </div>

        <div className='flex flex-col-reverse md:flex-row-reverse items-center space-x-12  px-20 py-10'>
            <div className='w-full md:w-1/2 space-y-5'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium pt-5 md:pt-0'>
                    Scale your business
                </h2>
                <p className='w-full text-center md:text-left'>
                As a cloud-based solution for your kiosk needs, expanding your POS alongside your own business 
                growth is an effortless experience. Whether you’re selling from a pop-up shop or a single brick 
                and mortar store, SalesDue scales with your needs – ready for when you decide to open that second 
                (or hundredth) store!
                </p>
            </div>
            <div className='w-full md:w-3/4'>
                <img src='images/channels.svg' alt='' className='w-full md:w-3/4'/>
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

export default Kiosk