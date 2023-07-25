'use client'
import Interior from '../assets/Interior.jpg'
import Engine from '../assets/Engine.jpg'
import Image from 'next/image'


export default function SecondBlock() {

    return (

        <div className='h-screen w-full bg-white z-30'>
            <div className='h-1/2 w-full bg-red-700 flex z-30 justify-around items-center'>
                <h1 className='text-7xl text-black w-1/5 flex flex-wrap font-black'>SHADOW'S <span className='text-7xl text-white font-black'>MISSION</span></h1>
                <Image className='w-1/3 rounded-md' src={Interior} alt="interior" /></div>
            <div className='h-1/2 w-full bg-white flex z-30 justify-around items-center'>
                <Image className='h-4/5 rounded-md' src={Engine} alt="Motor" />
                <div className='flex flex-wrap  w-2/5'><p className='text-2xl text-black'>Shadow Automobile is a leading brand in car design, manufacturing, and maintenance. With our cutting-edge technology, we give you tomorrow's vehicles, today!</p></div>
            </div>
        </div>

    )
}