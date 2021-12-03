import {AiOutlineArrowLeft} from 'react-icons/ai'
function Header() {
    return (
        <div className="flex items-center p-2 bg-pink-600">
            <AiOutlineArrowLeft color="white"/>
            <span className="ml-2 text-white"> ORDER INFORMATION</span>
        </div>
    )
}

export default Header
