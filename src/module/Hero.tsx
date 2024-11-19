import { ReactTyped } from "react-typed"


const Hero = () => {
  return (
    <div className="container px-3 mx-auto h-screen flex flex-col items-center justify-center pb-30">
        <div className="text-center space-y-5">
            <p className="uppercase text-primaryGreen text-lg font-semibold || lg:text-2xl">growing with data analytics</p>
            <h1 className="text-white text-4xl font-bold || lg:text-8xl">Grow with data.</h1>
            <h2 className="text-white text-2xl font-semibold || lg:text-6xl">Fast, flexible financing for <ReactTyped className="text-gray-500" strings ={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={140} loop/></h2>
            <p className="text-gray-500 text-sm || lg:text-xl">Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.</p>
            <button className="bg-primaryGreen py-4 px-12 rounded-md font-semibold">Get Started</button>
        </div>
    </div>
  )
}

export default Hero