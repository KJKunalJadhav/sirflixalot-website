import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/sirflixalot.png';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import { QRCodeSVG as QRCode } from 'qrcode.react';

function Home() {
  const qrUrl = 'https://t.me/SirFlixALotBot';

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="container mx-auto min-h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <header className="mt-8">
          <h1 className="font-extrabold mb-4 text-4xl sm:text-5xl md:text-6xl text-white text-outline-xl text-center">
            WELCOME
          </h1>
          <h1 className="font-extrabold mb-4 text-4xl sm:text-5xl md:text-6xl text-white text-outline-xl text-center">
            To
          </h1>
          <div className="flex flex-row justify-center items-center ">
            <img
              src={logo}
              alt="SirFlixAlot Logo"
              className="w-[144px] h-[216px] sm:w-[192px] sm:h-[288px] md:w-[200px] md:h-[300px] p-4 sm:p-6"
            />
          </div>
        </header>
        <p className="text-center text-outline text-lg sm:text-xl md:text-2xl mb-4">
          Your AI Entertainment Agent for Movies and Shows
        </p>

        {/* QR Code */}
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg">
            {isValidUrl(qrUrl) ? (
              <QRCode value={qrUrl} size={200} />
            ) : (
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-gray-100 text-gray-500">
                Invalid URL
              </div>
            )}
          </div>
          <p className="text-center text-sm mt-2">Scan to add on Telegram</p>
        </div>
        <p className="text-center  mb-6 text-sm">Powered by TheMovieDB.org</p>
      </div>

      <div className="footer mt-6 w-full max-w-md">
        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 text-sm">
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

export default App;

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
