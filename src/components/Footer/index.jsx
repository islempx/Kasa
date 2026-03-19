import './Footer.css'
import blackKasa from '../../assets/black-kasa.png'

function Footer() {
  return (<footer>
<img src={blackKasa} className='footer-logo' alt='Logo kasa en noir et blanc' />
<p className='copyright'>© 2020 Kasa. All rights reserved    
</p>

  </footer>)
  
}

export default Footer