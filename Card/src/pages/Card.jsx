import Footer from '../components/Footer'
import Information from '../components/Info'
import About from '../components/About'
import Interests from '../components/Interests'
function Card(){
    return(
    <div className="container">
        <Information />
        <main>
            <About />
            <Interests />
        </main>
        <Footer />   
    </div>
    )
}
export default Card