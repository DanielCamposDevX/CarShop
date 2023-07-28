'use client'
import Image from 'next/image'
import Logo from '@/app/pages/assets/Logo.png'
import Banner from '@/app/pages/assets/Banner.png'
import { Button, createTheme, ThemeProvider, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FacebookOutlined } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function FirstBlock() {

    return (

        <div className={'w-full h-screen flex-col justify-around overflow-clip'}>
            <Image src={Banner} alt='Banner' className={'absolute top-0 left-0 z-0 drop-shadow-md h-screen'} />
            <header className={"h-44 flex items-center justify-around z-10 relative top-0 left-0"}>
                <div className={'flex items-center justify-center w-60 font-black z-10 text-2xl hover:text-3xl hover:cursor-pointer'}>
                    <Image src={Logo} alt='Logo' className={'w-36 hover:w-40'} />
                    <h1 className={' text-white drop-shadow-md md:text-lg text-sm'}>SHADOW AUTOMOBILE</h1>
                </div>
                <div className='md:flex hidden '>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-md w-32 h-12 font-black hover:bg-opacity-10 hover:bg-white'}>News</Button>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-md w-32 h-12 font-black hover:bg-opacity-10 hover:bg-white'}>Our Cars</Button>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-md w-32 h-12 font-black hover:bg-opacity-10 hover:bg-white'}>Our Mission</Button>
                    <IconButton color="secondary" className='w-20'><InstagramIcon /></IconButton>
                    <IconButton color="secondary" className='w-20'><FacebookOutlined /></IconButton>
                </div>
                <div className='md:hidden flex'>
                <Button variant="text" size='large' color="secondary" aria-label="large text" className={''}>---</Button>
                </div>
            </header>
            <div className={'absolute bottom-20 md:left-24 left-0 md:flex z-20 md:justify-around justify-center items-center'}>
                <div className={'z-20  w-1/2'}>
                    <h1 className={'text-white md:text-7xl text-xl font-black z-20 tracking-wide drop-shadow-2xl'}>LET'S GET YOU <span className={'text-red-700'}>ON THE ROAD</span></h1>
                </div>
                <Button variant="contained" color='primary' className='h-16 md:w-1/4 w-2/4 rounded-3xl bg-red-600 text-md font-bold hover:bg-red-500' endIcon={<ArrowForwardIcon />}>Request a quote</Button>
            </div>
        </div>

    )
}