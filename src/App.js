import './App.css';
import Navbar from './components/Navbar';
import NavBar1 from './components/NavBar1/NavBar1'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import Details from './pages/Details';
import {Home, Movies, Details, NotFound, SignUp} from './pages';

function App() {
  
  return (
   <BrowserRouter>
      <NavBar1 />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}  />
          <Route path="/details/:id" element={<Details/>}/>
          {/* <Route path="/details" element={<Details/>}/> */}
          <Route path="/signUp" element={<SignUp />}/>
          <Route path='*' element={<NotFound />} />
          
      </Routes>
   </BrowserRouter>
  )
}

export default App;
