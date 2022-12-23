import { useTranslation } from "react-i18next"
import languagesOptions from "../data/languagesOptions"

export const  Langswitcher=() =>{
    const {t, i18n} = useTranslation ()
    const options =languagesOptions.map(languague =>{
    <button 
        key={languague.value} 
        onClick={()=>{i18n.changeLanguage(languague.value)}}
    >
        <img src={languague.flag} alt={languague.name}/>
    </button>
})
    
    return(
        <div className="languageSwitche">
            <span>{t('about')}</span>
            {options}
            <span>{languagesOptions.name}</span>
        </div>
    )
}