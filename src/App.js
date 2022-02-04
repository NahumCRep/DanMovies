import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}  />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
