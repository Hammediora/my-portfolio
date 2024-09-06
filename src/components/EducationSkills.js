import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

const EducationSkills = () => {
  return (
    <Box id="education-skills" sx={{ marginTop: 6, marginBottom: 6 }}>
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'primary.main',  // Using theme's primary color (Gold in your case)
            fontWeight: 'bold'      // Ensuring bold headers
          }}
        >
          <SchoolIcon sx={{ marginRight: 1, color: 'primary.main' }} /> {/* Icon using primary color */}
          Education
        </Typography>
        <Paper 
          elevation={2} 
          sx={{ 
            padding: 2, 
            marginBottom: 2, 
            backgroundColor: 'background.paper',  // Consistent background color from the theme
            color: 'text.primary'                  // Use primary text color
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Bachelor of Science in Computer Science, IT Concentration
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Northeastern Illinois University, Chicago, IL
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ fontWeight: 'bold' }}>
            GPA: 3.6 (Cum Laude)
          </Typography>
        </Paper>
      </motion.div>

      {/* Extracurricular Activities Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'primary.main',  // Using primary color for consistency
            fontWeight: 'bold' 
          }}
        >
          <GroupIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Extracurricular Activities
        </Typography>
        <Paper 
          elevation={2} 
          sx={{ 
            padding: 2, 
            marginBottom: 2, 
            backgroundColor: 'background.paper', 
            color: 'text.primary' 
          }}
        >
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
        </Paper>
      </motion.div>
    </Box>
  );
};

export default EducationSkills;
