import '../styles/SignUp.css';

import React, { useContext, useRef } from 'react';
import { Navigate } from "react-router-dom";
import { userContext } from '../context/UserContext';
//Componentes
import Button from '../components/Button/Button'

//Iconos
import { MdMail, MdPassword, MdPerson } from 'react-icons/md';
import logo from '../assets/logos/logoDan.png';

const SignUp = () => {
    const {user, setUser} = useContext(userContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const logIn = (event) => {
        event.preventDefault();
        const {emailL, passwordL} = event.target;
        console.log(emailL.value, passwordL.value);

        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:emailL.value,
                password:passwordL.value
            })
        })
        .then(res => res.json())
        .then(user => {
            setUser({isLogged:true,name:user.data.firstName, message:""});
            emailRef.current.value = "";
            passwordRef.current.value="";
        })
        .catch(error => setUser({isLogged:false, message:"Ingrese Email/contraseña correcta"}))
    }

    const signIn = (event) => {
        event.preventDefault();
        const {firstName, lastName,email, password} = event.target;

        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/signup",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName:firstName.value,
                lastName:lastName.value,
                email:email.value,
                password:password.value
            })
        })
        .then(res => res.json())
        .then(user => {
            setUser({isLogged:true,name:user.data.firstName,message:""});

        })
        .catch(error => setUser({isLogged:false, message:""}))
    }

    if (user.isLogged){
        return <Navigate to="/movies"/>;
    }
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
                    <form onSubmit={logIn}>
                        <div className="form login">
                            <div className="title">Ingresar</div>

                            <div className="input__boxes">
                                <div className="inputBox">
                                    <MdPerson className="icon user"/>
                                    <input type="email" name="emailL" ref={emailRef} placeholder='Ingrese su email' required></input>
                                </div>
                            
                                <div className="inputBox">
                                    <MdPassword className="icon password"/>
                                    <input type="password" name="passwordL" ref={passwordRef} placeholder='Ingrese su contraseña' required></input>
                                </div>
                            </div>
                            
                            <div className="text">{user.message}</div>
                            <div className="btn__container">
                                <Button  className='btn' text='Ingresar'/>
                            </div>
                            
                            <div className="text">¿No tienes una cuenta?<label htmlFor="flip">Registrarse</label></div>
                        
                        </div>
                    </form>
                </div>

                <div className="container signup">
                    <form onSubmit={signIn}>
                        <div className="form signup">
                            <div className="title">Registrarse</div>
                           
                           <div className="input__boxes">
                                <div className="inputBox">
                                    <MdPerson className="icon user"/>
                                    <input type="text" name="firstName" placeholder='Ingrese nombre' required></input>
                                </div>
                                <div className="inputBox">
                                    <MdPerson className="icon user"/>
                                    <input type="text" name="lastName" placeholder='Ingrese apellido' required></input>
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