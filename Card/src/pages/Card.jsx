import Footer from '../components/Footer'
import Information from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
import  Langswitcher from "../components/Langswitcher"

import Toggle from  '../components/Toggle'

import { useState } from 'react'
//import Switch from "react-switch";
//export  const ThemeContext = createContext(null)

function Card(){
    
    const [swichToggle , setSwitchToogle] = useState(false)
    const toggleSwitch = () =>{
    
    swichToggle ? setSwitchToogle(false) : setSwitchToogle(true)
    console.log(swichToggle)
    }

    return(

        <>
            <div id={swichToggle ? "light": ''} className="container">
                <Toggle value={toggleSwitch} />
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