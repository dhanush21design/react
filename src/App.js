import logo from './logo.svg';
import './App.css';
import Menu from './pages/Menu';
import Navbar from './component/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catelogs from './pages/Catelogs';
import Arrivals from './pages/Arrivals';
import Orders from './Orders';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/phone' element={<Contact/>}/>
        <Route path='/catelogs' element={<Catelogs/>}/>
        <Route path='/arrivals' element={<Arrivals/>}/>
        <Route path='/all products' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
