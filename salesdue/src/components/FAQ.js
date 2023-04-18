import React from 'react'

function FAQ() {
  return (
    <div>
        <div class="px-6 py-12 text-gray-600 bg-white lg:px-8 lg:py-20 xl:py-32">
            <div class="max-w-screen-xl mx-auto text-center">
                <h2 class="text-2xl font-medium text-gray-800 sm:text-3xl md:text-4xl">Frequently Asked Questions</h2>
                <p class="mt-2 text-lg text-gray-600 lg:text-xl">Have Questions? We are very transparent and leave no stone unturned for our customers</p>
            </div>
            <div class="max-w-screen-md mx-auto mt-12 space-y-8">
                <div class="p-8 bg-green-100">
                    <h3 class="text-base font-bold text-green-800 md:text-lg">How does the 30-day trial work?</h3>
                    <p class="mt-2 text-base text-gray-700 md:text-lg">The free trial provides you with a full version of the Pro plan for fourteen (14) days. You can use all the features of the Pro plan during the trial. You get the full version of the product so that you know what it will be like once you’re a SalesDue customer.</p>
                </div>
                <div class="p-8 bg-green-100">
                    <h3 class="text-base font-bold text-green-800 md:text-lg">What happens after my free trial?</h3>
                    <p class="mt-2 text-base text-gray-700 md:text-lg">After your trial is up, you can choose from one of several paid plans or the free plan. If you’re not ready to subscribe, no problem: your invoices, expenses, and other data will be securely stored.</p>
                </div>
                <div class="p-8 bg-green-100">
                    <h3 class="text-base font-bold text-green-800 md:text-lg">How secure is my data?</h3>
                    <p class="mt-2 text-base text-gray-700 md:text-lg">We use industry best practices to establish and maintain a secure online experience. And we always remember that your data is yours. We never touch your data without your explicit permission, and we make it easy to export it whenever you want.</p>
                </div>
                <div class="p-8 bg-green-100">
                    <h3 class="text-base font-bold text-green-800 md:text-lg">Do you provide support?</h3>
                    <p class="mt-2 text-base text-gray-700 md:text-lg">We take great pride in providing satisfaction for our customers. To talk to us, mail us at support@salesdue.com or get in touch with us using any of our social handles at the bottom of the page.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ