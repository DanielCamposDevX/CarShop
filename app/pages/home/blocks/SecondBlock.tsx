'use client'
import Interior from '@/app/pages/assets/Interior.jpg'
import Engine from '@/app/pages/assets/Engine.jpg'
import Image from 'next/image'


export default function SecondBlock() {

    return (

        <div className='h-screen w-full bg-white z-30'>
            <div className='h-1/2 w-full bg-red-700 flex z-30 md:justify-around justify-center items-center md:flex-row flex-col'>
                <h1 className='md:text-7xl text-5xl text-black md:w-1/5 flex flex-wrap font-black'>SHADOW'S <span className='md:text-7xl text-5xl text-white font-black'>MISSION</span></h1>
                <Image className='w-1/3 rounded-md md:flex hidden' src={Interior} alt="interior" /></div>
            <div className='h-1/2 w-full bg-white flex z-30 justify-around items-center'>
                <Image className='h-4/5 w-auto rounded-md md:flex hidden' src={Engine} alt="Motor" />
                <div className='flex flex-wrap  md:w-2/6'><p className='md:text-2xl text-black'>Shadow Automobile is a leading brand in car design, manufacturing, and maintenance. With our cutting-edge technology, we give you tomorrow's vehicles, today!</p></div>
            </div>
        </div>

    )
}