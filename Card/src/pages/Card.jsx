import Footer from '../components/Footer'
import Information from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
import  Langswitcher from "../components/Langswitcher"

//import { createContext, useState } from 'react'
//import Toggle from '../components/Toggle'
//import Switch from "react-switch";
//export  const ThemeContext = createContext(null)

function Card(){
    
    // const [theme, setTheme] = useState("")
    // const toggleTheme =() =>{
    // setTheme ((curr)=>curr === "" ? "light" : "")}

    return(

        <>
            <div  className="container">
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