import Footer from '../components/Footer'
import Information from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
import { createContext, useState } from 'react'
import Toggle from "../components/toggle"
import Switch from "react-switch";





export  const ThemeContext = createContext(null)



function Card(){
    
    const [theme, setTheme] = useState("")
    const toggleTheme =() =>{
    setTheme ((curr)=>curr === "" ? "light" : "")
}

    return(

        <ThemeContext.Provider value={{theme, toggleTheme}}>
             <div id={theme} className="container">
                <Information />
                <main>
                    <About />
                    <Interests />
                </main>
                <Footer />   
            </div>
            <Switch className="switch" onChange={toggleTheme} checked={theme === "light"} />
        </ThemeContext.Provider>
    )
}
export default Card