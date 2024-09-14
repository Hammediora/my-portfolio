import React, { useState } from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material'; 
import { ThemeProvider } from '@mui/material/styles'; 
import { lightTheme, darkTheme } from './styles/theme'; 
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Projects from './components/Project/Projects';
import WorkExperience from './components/WorkExperience';
import EducationSkills from './components/EducationSkills';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import ContactFormModal from './components/ContactFormModal';
import GameModal from './components/Game/GameModal';
import ScrollToTopButton from './customHook/ScrollToTopButton';
import SkillsTabs from './customHook/SkillsTabs';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode); // Toggle between light and dark mode
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Header darkMode={darkMode} onThemeChange={handleThemeChange} /> 

        {/* Main Content - Consistent Spacing */}
        <Box id="about-me" textAlign="center" mt={4} mb={4}>
          <Typography variant="h1" color="primary" gutterBottom sx={{ fontSize: { xs: '2rem', md: '4rem' }}}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ fontSize: { xs: '1.5rem', md: '3rem' }}}>
            Explore my projects, skills, and experiences.
          </Typography>
           <AboutMe />
        </Box>

        <Box id="education-&-skills" textAlign="center" mt={6} mb={6} px={2}>
          <EducationSkills />
        </Box>

        <Box id="skills-tabs" mt={6} mb={6} px={2}>
          <SkillsTabs />
        </Box>

        <Box id="projects" mt={6} mb={6} px={2}>
          <Projects />
        </Box>

        <Box id="work-experience" mt={6} mb={6} px={2}>
          <WorkExperience />
        </Box>

        <Box id="contact" textAlign="center" mt={6} mb={6} px={2}>
          <ContactInfo 
            onContactClick={() => setIsContactModalOpen(true)} 
            onGameClick={() => setIsGameModalOpen(true)} 
          />
        </Box>

        {/* Modals */}
        <ContactFormModal isOpen={isContactModalOpen} closeModal={() => setIsContactModalOpen(false)} />
        <GameModal isOpen={isGameModalOpen} closeModal={() => setIsGameModalOpen(false)} />

        <ScrollToTopButton />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
