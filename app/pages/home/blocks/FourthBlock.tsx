'use client'

export default function FourthBlock() {

    return (

        <div className='h-screen w-full z-30 custom-img2 flex flex-col justify-center items-center'>
            <div className="bg-black w-1/3 md:text-7xl text-3xl font-bold md:mb-28 mb-10 p-4 rounded-2xl drop-shadow-lg"><h1>Get in Touch</h1></div>
            <div className="flex justify-around md:flex-row flex-col bg-black w-full md:p-24">
                <div className="bg-black md:w-1/4 m-5"><h1 className="md:text-3xl text-xl text-red-500 ">Mailing Address</h1> <p className="md:text-md">23 Anywhere St., Any City State, Country 12345</p></div>
                <div className="bg-black md:w-1/4 m-5"><h1 className="md:text-3xl text-xl text-red-500">Email Address</h1> <p className="md:text-md">hello@reallygreatsite.com</p></div>
                <div className="bg-black md:w-1/4 m-5"><h1 className="md:text-3xl text-xl text-red-500">Phone Number</h1> <p className="md:text-md">(123)456-7890</p></div>
                <div className="bg-black md:w-1/4 m-5"><h1 className="md:text-3xl text-xl text-red-500">Socials</h1> <p className="md:text-md">@reallygreatsite</p></div>

            </div>
        </div>

    )
}