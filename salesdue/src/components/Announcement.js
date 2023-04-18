import React from 'react'

function Announcement() {
  return (
  
    <div className="relative text-gray-800 bg-green-700" style={{backgroundColor: "aquamarine"}}>
      <section 
        aria-label="Announcement" 
        className="relative inset-x-0 top-0 flex items-center justify-center x-overflow-hidden z-20 default:text-black" 
        data-section-name="butter-bar">
        <p className="p-4 pr-16 sm:pl-16 md:py-5 md:px-20 text-xs sm:text-sm md:text-base lg:text-lg sm:text-center font-normal [&amp;>a]:hover:no-underline [&amp;>a]:font-bold [&amp;>a]:underline [&amp;>a]:active:text-shade-70 [&amp;>a]:focus-visible:outline-none arrow-animation richtext">
          You can now generate beautiful quotations and invoices for free online.
          <a style={{fontWeight: "bold"}} data-component-name="start-free-trial" href="https://portal.salesdue.com/register?language=en&amp;locale=en-GB&amp;signup_currency=GBP&amp;signup_page=https%3A%2F%2Fwww.salesdue.com%2Fuk&amp;signup_types[]=paid_trial_experience">
            Sign up now
          </a>
        </p>
      </section>
    </div>
  
  )
}

export default Announcement