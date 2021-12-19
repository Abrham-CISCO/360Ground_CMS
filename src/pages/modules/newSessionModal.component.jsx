import { Grid } from '@mui/material'
import React from 'react'
import { LocalModal } from '../../components/local-modal'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TabContext, TabPanel } from '@mui/lab';

export default function NewSessionModal({handleClose, open}){
   
   return(<LocalModal title={"New Session Modal"} open={open} handleClose={handleClose}>
    <Grid container>
        <Grid item xs={12}>
            
            <FormControl component="fieldset">
                <FormLabel component="legend">What type of session do you want to create?</FormLabel>
                <RadioGroup row aria-label="sessionType" name="row-radio-buttons-group">
                    <FormControlLabel value="VideoLecture" control={<Radio />} label="Video Lecture" />
                    <FormControlLabel value="LecureNote" control={<Radio />} label="Lecture Note" />
                    <FormControlLabel value="Audio" control={<Radio />} label="Audio" />
                    <FormControlLabel value="Assesement" control={<Radio />} label="Assesement" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <TabContext value={"0"}>
                <TabPanel value={"0"}>
                    Can you see me?
                </TabPanel>
            </TabContext>
        </Grid>
    </Grid>
    </LocalModal>)
}