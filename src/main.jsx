import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
<<<<<<< HEAD
import ContactContextProvider from './Context/ContactContext.jsx'
import  AppThemeContextProvider from './Context/AppThemeContext.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppThemeContextProvider>
          <ContactContextProvider>
                <App />
          </ContactContextProvider>
      </AppThemeContextProvider>
=======

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App/>
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
    </BrowserRouter>
)
