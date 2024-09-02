// src/App.js
import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <AboutMe />
        <Projects />
        <WorkExperience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
