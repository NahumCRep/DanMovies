import './App.css';
import NavBar1 from './components/NavBar1/NavBar1'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home, Movies, MoviesByCategorie, Details, NotFound, SignUp, LogOut} from './pages';

function App() {
  
  return (
   <BrowserRouter>
      <NavBar1 />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}  />
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/logOut" element={<LogOut />}/>
          <Route path="/movies/categorie/:id" element={<MoviesByCategorie />} />
          <Route path='*' element={<NotFound />} />     
      </Routes>
   </BrowserRouter>
  )
}

export default App;
