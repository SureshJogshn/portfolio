import './App.css'
import About from './components/About'
import Aitools from './components/Aitools'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tech from './components/Tech'

const App = () => {
  
  return (
    <div>
          <Header/>
       <Hero/>
        <Projects/>
       <Tech/>
       <Aitools/>
       <About/>
       <Footer/>
    </div>
  )
}

export default App
