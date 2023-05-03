import css from "./footer.css";

import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterCenter from "./FooterCenter";

export default function Footer(){
  return(
    <div className="footer">
<<<<<<< HEAD
     
      <br />
      <hr className="footer_hr" />
      <br />
=======
      <div className="footer_wrap">
>>>>>>> 751ac5de99a817a505b08afaa88b0a9d6e7494ab
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