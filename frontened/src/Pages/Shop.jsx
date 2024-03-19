import React from 'react'
import Hero from '../Components/Hero/Hero.jsx';
// import Items from '../Components/Items/Items.jsx';
import Popular from '../Components/Popular/Popular.jsx';
import Offer from '../Components/Offers/Offer.jsx';
import NewCollections from '../Components/NewCollections/NewCollections.jsx';
import Newsletter from '../Components/Newsletter/Newsletter.jsx';
// import Footer from '../Components/Footer/Footer.jsx';
const Shop = () => {
  return (
    <div>
      <Hero></Hero> 
      {/* <Items></Items> */}
      <Popular></Popular> 
      <Offer></Offer>
      <NewCollections></NewCollections> 
      <Newsletter></Newsletter>
    </div>
  )
}

export default Shop
