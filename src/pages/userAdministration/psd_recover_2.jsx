import React from 'react'
import EntryFrame from '../components/entryFrame.component'
import Logo from './static/logo.png'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
export default function PSD_2(props)
{
    return(
        <EntryFrame>
            <img src={Logo} className='logo' alt="logo"/>
            <br/><br/>Welcome to the System<br/><br/>
            <h1>Password Recovery</h1>
            <TextField fullWidth size='small' label="Enter your pin here" sx={{mb:5}}/>

            <Button sx={{width:'80%' }} variant={'contained'} color='primary'>Submit</Button>

        </EntryFrame>
    )
}