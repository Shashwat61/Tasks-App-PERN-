import {AiOutlineArrowRight} from 'react-icons/ai'

function BigComponent({heading, description}) {

    return (
        <div className="componentcontainer">
            <div className="componentdisplay">
                <span className="text-sm font-semibold" >{heading}</span>
                <AiOutlineArrowRight/>
            </div>
            <div className="pt-2 text-sm">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BigComponent
