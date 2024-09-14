import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar, Container, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll'; 
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'; 
import profilePicture from '../assets/images/BELLO_HAMMED 3.jpg'; 
import { motion } from 'framer-motion'; 

const Header = ({ darkMode, onThemeChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer on small screens
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar (Navigation) */}
      <AppBar 
        position="fixed"
        elevation={1}
        sx={{ 
          background: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(10px)', 
          color: '#333',
          padding: '10px 0',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)', 
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', mx: 'auto' }}>
          {/* Portfolio Title */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              color: darkMode ? '#d4af37' : '#1976D2', 
              cursor: 'pointer',
              '&:hover': { color: '#d4af37' },
            }}
            onClick={() => scroll.scrollToTop()} 
          >
            Hammed Bello
          </Typography>

          {/* Navigation Links - Hidden on small screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {['About Me', 'Education & Skills', 'Projects', 'Work Experience', 'Contact'].map((section, index) => (
              <Button
                key={section}
                color="inherit"
                component={Link}
                to={section.toLowerCase().replace(/ /g, '-')} 
                smooth={true}
                offset={-70}
                duration={500}
                sx={navButtonStyles}
              >
                {section}
              </Button>
            ))}

            {/* Theme Switcher for larger screens */}
            <IconButton onClick={onThemeChange} color="inherit" sx={{ ml: 2 }}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          {/* Hamburger Menu Icon for mobile view */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }} 
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }} 
            >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                {['About Me', 'Education & Skills', 'Projects', 'Work Experience', 'Contact'].map((section) => (
                    <ListItem
                    key={section}
                    button
                    component={Link}
                    to={section.toLowerCase().replace(/ /g, '-')} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={toggleDrawer} 
                    >
                    <ListItemText primary={section} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                {/* Theme Switcher inside Drawer */}
                <Box textAlign="center" mt={2}>
                <IconButton onClick={onThemeChange} color="inherit">
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </Typography>
                </Box>
            </Box>
        </Drawer>

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          background: darkMode 
            ? 'linear-gradient(to right, #000428, #004e92)' // Dark mode: Dark blue gradient
            : 'linear-gradient(to right, #1976D2, #d4af37)', // Light mode: Blue to gold gradient
          color: 'white',
          mt: 10,
          padding: { xs: '40px 20px', sm: '80px 20px' },
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture */}
            <Avatar
              alt="Hammed Bello"
              src={profilePicture}
              sx={{
                width: { xs: 150, sm: 200 },
                height: { xs: 150, sm: 200 },
                mx: 'auto',
                mb: 4,
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }, // Hover effect on avatar
              }}
            />

            {/* Name */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '3rem' },
                marginBottom: '15px',
                letterSpacing: '2px', // Subtle spacing for a professional look
              }}
            >
              Hammed Bello
            </Typography>

            {/* Contact Details */}
            <Typography
              variant="h6"
              component="p"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem' },
                marginBottom: '15px',
              }}
            >
              Full-Stack Engineer | Chicago, IL
            </Typography>

            <Typography variant="body1">
              <a href="mailto:Hammedbello97@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                Hammedbello97@gmail.com
              </a> |{' '}
              <a href="tel:7732904887" style={{ color: 'white', textDecoration: 'none' }}>
                773-290-4887
              </a>
            </Typography>
          </motion.div>
        </Container>

        {/* Animated Background Element */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '300px',
            background: darkMode ? 'rgba(212, 175, 55, 0.2)' : 'rgba(25, 118, 210, 0.3)', // Change color based on theme
            borderRadius: '50%',
            zIndex: -1,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Box>
    </Box>
  );
};

// Custom styles for the navigation buttons
const navButtonStyles = {
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  borderRadius: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  padding: '6px 16px',
  '&:hover': {
    backgroundColor: '#d4af37',
    color: 'white',
  },
};

export default Header;
