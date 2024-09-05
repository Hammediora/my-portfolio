// src/components/sharedHeader/TechnicalSkills.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import DevOpsIcon from '@mui/icons-material/BuildCircle';
import SectionHeader from './SectionHeader';

const TechnicalSkills = ({ expanded, onAccordionToggle }) => {
  return (
    <Accordion expanded={expanded} onChange={onAccordionToggle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="technical-skills-content"
        id="technical-skills-header"
      >
        <SectionHeader title="Technical Skills" icon={CodeIcon} />
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="h6">Programming Languages & Frameworks</Typography>
        <List>
          <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="Proficient in Java, Python, SQL, JavaScript (React.js, Node.js)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="Experience with Django, Flask, and Firebase" />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Cloud & DevOps</Typography>
        <List>
          <ListItem>
            <ListItemIcon><CloudIcon /></ListItemIcon>
            <ListItemText primary="Experience with AWS, GCP, and Azure (EC2, Storage Buckets, Compute Engine)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><DevOpsIcon /></ListItemIcon>
            <ListItemText primary="Familiar with Kubernetes, Docker, and containerization" />
          </ListItem>
          <ListItem>
            <ListItemIcon><DevOpsIcon /></ListItemIcon>
            <ListItemText primary="CI/CD Pipelines (GitHub Actions, Jenkins, Azure DevOps)" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default TechnicalSkills;
