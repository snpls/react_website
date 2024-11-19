import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"


const Navbar = () => {
  const [nav,setNav] = useState(false);
  const toggleNavIcon = () =>{setNav(!nav)};

  return (
    <div className="container mx-auto px-3 text-white flex justify-between items-center py-5 relative">
        <h1 className="w-full text-3xl font-bold text-primaryGreen">React.</h1>
        <ul className="hidden gap-5 md:flex">
            <li><a href="">Home</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <div onClick={toggleNavIcon} className="md:hidden">
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile screen */}
        <div className={nav ? "absolute right-0 mx-3 top-20 w-[70%] bg-gray-800 rounded-md transition-all duration-500 ease-in-out" : "absolute top-20 right-[-50%]"}>
          <ul className="flex flex-col gap-5 py-10 pl-12 text-xl ">
            <li><a href="">Home</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar