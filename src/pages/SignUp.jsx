import '../styles/SignUp.css';

import React from 'react';
//Componentes
import Button from '../components/Button/Button'

//Iconos
import { MdMail, MdPassword, MdPerson } from 'react-icons/md';
import logo from '../assets/logos/logoDan.png';

const SignUp = () => {
    return (
        <section className="signUp">
            <div className="ingresar__container">
                <input type="checkbox" id='flip'></input>
                <div className="cover">
                    <span className='cover__text'>¡Hola!</span>
                    <span className='cover__text'>Te esperabamos</span>  
                    <img className='cover__img' src={logo} alt="logo" />
                </div>

                <div className="container login">
                    <form action='#'>
                        <div className="form login">
                            <div className="title">Ingresar</div>

                            <div className="input__boxes">
                                <div className="inputBox">
                                    <MdPerson className="icon user"/>
                                    <input type="text" name="name" placeholder='Ingrese su usuario' required></input>
                                </div>
                            
                                <div className="inputBox">
                                    <MdPassword className="icon password"/>
                                    <input type="password" name="password" placeholder='Ingrese su contraseña' required></input>
                                </div>
                            </div>
                            
                            <div className="text">Olvidaste la contraseña?</div>
                            <div className="btn__container">
                                <Button  className='btn' text='Ingresar'/>
                            </div>
                            
                            <div className="text">¿No tienes una cuenta?<label htmlFor="flip">Registrarse</label></div>
                        
                        </div>
                    </form>
                </div>

                <div className="container signup">
                    <form action='#'>
                        <div className="form signup">
                            <div className="title">Registrarse</div>
                           
                           <div className="input__boxes">
                                <div className="inputBox">
                                    <MdPerson className="icon user"/>
                                    <input type="text" name="name" placeholder='Ingrese nombre de usuario' required></input>
                                </div>
                                <div className="inputBox">
                                    <MdMail className="icon mail"/>
                                    <input type="email" name="email" placeholder='Ingrese su email' required></input>
                                </div>
                                <div className="inputBox">
                                    <MdPassword className="icon password"/>
                                    <input type="password" name="password" placeholder='Ingrese su contraseña' required></input>
                                </div>

                           </div>
                            
                           <div className="btn__container">
                             <Button text='Registrarse'/>
                            </div>
                            <div className="text">¿Ya tienes una cuenta?<label htmlFor="flip">Ingresar</label></div>
                        
                        </div>
                    </form>
                </div>
 
            </div>
        </section>
    )
};

export default SignUp;