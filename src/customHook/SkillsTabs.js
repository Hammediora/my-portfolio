import React, { useState } from 'react';
import { Grid, Box, Paper, Tabs, Tab, Typography } from '@mui/material';
import TechnicalSkills from '../components/sharedHeader/TechnicalSkills';
import SoftSkills from '../components/sharedHeader/SoftSkills';
import Certifications from '../components/sharedHeader/Certifications';
import Tools from '../components/sharedHeader/Tools';

const SkillsTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  // When a tab is clicked, set the accordion state to match
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setExpandedAccordion(newValue); // Ensure accordion is expanded
  };

  // Function to handle manual toggle of accordion
  const handleAccordionToggle = (panel) => {
    setExpandedAccordion(expandedAccordion === panel ? false : panel);
  };

  return (
    <>
      {/* Main Header for Skills and Certifications */}
      <Box textAlign="center" mt={4} mb={4}>
        <Typography variant="h3" color="primary" gutterBottom>
          Skills and Certifications
        </Typography>
      </Box>

      {/* Paper containing the tabs and accordions/tools */}
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Grid container spacing={2}>
          {/* Tabs Section */}
          <Grid item xs={12} sm={3}>
            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              sx={{
                borderRight: 1, // Add a dividing border on the right of the tabs
                borderColor: 'divider',
              }}
            >
              <Tab
                label="Technical Skills"
                sx={{
                  color: selectedTab === 0 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 0 ? 'bold' : 'normal',
                  '&:hover': { color: 'primary.main' },
                  paddingY: 1.5,
                }}
              />
              <Tab
                label="Soft Skills"
                sx={{
                  color: selectedTab === 1 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 1 ? 'bold' : 'normal',
                  '&:hover': { color: 'primary.main' },
                  paddingY: 1.5,
                }}
              />
              <Tab
                label="Certifications"
                sx={{
                  color: selectedTab === 2 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 2 ? 'bold' : 'normal',
                  '&:hover': { color: 'primary.main' },
                  paddingY: 1.5,
                }}
              />
              <Tab
                label="Tools I'm Familiar With"
                sx={{
                  color: selectedTab === 3 ? 'primary.main' : 'text.secondary',
                  fontWeight: selectedTab === 3 ? 'bold' : 'normal',
                  '&:hover': { color: 'primary.main' },
                  paddingY: 1.5,
                }}
              />
            </Tabs>
          </Grid>

          {/* Accordion/Tools Section */}
          <Grid item xs={12} sm={9}>
            <Box>
              {selectedTab === 0 && (
                <TechnicalSkills
                  expanded={expandedAccordion === 0}
                  onAccordionToggle={() => handleAccordionToggle(0)}
                />
              )}
              {selectedTab === 1 && (
                <SoftSkills
                  expanded={expandedAccordion === 1}
                  onAccordionToggle={() => handleAccordionToggle(1)}
                />
              )}
              {selectedTab === 2 && (
                <Certifications
                  expanded={expandedAccordion === 2}
                  onAccordionToggle={() => handleAccordionToggle(2)}
                />
              )}
              {selectedTab === 3 && <Tools />} {/* Show tools when selected */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default SkillsTabs;
