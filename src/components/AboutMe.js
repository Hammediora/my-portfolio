import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code'; 

const AboutMe = () => {
  const controls = useAnimation();

  // Variants for staggered fade-in animation with a subtle scaling effect
  const staggeredFadeIn = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, staggerChildren: 0.3, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconBounce = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: [0, 10, -10, 0], transition: { duration: 0.6, ease: 'easeOut' } },
    hover: {
      scale: 1.1,
      rotate: [0, 20, -20, 0],
      transition: { repeat: Infinity, duration: 1.2 },
    },
  };

  return (
    <Box 
      id="about-me" 
      sx={{ 
        marginTop: 6, 
        marginBottom: 6, 
        padding: { xs: 2, sm: 4 }, 
        position: 'relative',
        background: 'background.paper',
        borderRadius: '20px',
        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)', // Elevation for the container
        overflow: 'hidden',
      }}
    >
      {/* Background Floating Shape */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-100px',
          width: '200px',
          height: '200px',
          background: 'rgba(212, 175, 55, 0.4)', // Gold blob
          borderRadius: '50%',
          zIndex: -1,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <InView triggerOnce={true} onChange={(inView) => inView && controls.start("visible")}>
        {({ ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggeredFadeIn}
          >
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: 'bold',
                fontSize: '2.5rem',
                letterSpacing: '1.5px', // Increased letter spacing for elegance
                background: 'linear-gradient(to right, #1976D2, #d4af37)', 
                WebkitBackgroundClip: 'text', 
                color: 'transparent', 
                position: 'relative',
                marginBottom: '20px',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: '50%',
                  width: '0%',
                  height: '4px',
                  background: 'linear-gradient(to right, #1976D2, #d4af37)',
                  borderRadius: '2px',
                  transition: 'width 0.6s ease-out, left 0.6s ease-out',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0%',
                },
              }}
            >
              <motion.div variants={iconBounce} whileHover="hover">
                <CodeIcon fontSize="large" sx={{ marginRight: 2, color: '#1976D2' }} />
              </motion.div>
              About Me
            </Typography>

            {/* First Paragraph */}
            <motion.div variants={fadeUp}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.75, color: 'text.primary' }}>
                I am a <strong style={{ color: '#d4af37' }}>Full-Stack Engineer</strong> with a degree in Computer Science, proficient in
                technologies such as <strong style={{ color: '#1976D2' }}>React.js</strong>, <strong style={{ color: '#d4af37' }}>Node.js</strong>,
                <strong style={{ color: '#1976D2' }}>Python</strong>, and <strong style={{ color: '#d4af37' }}>Java</strong>. I specialize in
                building scalable web applications, designing backend services, and deploying solutions with modern CI/CD pipelines like
                <strong style={{ color: '#1976D2' }}> GitHub Actions</strong>.
              </Typography>
            </motion.div>

            {/* Second Paragraph */}
            <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.75, color: 'text.primary' }}>
                I have taken leadership roles in managing teams and delivering projects in fast-paced
                environments. My passion for problem-solving and a proactive approach to continuous
                learning have helped me excel in <strong style={{ color: '#d4af37' }}>cloud computing</strong>, 
                <strong style={{ color: '#1976D2' }}> DevOps</strong>, and <strong style={{ color: '#d4af37' }}>full-stack development</strong>.
              </Typography>
            </motion.div>

            {/* Third Paragraph */}
            <motion.div variants={fadeUp} transition={{ delay: 0.4 }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.75, color: 'text.primary' }}>
                I’m always eager to expand my knowledge and contribute to innovative projects. Feel free to
                explore my projects and skills, and don’t hesitate to reach out if you have any questions or
                collaboration opportunities.
              </Typography>
            </motion.div>

            {/* Final Paragraph */}
            <motion.div variants={fadeUp} transition={{ delay: 0.6 }}>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.25rem', lineHeight: 1.75, color: 'text.primary' }}>
                After reviewing my portfolio, stick around to play a fun game at the end of your visit!
              </Typography>
            </motion.div>
          </motion.div>
        )}
      </InView>
    </Box>
  );
};

export default AboutMe;
