import React, { useState } from 'react';
import { Grid, Box, Paper, Tabs, Tab, Typography, useMediaQuery, useTheme } from '@mui/material';
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

  return (
    <>
      <Box id="projects" sx={{ padding: '30px 20px', background: 'linear-gradient(to bottom right, #e0eafc, #cfdef3)' , marginTop: '80px'}}>
        <Typography
           variant="h3"
           textAlign="center"
           gutterBottom
           color="primary"
           sx={{
               fontWeight: 'bold',
               borderBottom: '4px solid #d4af37',
               display: 'inline-block',
               paddingBottom: '10px',
               background: 'linear-gradient(to right, #1976D2, #d4af37)',
               WebkitBackgroundClip: 'text',
               color: 'transparent',
           }}
        >
          Skills and Certifications
        </Typography>

      <Paper elevation={3} sx={{ mt: 4, p: 2, backgroundColor: 'background.paper', borderRadius: '15px' }}>
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
                },
              }}
            >
              <Tab
                label="Technical Skills"
                sx={{
                  color: selectedTab === 0 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 0 ? 'bold' : 'normal',
                }}
              />
              <Tab
                label="Soft Skills"
                sx={{
                  color: selectedTab === 1 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 1 ? 'bold' : 'normal',
                }}
              />
              <Tab
                label="Certifications"
                sx={{
                  color: selectedTab === 2 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 2 ? 'bold' : 'normal',
                }}
              />
              <Tab
                label="Tools I'm Familiar With"
                sx={{
                  color: selectedTab === 3 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 3 ? 'bold' : 'normal',
                }}
              />
            </Tabs>
          </Grid>

          {/* Accordion/Tools Section */}
          <Grid item xs={12} sm={9}>
            <Box>
              {selectedTab === 0 && (
                <TechnicalSkills expanded={expandedAccordion === 0} onAccordionToggle={() => handleAccordionToggle(0)} />
              )}
              {selectedTab === 1 && (
                <SoftSkills expanded={expandedAccordion === 1} onAccordionToggle={() => handleAccordionToggle(1)} />
              )}
              {selectedTab === 2 && (
                <Certifications expanded={expandedAccordion === 2} onAccordionToggle={() => handleAccordionToggle(2)} />
              )}
              {selectedTab === 3 && <Tools />} 
            </Box>
          </Grid>
        </Grid>
      </Paper>
      </Box>
    </>
  );
};

export default SkillsTabs;
