import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import HeroImg from "../../Images/Hero-01.png";
import "./Home.css";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../Utils/firebase";

function Home() {


    const [activeMembers, setActiveMembers] = useState(0);
    const [countries, setCountries] = useState(0);
    const [awards, setAwards] = useState(0);
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);


    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const productCollection = collection(db, "products");
        const q = query(
          productCollection,
          orderBy("createdAt", "desc"),
          limit(3)
        );
        const doc = await getDocs(q);
        const arr = [];
        doc.forEach((product) => arr.push({ ...product.data(), id: product.id }));
        setProducts([...arr]);
        // console.log("arr=>", arr);
      } catch (error) {
        console.log("error=>", error);
      }
    };




const handleSeeAll = ()=>{

    navigate("/shop")

}

useEffect(() => {
    // Animate active members
    const activeMemberInterval = setInterval(() => {
      if (activeMembers < 750000) {
        setActiveMembers((prev) => prev + 10000); // Adjust increment as needed
      }
    }, 20); // Adjust the interval for speed

    // Animate countries
    const countriesInterval = setInterval(() => {
      if (countries < 120) {
        setCountries((prev) => prev + 2); // Increment by 1
      }
    }, 20); // Adjust the interval for speed

    // Animate awards
    const awardsInterval = setInterval(() => {
      if (awards < 217) {
        setAwards((prev) => prev + 2); // Increment by 1
      }
    }, 20); // Adjust the interval for speed

    return () => {
      clearInterval(activeMemberInterval);
      clearInterval(countriesInterval);
      clearInterval(awardsInterval);
    };
  }, [activeMembers, countries, awards]);



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

      {/* 3rd Hero Section  */}

      <div className="three-main">

        <div className="see-all">
            <div className="latest">
                <h1>Latest</h1>
            </div>
            <div className="see-btn">
                <button onClick={handleSeeAll}>See All</button>
            </div>
        </div>

        <div className="container-main">
          {products.map((data)=>(
            <Link to={"/shop"}  key={data.id}>

            <div className="product-box">
                <img className="image" src={data.img} alt="" />

                <h1>{data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}</h1>
                <p>{data.desc.length > 30 ? `${data.desc.slice(0,40)}...` : data.desc}</p>
                <button>Buy</button>
            </div>

            </Link>
          ))}
           
        </div>
      </div>
    

    {/* 4th Section  */}

    <div className="community">
        <h1>
          <span>Our Community</span>
        </h1>

        <div className="community-counter">
          <div className="member">
            <h1>{activeMembers}</h1>
            <h1>Active Memeber</h1>
          </div>

          <div className="countries">
            <h1>{countries}</h1>
            <h1>Countries</h1>
          </div>

          <div className="award">
            <h1>{awards}</h1>
            <h1>Award</h1>
          </div>
        </div>
      </div>

  <Footer/>





    </div>  //main div container
  );
}

export default Home;
