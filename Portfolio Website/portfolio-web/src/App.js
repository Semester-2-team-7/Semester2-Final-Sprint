// Developer: Chris Doucette
// Project: Semester 2 Sprint 2 Portfolio Website
// Completed: Friday, April 22, 2022



import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact /> }/>
        </Routes>
      <Footer />
    </div>
    </Router>

  )
}

export default App;
