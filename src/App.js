import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import Details from './pages/Details';
import {Home, Movies, Details, NotFound} from './pages';


function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}  />
          {/* <Route path="/details/:id" element={<Details/>}/> */}
          <Route path="/details" element={<Details/>}/>
          <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
