
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shops/Shop'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import Food from './Pages/Shops/Food/Food'

function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/food' element={<Food/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
