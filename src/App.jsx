import { Route, Routes } from 'react-router-dom'
import { Auth } from '../components/auth'
import ProfileSetup from './pages/ProfileSetup'
import { Dashboard } from '../components/dashboard'
import StudyRoom from './pages/StudyRoom'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Landing from './pages/landing'

import './landing.css'


function App() {
  return(
    <div className='app'>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/profile" element={<ProfileSetup/>}/>
      <Route path="/room" element={<StudyRoom/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
     
    </Routes>
    </div>
  )
  
}

export default App

