import React from 'react'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/register'element={<Signup />}/>
      <Route path='/login'element={<Login />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
