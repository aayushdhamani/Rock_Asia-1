import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import AboutUs from './components/About us/AboutUs';
import Contact from './components/Contact/Contact';
import Marble from './components/Marble/Marble';
import Granite from './components/Granite/Granite'
import Sand from './components/Sand/Sand'
import Sandstone from './components/Sandstone/Sandstone'
import Temple from './components/Temple/Temple'
import Articles from './components/Articles/Articles'

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/Home" element={<Home/>}/>
    <Route path ="/About" element={<AboutUs/>}/>
    <Route path ="/Contact Us" element={<Contact/>}/>
    <Route path ="/Marble" element={<Marble/>}/>
    <Route path ="/Granite" element={<Granite/>}/>
    <Route path ="/Sandstone" element={<Sandstone/>}/>
    <Route path ="/Sand" element={<Sand/>}/>
    <Route path ="/Temple" element={<Temple/>}/>
    <Route path ="/Article" element={<Articles/>}/>
     
     </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
