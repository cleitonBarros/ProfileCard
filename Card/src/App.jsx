
import Card from './pages/Card'
import './lib/i18n/i18n'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Router>
        <Card />    
    </Router>
    
  )
}

export default App
