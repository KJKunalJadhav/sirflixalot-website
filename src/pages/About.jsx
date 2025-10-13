import React from 'react';

function About() {
  return (
    <div className="container mx-auto h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-center text-lg mb-4">
        SirFlixAlot is your ultimate WhatsApp movie and TV show recommendation
        bot. We use TheMovieDB.org to provide personalized recommendations,
        making entertainment discovery fun and easy.
      </p>
      <p className="text-center text-lg">
        Our mission is to be your free entertainment companion, helping you find
        the perfect movies and shows to enjoy.
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-2 bg-white text-[#bf1e20] rounded hover:bg-gray-200"
      >
        Back to Home
      </a>
    </div>
  );
}

export default About;
