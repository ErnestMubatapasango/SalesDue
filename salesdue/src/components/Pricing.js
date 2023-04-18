import React from 'react'


function Pricing() {
  return (
    <>
    <div className="px-6 py-12 text-gray-600 bg-blue-50 lg:px-8 lg:py-20 xl:py-32">
      <div id="pricing" className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-medium text-center text-gray-800 sm:text-3xl md:text-4xl">Flexible pricing plans</h2>
        <p className="max-w-2xl mx-auto mt-2 text-lg text-center text-gray-600 lg:text-xl">Choose the online invoicing plan that is right for your business.</p>
      </div>
      <div className="grid max-w-screen-lg grid-cols-3 mx-auto mt-12 md:mt-16 lg:mt-20 md:items-center ">
        <div className="items-center col-span-3 gap-4 p-6 mb-6 text-center bg-white rounded-l-lg shadow lg:p-8 md:col-span-1 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">Free Plan</h3>
          <span className="block mb-4">For starter entrepreneurs</span>
          <span className="text-2xl font-bold text-green-700 lg:text-3xl">$0.00 p/m</span>
          <div className="px-6 pt-6 mt-10 -mx-6 border-t border-gray-300 lg:-mx-8 lg:px-8">
            <ul className="space-y-2 text-lg">
              <li>5 Monthly Invoices	</li>
              <li>5 Monthly Quotes</li>
              <li>Paypal Payment Gateway</li>
              <li>Bill in any Currency</li>
              <li>2 Customers</li>
            </ul>
            <a href="#" className="inline-block px-5 py-3 mt-8 text-sm font-semibold bg-green-800 rounded-lg text-green-50">Get started</a>
          </div>
        </div>
        <div className="relative z-20 items-center col-span-3 gap-4 p-6 mb-6 text-center bg-white rounded-lg md:shadow-xl lg:p-8 md:pb-24 lg:pb-24 md:col-span-1 md:mb-0 md:-mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">Basic Plan</h3>
          <span className="block mb-4">For more entrepreneurs</span>
          <span className="text-2xl font-bold text-green-700 lg:text-3xl">$4.99 p/m</span>
          <div className="px-6 pt-6 mt-10 -mx-6 border-t border-gray-300 lg:-mx-8 lg:px-8">
            <ul className="space-y-2 text-lg">
              <li>50 Monthly Invoices	</li>
              <li>50 Monthly Quotes</li>
              <li>20 Customers</li>
              <li>Unlimited Expense Tracking</li>
              <li>Unlimited Recurring Billing</li>
              <li>Online Payment Gateways</li>
              <li>Bill in any Currency</li>
              <li>Financial Reports</li>
            </ul>
            <a href="#" className="inline-block px-5 py-3 mt-8 text-sm font-semibold bg-green-800 rounded-lg text-green-50">Get started</a>
          </div>
        </div>
        <div className="items-center col-span-3 gap-4 p-6 mb-6 text-center bg-white rounded-r-lg shadow lg:p-8 md:col-span-1 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mb-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">Professional Plan</h3>
          <span className="block mb-4">For savvy entrepreneurs</span>
          <span className="text-2xl font-bold text-green-700 lg:text-3xl">$9.99 p/m</span>
          <div className="px-6 pt-6 mt-10 -mx-6 border-t border-gray-300 lg:-mx-8 lg:px-8">
            <ul className="space-y-2 text-lg">
              <li>Unlimited invoices </li>
              <li>Unlimited quotes</li>
              <li>Unimited Customers</li>
              <li>Payment gatewats</li>
              <li>SMS Communication</li>
              <li>Use your own domain</li>
              <li>API access</li>
            </ul>
            <a href="#" className="inline-block px-5 py-3 mt-8 text-sm font-semibold bg-green-800 rounded-lg text-green-50">Get started</a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Pricing