import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export default function FooterRight(){

  return(
    <div className="footer_right">
      <a className='footer-a' href="https://www.youtube.com/" target='_blank'><BsYoutube /></a>
      <a className='footer-a' href="https://www.instagram.com/"  target='_blank'><BsInstagram /></a>
      <a className='footer-a' href="https://www.facebook.com/" target='_blank'><BsFacebook /></a>
      <a className='footer-a' href="https://twitter.com/" target='_blank'><BsTwitter /></a>
      <a className='footer-a' href="https://github.com/ForambenMangukiya/CMS_Cookbook" target='_blank'><BsGithub /></a>
    </div>
  );
}