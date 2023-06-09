import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
function Navbar() {

  const [mobileMenuState, setMobileMenuState] = React.useState(false)
  const [dropdown, setDropDown] = React.useState(false);

 
  return (
    <>
    
    {/**hero and navigation */}
    <header className='container mx-auto relative py-4 px-6 text-gray-600 bg-white bg-cover lg:px-12 lg:py-5 z-50' >
      {/**naviagtion */}
      <div className="sticky flex items-center justify-between max-w-screen-xl mx-auto">
        <a href="/" className="text-lg" style={{fontSize: "26px"}}>
          <div className='flex'>
            <span style={{color:"#065f46", marginRight: "5px"}}><FaPaperPlane /></span> 
            <span className="font-weight-lighter" style={{color:"#1f2937"}}>Sales</span>
            <span className="font-weight-bold text-slate-500" style={{color: "#1f2937", fontWeight: "bold"}}>Due</span>
          </div>
        </a>
        <nav className="flex-row items-center justify-center hidden w-auto space-x-4 font-semibold md:flex lg:space-x-8">
          <a href="/invoice-generator" className="hover:opacity-70">Invoice Generator</a>
          <a href="/features" className="hover:opacity-70">Features</a>
          <a href="/pricing" className="hover:opacity-70">Pricing</a>

          <div className='flex relative space-y-10 bg-white'>

            <p className='cursor-pointer hover:opacity-70' onClick={() => setDropDown(prevDropDown => !prevDropDown )}>Products</p>
            { dropdown && 
              <div className='absolute bg-white p-2 rounded-md shadow z-50 '>
                <ul className='space-y-1 md:w-40'>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md ' href='/clothing'>Clothing POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/kiosk'>Kiosk POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/takeaway'>Takeway POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/coffee'>Coffee Shop POS</a>
                  </li>
                </ul>
              </div> 
            }

          </div>
         
          <a href="https://portal.salesdue.com/login" className="hover:opacity-70">Login</a>
          <a href="https://portal.salesdue.com/register" className="inline-block px-5 py-3 text-sm font-semibold bg-green-800 rounded-lg text-green-50">
            Start Free Trial
          </a>
        </nav>
        <button className="relative z-30 block p-2 mt-1 text-gray-200 bg-green-800 rounded-md w-9 md:hidden" onClick={() => setMobileMenuState(prevMobileMenu => !prevMobileMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

       { mobileMenuState &&  <div className="absolute inset-x-0 z-50 w-full py-2 origin-top-right transform top-10 transition md:hidden">
          <nav className="p-3 transform bg-white rounded-lg shadow-lg">
            <a href="/features" className="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50">Features</a>
            <a href="/pricing" className="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50">Pricing</a>

            <div className='flex relative space-y-10 bg-white'>
        
              <p className='cursor-pointer block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50' onClick={() => setDropDown(prevDropDown => !prevDropDown )}>Products</p>

              { dropdown && <div className='bg-white p-2 rounded-md z-50 w-full '>
                <ul className='space-y-1 w-full'>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md ' href='/clothing'>Clothing POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/kiosk'>Kiosk POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/takeaway'>Takeway POS</a>
                  </li>
                  <li>
                    <a  className='flex p-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-white rounded-md' href='/coffee'>Coffee Shop POS</a>
                  </li>
                </ul>
              </div> }
            </div>
            <a href="https://portal.salesdue.com/login" className="block px-6 py-3 font-semibold border-b hover:opacity-70 border-blue-50">Login</a>
            <a href="https://portal.salesdue.com/register" className="block py-3 text-sm font-semibold text-center text-white bg-green-800 rounded-lg px-5text-white">
              Start Free Trial
            </a>
          </nav>
        </div>
      }
      </div> 
      {/** navigation*/}
    </header>
    {/**end hero and navigation */}

   
   </>
  )
}

export default Navbar