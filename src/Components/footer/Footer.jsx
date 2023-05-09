import "./footer.css";

import FooterRight from './FooterRight'
import FooterCenter from "./FooterCenter";

export default function Footer(){
  return(
    <div className="footer">

      <div className="footer_wrap">
      <div className="footer_content">
        <FooterCenter />
        <FooterRight />
      </div>
        <small className="copyright">&copy;All Copyright preserved to Grup-2 W6 WBS-WD#038</small>
      </div>
    </div>
  )
}