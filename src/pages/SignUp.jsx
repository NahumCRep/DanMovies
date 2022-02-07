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
                        <div className="login__form">
                            <div className="title">Ingresar</div>
                            <div className="inputBox">
                                <MdPerson className="icon user"/>
                                <input type="text" name="name" placeholder='Ingrese su usuario' required></input>
                            </div>
                            {/*
                            <div className="inputBox">
                                <MdMail className="icon mail"/>
                                <input type="email" name="email" placeholder='Ingrese su email' required></input>
                            </div>
                            */}
                            <div className="inputBox">
                                <MdPassword className="icon password"/>
                                <input type="password" name="password" placeholder='Ingrese su contraseña' required></input>
                            </div>
                            <div className="textPassword">alalala</div>
                            <Button text='Ingresar'/>
                        
                        </div>
                    </form>

                </div>
                <div className="container signup">
                <form action='#'>
                        <div className="login__form">
                            <div className="title">Registrarse</div>
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
                            <div className="textPassword">alalala</div>
                            <Button text='Registrarse'/>
                        
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default SignUp;