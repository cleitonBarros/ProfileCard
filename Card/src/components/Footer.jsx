
import faceIcon from '../assets/Facebook Icon.svg'
import githubIcon from '../assets/GitHub Icon.svg'
import instaIcon from '../assets/Instagram Icon.svg'
import twitterIcon from '../assets/Twitter Icon.svg'

function Footer(){
    return (
        <footer>
            <ul>
                <li> <a href=""> <img src={twitterIcon}/> </a> </li>
                <li> <a href=""> <img src={faceIcon}/> </a> </li>
                <li> <a href=""> <img src={instaIcon}/> </a> </li>
                <li> <a href=""> <img src={githubIcon}/> </a> </li>
            </ul>
        </footer>
    )
}
 export default Footer