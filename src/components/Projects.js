import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
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
        description: 'Developing a full-stack web application that allows businesses to schedule employees\' weekly shifts. Using Firebase for authentication and database, Node.js for the backend, and React for the frontend.',
        link: '#',
        tools: [<FaReact />, <FaNodeJs />, <SiFirebase />] // Icons representing the tools used
    },
    {
        title: 'Easy Parking (Conceptual Design)',
        description: 'Created a vision and scope document for the "Easy Parking" mobile app during a team project at Northeastern Illinois University.',
        link: 'https://drive.google.com/file/d/1NXxmlwmIUse8M1PuHvmpCxdA7LJvi7Ru/view?usp=sharing',
        tools: [<SiJavascript />, <FaReact />]
    },
    {
        title: 'Personal Portfolio Website',
        description: 'Developed a responsive personal portfolio website to showcase my skills and projects, using modern CSS and JavaScript.',
        link: 'https://hammediora.github.io/',
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub />]
    },
    {
        title: 'Apple Website Clone',
        description: 'Recreated the design and functionality of Apple\'s website to practice front-end development skills.',
        link: 'https://github.com/Hammediora/Personal-pro/tree/master/Final%20Project',
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub />]
    }
];

const Projects = () => {
    return (
        <Box id="projects" sx={{ padding: '30px 20px', background: 'linear-gradient(to bottom right, #e0eafc, #cfdef3)' , marginTop: '80px'}}>
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

            <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="body2" color="textSecondary">
                    Swipe left or right to navigate
                </Typography>
            </Box>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true} // Enable navigation arrows
                pagination={{ clickable: true }} // Enable pagination
                lazy={true} // Lazy loading for better performance
                preloadImages={false}
                modules={[Navigation, Pagination]} // Ensure Pagination and Navigation are added as modules
                style={{ paddingBottom: '30px' }}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            initial={{ opacity: 0 }} // Simplified animation
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.3, duration: 0.5 }}
                        >
                            <Paper
                                elevation={5}
                                sx={{
                                    padding: { xs: '16px', sm: '24px' },
                                    marginBottom: '40px',
                                    backgroundColor: '#fff',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    maxWidth: '800px',  // Set a max width to center the content
                                    margin: 'auto',  // Center the content
                                    '&:hover': {
                                        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#444',
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

                                <Typography variant="body1" paragraph sx={{ marginTop: '12px', color: '#555', lineHeight: 1.7 }}>
                                    {project.description}
                                </Typography>

                                {/* Display tool icons used in the project */}
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                                    {project.tools.map((icon, idx) => (
                                        <Box key={idx} sx={{ fontSize: '32px', color: '#d4af37' }}>
                                            {icon}
                                        </Box>
                                    ))}
                                </Box>

                                <Button
                                    size="small"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: '#d4af37' }}
                                >
                                    View More
                                </Button>
                            </Paper>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Projects;
