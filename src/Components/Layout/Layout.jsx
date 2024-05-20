// import React from 'react'
// import Navbar from './Layout/Navbar/Navbar.jsx';
// import Footer from './Components/Footer/Footer.jsx';
// import TopBar from './Layout/TopBar/TopBar.jsx';
import Hero from '../Hero/Hero.jsx';
import Banner from '../Banner/Banner.jsx';
import Offer from '../Offer/Offer.jsx';
// import Bottom from './Components/Bottom/Bottom.jsx';
import Blog from '../Blog/Blog.jsx';
import Clients from '../Clients/Clients.jsx';
import Subscribe from '../Subscribe/Subscribe.jsx';
import Partners from '../Partners/Partners.jsx';
import Summer from '../Summer/Summer.jsx';
import Trend from '../Trendy/Trend.jsx';
import Product from '../Products/Product.jsx';



// import Product from ''
const Layout = () => {
  return (
    <div>
        {/* <TopBar/>
      <Navbar/> */}
      <Hero/>
      <Banner/>
      <Offer/>
      <Product/>
      <Summer/>
      <Trend/>
      <Partners/>
      <Clients/>
      <Blog/>
      <Subscribe/>
    </div>
  )
}

export default Layout