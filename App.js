import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import ToDoList from './components/ToDoList'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path = "/Home" element ={<ToDoList/>}></Route>
          <Route path = "/Contact" element ={<Contact/>}></Route>
        </Routes>
      </div>
    </div>
    
  )
}

export default App