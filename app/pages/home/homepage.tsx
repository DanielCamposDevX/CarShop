'use client'
import {createTheme, ThemeProvider } from '@mui/material'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff4545",
        },
        secondary: {
            main: "#ffffff"
        }
    }

})
export default function Home() {

    return (
        <ThemeProvider theme={theme}>
           <FirstBlock />
           <SecondBlock />
        </ThemeProvider>
    )
}