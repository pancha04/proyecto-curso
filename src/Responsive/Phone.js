import { useEffect, useState } from "react"; 

const Phone =(breakpoint=480)=>{
    const [isPhone, setIsPhone]=useState(window.innerWidth<breakpoint)
    
    useEffect(()=>{
        const handleResize=()=>{
            setIsPhone(window.innerWidth<breakpoint)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        }, [breakpoint])

        return isPhone
    }

export default Phone