import { useState } from "react";
import Order from "./Order";

const orders=[
    {
        id:1,
        imageLink:'https://media.istockphoto.com/photos/womens-small-red-handbag-purse-picture-id183831267?b=1&k=20&m=183831267&s=170667a&w=0&h=kSNdUG2Q043L2IQ7xLLUzN09s5ByNOE-oyWRtxaRrXk=',
        name:'Original xyzone brand tr1255',
        variant:'RED, 40',
        quantity:1,
        quantityDetails:'1.100gr',
        price:100.000
    },
    {
        id:2,
        imageLink:'https://media.istockphoto.com/photos/beige-leather-women-handbag-isolated-on-white-background-picture-id1302787124?b=1&k=20&m=1302787124&s=170667a&w=0&h=e4dIzEN0FBxxR8KnRowKCJzZd-qpshaZAACcY2DWupM=',
        name:'Original xyzone brand tr1255',
        variant:'RED, 40',
        quantity:1,
        quantityDetails:'1.100gr',
        price:100.000
    }
]

function Orders() {
    const [newOrders, setNewOrders] = useState(orders);
    return (
        <div className='componentcontainer'>
            <span className="text-sm font-semibold">Order Details</span>
            {
                newOrders.map(({id, imageLink, name, variant, quantity, quantityDetails, price})=>(
                    <Order key={id} imageLink={imageLink} name={name} variant={variant} quantity={quantity} quantityDetails={quantityDetails} price={price} />
                ))
            }
            
            
        </div>
    )
}

export default Orders
