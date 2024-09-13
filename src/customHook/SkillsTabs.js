import React, { useState } from 'react';
import { Grid, Box, Paper, Tabs, Tab, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import TechnicalSkills from '../components/sharedHeader/TechnicalSkills';
import SoftSkills from '../components/sharedHeader/SoftSkills';
import Certifications from '../components/sharedHeader/Certifications';
import Tools from '../components/sharedHeader/Tools';

const SkillsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setExpandedAccordion(newValue);
  };

  const handleAccordionToggle = (panel) => {
    setExpandedAccordion(expandedAccordion === panel ? false : panel);
  };

  // Gradient background animation
  const animatedGradient = {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(270deg, #333, #111, #333)' // Dark mode: Darker animated gradient
      : 'linear-gradient(270deg, #e0eafc, #f4f7fa, #dce5f0)', // Light mode: Lighter animated gradient
    backgroundSize: '400% 400%',
    animation: 'gradientAnimation 15s ease infinite',
    '@keyframes gradientAnimation': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  };

  return (
    <>
      <Box
        id="skills-tabs"
        sx={{
          padding: '40px 20px',
          marginTop: '80px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          ...animatedGradient,
        }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            color="primary"
            sx={{
              fontWeight: 'bold',
              display: 'inline-block',
              paddingBottom: '12px',
              background: 'linear-gradient(to right, #1976D2, #d4af37)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              borderBottom: `4px solid ${theme.palette.primary.main}`,
            }}
          >
            Skills and Certifications
          </Typography>
        </motion.div>

        {/* Tabs and Content Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              mt: 4,
              p: 3,
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
              backgroundColor: theme.palette.background.paper,
              transition: 'background-color 0.5s',
            }}
          >
            <Grid container spacing={2}>
              {/* Tabs Section */}
              <Grid item xs={12} sm={3}>
                <Tabs
                  orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                  variant={isSmallScreen ? 'scrollable' : 'standard'}
                  scrollButtons={isSmallScreen ? 'auto' : 'off'}
                  value={selectedTab}
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                  sx={{
                    borderRight: isSmallScreen ? 'none' : 1,
                    borderBottom: isSmallScreen ? 1 : 'none',
                    borderColor: 'divider',
                    '& .MuiTab-root': {
                      padding: isSmallScreen ? '8px 12px' : '16px 24px',
                      textTransform: 'none',
                      fontWeight: selectedTab === 0 ? 'bold' : 'normal',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'scale(1.05)',
                      },
                    },
                    '& .Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <Tab label="Technical Skills" />
                  <Tab label="Soft Skills" />
                  <Tab label="Certifications" />
                  <Tab label="Tools I'm Familiar With" />
                </Tabs>
              </Grid>

              {/* Accordion/Tools Section */}
              <Grid item xs={12} sm={9}>
                <Box>
                  {selectedTab === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <TechnicalSkills expanded={expandedAccordion === 0} onAccordionToggle={() => handleAccordionToggle(0)} />
                    </motion.div>
                  )}
                  {selectedTab === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <SoftSkills expanded={expandedAccordion === 1} onAccordionToggle={() => handleAccordionToggle(1)} />
                    </motion.div>
                  )}
                  {selectedTab === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <Certifications expanded={expandedAccordion === 2} onAccordionToggle={() => handleAccordionToggle(2)} />
                    </motion.div>
                  )}
                  {selectedTab === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <Tools />
                    </motion.div>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default SkillsTabs;
