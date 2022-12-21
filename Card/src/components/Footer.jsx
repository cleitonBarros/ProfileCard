
import faceIcon from '../assets/Facebook Icon.svg'
import githubIcon from '../assets/GitHub Icon.svg'
import instaIcon from '../assets/Instagram Icon.svg'
import twitterIcon from '../assets/Twitter Icon.svg'

function Footer(){
    return (
        <footer>
            <ul>
                <li> <a target="_blank" href="#"> <img src={twitterIcon}/> </a> </li>
                <li> <a target="_blank" href="#"> <img src={faceIcon}/> </a> </li>
                <li> <a target="_blank" href="#"> <img src={instaIcon}/> </a> </li>
                <li> <a target="_blank" href="https://github.com/cleitonBarros"> <img src={githubIcon}/> </a> </li>
            </ul>
        </footer>
    )
}
 export default Footer