import '../../styles/NavBar1.css';
import logo from '../../assets/logos/logoDan.png';

import {useState} from 'react';
import {Link} from 'react-router-dom';

//Iconos
import { MdMenu, MdClear } from 'react-icons/md';

const NavBar1 = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const closeMenuDesp = () =>{
        setClick(false);
    }

    return ( 
        <nav className='navbar'>
            <div className="navbar__container">
                <Link to='/' className='navbar__logo'> <img src={logo} alt="logo" /></Link>
                <div className="menu__icon" onClick={handleClick}>
                   {click ? <MdClear style={{color: "white"}} size={30}/> : <MdMenu style={{color: "white"}} size={30}/> }
                </div>
                
                <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                    <li className="nav__menu__item">
                        <Link to='/' className='nav__links' onClick={closeMenuDesp}>Home</Link>
                    </li>
                    <li className="nav__menu__item">
                        <Link to="/movies" className='nav__links' onClick={closeMenuDesp}>Peliculas</Link>
                    </li>
                    <li className="nav__menu__item">
                        <Link to="/signUp" className='nav__links' onClick={closeMenuDesp}>Ingresar</Link>
                    </li>
                </ul>
            </div>
        </nav>
     )
}
 
export default NavBar1;