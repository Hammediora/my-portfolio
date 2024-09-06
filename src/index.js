import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App will now manage the ThemeProvider
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
