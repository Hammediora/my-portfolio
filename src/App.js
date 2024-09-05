import React, { useState } from 'react';
import { Container, CssBaseline, Box, Typography, Button } from '@mui/material';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import EducationSkills from './components/EducationSkills';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import ContactFormModal from './components/ContactFormModal';
import GameModal from './components/GameModal';
import ScrollToTopButton from './customHook/ScrollToTopButton';
import SkillsTabs from './customHook/SkillsTabs';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Header />
        <Box textAlign="center" mt={4} mb={4}>
          <Typography variant="h1" color="primary" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h2" color="text.primary">
            Explore my projects, skills, and experiences.
          </Typography>
        </Box>
        <AboutMe />
        <EducationSkills />
        <SkillsTabs />
        <Projects />
        <WorkExperience />
        <ContactInfo onContactClick={() => setIsContactModalOpen(true)} />
        <Box textAlign="center" mt={4} display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={() => setIsGameModalOpen(true)}>
            Play a Fun Game!
          </Button>
          <Button variant="contained" color="primary" onClick={() => setIsContactModalOpen(true)}>
            Contact Me
          </Button>
        </Box>
        <ContactFormModal isOpen={isContactModalOpen} closeModal={() => setIsContactModalOpen(false)} />
        <GameModal isOpen={isGameModalOpen} closeModal={() => setIsGameModalOpen(false)} />
        <ScrollToTopButton />
        <Footer />
      </Container>
    </>
  );
}

export default App;
