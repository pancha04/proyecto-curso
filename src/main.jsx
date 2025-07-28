import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ContactContextProvider from './Context/ContactContext.jsx'
import  AppThemeContextProvider from './Context/AppThemeContext.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppThemeContextProvider>
          <ContactContextProvider>
                <App />
          </ContactContextProvider>
      </AppThemeContextProvider>
    </BrowserRouter>
)
