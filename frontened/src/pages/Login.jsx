import { useState } from "react";
import './Login.css';
import img from "../assets/register.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../token/auth.jsx";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const showErrorPopup = () => {
    toast.error("Enter correct details", {
      position: "top-center",
      className: "custom-toast",
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success("Login Sucessfully", { position: 'top-right' });
        const data = await response.json();
        storeTokenInLS(data.token);

        setUser({
          email: "",
          password: "",
        });

        navigate("/problems");
      } else {
        showErrorPopup();
        const errorData = await response.json();
        console.error("Error:", errorData.msg);
      }
    } catch (error) {
      console.error("Error while login:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src={img}
                  alt="a nurse with a cute look"
                  width="400"
                  height="400"
                />
              </div>
              {/* our main registration code */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now!
                  </button>
                </form>
                <div className="tosignup">
                  <p>Do not have an account</p>
                  <NavLink to="/register">Register here</NavLink>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
