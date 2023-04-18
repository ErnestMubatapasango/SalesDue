import React from 'react'

function Hero() {
  return (
    <div className='py-1 px-20' style={{ backgroundImage: "linear-gradient(170deg, #fff 63%, #dcfce7  0, #dcfce7  123%)"}}>
        <div className="grid max-w-screen-xl gap-12 mx-auto  mb-24 text-left  lg:mt-20 sm:mb-10 lg:mb-20 xl:mb-24 md:grid-cols-2 xl:grid-cols-5 lg:gap-20 xl:items-center">
        <div className="order-2 col-span-1 md:order-1 xl:col-span-2">
          <div className="flex flex-row mb-6 space-x-3 md:items-center">
            <span className="p-2 text-xs font-bold text-green-800 uppercase bg-green-100 rounded-lg">NEW</span>
            <span className="font-semibold text-green-800">We are now offering free trial for $0.00 per month!</span>
          </div>
          <h2 className="max-w-xl text-2xl font-medium text-gray-800 sm:text-3xl md:text-4xl xl:text-5xl">Invoicing solution for your business...</h2>
          <p className="max-w-xl mt-6 text-lg leading-relaxed text-gray-500 xl:text-xl">Create beautiful quotations and invoices. Manage and grow your business like a pro.</p>
          <a href="https://portal.salesdue.com/register" className="inline-block px-5 py-3 mt-8 text-sm font-semibold bg-green-800 rounded-lg text-green-50">Start Free Trial</a>
        </div>
        <div className="order-1 col-span-1 md:order-2 xl:col-span-3 md:pt-6 xl:pt-0">
          <img src="images/services/salesdue-quotation.png" alt="" className="self-start rounded-lg shadow-xl"/>
        </div>
      </div>

      {/**logo bar*/}
      <div className="grid max-w-screen-xl grid-cols-1 col-gap-6 px-6 mx-auto mb-6 space-y-5 lg:px-8 xl:px-4 md:pt-20 lg:pt-12 sm:grid-cols-2 sm:space-y-3 lg:grid-cols-3 xl:grid-cols-5 xl:gap-12 lg:mb-16">
        <img className="self-end h-10 p-1 justify-self-center opacity-90" src="images/services/jobboard-logo.svg" alt="logo placeholder"/>
        <img className="self-end h-12 p-1 justify-self-center opacity-90" src="images/services/pathway-logo.svg" alt="logo placeholder"/>
        <img className="self-end h-8 p-1 md:pt-0 justify-self-center opacity-90" src="images/services/airstream-logo.svg" alt="logo placeholder"/>
        <img className="self-end h-10 p-1 justify-self-center opacity-90" src="images/services/drops-logo.svg" alt="logo placeholder"/>
        <img className="self-end h-12 p-1 justify-self-center opacity-90" src="images/services/pathway-logo.svg" alt="logo placeholder"/>
      </div>
      {/** end logo bar */}
      
    </div>
  )
}

export default Hero