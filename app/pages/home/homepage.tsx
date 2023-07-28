'use client'
import { ThemeProvider } from '@mui/material'
import FirstBlock from './blocks/FirstBlock'
import SecondBlock from './blocks/SecondBlock'
import theme from '@/app/theme/theme'


export default function Home() {

    return (
        <ThemeProvider theme={theme}>
           <FirstBlock />
           <SecondBlock />
        </ThemeProvider>
    )
}