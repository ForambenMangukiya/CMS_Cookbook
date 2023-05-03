import css from "./footer.css";

import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterCenter from "./FooterCenter";

export default function Footer(){
  return(
    <div className="footer">
     
      <br />
      <hr className="footer_hr" />
      <br />
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