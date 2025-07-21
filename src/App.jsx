import React from "react"
import ChatScreen from "../src/Screen/ChatScreen/ChatScreen"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactScreen from "../src/Screen/ContactScreen/ContactScreen"
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {
	return (
    <div>
      <Routes>
        <Route path="/" element={<ContactScreen />} />
        <Route path="/contactos/:id/mensajes" element={<ChatScreen />} />
      </Routes>
    </div>
  )
}

export default App
