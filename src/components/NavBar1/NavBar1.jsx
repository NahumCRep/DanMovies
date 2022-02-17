import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom'

import '../../styles/NavBar1.css';
import logo from '../../assets/logos/logoDan.png';

//Iconos
import { MdMenu, MdClear } from 'react-icons/md';

//Context
import { userContext } from '../../context/UserContext';

const NavBar1 = () => {
    const [click, setClick] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const {user, setUser} = useContext(userContext);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMenuDesp = () =>{
        setClick(false);
    }

    useEffect(()=>{ 
        window.onscroll = () =>{
            window.scrollY > 50 
            ? setIsTransparent(false)
            : setIsTransparent(true)
        }
    },[]);

    return ( 
        <nav className={`navbar ${isTransparent ? '':'active'}`}>
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
                        {
                            user.isLogged ? <Link to="/logOut" className='nav__links' onClick={closeMenuDesp}>Salir</Link> : <Link to="/signUp" className='nav__links' onClick={closeMenuDesp}>Ingresar</Link>
                        }
                        
                    </li>   
                </ul>

                <p className='user__name'>{user.isLogged ? user.name : 'invitado'}</p>
            </div>
        </nav>
     )
}
 
export default NavBar1;