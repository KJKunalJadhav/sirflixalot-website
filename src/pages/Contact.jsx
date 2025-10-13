import React from 'react';

const supportEmail =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@sirflixalot.com';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bf1e20] to-[#bf1e20] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-8">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="text-left space-y-6">
            <p className="text-lg leading-relaxed">
              Have questions about SirFlixalot? Reach out to us! We're here to help with your entertainment needs.
            </p>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Get in Touch
              </h2>
              <div className="bg-white/20 rounded-lg p-4 space-y-2">
                <p>
                  <strong>Email:</strong> {supportEmail}
                </p>
                <p>
                  <strong>WhatsApp:</strong> Add our bot directly in WhatsApp for support.
                </p>
              </div>
            </section>
          </div>
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-white text-[#bf1e20] font-semibold rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
