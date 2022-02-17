import { createContext, useState, useReducer } from 'react';

export const userContext = createContext();

const mockup = {
    id: 1,
    name: "Usuario123",
    email: "prueba@email.com",
    password:"123456",
    img: "https://es.web.img3.acsta.net/pictures/21/11/10/10/42/1405636.jpg",
    moviesRank:[2,5,6]
}

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext;