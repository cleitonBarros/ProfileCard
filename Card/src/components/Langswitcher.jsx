import { useTranslation } from "react-i18next"
import { languageOptions } from "../data/languagesOptions"
import { NavLink } from 'react-router-dom'


export default function Langswitcher(){
    const {t, i18n} = useTranslation ()
    return(
        <div className="languageSwitcher">
            
            {
            languageOptions.map(language =>{
                return(
                    <button 
                        key={language.value} 
                        onClick={()=>{i18n.changeLanguage(language.value)}}>
                          
                        <img src={language.flag} alt={language.name}/>
                    </button>
                )
            })
            }
           
        </div>
    )
}