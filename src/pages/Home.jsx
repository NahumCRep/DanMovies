import React from 'react';
import Header from '../components/Header';

import SectionMovieList from '../components/SectionMovieList';

import avengers from '../assets/imagenes/avengers.jpg';
import harry from '../assets/imagenes/harrypotter2.jpg';
import spiderman from '../assets/imagenes/spiderman.jpg';
import dune from '../assets/imagenes/dune.jpg';
const moviesMockup = [
    {
        id: '1',
        title: 'Avengers EndGame',
        banner: avengers
    },
    {
        id: '2',
        title: 'Spiderman No Way Home',
        banner: spiderman
    },
    {
        id: '3',
        title: 'Harry Potter Reliquias del Muerte Parte 2',
        banner: harry
    },
    {
        id: '4',
        title: 'Dune',
        banner: dune
    },
]
const Home = () => {
  return(
      <div>
          <Header className="header__home"/> 
          <SectionMovieList title="Destacados" movies={moviesMockup}/> 
          <SectionMovieList title="Terror" movies={moviesMockup}/>    
      </div>
  )
};

export default Home;
