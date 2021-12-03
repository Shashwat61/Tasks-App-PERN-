function Order({id, imageLink, name, price, quantity, quantityDetails, variant}) {
    return (
        <div className="my-1">
            <div className="flex">
                <div>
                <img src={imageLink} alt={name} className="object-contain w-20 h-20" />
                </div>
                <div className="pl-1">
                    <span className="text-xs font-semibold uppercase" >{name}</span>
                    <div className="p-1 text-xs font-semibold bg-gray-300 rounded-sm w-max">
                        <span>Variant:{' '}{variant}</span>
                    </div>
                    <div className="text-xs ">
                        <span>{quantity}{' '} PCS {' '} 
                        <span>({quantityDetails}) @</span>{' '}
                        <span className="text-pink-500">Rp.{price}.000</span>
                        
                        </span>
                    </div>
                </div>

            </div>
            <form className="border-b-2 border-gray-300">
            <input className="w-full p-1 text-xs bg-transparent focus:outline-none focus:border-none" type="text" placeholder="Optional message here"/>
            </form>
            
        </div>
    )
}

export default Order
