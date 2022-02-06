import React from 'react';
import '../styles/notfound.css';
import clacleta from '../assets/imagenes/clacleta.svg';
import { Link } from 'react-router-dom';
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const NotFound = () => {
    return (
        <div className='notfound__container'>
            <div className='notfound__content'>
                <img src={clacleta} alt="notfound image" />
                <h1>Error 404</h1>
                <h3>Página No Encontrada</h3>
                <div className='notfound__link-container'>
                    <FaArrowAltCircleLeft size={25} />
                    <Link to='/'>Volver a Inicio</Link>
                </div>
            </div>
        </div>
    )
};

export default NotFound;
