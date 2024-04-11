// import react from "react";
import { Link } from 'react-router-dom';
/* --------------------- */
import logo_footer from "../../../assets/images/commons/logo/logo-lesPetitsPlats--blanc@2x.svg";
/* --------------------- */

/* ±±±±±±±±±±±±±±±±±±±±± */
function Footer() {
    return (
        <footer className="footer">
            <Link to="/"><img className="logo-footer" src={logo_footer} alt="logo"></img></Link>
            <nav className='menu-footer'>
                <ul>
                    <li className='about'><Link to="/about">à propos</Link></li>
                    <li className='contact'><Link to="/contact">contact</Link></li>
                    <li className='legal'><Link to="/legal">mentions légales</Link></li>
                </ul>
            </nav>
            <p className="txt-footer">{new Date().getFullYear()} &copy; hrafDigit, Tous droits réservés </p>
        </footer>
    )
}

export default Footer;