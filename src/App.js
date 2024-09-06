import React, { useState } from 'react';
import { Container, CssBaseline, Box, Typography, Button,IconButton  } from '@mui/material'; 
import { ThemeProvider } from '@mui/material/styles'; 
import { lightTheme, darkTheme } from './styles/theme'; 
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import 'slick-carousel/slick/slick.css';
import { Brightness4, Brightness7 } from '@mui/icons-material';
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

  // Theme switcher state
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode); // Toggle between light and dark mode
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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

            {/* Theme Switcher with Icon */}
            <Box mt={2} display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={handleThemeChange} color="inherit" aria-label="toggle theme">
              {darkMode ? <Brightness7 /> : <Brightness4 />} {/* Sun/Moon icon based on the mode */}
            </IconButton>
            <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Typography>
          </Box>
        </Box>
        
        {/* Main Content */}
        <AboutMe />
        <EducationSkills />
        <SkillsTabs />
        <Projects />
        <WorkExperience />
        <ContactInfo onContactClick={() => setIsContactModalOpen(true)} />

        {/* Action Buttons */}
        <Box textAlign="center" mt={4} display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" color="primary" onClick={() => setIsGameModalOpen(true)}>
            Play a Fun Game!
          </Button>
          <Button variant="contained" color="primary" onClick={() => setIsContactModalOpen(true)}>
            Contact Me
          </Button>
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
