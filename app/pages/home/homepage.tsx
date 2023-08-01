'use client'
import { ThemeProvider } from '@mui/material'
import FirstBlock from './blocks/FirstBlock'
import SecondBlock from './blocks/SecondBlock'
import ThirdBlock from './blocks/ThirdBlock'
import FourthBlock from './blocks/FourthBlock'
import theme from '@/app/theme/theme'


export default function Home() {

    return (
        <ThemeProvider theme={theme}>
           <FirstBlock />
           <SecondBlock />
           <ThirdBlock />
           <FourthBlock />
        </ThemeProvider>
    )
}
