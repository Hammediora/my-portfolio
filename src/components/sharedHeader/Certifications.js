// src/components/sharedHeader/Certifications.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Link, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import SectionHeader from './SectionHeader';

const Certifications = ({ expanded, onAccordionToggle }) => {
  return (
    <Accordion expanded={expanded} onChange={onAccordionToggle}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="certifications-content"
        id="certifications-header"
      >
        <SectionHeader title="Awards & Certifications" icon={SchoolIcon} />
      </AccordionSummary>

      <AccordionDetails>
        <List>
          {/* Certifications */}
          <ListItem>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="AWS Certified Solutions Architect – Associate" />
          </ListItem>
          <ListItem>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Google Cloud Professional Cloud Architect" />
          </ListItem>
          <ListItem>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Certified Kubernetes Administrator (CKA)" />
          </ListItem>
          <ListItem>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Northeastern Illinois University College of Business and Technology Scholarship Award" />
          </ListItem>

          <ListItem>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText
              primary="Introduction to Cloud Computing (CC0101EN) - IBM, awarded January 2024"
              secondary={
                <Link href="https://drive.google.com/file/d/12LhgCArJiW2FE9n2IFSKXMMTmXf5aJXp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download the PDF
                </Link>
              }
            />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default Certifications;
