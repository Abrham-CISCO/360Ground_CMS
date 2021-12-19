import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Grid, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function SummaryTab(props)
{
    const [fileUploadModalStatus, setFileUploadModalStatus] = React.useState(false);
    const closeFileUploadModal = () => setFileUploadModalStatus(false);
    const openFileUploadModal = () => setFileUploadModalStatus(true);

    return(
        <Box>
                <Grid sx={{ml:'20px'}} container>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid xs={12} item>
                            Course Name
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="First Name"/>
                            </Grid>
                        </Grid>
                        Description<br/>
                        <Grid container>
                            <Grid xs={12} item>
                                <textarea style={{borderRadius:5, width:'100%'}} rows={15}>

                                </textarea>
                            </Grid>
                        </Grid>
                        <Button variant='contained'>Save</Button>
                    </Grid>
                </Grid>
        </Box>

 )
}