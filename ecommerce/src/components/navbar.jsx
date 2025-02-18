import './navbar.css'
import {Link} from 'react-router-dom'
export default function navbar()
{
    return(
        <>
            <nav>
                <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Contact Us</Link>
                </li>
                <li>
                    <Link to="/contact">About Us</Link>
                </li>
                </ul>
            </nav>
        </>
    );
}