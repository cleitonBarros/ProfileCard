
import profileImg from '../assets/foto.png'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/Mail.svg'



function Information(){
    return (
        <header> 
            <img className ="imgProfile"src={profileImg} alt="profile img" />
            {/* <div className="boximg">
                
            </div> */}
            
            <div className="basicInfo p-1">
                <p className="nameParagraph">Cleiton Barros</p>
                <p className="roleParagraph">Frontend Developer</p>
                <span className="ioParagraph">cleitonBarros.io</span>
            </div>
            <div className="buttonBox p-1" >
                <a className="btn btnEmail "><img src={mailIcon} alt="mail icon" /> Email</a>
                <a className="btn btnLinkedin "><img src={linkedinIcon} alt="linkedin icon" /> Linkedin</a>
            </div>
        </header>
    )
}
 export default Information