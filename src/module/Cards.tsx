import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className="bg-white">
    <div className="container mx-auto px-40 py-28 grid grid-cols-3 text-center gap-16">
        {/* card 1 */}
        <div className="flex flex-col gap-10 py-14 shadow-xl rounded-xl cursor-pointer transition-all duration-300 hover:scale-110">
            <img className='w-28 mx-auto -mt-24 ' src={single} alt="" />
            <div className="font-bold text-2xl space-y-3">
                <h1>Single User</h1>
                <h1>$149</h1>
            </div>
            <div className="font-semibold px-16">
                <p className="border-t-2 border-gray-300 py-1">500 GB Storage</p>
                <p className="border-t-2 border-gray-300 py-1">1 User Allowed</p>
                <p className="border-y-2 border-gray-300 py-1">Send up to 2GB</p>
            </div>
            <div>
                <button className="bg-primaryGreen py-2 px-6 rounded-md font-semibold">Start Trial</button>
            </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col gap-10 py-14 shadow-xl rounded-xl cursor-pointer bg-gray-200 transition-all duration-300 hover:scale-110">
            <img className='w-28 mx-auto -mt-24 ' src={double} alt="" />
            <div className="font-bold text-2xl space-y-3">
                <h1>Partnership</h1>
                <h1>$199</h1>
            </div>
            <div className="font-semibold px-16">
                <p className="border-t-2 border-gray-300 py-1">1TB Storage</p>
                <p className="border-t-2 border-gray-300 py-1">3 User Allowed</p>
                <p className="border-y-2 border-gray-300 py-1">Send up to 10GB</p>
            </div>
            <div>
                <button className="bg-black py-2 px-6 text-white rounded-md font-semibold">Start Trial</button>
            </div>
        </div>

        {/* card 3 */}
        <div className="flex flex-col gap-10 py-14 shadow-xl rounded-xl cursor-pointer transition-all duration-300 hover:scale-110">
            <img className='w-28 mx-auto -mt-24 ' src={triple} alt="" />
            <div className="font-bold text-2xl space-y-3">
                <h1>Group Account</h1>
                <h1>$299</h1>
            </div>
            <div className="font-semibold px-16">
                <p className="border-t-2 border-gray-300 py-1">5 TB Storage</p>
                <p className="border-t-2 border-gray-300 py-1">10 User Allowed</p>
                <p className="border-y-2 border-gray-300 py-1">Send up to 20 GB</p>
            </div>
            <div>
                <button className="bg-primaryGreen py-2 px-6 rounded-md font-semibold">Start Trial</button>
            </div>
        </div>
        

      
    </div>
    </div>
  )
}

export default Cards