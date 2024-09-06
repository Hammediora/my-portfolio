import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionHeader = ({ title, icon: Icon }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Icon sx={{ marginRight: 1, fontSize: 32, color: 'primary.main' }} /> {/* Icon styled with theme */}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
