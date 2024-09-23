import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Link,  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Certifications = ({ expanded, onAccordionToggle }) => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
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
        aria-controls="certifications-content"
        id="certifications-header"
        sx={{
          backgroundColor: 'background.default',
          borderBottom: '1px solid #e0e0e0',
          '& .MuiAccordionSummary-content': {
            alignItems: 'center',
          },
        }}
      >
        <SectionHeader title="Awards & Certifications" icon={SchoolIcon} />
      </AccordionSummary>

      <AccordionDetails sx={{ padding: 2, backgroundColor: 'background.paper' }}>
        <motion.div
          initial="hidden"
          animate={expanded ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <List>
            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="AWS Certified Solutions Architect – Associate" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Google Cloud Professional Cloud Architect" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Certified Kubernetes Administrator (CKA)" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Northeastern Illinois University College of Business and Technology Scholarship Award" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Introduction to Cloud Computing (CC0101EN) - IBM, awarded January 2024"
                  secondary={
                    <Link href="https://drive.google.com/file/d/12LhgCArJiW2FE9n2IFSKXMMTmXf5aJXp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Download the PDF
                    </Link>
                  }
                />
              </ListItem>
            </motion.div>
          </List>
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Certifications;
