import Home from "./components/home";
import Detect from "./components/detect";
import { Routes, Route } from 'react-router-dom';
import HowItWorks from "./components/how_it_works";
import { Link } from 'react-router-dom';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
   <Navbar/>
  <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/detect" element={<Detect />} />
      <Route path="/how-it-works" element={<HowItWorks/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;
