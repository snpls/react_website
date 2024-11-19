import Laptop from '../assets/laptop.jpg'

const Features = () => {
  return (
    <div className="bg-white">
        <div className='container mx-auto px-5 py-20 flex flex-col || lg:flex-row lg:px-32'>
            <img className='w-[100%] || lg:w-[40%]' src={Laptop} alt="" />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-5 text-center || lg:text-start lg:pl-12'>
                    <p className="uppercase text-primaryGreen text-lg font-semibold || lg:text-2xl">growing with data analytics</p>
                    <h1 className="text-4xl font-bold || lg:text-6xl">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus sint quam iusto odio? Tenetur adipisci ipsam et minima quae, dignissimos hic dicta, odio nam eligendi quas doloremque maiores! Laboriosam!</p>
                    <div>
                        <button className="bg-black text-white py-4 px-12 mt-10 rounded-md font-semibold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features