import React, { useState } from 'react';
import { Container, CssBaseline, Box, Typography,} from '@mui/material'; 
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

        {/* Main Content */}
        <Box id="about-me" textAlign="center" mt={4} mb={4}>
          <Typography variant="h1" color="primary" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h2" color="text.primary">
            Explore my projects, skills, and experiences.
          </Typography>
           <AboutMe />
        </Box>

        <Box id="education-&-skills">
          <EducationSkills />
        </Box>

        <Box id="skills-tabs">
          <SkillsTabs />
        </Box>

        <Box id="projects">
          <Projects />
        </Box>

        <Box id="work-experience">
          <WorkExperience />
        </Box>

        <Box id="contact">
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
