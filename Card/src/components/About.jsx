
import { useTranslation } from "react-i18next"
import { Langswitcher } from "./Langswitcher"

function About(){
    const {t} = useTranslation();
    return (
    <div className="p-1">
        <h3>{t('about')}</h3>
        <p className="text">{t('textAbout')}</p>
       
    </div>
    )
}
 export default About