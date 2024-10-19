import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shops/Shop";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Food from "./Pages/Shops/Food/Food";
import UserLayout from "./Components/UserLayout/UserLayout";
import Profile from "./Pages/User/Profile/Profile";
import SignIn from "./Pages/Auth/SignIn";
import AddProduct from "./Pages/Product/AddProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/food" element={<Food />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addproduct" element={<AddProduct/>}/>

        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ek asa page bana ha jis may add product ka option ho or woh product
// sirf ek hi email par show hogi jis ko may admin banaonga or woh prdoct ja kar shop walay par nazar aayegi
// category wala kaam bhi karna ha
