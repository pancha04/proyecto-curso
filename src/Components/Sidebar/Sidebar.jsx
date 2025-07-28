import React, { useContext, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlineGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import{ AppThemeContext} from "../../Context/AppThemeContext"
import { BsTelephone } from "react-icons/bs";
import Phone from "../../Responsive/Phone";
import { useLocation } from "react-router-dom";
const Sidebar=()=>{
    const {toggleTheme}=useContext(AppThemeContext)
    const isPhone=Phone()
    const location=useLocation()
    const isChatRoute = location.pathname.match(/^\/contactos\/\d+\/mensajes/)

    return(
        <div className="sidebar">
            {(!isPhone || !isChatRoute) && (
                <div className="sidebar-content">
                <div className="sidebar-icons-top">
                    <div className="icon desktop-only"><LuMenu /></div>
                    <div className="icon"><MdOutlineChat /></div>
                    <div className="icon"><HiStatusOnline /></div>
                    <div className="icon"><MdOutlineGroups /></div>
                    <div className="icon"><BsTelephone /></div>
                    <button className="toggle-theme" onClick={toggleTheme}></button>
                </div>
                <div className="sidebar-icons-bottom">
                    <div className="icon"><IoSettingsOutline /></div>
                    <div className="contact-avatar contact-avatar-sidebar desktop-only">
                        <img src="/assets/avatar-hombre3.avif" alt="" />
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Sidebar