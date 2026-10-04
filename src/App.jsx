import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Viewproduct from './Viewproduct.jsx'
import Addproduct from './Addproduct.jsx'
import Home from './Home.jsx'
import Pagenotfound from './Pagenotfound.jsx'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer/>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
           <Route path='addproduct' element={<Addproduct />}/>
            <Route path='viewproduct' element={<Viewproduct />} />
            <Route path='*' element={<Pagenotfound/>}/>
        </Routes>

    </Router>
  )
}

export default App
