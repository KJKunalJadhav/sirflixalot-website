import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/sirflixalot.png';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

function Home() {
  return (
    <div className="container mx-auto h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white">
      <header></header>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-extrabold mb-4 text-6xl text-white text-outline-xl">
          WELCOME
        </h1>
        <h1 className="font-extrabold mb-4 text-6xl text-white text-outline-xl">
          To
        </h1>
        <div className="flex flex-row justify-center items-center">
          <img
            src={logo}
            alt="SirFlixAlot Logo"
            className="w-[267px] h-[400px] p-6 "
          />
        </div>
        <p className="text-center text-outline text-2xl mb-4">
          Your WhatsApp AI Entertainment Agent
        </p>
        <p className="text-center text-outline mb-6 text-xl">
          Powered by TheMovieDB.org
          <br />
          Get spot-on recommendations in your chats
        </p>
      </div>

      <div className="footer mt-8">
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
