import React from 'react';
import { Paper, Typography, Box, Button, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiCss3, SiGithub, SiJavascript } from 'react-icons/si';


const projectData = [
    {
        title: 'Employee Scheduling System',
        description: `Developed a full-stack web application that enables businesses to streamline the process of managing and scheduling employees. The app features user authentication with Firebase and real-time shift management. Challenges included ensuring smooth database synchronization and user-friendly interface design for non-technical users.`,
        link: '#',
        tools: [<FaReact />, <FaNodeJs />, <SiFirebase />]
    },
    {
        title: 'Easy Parking (Conceptual Design)',
        description: `Collaborated with a team at Northeastern Illinois University to create a vision and scope document for an innovative mobile app. "Easy Parking" aims to reduce parking search times using real-time data. Contributed to the UX/UI design, conceptualized key app features, and participated in team brainstorming sessions.`,
        link: 'https://drive.google.com/file/d/1NXxmlwmIUse8M1PuHvmpCxdA7LJvi7Ru/view?usp=sharing',
        tools: [<SiJavascript />, <FaReact />]
    },
    {
        title: 'Personal Portfolio Website',
        description: `Built a fully responsive portfolio website to showcase personal projects, technical skills, and work experience. The website is built using modern CSS, JavaScript, and React.js. It integrates GitHub Pages for seamless deployment and version control through GitHub.`,
        link: 'https://hammediora.github.io/',
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub />]
    },
    {
        title: 'Apple Website Clone',
        description: `Recreated the front-end of Apple's website to enhance web development skills. This project focused on practicing responsive design, pixel-perfect layout recreation, and advanced CSS techniques to ensure the clone mirrored the original site across all screen sizes.`,
        link: 'https://github.com/Hammediora/Personal-pro/tree/master/Final%20Project',
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub />]
    }
];

const Projects = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const animatedGradient = {
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(270deg, #000, #333, #555, #111)' 
          : 'linear-gradient(270deg, #dce5f0, #c9d8e9, #b0c7e2, #91b3d4)', 
        backgroundSize: '600% 600%', 
        animation: 'gradientAnimation 8s ease infinite', 
        '@keyframes gradientAnimation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      };

    return (
        <Box 
          id="projects" 
          sx={{ 
            padding: '30px 20px', 
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            marginTop: '80px',
            ...animatedGradient,
          }}
        >
            {/* Section Heading */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Typography
                    variant="h3"
                    textAlign="center"
                    gutterBottom
                    color="primary"
                    sx={{
                        fontWeight: 'bold',
                        borderBottom: '4px solid #d4af37',
                        display: 'inline-block',
                        paddingBottom: '10px',
                        background: 'linear-gradient(to right, #1976D2, #d4af37)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    My Projects
                </Typography>
            </motion.div>

            {/* Instruction Text */}
            <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="body2" color={theme.palette.text.secondary}>
                    Swipe left or right to explore projects
                </Typography>
            </Box>

            {/* Swiper Section */}
            <Swiper
                spaceBetween={isSmallScreen ? 10 : 50} 
                slidesPerView={1}
                navigation={!isSmallScreen}
                pagination={{ clickable: true }}
                lazy={true}
                preloadImages={false}
                modules={[Navigation, Pagination]}
                style={{ paddingBottom: '50px' }}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                        >
                            <Paper
                                elevation={5}
                                sx={{
                                    padding: { xs: '16px', sm: '24px' },
                                    marginBottom: '40px',
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: '15px',
                                    boxShadow: theme.palette.mode === 'dark' 
                                      ? '0 10px 30px rgba(0,0,0,0.3)' 
                                      : '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    maxWidth: '800px',
                                    margin: 'auto',
                                    '&:hover': {
                                        boxShadow: theme.palette.mode === 'dark' 
                                          ? '0 12px 35px rgba(0, 0, 0, 0.5)' 
                                          : '0 12px 35px rgba(0, 0, 0, 0.15)',
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                {/* Project Title */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: theme.palette.text.primary,
                                                fontWeight: 'bold',
                                                position: 'relative',
                                                paddingBottom: '6px',
                                                '&:after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    bottom: 0,
                                                    width: '100%',
                                                    height: '3px',
                                                    background: 'linear-gradient(to right, #1976D2, #d4af37)',
                                                    borderRadius: '4px',
                                                },
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Project Description */}
                                <Typography variant="body1" paragraph sx={{ marginTop: '12px', color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                                    {project.description}
                                </Typography>

                                {/* Display tool icons used in the project */}
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
                                    {project.tools.map((icon, idx) => (
                                        <Tooltip title={`Tool ${idx + 1}`} arrow key={idx}>
                                            <Box 
                                                sx={{ 
                                                    fontSize: '32px', 
                                                    color: '#d4af37', 
                                                    transition: 'transform 0.2s', 
                                                    '&:hover': { transform: 'scale(1.2)' } 
                                                }}
                                            >
                                                {icon}
                                            </Box>
                                        </Tooltip>
                                    ))}
                                </Box>

                                {/* View More Button */}
                                <Button
                                    size="small"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ 
                                        color: 'black',
                                        fontWeight: 'bold', 
                                        mt: 2, 
                                        '&:hover': {
                                            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                            backgroundColor: '#d4af37',
                                        }
                                    }}
                                >
                                View More
                                </Button>
                            </Paper>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
             {/* Swiper Custom CSS */}
        <style jsx>{`
                .swiper-button-next, .swiper-button-prev {
                    color: #d4af37; /* Match the gold theme */
                    font-size: 1.5rem; /* Default size */
                    transition: transform 0.3s;
                    margin-top: -30px; /* Position closer to the content */
                }

                /* Reduce size for small screens */
                @media (max-width: 600px) {
                    .swiper-button-next, .swiper-button-prev {
                        font-size: 1rem; /* Make smaller for mobile */
                        margin-top: -20px; /* Adjust position closer on mobile */
                    }
                }

                /* Hover effect for navigation buttons */
                .swiper-button-next:hover, .swiper-button-prev:hover {
                    transform: scale(1.1); /* Slightly grow on hover */
                }

                /* Adjust pagination dots size */
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #d4af37; /* Gold theme */
                    opacity: 0.7;
                    transition: opacity 0.3s;
                }

                /* Active dot color */
                .swiper-pagination-bullet-active {
                    background: #1976D2; /* Blue for the active dot */
                    opacity: 1;
                }
            `}</style>
        </Box>
    );
};

export default Projects;
