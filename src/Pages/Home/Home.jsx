import Navbar from "../../Components/Navbar/Navbar";
import HeroImg from "../../Images/Hero-01.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero section 1  */}

      <div id="hero-main">
        <div className="hero-text">
          <h1>
            Your Pet's Happiness, <br /> Our Priority!
          </h1>
          <p>
            "Your pet’s happiness is our mission! Shop our curated selection of
            premium food, health essentials, and trendy accessories tailored for
            every furry friend."
          </p>
          <button>Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      {/* 2nd Hero Section  */}

      <div className="two-main">
        <div className="hero2">
        <div className="inside-text"> <h1>Food</h1></div>
        <div className="inside-text"><h1>Medicine</h1></div>
        <div className="inside-text"><h1>Accessories</h1></div>
        </div>
      </div>







    </div>  //main div container
  );
}

export default Home;
