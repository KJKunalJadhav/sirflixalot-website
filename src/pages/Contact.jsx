import React from 'react';

const supportEmail =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@sirflixalot.com';

function Contact() {
  return (
    <div className="container mx-auto h-screen bg-[#bf1e20] flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="text-left max-w-2xl">
        <p className="mb-4">
          Have questions about SirFlixAlot? Reach out to us!
        </p>
        <p className="mb-4">Email: {supportEmail}</p>
        <p className="mb-4">
          WhatsApp: Add our bot directly in WhatsApp for support.
        </p>
        <p>We're here to help with your entertainment needs.</p>
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

export default Contact;
