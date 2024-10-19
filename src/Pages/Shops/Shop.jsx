import { Link, NavLink } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

import Footer from "../../Components/Footer/Footer"
import "./Shop.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import { db } from "../../Utils/firebase";
dayjs.extend(relativeTime);

function Shop() {

const [products , setproducts ]=useState([])

const {user} = useContext(AuthContext)

// console.log(user);

useEffect(()=>{
  getProducts()
},[])

const getProducts = async ()=>{
  try {

    const productCollection = collection(db,"products")
    const q = query(productCollection, orderBy("createdAt","desc"))
    const doc = await getDocs(q)
    const arr =[]
    doc.forEach((product)=> arr.push({...product.data(), id: product.id}))
    setproducts([...arr])

    // console.log("arr=>", arr);
    
    
  } catch (error) {

    // console.log("error=>", error);
    
    
  }
}


  return (
    <div>
      <Navbar />

      <div className="sub-link-container">
        <div className="sub-link">
          <ul>
            <li>
              <NavLink to={"/food"}  className={({ isActive }) => (isActive ? "active" : "")}>
                Food
              </NavLink>
            </li>
            <li>
              <Link>Medicine </Link>
            </li>
            <li>
              <Link>Accessories </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="heading">
        <h1>All Product</h1>
      </div>

      {/* Product  */}
      <div className="all-product">
        {products.map( (data)=>(
            <Link to={`/shop/${data.id}`}key={data.id}>
        
        <div className="product">
          <img
            src={data.img}
            alt=""
            className="image"
          />
          <h2> {data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}</h2>
          <h3>Price: ${data.price}</h3>
          <h4>{dayjs().to(data.createdAt.toDate())}</h4>
          <button> Buy</button> 
        
        </div>
        </Link>
        ))}
    
      </div>
   
      <Footer/>
    </div>
  );
}

export default Shop;
