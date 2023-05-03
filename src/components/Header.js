import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header () {

    return(
    <div className="header">
       <img className="logo" src="src\img\cookbook.png"  />
        <Navbar/>
</div>
    );
    }
