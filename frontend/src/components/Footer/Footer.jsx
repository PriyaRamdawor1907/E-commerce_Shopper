 import './Footer.css'
 import footer_logo from '../assets/logo_big.png'
 import insta_icon from '../assets/instagram_icon.png'
 import pinterest_icon from '../assets/pintester_icon.png'
 import wa_icon from '../assets/whatsapp_icon.png'


const Footer = () =>{

  const footerSec = ['Company', 'Products', 'Offices', 'About', 'Contact']
  return(
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        {footerSec.map((a,index)=>(
          <li key={index}>
            {a}
          </li>
        ))}        
      </ul>

      <div className="footer-socials-icon">
        <div className="footer-icons-container">
          <img src={insta_icon} alt="insta" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={wa_icon} alt="wa" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer