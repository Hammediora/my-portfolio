import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';  // Only keep icons that are used

const AboutMe = () => {
  return (
    <Box id="about-me" sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Section Title with Icon */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <CodeIcon fontSize="large" sx={{ marginRight: 1 }} /> About Me
        </Typography>
      </motion.div>

      {/* Paragraphs with Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Typography variant="body1" component="p" paragraph>
          I am a Full-Stack Engineer with a degree in Computer Science, skilled in technologies such as 
          <strong> React.js</strong>, <strong>Node.js</strong>, <strong>Python</strong>, and <strong>Java</strong>. 
          I have hands-on experience building scalable web applications, designing backend services, and deploying solutions with modern CI/CD pipelines like <strong>GitHub Actions</strong>.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Typography variant="body1" component="p" paragraph>
          My background includes leadership roles in managing teams and delivering projects in fast-paced environments. 
          I have a passion for problem-solving and take a proactive approach to continuous learning, 
          especially in areas like cloud computing, DevOps, and full-stack development.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Typography variant="body1" component="p" paragraph>
          I am always eager to expand my knowledge and contribute to innovative projects. Feel free to explore my projects and skills, and if you have any questions, don't hesitate to reach out.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Typography variant="body1" component="p" paragraph>
          Stick around after reviewing my portfolio, and you can even play a fun game at the end!
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AboutMe;
