import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ChatScreen from '../src/Screen/ChatScreen/ChatScreen'
import ContactScreen from '../src/Screen/ContactScreen/ContactScreen'
import Sidebar from '../src/Components/Sidebar/Sidebar'
import Mobile from '../src/Responsive/Mobile'
import { AppThemeContext } from '../src/Context/AppThemeContext'
import './styles.css'


function App() {
  const isMobile = Mobile()
  const location = useLocation()
  const isChatRoute = location.pathname.startsWith('/contactos/')
  const { app_theme } = useContext(AppThemeContext)

  return (
    <div className={`background-${app_theme}`}>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="App-content">
          
          {(!isMobile || !isChatRoute) && (
            <div className="contacts-content">
              <ContactScreen/>
            </div>
          )}

          {(!isMobile || isChatRoute) && (
            <div className={`chat-screen-container ${isMobile && isChatRoute ? 'show-on-mobile' : ''}`}>
              <Routes>
                <Route path="/contactos/:id/mensajes" element={<ChatScreen />} />
              </Routes>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
