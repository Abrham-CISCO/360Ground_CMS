import React from 'react'
import {LocalModal} from '../../components/local-modal'
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Grid, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function EditTrainee(props)
{
    return(
        <Box>
            <LocalModal titleIcon = {<PersonIcon/>} open={props.open} title={"Edit Trainee Data"} handleClose={props.handleClose}>
                <Grid sx={{ml:'20px'}} container>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid xs={5} item>
                            Trainee Name
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="First Name"/>
                            </Grid>
                            <Grid xs={5} item>
                            &nbsp;
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Last Name"/>
                            </Grid>
                            <Grid xs={2} item> Gender
                                <Select fullWidth value={2} size={'small'}>
                                    <MenuItem value={1}>Female</MenuItem>
                                    <MenuItem value={2}>Male</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        Contact<br/>
                        <Grid container>
                            <Grid xs={4} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Telephone Number"/>
                            </Grid>
                            <Grid xs={8} item>
                                <TextField fullWidth size={'small'} label="Email Address"/>
                            </Grid>
                        </Grid>
                        Address<br/>
                        <Grid container>
                            <Grid xs={4} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="City"/>
                            </Grid>
                            <Grid xs={2} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Sub City"/>
                            </Grid>
                            <Grid xs={2} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Kebele"/>
                            </Grid>
                            <Grid xs={2} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Woreda"/>
                            </Grid>
                            <Grid xs={2} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="House No"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Box >
                            <Avatar  sx={{height:'175px',width:'175px',boxShadow:3, ml:'65px'}} />
                            <Button sx={{ ml:'65px', mt:'10px'}} variant={'contained'}  component="label"> 
                             <FileUploadIcon/> Upload Photo
                              <input  type="file" hidden />                            
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </LocalModal>
        </Box>

 )
}