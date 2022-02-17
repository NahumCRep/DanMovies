import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import styles from './Search.module.css'
import styles from '../styles/search.module.css';

export default function Search() {

  const [searchText, setSearchText] = useState("")
  const history = useNavigate();

  const handleSubmit = (e)=>{
    //cuando clickeamos en enviar, activamos el onSubmit que ejecuta la funcion handlesubmit, esa funcion pasa el evento(e) click y despues le decimos e.preventDefault, eso quiere decir que se cancela lo que se hace por defecto en el formulario, enviar datos
    e.preventDefault(); 
    history("/movies/?search=" + searchText) //permite añadir un nuevo elemento a la ruta y moverme hacia ese elemento

  }

  return <div>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} placeholder="Search" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            {/* {console.log(searchText)} */}
            <button className={styles.searchButton} type="submit"><FaSearch size={20}/></button>
          </div>
      </form>
  </div>;
}