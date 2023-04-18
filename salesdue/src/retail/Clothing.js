import React from 'react'
import { clothingData, startData } from './retailData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function clothingPos() {

    const clothing = clothingData.map( data => {
        return(
            <div className=' w-full md:w-3/4 space-y-5'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>{data.title}</h2>
                <p className='w-full text-center md:text-left'>{data.description}</p>
            </div>
        )
    })

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
        <Navbar  />

        <div id='clothing' className='relative text-center'>
            <div className='bg-gray-400/80 backdrop-brightness-100 w-full h-full pt-20' >
               <h1 className='text-3xl pt-20 font-medium md:text-4xl text-white '>
               Clothing Store POS
               </h1>
               <p className='px-20 mx-auto text-center text-white'>
               Get the most out of your fashion boutiques with <br />SalesDue’s intuitive clothing store POS software.
               </p>
            </div>  
        </div>
    <section className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center md:items-start space-x-10 space-y-6 md:space-y-0 px-20 py-20'>
            <img src='images/clothsection.png' alt='' className=' w-full md:w-1/2 rounded-2xl' /> 
            
            <div className=' flex flex-col items-center w-full md:w-1/2 space-y-12'>
                <h2 className='text-3xl text-center font-medium md:text-left'>Designed for your Clothing store</h2>
                <p className='w-full text-center md:text-left'>
                    While exciting and ultimately rewarding, running a clothing boutique comes with its fair share
                    of challenges. From navigating the latest fashion trends straight from the catwalk to managing your 
                    online and in-store presence, running a boutique isn’t easy.

                    That’s why we at SalesDue have curated our clothing store POS experience for the burgeoning fashion 
                    boutique in mind. From our easy to use interface to an endless supply of features, we offer a 
                    system that’s as impressive as the clothes in your display.</p>
            </div>
            
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center space-x-5 px-20 py-10'>
            <div className='md:space-y-3 space-y-6 w-full md:w-3/4'>
                {clothing}
            </div>
            <img src='images/inventory-count.svg' alt='' className='pb-5 md:pb-0 w-full md:w-1/2'/>
        </div>

        <div className='flex flex-col md:flex-row-reverse items-center space-x-12  px-20 py-10'>
            <div className=' w-full md:w-1/2 space-y-5'>
                <h2 className=' text-2xl md:text-3xl text-center md:text-left font-medium'>Control user permissions</h2>
                <p className='w-full text-center md:text-left'>
                    Manage which of your staff gets access to which parts of SalesDue. For example, 
                    while a store owner may have full administration privileges, a cashier may only have access to the 
                    sales screens. 
                    The mobility of SalesDue’s clothing store POS means that you can set and change permissions, 
                    for the entire system, on-the-go.
                </p>
            </div>
            <div className=' w-full md:w-3/4 pt-5'>
                <img src='images/employee.svg' alt='' className=' w-full md:w-3/4'/>
            </div>
        </div>     
    </section>
    <div className='bg-gray-50 px-20 py-20 space-y-4 mx-auto'>
            <h1 className=' text-center text-2xl md:text-3xl font-medium'>Getting started with SalesDue is very easy</h1>
            <h3 className='text-center'>With powerful data import features, rich support articles and <br/>24/7 support, SalesDue makes it easier.</h3>
            <hr className='w-1/6 stroke-2 mx-auto'/>

            <div className='flex flex-col items-center space-y-8 md:space-y-0  md:flex-row w-full pt-10'>
                {gettingStarted}
            </div>
    </div>

    <div className='px-20 py-20' style={{ backgroundImage: "linear-gradient(170deg, #fff 53%, #dcfce7  0, #dcfce7 123% )"}} >
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

export default clothingPos