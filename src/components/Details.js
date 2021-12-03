import { useState } from "react"

const details=[
{ key:'TotalItems',val:'2 Item'},

    {key:'TotalWeight', val:'2.2000 Gram'},
    {key:'TotalOrder' , val: 'Rp.   360.000'},
    {key:'Voucher', val:'Rp. 0'},
    {key:'ShippingCost', val:'Rp. 0'},
    {key:'GrandTotal',val:'Rp. 360.000'}
]


function Details() {
    const [data, setData] = useState(details)
    return (
        <div className="text-xs componentcontainer">
         {data.map((item)=>(
                <div className="flex flex-row justify-between space-y-2 font-semibold ">
                    <div className="">{item.key}</div>
                    <div className={item.key==='GrandTotal' ? 'text-pink-500' : ''}>{item.val}</div>
                </div>
         ))}                     
             
            
        </div>
    )
}

export default Details
