import React from 'react';
import { Box, Typography, Link, Paper, Button, Grid } from '@mui/material';

const ContactInfo = ({ onContactClick, onGameClick }) => {
  return (
    <Box id="contact-info" sx={{ marginTop: 4, marginBottom: 4 }}>
      {/* Grid container for side-by-side cards */}
      <Grid container spacing={4}>
        {/* Contact Info Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: '15px',
              backgroundColor: 'background.paper',
              height: '100%', 
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'space-between', 
            }}
          >
            <Typography
              variant="h3"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                background: 'linear-gradient(to right, #1976D2, #d4af37)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ textAlign: 'center', marginTop: 2, flexGrow: 1 }}>
              <Typography variant="body1" gutterBottom>
                Email: <Link href="mailto:HammedBello97@gmail.com" underline="hover" color="primary">HammedBello97@gmail.com</Link>
              </Typography>

              <Typography variant="body1" gutterBottom>
                Phone: <Link href="tel:7732904887" underline="hover" color="primary">773-290-4887</Link>
              </Typography>

              <Typography variant="body1" gutterBottom>
                LinkedIn: <Link href="https://www.linkedin.com/in/hammed-bello-58a304254" underline="hover" color="primary" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/hammed-bello-58a304254</Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Actions Card (Resume + Buttons) */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: '15px',
              backgroundColor: 'background.paper',
              height: '100%', // Ensure the card takes the full height
              display: 'flex',
              flexDirection: 'column', // Align the content in a column
              justifyContent: 'space-between', // Distribute content evenly
            }}
          >
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                background: 'linear-gradient(to right, #1976D2, #d4af37)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Actions
            </Typography>

            <Box sx={{ textAlign: 'center', marginTop: 2, flexGrow: 1 }}>
              {/* Resume Download Button */}
              <Button
                variant="contained"
                color="primary"
                href="https://drive.google.com/file/d/1yvqjaAThkfgAgGMt54oRkIqN--kezmP5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2, width: '100%' }}
              >
                Download My Resume
              </Button>

              {/* Play a Fun Game and Contact Me buttons */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onGameClick}
                  sx={{ width: '100%' }}
                >
                  Play a Fun Game!
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={onContactClick}
                  sx={{ width: '100%' }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
