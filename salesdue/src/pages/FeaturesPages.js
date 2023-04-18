import React from 'react'
import { checkoutData, hardwareData, multiStoreData, paymentData, posData, reportingData } from './featureData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function FeaturesPages() {
    const posFeatures = posData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })

    const checkoutFeatures = checkoutData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })

    const paymentFeatures = paymentData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })

    const reportingFeatures = reportingData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })

    const multiStoreFeatures = multiStoreData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })

    const hardwareFeatures = hardwareData.map( data => {
        return (
            <div className='flex flex-col  my-auto  items-center md:items-start md:w-1/2 w-full space-y-3'>
                <div className='text-green-700 text-3xl'>{data.icon}</div>
                <h2 className=' text-center md:text-left font-bold text-2xl'>{data.title}</h2>
                <p className=' text-center md:text-left w-full md:w-3/4'>{data.description}</p>
            </div>
        )
    })
  return (
    <>
        <Navbar />
        <div id='features' className='relative text-center '>
            <div className='bg-gray-400/80 backdrop-brightness-100 w-full h-full pt-20'>
                <h1 className='text-3xl pt-20 font-medium md:text-4xl text-white '>Intuitive retail software</h1>
                <p className='px-20 mx-auto text-center text-white'>
                Quick to setup, easy to use and feature-rich,
                SalesDue Point of Sale is <br/> your all-in-one retail management software solution.
                </p>
            </div>
        </div>
        <section className='container flex flex-col justify-center pt-20 mx-auto'>
            
           

            <div className='flex flex-col md:flex-row w-full -py-10  px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>
                    Point of Sale
                </h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {posFeatures}
                    <hr className='text-gray-400 h-2 w-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full py-10  px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>Checkout</h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {checkoutFeatures}
                    <hr className='text-gray-400 h-2 w-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full py-10  px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>Payment</h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {paymentFeatures}
                    <hr className='text-gray-400 h-2 w-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full py-10  px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>Reporting</h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {reportingFeatures}
                    <hr className='text-gray-400 h-2 w-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full py-10  px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>Multi Store</h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {multiStoreFeatures}
                    <hr className='text-gray-400 h-2 w-full' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row w-full py-10 px-20 space-y-20'>
                <h1 className='font-bold text-2xl w-full text-center md:text-left md:w-1/4 md:text-3xl text-gray-400'>Hardware</h1>
                <div className='flex w-full md:w-3/4 flex-wrap space-y-9'>
                    {hardwareFeatures}
                </div>
            </div>     
        </section>
        <Footer />
    </>  
  )
}

export default FeaturesPages