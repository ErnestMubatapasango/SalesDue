import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About() {
  return (
    <section className='space-y-0'>
        <Navbar />
        <div className='bg-green-100 h-1/3 -my-16'>
            <div id="about" className=' container mx-auto px-20 py-20 md:py-32 space-y-6  bg-cover' >
                <h1 className='text-black-500 text-1xl font-bold text-center md:text-left'>ABOUT US</h1>

                <div className='flex flex-col justify-center items-center md:flex-row  space-x-6 space-y-8 md:space-y-0'>
                    <div className='flex flex-col text-center justify-center md:justify-start md:text-left md:w-1/2 space-y-4 md:space-y-8'>
                        <h2 className='tmax-w-xl text-2xl md:leading-10 font-medium text-gray-800 sm:text-3xl md:text-4xl xl:text-5xl'>SalesDue powers hundreds of businesses nationwide</h2>
                        <h4 className='max-w-xl mt-6 text-lg leading-relaxed md:leading-loose text-gray-500 xl:text-xl'>The all-in-one commerce platform to start, run, and grow a business.</h4>
                        <div className='flex justify-center md:justify-start'>
                            <a href="https://portal.salesdue.com/register" className="px-5 py-3 font-semibold bg-green-800 rounded-lg text-green-50">
                                Start Free Trial
                            </a>
                        </div>
                    </div>

                    <div className=' w-full md:w-1/2'>
                        <img src='images/aboutus.png' alt='' className=' rounded-xl md:rounded-3xl'/>
                    </div>
                </div>
            </div>

        </div>

        <div >
            <div  className='mx-auto px-20 py-20 md:py-32 space-y-6  bg-cover'>
                <h1 className='text-black-500 text-1xl font-bold text-center'>OUR MISSION</h1>
                <h2 className='tmax-w-xl  md:leading-10 font-medium text-center text-gray-800 sm:text-2xl md:text-3xl xl:text-4xl'>
                    Making inventory management <br /> better for everyone
                </h2>
                <p className='text-center'>
                We help people achieve independence by making it easier to start, run, and grow a business.
                We<br/> believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to<br/> business
                ownership to make commerce better for everyone.
                </p>
            </div>
        </div>

        <div className='bg-white'>
            <div  className='container mx-auto px-20 bg-cover'>
                <h1 className='text-black-500 text-1xl font-bold text-center pb-8'>WHAT DRIVES US</h1>

                <div className='flex flex-col-reverse justify-center items-center md:flex-row-reverse space-y-4 md:space-x-5'>
                    <div className='mx-20 space-y-4 w-full md:w-1/2'>
                        <h2 className='tmax-w-xl  md:leading-10 font-medium text-center text-gray-800 sm:text-2xl md:text-3xl xl:text-4xl'>
                            We believe in collaboration
                        </h2>
                        <p className='text-center'>
                            "Empowering your business through teamwork - Collaboration is our philosophy.
                            We understand the importance of working together to achieve success. Our team of 
                            experienced professionals is committed to collaborating with your business to develop the 
                            ideal POS solution that will help you achieve your goals."
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src='images/collaboration.png' alt='' />
                    </div>
                </div>

                <div className='flex flex-col-reverse justify-center items-center md:flex-row space-y-4 md:space-x-5'>
                    <div className='mx-20 space-y-4 w-full md:w-1/2'>
                        <h2 className='tmax-w-xl  md:leading-10 font-medium text-center text-gray-800 sm:text-2xl md:text-3xl xl:text-4xl'>
                        We believe in total transparency
                        </h2>
                        <p className='text-center'>
                            "Empowering your business through teamwork - Collaboration is our philosophy.
                            We understand the importance of working together to achieve success. Our team of 
                            experienced professionals is committed to collaborating with your business to develop the 
                            ideal POS solution that will help you achieve your goals."
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src='images/transparency.png' alt='' />
                    </div>
                </div>

                <div className='flex flex-col-reverse justify-center items-center md:flex-row-reverse space-y-4 md:space-x-5'>
                    <div className='mx-20 space-y-4 w-full md:w-1/2'>
                        <h2 className='tmax-w-xl  md:leading-10 font-medium text-center text-gray-800 sm:text-2xl md:text-3xl xl:text-4xl'>
                        We believe in expertise you can rely on
                        </h2>
                        <p className='text-center'>
                        "Trusted expertise for your POS needs - Our experts stay up to date on the latest trends to deliver innovative 
                        solutions that help your business succeed. We know that technology is constantly evolving, which is why we make 
                        it our mission to stay ahead of the curve and provide our clients with cutting-edge solutions they can rely on."
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src='images/experts.png' alt='' />
                    </div>
                </div>

                <div className='flex flex-col-reverse justify-center items-center md:flex-row space-y-4 md:space-x-5 pb-10'>
                    <div className='mx-20 space-y-4 w-full md:w-1/2'>
                        <h2 className='tmax-w-xl  md:leading-10 font-medium text-center text-gray-800 sm:text-2xl md:text-3xl xl:text-4xl'>
                        We believe in forming long-term partnerships.
                        </h2>
                        <p className='text-center'>
                            "Partnering with you for the long haul - Our team 
                            of experts is dedicated to forming long-term relationships that drive your business forward. 
                            We understand that your needs may change over time, and we're committed to adapting 
                            our solutions to meet those needs. By partnering with us, 
                            you'll have a trusted ally in your corner for the long haul."
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src='images/partnership.png' alt='' />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </section>

  )
}

export default About