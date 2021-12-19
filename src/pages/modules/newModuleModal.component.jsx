import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { LocalModal } from '../../components/local-modal'
import { Button, Grid, TextField } from '@mui/material';
class NewModuleModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render()
    {
        return(
            <LocalModal titleIcon={<AddIcon/>} title="Create new module" open={this.props.open} handleClose={this.props.handleClose}>
                <Grid sx={{ml:'20px'}} container>
                    <Grid item xs={11}>
                    Module Detail
                        <Grid container>
                            <Grid xs={2} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Module ID"/>
                            </Grid>
                            <Grid xs={10} item>
                                <TextField sx={{pr:'8px', pb:'5px'}} fullWidth size={'small'} label="Module Name"/>
                            </Grid>
                        </Grid>
                        Description<br/>
                        <Grid container>
                            <Grid xs={12} item>
                                <textarea style={{borderRadius:5, width:'100%'}} rows={15}>

                                </textarea>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </LocalModal>
        )
    }
}

export default NewModuleModal