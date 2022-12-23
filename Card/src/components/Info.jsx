
import profileImg from '../assets/foto.png'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/Mail.svg'
import Mail from '../data/main'

import { useTranslation } from "react-i18next"



function Information(props){
    const {t} = useTranslation();

    const btnMail = Mail.map(item =>{
        return(
            <a key={item.index} className="btn btnEmail" target="_blank" href={item.scriptMail}><img src={mailIcon} alt="mail icon" /> Email</a>
        )
    })
    return (
        <header  > 
            <img className ="imgProfile"src={profileImg} alt="profile img" />
            {/* <div className="boximg">
                
            </div> */}
          
            <div className="basicInfo p-1">
                <p className="nameParagraph">Cleiton Barros</p>
                <p className="roleParagraph">{t('roleParagraph')}</p>
                <span className="ioParagraph">cleitonBarros.io</span>
            </div>
            <div  className="buttonBox p-1" >
                {btnMail}
                <a target="_blank" href="https://www.linkedin.com/in/cleiton-de-barros-moura-3ba1a7190/"e className="btn btnLinkedin "><img src={linkedinIcon} alt="linkedin icon" /> Linkedin</a>
            </div>
        </header>
    )
}
 export default Information