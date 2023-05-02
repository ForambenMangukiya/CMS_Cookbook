import css from "./footer.css";
import Navbar from '../Navbar'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterCenter from "./FooterCenter";

export default function Footer(){
  return(
    <div className="footer">
      <div className="footer_wrap">
      <div className="footer_content">
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
      </div>
        <br />
        <small className="copyright">&copy;All Copyright preserved to Grup-2 W6 WBS-WD#038</small>
      </div>
    </div>
  )
}