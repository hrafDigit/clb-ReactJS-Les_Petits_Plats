// import react from 'react';
import { Link } from 'react-router-dom';
/* --------------------- */
import logo from '../../../assets/images/commons/logo/logo-lesPetitsPlats--noir@2x.svg'
/* --------------------- */

/* ±±±±±±±±±±±±±±±±±±±±± */
function Header() {
    return (
        <header className='header'>
            {/* <span></span> */}
            <Link to="/"><img className='logo-header' src={logo}></img>les petits plats</Link>
            {/* <Link to="/"><img className='logo-header' src={logo}></img></Link> */}
            <nav className='menu-header'>
                <ul>
                    <li className='home'><Link to="/">accueil</Link></li>
                    <li className='about'><Link to="/about">à propos</Link></li>
                </ul>
            </nav>
            <h1>cherchez parmi plus de 1500 recettes simples et délicieuses</h1>
        </header>
    )
}

export default Header;
