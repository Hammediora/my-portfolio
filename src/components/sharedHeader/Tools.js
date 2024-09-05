// src/components/sharedHeader/Tools.js
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { FaReact, FaNodeJs, FaGitAlt, FaAws, FaPython, FaGoogle } from 'react-icons/fa'; // Icons from react-icons
import { SiTypescript, SiJavascript, SiNextdotjs, SiMysql, SiPostgresql, SiPostman } from 'react-icons/si'; // Icons for specific technologies

const toolsData = [
  { name: 'React js/native', icon: <FaReact style={{ color: '#61DAFB', fontSize: '48px' }} /> },
  { name: 'Angular', icon: <SiJavascript style={{ color: '#DD0031', fontSize: '48px' }} /> },
  { name: 'Git', icon: <FaGitAlt style={{ color: '#F1502F', fontSize: '48px' }} /> },
  { name: 'Typescript', icon: <SiTypescript style={{ color: '#3178C6', fontSize: '48px' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000', fontSize: '48px' }} /> },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#68A063', fontSize: '48px' }} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791', fontSize: '48px' }} /> },
  { name: 'MySQL', icon: <SiMysql style={{ color: '#00758F', fontSize: '48px' }} /> },
  { name: 'AWS', icon: <FaAws style={{ color: '#FF9900', fontSize: '48px' }} /> },
  { name: 'GCP (Google Cloud)', icon: <FaGoogle style={{ color: '#4285F4', fontSize: '48px' }} /> },
  { name: 'Python', icon: <FaPython style={{ color: '#3776AB', fontSize: '48px' }} /> },
  { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37', fontSize: '48px' }} /> },
];

const Tools = () => {
  return (
    <Box textAlign="center" mt={4} mb={4}>
      <Typography variant="h4" color="primary" gutterBottom>
        Tools I'm Familiar With
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {toolsData.map((tool, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} textAlign="center">
            {tool.icon}
            <Typography variant="body1" mt={1}>{tool.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tools;
