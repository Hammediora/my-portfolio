import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollToTop from './useScrollToTop'

const ScrollToTopButton = React.memo(() => {
    const { isVisible, scrollToTop } = useScrollToTop();

    // Only render if the button is visible
    if (!isVisible) {
        return null;
    }

    return (
        <Tooltip title="Go to top">
            <Fab 
                onClick={scrollToTop} 
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Tooltip>
    );
});

export default ScrollToTopButton;
