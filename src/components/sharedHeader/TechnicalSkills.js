import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import DevOpsIcon from '@mui/icons-material/BuildCircle';
import { motion } from 'framer-motion'; // For smooth animations
import SectionHeader from './SectionHeader';

const TechnicalSkills = ({ expanded, onAccordionToggle }) => {
  
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={onAccordionToggle}
      sx={{
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        mb: 2,
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
        aria-controls="technical-skills-content"
        id="technical-skills-header"
        sx={{
          backgroundColor: 'background.default',
          borderBottom: '1px solid #e0e0e0',
          '& .MuiAccordionSummary-content': {
            alignItems: 'center',
          },
        }}
      >
        <SectionHeader title="Technical Skills" icon={CodeIcon} />
      </AccordionSummary>

      <AccordionDetails
        sx={{
          padding: 2,
          backgroundColor: 'background.paper',
        }}
      >
        {/* Programming Languages Section */}
        <motion.div
          initial="hidden"
          animate={expanded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              background: 'linear-gradient(to right, #1976D2, #d4af37)', // Gradient header
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Programming Languages & Frameworks
          </Typography>
          <List>
            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: 'primary.main', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </ListItemIcon>
                <ListItemText primary="Proficient in Java, Python, SQL, JavaScript (React.js, Node.js)" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon sx={{ color: 'primary.main', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </ListItemIcon>
                <ListItemText primary="Experience with Django, Flask, and Firebase" />
              </ListItem>
            </motion.div>
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Cloud & DevOps Section */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              background: 'linear-gradient(to right, #1976D2, #d4af37)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Cloud & DevOps
          </Typography>
          <List>
            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <CloudIcon sx={{ color: 'primary.main', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </ListItemIcon>
                <ListItemText primary="Experience with AWS, GCP, and Azure (EC2, Storage Buckets, Compute Engine)" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <DevOpsIcon sx={{ color: 'primary.main', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </ListItemIcon>
                <ListItemText primary="Familiar with Kubernetes, Docker, and containerization" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <DevOpsIcon sx={{ color: 'primary.main', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.2)' } }} />
                </ListItemIcon>
                <ListItemText primary="CI/CD Pipelines (GitHub Actions, Jenkins, Azure DevOps)" />
              </ListItem>
            </motion.div>
          </List>
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
};

export default TechnicalSkills;
