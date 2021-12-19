import React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Grid, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export const LocalModal = (props) => {
    const {open, handleClose,children, title} = props
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        borderRadius: 1
      };
      return(
        <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', minHeight:'100px'} }}
        maxWidth="lg"
        open={open}
      >
        <AppBar color={props.color} sx={{ position: 'relative' }}>
        <DialogTitle sx={{width:'100%'}}>
          <Typography sx={{fontSize:'18px'}}>
            {props.titleIcon}
          {"      " + title}

          </Typography>
        <IconButton
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8
                  }}
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
        </DialogTitle>           
        </AppBar>
        <DialogContent dividers>
                  {children}
        </DialogContent>
        <DialogActions>
          <Button autofocus variant="outlined">
            <CheckCircleOutlineRoundedIcon sx={{mr:'5px'}}/>
            Save</Button>
        </DialogActions>
      </Dialog>
      )

}