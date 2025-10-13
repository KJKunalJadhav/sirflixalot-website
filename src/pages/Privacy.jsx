import React from 'react';

const supportEmail =
  import.meta.env.VITE_SUPPORT_EMAIL || 'support@sirflixalot.com';

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bf1e20] to-[#bf1e20] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-8">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Privacy Policy for SirFlixAlot Entertainment AI Agent
          </h1>
          <div className="text-left space-y-6">
            <p className="text-lg italic text-gray-200">
              Effective Date: October 13, 2025
            </p>
            <p className="text-lg leading-relaxed">
              Thank you for using the SirFlixAlot Entertainment AI Agent
              ("App"). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our App,
              which integrates WhatsApp messaging with themoviedb.org movie data
              and recommendations. By using the App, you agree to the collection
              and use of information in accordance with this policy.
            </p>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                1. Information We Collect
              </h2>
              <h3 className="text-xl font-medium mb-2 text-gray-200">
                Personal Information
              </h3>
              <p className="mb-4 leading-relaxed">
                WhatsApp Data: We collect messages, user IDs, and conversation
                history sent through WhatsApp to provide movie recommendations
                and maintain conversation context. This includes any personal
                details you share in messages (e.g., movie preferences,
                watchlists).
              </p>

              <h3 className="text-xl font-medium mb-2 text-gray-200">
                Non-Personal Information
              </h3>
              <p className="mb-4 leading-relaxed">
                Usage Data: We collect data on how you interact with the App,
                such as features used, search queries, and device information
                (e.g., device type, operating system), to improve functionality
                and provide better recommendations.
              </p>
              <p className="mb-4 leading-relaxed">
                Movie Data: Information about movies, ratings, and
                recommendations based on your interactions.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  To provide personalized movie recommendations and search
                  results.
                </li>
                <li>To process and respond to your WhatsApp messages.</li>
                <li>
                  To improve the App's functionality, including AI-driven
                  conversation flows.
                </li>
                <li>
                  To communicate with you about updates, features, or support.
                </li>
                <li>To ensure security and prevent abuse of the service.</li>
              </ul>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                3. Sharing of Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties, except in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Legal Requirements: We may disclose information if required by
                  law, to protect our rights, or in response to a legal request.
                </li>
                <li>
                  Aggregated Data: Non-identifiable, aggregated data may be
                  shared for analytics or research purposes.
                </li>
              </ul>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                5. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                Depending on your location, you may have the following rights
                regarding your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Access and Correction: Request access to or correction of your
                  personal information.
                </li>
                <li>
                  Deletion: Request deletion of your data, subject to legal
                  obligations.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise these rights, contact us at {supportEmail}.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                6. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                The App is not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
                If we become aware of such collection, we will delete it
                promptly.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                7. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the effective date. Your continued use of the App
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>
            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                8. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-white/20 rounded-lg p-4 space-y-2">
                <p>
                  <strong>Email:</strong> {supportEmail}
                </p>
              </div>
              <p className="mt-4 leading-relaxed">
                By using the SirFlixAlot Entertainment AI Agent, you acknowledge
                that you have read and understood this Privacy Policy.
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

export default Privacy;
