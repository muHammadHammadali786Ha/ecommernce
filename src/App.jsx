/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'

// Components imported
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import TopBar from './Components/TopBar/TopBar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Offer from './Components/Offer/Offer.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Clients from './Components/Clients/Clients.jsx';
import Subscribe from './Components/Subscribe/Subscribe.jsx';
import Partners from './Components/Partners/Partners.jsx';
import Summer from './Components/Summer/Summer.jsx';
import Trend from './Components/Trendy/Trend.jsx';
import Product from './Components/Products/Product.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Register/Login.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <TopBar/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      <Footer/>
      <Bottom/>
      </BrowserRouter>
    </div>
  )
}

export default App