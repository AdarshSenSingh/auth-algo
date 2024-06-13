import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Compiler from './pages/Compiler'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import CreateEditProblem from "./pages/CreateEditProblem";
import ProblemList from "./pages/ProblemList";

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
      <Route path="/problems" element={<ProblemList />} />
      <Route path="/create" element={<CreateEditProblem />} />
      <Route path="/edit/:id" element={<CreateEditProblem />} />
      <Route path='/compiler'element={<Compiler />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
