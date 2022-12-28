import Footer from '../components/Footer'
import Information from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
import  Langswitcher from "../components/Langswitcher"

import Toggle from  '../components/ToggleBtn'

import { useState,useEffect } from 'react'
//import Switch from "react-switch";
//export  const ThemeContext = createContext(null)

function Card(){
    
    const getSwitchToggle = () =>{
        return JSON.parse(localStorage.getItem('switchToggle')) || false
    }

    const [switchToggle , setSwitchToogle] = useState(getSwitchToggle())

    useEffect(()=>{
        localStorage.setItem('switchToggle',JSON.stringify(switchToggle))
    },[switchToggle])

    const toggleSwitch = () =>{
        switchToggle ? setSwitchToogle(false) : setSwitchToogle(true)
    }
    return(

        <>
            <div id={switchToggle ? "light": ''} className="container">
                <Toggle chk={switchToggle} value={toggleSwitch} />
                <Information   />
                <main>
                    <About />
                    <Interests />
                </main>
                <Footer />   
            </div>
                <Langswitcher />
        </>

           
            
        
    )
}
export default Card