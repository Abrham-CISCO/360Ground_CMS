import React from 'react'
import EntryFrame from '../../components/entryFrame.component'
import Logo from './static/logo.png'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
export default function PSD_1(props)
{
    return(
        <EntryFrame>
            <img src={Logo} className='logo' alt="logo"/>
            <br/><br/>Welcome to the System<br/><br/>
            <h1>Password Recovery</h1>
            <TextField fullWidth size='small' label="Email" sx={{mb:5}}/>
            
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">System</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="System"
                    fullWidth  size='small' value={"1"}
                >
                <MenuItem value="1">Course Management System</MenuItem>
                <MenuItem value="2">CAP Provider System</MenuItem>
                </Select>
            </FormControl>

            <Button sx={{width:'80%' , mt:5}} variant={'contained'} color='primary'>Submit</Button>

        </EntryFrame>
    )
}