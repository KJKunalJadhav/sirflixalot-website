import React from 'react';

function Terms() {
  return (
    <div className="container mx-auto h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <div className="text-left max-w-2xl">
        <p className="mb-4">
          By using SirFlixAlot, you agree to these terms. Our service is
          provided free of charge, and we use TheMovieDB.org data for
          recommendations.
        </p>
        <p className="mb-4">
          You must comply with WhatsApp's terms of service. We are not
          responsible for any misuse of the bot.
        </p>
        <p>For more details, please contact us.</p>
      </div>
      <a
        href="/"
        className="mt-8 px-6 py-2 bg-white text-[#bf1e20] rounded hover:bg-gray-200"
      >
        Back to Home
      </a>
    </div>
  );
}

export default Terms;
