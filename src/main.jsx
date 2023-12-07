import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import T from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider theme={T.colors}>
       <GlobalStyles/>
    <AuthProvider >
         <Routes />
    </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
    );
