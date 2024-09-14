import React from 'react';
import { Paper, Typography, Box, Divider, List, ListItem, useTheme, ListItemIcon, Tooltip, useMediaQuery } from '@mui/material';
import { Work, Code, Build, School, Group } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const WorkExperience = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const animatedGradient = {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(270deg, #000, #333, #555, #111)' 
      : 'linear-gradient(270deg, #dce5f0, #c9d8e9, #b0c7e2, #91b3d4)', 
    backgroundSize: '600% 600%', 
    animation: 'gradientAnimation 8s ease infinite', 
    '@keyframes gradientAnimation': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  };

  const experienceData = [
    {
      title: 'Full Stack Engineer, OneBit Inc.',
      date: 'Sep/2023 - Present',
      description: 'OneBit Inc. is committed to helping businesses manage their finances by integrating sales and expenses into one software. I work on both frontend and backend development, ensuring seamless integration of features and deployment.',
      responsibilities: [
        { task: 'Developed frontend features with React and backend services with Node.js.', type: 'development' },
        { task: 'Integrated Firebase for real-time data synchronization and user authentication.', type: 'devOps' },
        { task: 'Implemented role-based access control to ensure secure user data handling.', type: 'security' },
        { task: 'Automated deployment using GitHub Actions and streamlined CI/CD pipelines.', type: 'devOps' },
        { task: 'Collaborated with the design team to implement highly interactive user interfaces.', type: 'design' },
      ],
    },
    {
      title: 'Information Technology Specialist (Application Software/Policy Planning), RIA-JMTC (US Army)',
      date: 'Nov/2023 - Present',
      description: 'At Rock Island Arsenal - Joint Manufacturing & Technology Center (RIA-JMTC), I handle troubleshooting software issues, managing databases, and administering Microsoft 365 solutions for smooth operations.',
      responsibilities: [
        { task: 'Resolved software and database issues with SQL, improving system reliability and uptime.', type: 'database' },
        { task: 'Built PowerApps to automate business workflows, increasing productivity by 25%.', type: 'automation' },
        { task: 'Managed Microsoft Active Directory for user account provisioning and security roles.', type: 'security' },
        { task: 'Developed automation scripts with Power Automate to streamline repetitive tasks and reduce manual errors.', type: 'automation' },
        { task: 'Collaborated with cross-functional teams to improve system security and compliance.', type: 'security' },
      ],
    },
    {
      title: 'IT Intern, ACC Rock Island',
      date: 'May/2023 - Sep/2023',
      description: 'During my internship, I gained hands-on experience working with data management, Python automation, and contributing to software development projects.',
      responsibilities: [
        { task: 'Used SQL, Python, and VBA for efficient data management and automation.', type: 'development' },
        { task: 'Developed Python scripts to automate routine tasks and improve efficiency.', type: 'automation' },
        { task: 'Contributed to software development using Java and participated in code reviews.', type: 'development' },
        { task: 'Automated data entry workflows using VBA and Excel, reducing manual workload by 30%.', type: 'automation' },
      ],
    },
    {
      title: 'Service Leader, Chipotle Mexican Grill',
      date: 'Aug/2017 - Sep/2023',
      description: 'As a Service Leader, I managed a team of employees, trained new staff members, and ensured a positive work environment, resulting in the store being recognized as the district\'s first certified training restaurant.',
      responsibilities: [
        { task: 'Managed a team of employees and enforced company policies effectively.', type: 'management' },
        { task: 'Trained new staff members and created a positive working environment.', type: 'training' },
        { task: 'Achieved recognition as a certified training restaurant by fostering team growth.', type: 'training' },
        { task: 'Ensured outstanding customer service and maintained a high level of operational efficiency.', type: 'customerService' },
      ],
    },
  ];

  return (
    <Box sx={{ padding: '60px 20px', marginTop: '80px',  ...animatedGradient, }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
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
          Work Experience
        </Typography>
      </motion.div>
      <Divider sx={{ mb: 4 }} />

      {/* Swipe Hint */}
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="body2" color="textSecondary">
          Swipe left or right to navigate
        </Typography>
      </Box>

      {/* Swiper with pagination and navigation */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={!isSmallScreen} 
        pagination={{ clickable: true }} 
        lazy={true}
        preloadImages={false}
        modules={[Navigation, Pagination]} 
        style={{ paddingBottom: '30px' }}
      >
        {experienceData.map((job, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0 }} // Simplified animation
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <Paper
                elevation={5}
                sx={{
                  padding: { xs: '16px', sm: '24px' },
                  marginBottom: '40px',
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  maxWidth: '800px',  // Set a max width to center the content
                  margin: 'auto',  // Center the content
                  '&:hover': {
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Tooltip title="Work">
                    <Work sx={{ fontSize: '40px', color: '#1976D2' }} />
                  </Tooltip>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#444',
                        fontWeight: 'bold',
                        position: 'relative',
                        paddingBottom: '6px',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          width: '100%',
                          height: '3px',
                          background: 'linear-gradient(to right, #1976D2, #d4af37)',
                          borderRadius: '4px',
                        },
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#888' }}>
                      {job.date}
                    </Typography>
                  </Box>
                </Box>

                {job.description && (
                  <Typography variant="body1" paragraph sx={{ marginTop: '12px', color: '#555', lineHeight: 1.7 }}>
                    {job.description}
                  </Typography>
                )}

                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Key Responsibilities:
                </Typography>
                <List>
                  {job.responsibilities.map((task, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        {task.type === 'development' ? (
                          <Code sx={{ color: '#1976D2' }} />
                        ) : task.type === 'devOps' || task.type === 'automation' ? (
                          <Build sx={{ color: '#1976D2' }} />
                        ) : task.type === 'training' ? (
                          <School sx={{ color: '#1976D2' }} />
                        ) : task.type === 'management' || task.type === 'teamwork' ? (
                          <Group sx={{ color: '#1976D2' }} />
                        ) : (
                          <Build sx={{ color: '#1976D2' }} />
                        )}
                      </ListItemIcon>
                      <Typography variant="body2" sx={{ color: '#333', lineHeight: 1.6 }}>
                        {task.task}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default WorkExperience;