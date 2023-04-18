import {MdDiscount, MdOutlineDashboardCustomize, MdOutlineQuickreply, MdPayment, MdSpaceDashboard} from 'react-icons/md'
import {TbDeviceAnalytics, TbDeviceIpad, TbDevices, TbReport, TbReportMoney} from 'react-icons/tb'
import {GoListOrdered} from 'react-icons/go'
import {GiMultipleTargets, GiTimeSynchronization} from 'react-icons/gi'
import {RiCheckboxMultipleFill, RiComputerLine, RiSecurePaymentLine} from 'react-icons/ri'
import {SiOpenaccess} from 'react-icons/si'
export const posData = [
    {
        icon: <TbDeviceIpad />,
        title: "iPad, PC, Mac",
        description: `SalesDue POS works on iPad, PC and Mac.
        Data syncs to a central database in the cloud so you can use any/all supported devices in your outlet/s.`
    }, 
    {
        icon: <MdOutlineDashboardCustomize />,
        title: "Fully customisable",
        description: `SalesDue lets you customise product options, tax rules, receipt content, categories, 
        layout and much more. SalesDue POS works around your setup, not the other way around.`
    },
    {
        icon: <MdOutlineQuickreply/>,
        title: "Lighting quick. Tap, search or scan",
        description: `Tap, search or scan barcode to add items to the shopping basket.`
    },
    {
        icon: <TbDevices/>,
        title: "Any device",
        description: `SalesDue is a web-based point of sale system you can use on any computer or a device. `
    },
]

export const checkoutData = [
    {
        icon: <MdDiscount/>,
        title: "Discounts",
        description: `Apply discounts to an entire sale or simply alter $ value for particular product line items.`
    },
    {
        icon: <GoListOrdered/>,
        title: "Easy order flow",
        description: `When ready to take customer payment, simply click on pay, take payment,
         pops open the cash drawer and receipt is printed. 
         The seamless process means faster moving queues and happier customers.`
    },
   
]
    export const paymentData = [
    {
        
        icon: <MdPayment/>,
        title: "Integrated card payments",
        description: `SalesDue is fully integrates with renowned in-store payment providers like EcoCash, NetCash`
    },
    {
        icon: <RiSecurePaymentLine/>,
        title: "Use your existing card terminal",
        description: `Prefer to stay with your existing card processing terminal? 
        No problems! With SalesDue you can track card payments made using an external card terminal.`
    }

]

export const reportingData =[
    {
        icon: <TbDeviceAnalytics/>,
        title: "Powerful analytics",
        description: `SalesDue helps you understand your business better so you can positively influence your sales, service quality and costs.`
    },
    {
        icon: <TbReport/>,
        title: "Shift reports",
        description: `Generate daily totals shift reports to keep track of all payment types and transactions including cash,
        cards, on account sales and returns.`
    },
    {
        icon: <TbReportMoney/>,
        title: "Transaction & sales reports",
        description: `SalesDue keeps track of all daily transaction for every sale, payment & refunds.`
    },

    {
        icon: <MdSpaceDashboard/>,
        title: "Dashboard",
        description: `Get instant analytics on your sales, products and employee 
        performance with our intuitive dashboard analytics. View all of your important store information in one place.`
    },
]

export const multiStoreData = [
    {
        icon: <GiMultipleTargets/>,
        title: "Multiple outlets",
        description: `SalesDue grows with your business. It takes only minutes to set-up and start using new outlet, pop-up store or a warehouse.`
    },

    {
        icon: <RiCheckboxMultipleFill/>,
        title: "Powerful multi-store reporting",
        description: `Generate a consolidated report to see how your business is doing in general 
        and you can also drill down to a particular site level. Access these real-time reports from anywhere in the world.`
    },

    {
        icon: <SiOpenaccess/>,
        title: "Access control",
        description: `Easily specify who works at which store for access permissions and roster setup. 
        Administrators get to access all outlets and registers.`
    },

    {
        icon: <GiTimeSynchronization/>,
        title: "Make real-time adjustments",
        description: `Manage your staff’s permissions in real-time. A cashier might only be given access to the sales screen, 
        but an administrator can easily adjust that should the need arise`
    }
]

export const hardwareData = [

    {
        icon: <RiComputerLine/>,
        title: "Hardware",
        description: `SalesDue is far more than just a beautiful iPad POS. It’s a complete retail POS system with integrated scanner,
         printer, cash drawer and payment processors. So, you can handle all situations around your sales scene.
        It’s a complete retail solution designed to create a customer-friendly business environment without taking 
        focus from what it is about – your business.`
    },

    // {
    //     title: "",
    //     description: ``
    // },


]



