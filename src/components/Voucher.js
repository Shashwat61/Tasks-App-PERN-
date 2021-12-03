import {IoTicketOutline} from 'react-icons/all';

function Voucher() {
    return (
        <div className="componentcontainer">
            <form className="flex items-center justify-between pb-2 border-b">
            <div className="flex items-center flex-auto">
            <IoTicketOutline />
            <input type="text" placeholder="Voucher Code" className="w-full px-2 text-xs bg-transparent focus:border-none focus:outline-none "/>
            </div>
            <button type="submit" className="text-xs font-semibold ">Apply</button>
            </form>
        </div>
    )
}

export default Voucher
