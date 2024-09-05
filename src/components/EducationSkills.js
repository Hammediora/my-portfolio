import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

const EducationSkills = () => {
  return (
    <Box id="education-skills" sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <SchoolIcon sx={{ marginRight: 1 }} /> Education
        </Typography>
        <Paper elevation={2} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h6">Bachelor of Science in Computer Science, IT Concentration</Typography>
          <Typography variant="body1">Northeastern Illinois University, Chicago, IL</Typography>
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
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <GroupIcon sx={{ marginRight: 1 }} /> Extracurricular Activities
        </Typography>
        <Paper elevation={2} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="body1">
            Google Developer Society Club, Northeastern Illinois University
          </Typography>
          <ul>
            <li>Participated in hackathons, coding challenges, and knowledge-sharing sessions.</li>
            <li>Selected to represent the club at an international hackathon event in Canada.</li>
          </ul>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default EducationSkills;
