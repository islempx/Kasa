
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'  
import Error from './pages/Error'
import Home from './pages/home' 
import Fiche from './pages/Fiche'  


function App() {
 return( 
<div>
<Header/>
<Footer />
<Home />
<About />
<Error />
<Fiche />
</div>
 )
}

export default App
