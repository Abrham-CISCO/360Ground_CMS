import { Grid } from '@mui/material'
import React from 'react'
import { LocalModal } from '../../components/local-modal'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TabContext, TabPanel } from '@mui/lab';
import LectureNoteSession from './LectureNoteSession.component';
import AudioSession from './Audio.component';
import CreateAssesementSession from './assesementSession.component';
import VideoLectureSession from './videoLectureSession.component';

export default function NewSessionModal({handleClose, open}){
   const [sessionType, setSessionType] = React.useState("VideoLecture")

   const handleChange = (event) => {
       setSessionType(event.target.value)
   }
console.log(sessionType)
return(<LocalModal title={"New Session Modal"} open={open} handleClose={handleClose}>
    <Grid container>
        <Grid item xs={12}>         
            <FormControl component="fieldset">
                <FormLabel component="legend">What type of session do you want to create?</FormLabel>
                <RadioGroup row aria-label="sessionType" value={sessionType} onChange={handleChange} name="row-radio-buttons-group">
                    <FormControlLabel value="VideoLecture" control={<Radio />} label="Video Lecture" />
                    <FormControlLabel value="LecureNote" control={<Radio />} label="Lecture Note" />
                    <FormControlLabel value="Audio" control={<Radio />} label="Audio" />
                    <FormControlLabel value="Assesement" control={<Radio />} label="Assesement" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <TabContext value={sessionType}>
                <TabPanel value={"VideoLecture"}>
                    <VideoLectureSession/>
                </TabPanel>
                <TabPanel value={"LecureNote"}>
                    <LectureNoteSession/>
                </TabPanel>
                <TabPanel value={"Audio"}>
                    <AudioSession/>
                </TabPanel>
                <TabPanel value={"Assesement"}>
                    <CreateAssesementSession/>
                </TabPanel>
            </TabContext>
        </Grid>
    </Grid>
    </LocalModal>)
}