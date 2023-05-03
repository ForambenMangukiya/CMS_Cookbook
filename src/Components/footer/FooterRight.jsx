import { BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

export default function FooterRight(){

  return(
    <div className="footer_right">
      <a className='footer-a' href="https://www.youtube.com/" target='_blank'><BsYoutube /></a>
      <a className='footer-a' href="https://www.instagram.com/"  target='_blank'><AiFillInstagram /></a>
      <a className='footer-a' href="https://www.facebook.com/" target='_blank'><BsFacebook /></a>
      <a className='footer-a' href="https://twitter.com/" target='_blank'><BsTwitter /></a>
      <a className='footer-a' href="https://github.com/ForambenMangukiya/CMS_Cookbook" target='_blank'><AiFillGithub /></a>
    </div>
  );
}