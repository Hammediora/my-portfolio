import React from 'react';
import { Typography, Paper, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

const EducationSkills = () => {
  return (
    <Box id="education-skills" sx={{ marginTop: 6, marginBottom: 6 }}>
      <Grid container spacing={4}>
        {/* Education Section */}
        <Grid item xs={12} md={6}> 
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 3, 
                backgroundColor: 'background.paper', 
                color: 'text.primary',
                height: '100%', 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                borderRadius: '15px', 
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 'bold', 
                  background: 'linear-gradient(to right, #1976D2, #d4af37)', 
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  position: 'relative',
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(to right, #1976D2, #d4af37)',
                    borderRadius: '4px',
                  }
                }}
              >
                <SchoolIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Education
              </Typography>
              <Box sx={{ marginTop: 2, flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Bachelor of Science in Computer Science
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                IT and Network Security Concentration
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Northeastern Illinois University, Chicago, IL
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                GPA: 3.6 (Cum Laude)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Graduated: December 2023
              </Typography>
           </Box> 
            </Paper>
          </motion.div>
        </Grid>

        {/* Extracurricular Activities Section */}
        <Grid item xs={12} md={6}> 
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                padding: 3, 
                backgroundColor: 'background.paper', 
                color: 'text.primary', 
                borderRadius: '15px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', 
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  fontWeight: 'bold', 
                  background: 'linear-gradient(to right, #1976D2, #d4af37)', 
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  position: 'relative',
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(to right, #1976D2, #d4af37)',
                    borderRadius: '4px',
                  }
                }}
              >
                <GroupIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Extracurricular Activities
              </Typography>

              <Box sx={{marginTop: 1, flexGrow: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Google Developer Society Club, Northeastern Illinois University
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Participated in hackathons, coding challenges, and knowledge-sharing sessions.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Selected to represent the club at an international hackathon event in Canada.
                  </Typography>
                </li>
              </ul>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationSkills;
