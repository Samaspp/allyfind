import { Route, Routes } from 'react-router-dom'
import { Auth } from '../components/auth'
import ProfileSetup from './pages/ProfileSetup'
<<<<<<< Updated upstream
import { Dashboard } from '../components/dashboard'
=======
import StudyRoom from './pages/StudyRoom'


>>>>>>> Stashed changes
import './App.css'

function App() {
  return(
    <div className='app'>
      
    <Routes>
      <Route path="/" element={<Auth/>} />
<<<<<<< Updated upstream
      <Route path="/profile/:userId" element={<ProfileSetup/>}/>
      {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
      <Route path="/dashboard/:userId" element={<Dashboard />} />
=======
      <Route path="/profile" element={<ProfileSetup/>}/>
      <Route path="/room" element={<StudyRoom/>}/>
>>>>>>> Stashed changes
    </Routes>
    </div>
  )
  
}

export default App

