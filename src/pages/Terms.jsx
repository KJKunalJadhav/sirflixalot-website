import React from 'react';

const supportEmail =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@sirflixalot.com';

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bf1e20] to-[#bf1e20] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-8">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Terms and Conditions for SirFlixalot
          </h1>
          <div className="text-left space-y-6">
            <p className="text-lg italic text-gray-200">
              Effective Date: October 13, 2025
            </p>
            <p className="text-lg leading-relaxed">
              Welcome to SirFlixalot! These Terms and Conditions ("Terms")
              govern your use of our WhatsApp-based movie recommendation and
              information service (the "Service"). By using the Service, you
              agree to be bound by these Terms. If you do not agree, please do
              not use the Service.
            </p>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                1. Description of Service
              </h2>
              <p className="leading-relaxed">
                SirFlixalot provides movie recommendations, details, watchlist
                management, and related features through WhatsApp messaging. The
                Service is powered by AI and integrates with TheMovieDB data.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                2. User Eligibility
              </h2>
              <p className="leading-relaxed">
                You must be at least 13 years old to use the Service. By using
                the Service, you represent that you meet this requirement.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                3. User Conduct
              </h2>
              <p className="mb-4 leading-relaxed">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Use the Service for any illegal or unauthorized purpose.
                </li>
                <li>
                  Transmit any harmful, offensive, or inappropriate content.
                </li>
                <li>
                  Attempt to hack, disrupt, or interfere with the Service.
                </li>
                <li>Share your account or access credentials with others.</li>
              </ul>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                4. Privacy
              </h2>
              <p className="leading-relaxed">
                Your privacy is important to us. Please review our Privacy
                Policy for details on how we collect, use, and protect your
                data.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                5. Content Ownership
              </h2>
              <p className="leading-relaxed">
                All content provided by the Service, including movie data from
                TheMovieDB, is owned by their respective rights holders. We do
                not claim ownership of user-generated content, but you grant us
                a license to use it as necessary to provide the Service.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                6. Disclaimers
              </h2>
              <p className="leading-relaxed">
                The Service is provided "as is" without warranties. We do not
                guarantee accuracy of movie information or recommendations. Use
                at your own risk.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                7. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, or consequential damages arising
                from your use of the Service.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                8. Termination
              </h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to the Service at any
                time for violations of these Terms.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                9. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms at any time. Continued use after
                changes constitutes acceptance.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                10. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of Bangalore, India.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                11. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions, contact us at {supportEmail}.
              </p>
              <p className="mt-4 leading-relaxed">
                By using SirFlixalot, you acknowledge that you have read and
                understood these Terms.
              </p>
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

export default Terms;
