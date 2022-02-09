import '../styles/SignUp.css';

import React from 'react';
//Componentes
import Button from '../components/Button/Button'

//Iconos
import { MdMail, MdPassword, MdPerson } from 'react-icons/md';

const SignUp = () => {
    return (
        <section className="signUp">
            <div className="ingresar__container">
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
                            <Button  className='btn' text='Ingresar'/>
                            <div className="text">¿No tienes una cuenta?<label>Registrarse</label></div>
                        
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
                            
                            <Button text='Registrarse'/>
                            <div className="text">¿Ya tienes una cuenta?<label>Ingresar</label></div>
                        
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
};

export default SignUp;