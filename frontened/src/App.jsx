import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Compiler from './pages/Compiler'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Logout from "./pages/Logout";
import Userdata from "./components/getUser/Userdata";
import Add from "./components/addUser/Add";
import Edit from "./components/updateUser/Edit";

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
      <Route path="/problems" element={<Userdata />} />
      <Route path="/add" element={<Add />}/>
      <Route path="/edit/:id" element={<Edit />}/>
      <Route path='/compiler/:id'element={<Compiler />}/>
      <Route path="/compiler" element={<Compiler />}/>
      <Route path="/logout" element={<Logout />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
