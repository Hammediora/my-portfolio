import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import { motion } from 'framer-motion'; // For smooth animations
import SectionHeader from './SectionHeader';

const SoftSkills = ({ expanded, onAccordionToggle }) => {
  
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
        aria-controls="soft-skills-content"
        id="soft-skills-header"
        sx={{
          backgroundColor: 'background.default',
          borderBottom: '1px solid #e0e0e0',
          '& .MuiAccordionSummary-content': {
            alignItems: 'center',
          },
        }}
      >
        <SectionHeader title="Soft Skills" icon={PeopleIcon} />
      </AccordionSummary>

      <AccordionDetails sx={{ padding: 2, backgroundColor: 'background.paper' }}>
        <motion.div
          initial="hidden"
          animate={expanded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <List>
            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Excellent communication and interpersonal skills" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Strong problem-solving and critical-thinking abilities" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Leadership and team collaboration experience" />
              </ListItem>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ListItem>
                <ListItemIcon>
                  <PeopleIcon
                    sx={{
                      color: 'primary.main',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.2)' },
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Adaptability and time management" />
              </ListItem>
            </motion.div>
          </List>
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SoftSkills;
