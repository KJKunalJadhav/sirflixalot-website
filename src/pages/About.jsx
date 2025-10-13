import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bf1e20] to-[#bf1e20] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-8">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            About SirFlixalot
          </h1>
          <div className="text-left space-y-6">
            <section className="border-l-4 border-white pl-6">
              <p className="text-lg leading-relaxed">
                SirFlixalot is an intelligent WhatsApp-based movie
                recommendation bot that brings personalized cinematic
                experiences directly to your conversations. Built with
                cutting-edge AI technology, our bot understands your movie
                preferences and delivers tailored recommendations through
                natural, conversational interactions.
              </p>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                What We Do
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Conversational AI: Engage in natural language conversations
                  about movies, genres, actors, and moods
                </li>
                <li>
                  Personalized Recommendations: Get movie suggestions based on
                  your tastes, watch history, and preferences
                </li>
                <li>
                  Real-time Data: Access up-to-date movie information from TMDB
                  and other reliable sources
                </li>
                <li>
                  Multi-turn Dialogues: Enjoy seamless, context-aware
                  conversations that remember your preferences
                </li>
              </ul>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Our Technology
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Advanced AI Frameworks: Modern conversational AI and machine
                  learning technologies
                </li>
                <li>
                  WhatsApp Integration: Seamless messaging through WhatsApp
                  Business API
                </li>
              </ul>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li>
                  Genre-based, actor-based, and mood-based recommendations
                </li>
                <li>Conversational state persistence across sessions</li>
                <li>Real-time movie metadata fetching</li>
                <li>User watchlist management</li>
                <li>
                  Memory-enhanced conversations for better personalization
                </li>
              </ul>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Free to Use
              </h2>
              <p className="text-lg leading-relaxed">
                SirFlixalot is completely free to use. Get personalized movie
                recommendations anytime through WhatsApp without any
                subscription fees or hidden costs.
              </p>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Data Sources
              </h2>
              <p className="text-lg leading-relaxed">
                All movie data is sourced from The Movie Database (TMDb) and
                other reputable entertainment databases to ensure accuracy and
                up-to-date information.
              </p>
            </section>

            <section className="border-l-4 border-white pl-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                Built by Fynance Technologies
              </h2>
              <p className="text-lg leading-relaxed">
                SirFlixalot was created by Fynance Technologies, a company
                passionate about combining AI with entertainment to make movie
                discovery more intuitive and enjoyable. Whether you're looking
                for your next blockbuster or a hidden indie gem, SirFlixalot is
                here to guide you through the vast world of cinema.
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

export default About;
