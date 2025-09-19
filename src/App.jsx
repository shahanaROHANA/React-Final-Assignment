
import { Routes,Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'


import "./components/style.css/addstudents.css"
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

function App() {


  return (
    <>
   < Navbar />

     <Routes>
     <Route path='/Home' element={<Home/>}></Route>
     <Route path='/students' element={<StudentForm/>}></Route>
    
     <Route path='/About' element={<About/>}></Route>

     </Routes>
     
    
    </>
  )
}

export default App
