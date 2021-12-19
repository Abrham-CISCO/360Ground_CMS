import React from 'react'
import EntryFrame from '../components/entryFrame.component'
import Logo from './static/logo.png'
import './sign-in-page.css'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
export default function Signin()
{
    return(
        <EntryFrame>
            <img src={Logo} className='logo' alt="logo"/>
            <br/><br/>Welcome to the System<br/><br/>
            <h1>Sign In</h1>
            
            <TextField fullWidth size='small' label="Email" sx={{mb:5}}/>
            <TextField fullWidth size='small'  sx={{mb:5}}  type="password" label="Password"/>
            
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sign in to</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sign in to"
                    fullWidth  size='small' value={"1"}
                >
                <MenuItem value="1">Course Management System</MenuItem>
                <MenuItem value="2">CAP Provider System</MenuItem>
                </Select>
            </FormControl>

            <Button sx={{width:'80%' , mt:5}} variant={'contained'} color='primary'>Sign In</Button>
        </EntryFrame>
    )
}