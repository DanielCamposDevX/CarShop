'use client'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import Banner from '../assets/Banner.png'
import { Button, createTheme, ThemeProvider, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FacebookOutlined } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function FirstBlock() {

    return (

        <div className={'w-full h-screen flex-col justify-around overflow-clip'}>
            <Image src={Banner} alt='Banner' className={'absolute top-0 left-0 z-0 drop-shadow-md h-screen'} />
            <header className={"h-44 flex items-center justify-around z-10 relative top-0 left-0"}>
                <div className={'flex items-center justify-center w-96 font-black z-10 text-2xl hover:text-3xl hover:cursor-pointer'}>
                    <Image src={Logo} alt='Logo' className={'w-44 hover:w-48'} />
                    <h1 className={' text-white drop-shadow-md'}>SHADOW AUTOMOBILE</h1>
                </div>
                <div className='flex'>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-xl w-52 h-20 font-black hover:bg-opacity-10 hover:bg-white'}>News</Button>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-xl w-52 h-20 font-black hover:bg-opacity-10 hover:bg-white'}>Our Cars</Button>
                    <Button variant="text" size='large' color="secondary" aria-label="large text" className={'text-xl w-52 h-20 font-black hover:bg-opacity-10 hover:bg-white'}>Our Mission</Button>
                    <IconButton color="secondary" className='w-20'><InstagramIcon /></IconButton>
                    <IconButton color="secondary" className='w-20'><FacebookOutlined /></IconButton>
                </div>
            </header>
            <div className={'absolute bottom-32 left-24 flex z-20 justify-between items-center'}>
                <div className={'z-20  w-1/2'}>
                    <h1 className={'text-white text-8xl font-black z-20 tracking-wide drop-shadow-2xl'}>LET'S GET YOU <span className={'text-red-700'}>ON THE ROAD</span></h1>
                </div>
                <Button variant="contained" color='primary' className='h-20 w-1/3 rounded-3xl bg-red-600 text-xl font-bold hover:bg-red-400' endIcon={<ArrowForwardIcon />}>Request a quote</Button>
            </div>
        </div>

    )
}