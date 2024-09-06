import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code'; 

const AboutMe = () => {
  // Control animations with useAnimation hook
  const controls = useAnimation();

  // Variants for sliding animation
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box 
      id="about-me" 
      sx={{ marginTop: 6, marginBottom: 6, padding: { xs: 2, sm: 4 } }}
    >
      {/* Use InView to detect when the title enters the viewport */}
      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}
            >
              <CodeIcon fontSize="large" sx={{ marginRight: 2 }} /> About Me
            </Typography>
          </motion.div>
        )}
      </InView>

      {/* First Paragraph */}
      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              I am a <strong>Full-Stack Engineer</strong> with a degree in Computer Science, proficient in
              technologies such as <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Python</strong>,
              and <strong>Java</strong>. My expertise includes building scalable web applications,
              designing backend services, and deploying solutions with modern CI/CD pipelines like
              <strong> GitHub Actions</strong>.
            </Typography>
          </motion.div>
        )}
      </InView>

      {/* Second Paragraph */}
      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            transition={{ delay: 0.4 }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              I have taken leadership roles in managing teams and delivering projects in fast-paced
              environments. My passion for problem-solving and a proactive approach to continuous
              learning have helped me excel in <strong>cloud computing</strong>, <strong>DevOps</strong>,
              and <strong>full-stack development</strong>.
            </Typography>
          </motion.div>
        )}
      </InView>

      {/* Third Paragraph */}
      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            transition={{ delay: 0.6 }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              I’m always eager to expand my knowledge and contribute to innovative projects. Feel free to
              explore my projects and skills, and don’t hesitate to reach out if you have any questions or
              collaboration opportunities.
            </Typography>
          </motion.div>
        )}
      </InView>

      {/* Final Paragraph */}
      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            transition={{ delay: 0.8 }}
          >
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              After reviewing my portfolio, stick around to play a fun game at the end of your visit!
            </Typography>
          </motion.div>
        )}
      </InView>
    </Box>
  );
};

export default AboutMe;
