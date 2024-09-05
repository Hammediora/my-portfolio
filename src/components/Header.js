import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import profilePicture from '../assets/images/BELLO_HAMMED 3.jpg';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" href="#about-me">About Me</Button>
                <Button color="inherit" href="#Education-skills">Education and Skills</Button>
                <Button color="inherit" href="#projects">Projects</Button>
                <Button color="inherit" href="#work-experience">Work Experience</Button>
                <Button color="inherit" href="#contact-info">Contact Info</Button>
            </Toolbar>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <img src={profilePicture} alt="Hammed Bello's Portrait" style={{ borderRadius: '50%', width: '250px' }} />
                <Typography variant="h4" component="h1" gutterBottom>
                    Hammed Bello
                </Typography>
                <Typography variant="body1">
                    Chicago, IL. | <a href="tel:7732904887">773-290-4887</a> | <a href="mailto:Hammedbello97@gmail.com">Hammedbello97@gmail.com</a>
                </Typography>
            </div>
        </AppBar>
    );
};

export default Header;
