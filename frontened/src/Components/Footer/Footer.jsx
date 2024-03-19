import React from 'react'
import '../Footer/Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram.png';
import facebook from '../Assets/facebook.png';
import whatsapp_icon from '../Assets/whatsapp.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
          <img src={footer_logo} alt="" srcSet=""/> 
          <p>Shopify</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="foooter-social_icons">
            <div className="footer-social_icons_container">
              <img src={instagram} alt="" srcSet=""/>
            </div>
            <div className="footer-social_icons_container">
              <img src={facebook} alt="" srcSet=""/>
            </div>
            <div className="footer-social_icons_container">
              <img src={whatsapp_icon} alt="" srcSet=""/>
            </div>
        </div>
        <div className="copyright">
          <hr />
          <p>CopyRight @ 2024 -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
