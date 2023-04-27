import { Link } from "react-router-dom";

export default function Header () {

    return(
    <div className="header">
       <img className="logo" src="src\img\cookbook.png"  />
        <ul className="menu-ul">
            <li><Link to ="/Home">Home</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/categories">Categories</Link></li>
            <li><Link to ="/about">About</Link></li>
        </ul>
</div>
    );
    }
