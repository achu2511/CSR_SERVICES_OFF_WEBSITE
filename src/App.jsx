// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Bg from './components/bg'
import About from './components/About'
import Home from './components/home'
import  Footer from '../src/Arwin/components/Footer'
import Person from './Arwin/pages/person'
import Service from './components/service'
import Why from './components/why'
import Review from './Arwin/pages/feedback'
import 'rsuite/dist/rsuite.min.css';
import Contact from './Arwin/pages/contact'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <About/>
      <Person/>
      <Why/>
      <Service/>
      <Review/>
      <Contact/>
      {/* <Footer/>
      <Bg/> */}
    </>
  )
}

export default App
