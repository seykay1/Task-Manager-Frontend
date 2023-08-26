import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MyTask from './pages/MyTask'
import NewTask from './pages/NewTask'
import EditTask from './pages/EditTask'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'

function App() {
 const baseURL = 'https://taskmanagerseye.onrender.com'

  return (
    <>
    <Router>
      <MyNav/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/my-task' element={<MyTask baseURL={baseURL} />} />
        <Route path='/new-task' element={<NewTask baseURL={baseURL} />} />
        <Route path='/edit-task/:id' element={<EditTask baseURL={baseURL} />} />
      </Routes>
    
    </Router>

    </>
  )
}

export default App
