import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu(){
    return(
        <>
            <div className="containerMenu">
            <a href="" className="nav-link"><Link to="/romance">ROMANCE</Link></a>
            <a href="" className="nav-link"><Link to="/drama">DRAMA</Link></a>
            <a href="" className="nav-link"><Link to="/comedia">COMEDIA</Link></a>
            <a href="" className="nav-link"><Link to="/terror">TERROR</Link></a>
            </div>
        </>

    );
}