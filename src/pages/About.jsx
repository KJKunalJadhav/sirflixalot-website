import React from 'react';

function About() {
  return (
    <div className="container mx-auto min-h-screen bg-[#bf1e20] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About SirFlixalot
        </h1>

        <section className="mb-8">
          <p className="text-lg mb-4">
            SirFlixalot is an intelligent WhatsApp-based movie recommendation
            bot that brings personalized cinematic experiences directly to your
            conversations. Built with cutting-edge AI technology, our bot
            understands your movie preferences and delivers tailored
            recommendations through natural, conversational interactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              Conversational AI: Engage in natural language conversations about
              movies, genres, actors, and moods
            </li>
            <li>
              Personalized Recommendations: Get movie suggestions based on your
              tastes, watch history, and preferences
            </li>
            <li>
              Real-time Data: Access up-to-date movie information from TMDB and
              other reliable sources
            </li>
            <li>
              Multi-turn Dialogues: Enjoy seamless, context-aware conversations
              that remember your preferences
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              Advanced AI Frameworks: Modern conversational AI and machine
              learning technologies
            </li>
            <li>
              WhatsApp Integration: Seamless messaging through WhatsApp Business
              API
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Genre-based, actor-based, and mood-based recommendations</li>
            <li>Conversational state persistence across sessions</li>
            <li>Real-time movie metadata fetching</li>
            <li>User watchlist management</li>
            <li>Memory-enhanced conversations for better personalization</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Free to Use</h2>
          <p className="text-lg">
            SirFlixalot is completely free to use. Get personalized movie
            recommendations anytime through WhatsApp without any subscription
            fees or hidden costs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Sources</h2>
          <p className="text-lg">
            All movie data is sourced from The Movie Database (TMDb) and other
            reputable entertainment databases to ensure accuracy and up-to-date
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Built by Fynance Technologies
          </h2>
          <p className="text-lg">
            SirFlixalot was created by Fynance Technologies, a company
            passionate about combining AI with entertainment to make movie
            discovery more intuitive and enjoyable. Whether you're looking for
            your next blockbuster or a hidden indie gem, SirFlixalot is here to
            guide you through the vast world of cinema.
          </p>
        </section>

        <div className="text-center mt-8">
          <a
            href="/"
            className="px-6 py-2 bg-white text-[#bf1e20] rounded hover:bg-gray-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
