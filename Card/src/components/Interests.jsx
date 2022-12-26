import { useTranslation } from "react-i18next"
function Interests(){
    const {t} = useTranslation();
    return (   
    <div className="p-1">
        <h3 >{t('interests')}</h3>
        <p className="text">{t('textInterests')}</p>
    </div>
    )
}
 export default Interests