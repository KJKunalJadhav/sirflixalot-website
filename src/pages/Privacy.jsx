import React from 'react';

function Privacy() {
  return (
    <div className="container mx-auto h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="text-left max-w-2xl">
        <p className="mb-4">
          We respect your privacy. SirFlixAlot does not collect personal data
          beyond what is necessary for WhatsApp functionality.
        </p>
        <p className="mb-4">
          Recommendations are based on user input and TheMovieDB.org data. We do
          not store chat history or personal information.
        </p>
        <p>For any privacy concerns, contact us directly.</p>
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

export default Privacy;
