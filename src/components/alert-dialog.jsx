import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function AlertDialog({open, handleClose}) {
  
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Activate / Deactivate</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Why do you want to change the status?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reason"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}