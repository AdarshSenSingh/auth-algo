// import { Analytics } from "../components/Analytics";
import home_img from "../assets/home.png";

 const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>I am a full-stack developer!</p>
              <h1>Welcome to CodeKaro.com</h1>
              <p>
                Are u ready for brush up your coding-skills as well as push your practises on peak.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Contact Me</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src={home_img}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
       
          
        </div>
      </section>
    </>
  );
};
export default Home;