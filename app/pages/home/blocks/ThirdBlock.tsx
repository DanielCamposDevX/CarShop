'use client'

export default function ThirdBlock() {

    return (

        <div className='h-screen w-full bg-black z-30 flex flex-col justify-center items-center'>
            <h1 className='text-red-500 md:text-6xl text-5xl font-bold'>CLIENT STORIES</h1>
            <div className='flex justify-around mt-20'>
                <div className='flex flex-col justify-around items-center md:w-1/4 w-2/5'><h1 className='text-red-500 md:text-3xl text-xl font-bold mb-5'>Matthew Pace</h1> <p className="text-md font-medium text-justify">My car badly needed repair so early in the morning and Micharlet Auto came thru at 4:30 am! Talk about excellent customer service! </p></div>
                <div className='flex flex-col justify-around items-center md:w-1/4 w-2/5'><h1 className='text-red-500 md:text-3xl text-xl font-bold mb-5'>Casper Zoltan</h1> <p className="text-md font-medium text-justify">The brand new models available at the showroom made it hard for me to choose—they were all so good and I wanted them all.  </p></div>
                <div className='md:flex hidden flex-col justify-around items-center w-1/4'><h1 className='text-red-500 md:text-3xl text-xl font-bold mb-5'>Tom Gyllenhaal</h1> <p className="text-md font-medium text-justify">Shadow's has assisted me from start to finish. They listened to what I needed and suggested models based on my budget.  </p></div>

            </div>
            
        </div>

    )
}