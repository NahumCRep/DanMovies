import React, { useContext, useEffect } from 'react';
import { userContext } from '../context/UserContext';

import '../styles/LogOut.css'
const LogOut = () => {
    const {user, setUser} = useContext(userContext)
    useEffect(()=>{
        setUser({})
    },[user]);
    return ( 
        <section className='section__logout'>
            <h2>Te fuiste... volvé pronto</h2>
        </section>
     );
}
 
export default LogOut;