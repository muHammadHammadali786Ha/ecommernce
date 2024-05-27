/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'

// Components imported
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import TopBar from './Components/TopBar/TopBar.jsx';
import Bottom from './Components/Bottom/Bottom.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Register/Login.jsx';
import ProductLayout from './Components/Layout/ProductLayout.jsx';
import Detail from './Components/Products/Detail.jsx';

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
          <Route path='/product' element={<ProductLayout/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      <Footer/>
      <Bottom/>
      </BrowserRouter>
    </div>
  )
}

export default App