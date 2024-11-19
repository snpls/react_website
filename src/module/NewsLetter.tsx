

const NewsLetter = () => {
  return (
    <div className="container mx-auto px-5 py-20 text-white flex items-start justify-between flex-col gap-10 text-center || lg:flex-row lg:text-start ">
        <div className="w-[100%] || lg:w-[50%]">
            <h1 className="text-3xl font-semibold">Want tips & tricks to optimized your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="w-[100%] || lg:w-[50%]">
            <div className="flex gap-5 flex-col mb-5 || lg:flex-row ">
                <input type="email" placeholder="Enter your email" className="p-4 rounded-md w-[100%]"/>
                <button className="bg-primaryGreen px-16 rounded-md py-4 || lg:py-1">Notify me</button>
            </div>
            <p>We care about your proctection of your data. Read our <span className="text-primaryGreen underline">Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default NewsLetter