import React from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import './App.css'
import AppBar from './components/AppBar'
import { AppContextProvider } from './contexts/AppContext'
import Control from './components/Control'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppContextProvider>
          <AppBar />
          <Control />
        </AppContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
