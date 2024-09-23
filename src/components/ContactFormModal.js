import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const ContactFormModal = ({ isOpen, closeModal }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle>
        <Typography variant="h4">Contact Me</Typography>
      </DialogTitle>
      <DialogContent>
        <form action="/path_to_backend_functionality" method="post">
          <TextField
            required
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            id="name"
            name="name"
          />
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            id="email"
            name="email"
          />
          <TextField
            required
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            id="message"
            name="message"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="secondary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactFormModal;
