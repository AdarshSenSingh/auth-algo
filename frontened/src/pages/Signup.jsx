import { useState } from "react";
import { Navigate } from "react-router-dom";
import './Signup.css';
import img from "../assets/register.png"

const navigate= Navigate();
const Signup = () => {
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    mobile_no: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response= await fetch('http://localhost:5000/auth/register',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
      });
      if(response.ok){
        setUser({ user_name: "",
          email: "",
          mobile_no: "",
          password: "",});
          navigate("/login");

      }
  
      console.log(response);
    } catch (error) {
      console.log({"error inside the register portion":error})
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
                  src= {img}
                  alt="a nurse with a cute look"
                  width="400"
                  height="400"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="user_name">username</label>
                    <input
                      type="text"
                      name="user_name"
                      value={user.user_name}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile_no">mobile_no</label>
                    <input
                      type="number"
                      name="mobile_no"
                      value={user.mobile_no}
                      onChange={handleInput}
                      placeholder="mobile"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
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
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Signup;