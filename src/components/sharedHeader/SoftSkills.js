// src/components/sharedHeader/SoftSkills.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleIcon from '@mui/icons-material/People';
import SectionHeader from './SectionHeader';

const SoftSkills = ({ expanded, onAccordionToggle }) => {
  return (
    <Accordion expanded={expanded} onChange={onAccordionToggle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="soft-skills-content"
        id="soft-skills-header"
      >
        <SectionHeader title="Soft Skills" icon={PeopleIcon} />
      </AccordionSummary>

      <AccordionDetails>
        <List>
          <ListItem>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Excellent communication and interpersonal skills" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Strong problem-solving and critical-thinking abilities" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Leadership and team collaboration experience" />
          </ListItem>
          <ListItem>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Adaptability and time management" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default SoftSkills;
