import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../token/auth';

const Navbar = () => {
    const { isLogin } = useAuth();


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

                            {isLogin ? <> 
                                
                                <li><NavLink to="/problems">Problems</NavLink></li>
                    <li><NavLink to="/compiler">Compiler</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li> </> :
                                <>
                                    <li><NavLink to="/register">Signup</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                            </>}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;




