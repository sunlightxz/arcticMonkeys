import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Vide from './component/Vide'
import Tours from './component/Tours'
import Albums from './component/Albums'
import Footer from './component/Footer'

function App() {

  return (
    <div className ="bg-black text-white font-Poppins">
      <Nav/>
      <Hero/>
      <About/>
      <Vide/>
      <Albums/>
      <Tours/>
      <Footer/>
    </div>
  )
}

export default App
