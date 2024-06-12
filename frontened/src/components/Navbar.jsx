import { NavLink ,useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    };
  return (
    <>
    <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to="/">Algo-auth</NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/register">Signup</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/compiler">Compiler</NavLink></li>
                    <li><NavLink to="/create">Create Problem</NavLink></li>
                </ul>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar;




