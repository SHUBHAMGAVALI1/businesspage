
import './App.css';
import {Route, Routes,Navigate} from 'react-router-dom';
import Home from './Home';
import Service from './Servise';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar/>


       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/servise" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </>
   
  );
}

export default App;
