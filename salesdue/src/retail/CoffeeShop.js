import React from 'react'
import Footer from '../components/Footer'
import { startData } from './retailData'
import Navbar from '../components/Navbar'

function CoffeeShop() {
    const gettingStarted = startData.map(data => {
        return(
            <div className='flex flex-col items-center space-y-3'>
                <div className='text-center text-4xl text-green-800'>{data.icon}</div>
                <h4 className='text-2xl'>{data.title}</h4>
                <p className='text-center w-3/4'>{data.description}</p>
            </div>
        )
    })

    // <img src='images/cafe.png' alt='' className='w-full h-3/6'/>
    // <div className='absolute space-y-3 top-1/2 left-1/2 px-20 transform -translate-x-1/2 -translate-y-1/2'>
    
      return (
        <>
        <Navbar />
        <div id='coffee' className='relative text-center'>
            <div className='bg-gray-400/80 backdrop-brightness-100 w-full h-full pt-20' >
               <h1 className='text-3xl pt-20 font-medium md:text-4xl text-white '>
                   Coffee Shop POS
               </h1>
               <p className='px-20 mx-auto text-center text-white'>
                   Extract the most out of your cafés with SalesDue’s tailor made software, <br/>
                   designed to give you everything you need to run<br/> and grow your coffee shop POS.
               </p>
            </div>  
        </div>
        <section className='md:container mx-auto'>
    
            <div className='flex flex-col-reverse md:flex-row  items-center md:items-start space-x-10 px-20 py-20'>
                <img src='images/coffee.png' alt='' className='w-full md:w-1/2 rounded-2xl pt-5 md:pt-0' /> 
                
                <div className=' flex flex-col w-full md:w-1/2 space-y-12'>
                    <h2 className='text-3xl text-center font-medium md:text-left'>Creating rich experiences</h2>
                    <p className='w-full text-center md:text-left'>
                        Café culture is all about lasting impressions, letting the aroma of freshly ground coffee 
                        leaving you wanting more. At SalesDue, we aim to empower cafés by giving you an all-encompassing 
                        POS system that makes your jobs simpler.
                    </p>
                </div>
                
            </div>
    
            <div className='flex flex-col md:flex-row items-center space-x-5 px-20 py-10'>
                <div className='space-y-3 w-full md:w-3/4'>
                    <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>
                        Coffee shop POS that’s perfect for quick serving
                    </h2>
                    <p className='w-full text-center md:text-left'>
                        SalesDue’s POS has a sale screen that is easy to use for with quick selection keys for products 
                        and browsing by category. With product images, visual selection makes it even faster.
                    </p>
                </div>
                <img src='images/cafe.png' alt='' className='w-full md:w-1/2 pt-5 md:pt-0'/>
            </div>
    
            <div className='flex flex-col md:flex-row-reverse items-center space-x-12  px-20 py-10'>
                <div className='w-full md:w-1/2 space-y-5'>
                    <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>
                        Automated stock re-order reminders
                    </h2>
                    <p className='w-full text-center md:text-left'>
                        As a smart retail solution, SalesDue’s Vape shop point of sale can remind you when your inventory 
                        is about to run low. Set custom re-order points on your best-selling products so that you’ll 
                        never run out.
                    </p>
                </div>
                <div className='w-full md:w-3/4'>
                    <img src='images/reminder.svg' alt='' className='w-full md:w-3/4 pt-5 md:pt-0'/>
                </div>
            </div>   

             <div className='flex flex-col md:flex-row items-center space-x-5 px-20 py-10'>
                <div className='space-y-3 w-full md:w-3/4'>
                    <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>
                        Coffee Shop POS. Multi-store selling
                    </h2>
                    <p className='w-full text-center md:text-left'>
                        With the vape industry thriving, opening a second store may soon be on your cards. 
                        SalesDue is built to scale with your business, and do just that where adding new locations 
                        and registers is as easy as a click of button. Transfer stock between stores and watch your 
                        inventory levels get updated in real-time, making managing multiple stores a simple process.
                    </p>
                </div>
                <img src='images/stores.svg' alt='' className='w-full md:w-1/2 pt-5 md:pt-0'/>
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
    
        <div className='px-20 py-20' style={{ backgroundImage: "linear-gradient(170deg, #fff 53%, #dcfce7  0, #dcfce7 123% )"}}>
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

export default CoffeeShop