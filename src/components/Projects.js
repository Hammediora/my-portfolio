import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
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
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub/>]
    },
    {
        title: 'Apple Website Clone',
        description: 'Recreated the design and functionality of Apple\'s website to practice front-end development skills.',
        link: 'https://github.com/Hammediora/Personal-pro/tree/master/Final%20Project',
        tools: [<SiCss3 />, <SiJavascript />, <SiGithub />]
    }
];

const Projects = () => {
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, 
    };

    return (
        <Box id="projects" sx={{ padding: '20px' }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                My Projects
            </Typography>
            <Slider {...settings}>
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Card sx={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
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
                            </CardContent>
                            <Button
                                size="small"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: '#d4af37' }}
                            >
                                View More
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </Slider>
        </Box>
    );
};

export default Projects;
