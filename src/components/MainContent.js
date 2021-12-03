import BigComponent from "./BigComponent"
import Details from "./Details"
import Orders from "./Orders"
import Payment from "./Payment"
import SmallComponent from "./SmallComponent"
import Voucher from "./Voucher"

function MainContent() {
    return (
        <div className="">
            {/* upper */}
            <BigComponent heading="Delivery Address" description="Please choose the destination address" />
            <SmallComponent heading="Dropship" />
            <BigComponent heading="Shipping Option" description="Please choose your shipping method" />
            <BigComponent heading="Payment Option" description="Please choose your payment methid" />
            {/* middle */}
            <Orders/>
            <Voucher/>
            {/* lower */}
            <Details/>
            <Payment/>
            
        </div>
    )
}

export default MainContent
