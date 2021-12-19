import React from 'react'
import EntryFrame from '../components/entryFrame.component'
import Logo from './static/logo.png'
import './sign-in-page.css'
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
export default function PSD_3()
{
    return(
        <EntryFrame>
            <img src={Logo} className='logo' alt="logo"/>
            
            <h1>የይለፍ ቃሎትን ይቀይሩ</h1>
            በሚከተሉት ቅጾች አዲሱ የይለፍ ቃሎትን ያስመዝግቡ<br/>
            <TextField fullWidth size='small'  sx={{mb:5, mt:5}}  type="password" label="የይለፍ ቃል"/>
            <TextField fullWidth size='small'  sx={{mb:5}}  type="password" label="የይለፍ ቃል በድጋሜ"/>
            

            <Button sx={{width:'80%' , mt:2}} variant={'contained'} color='primary'>ቀይር</Button>
        </EntryFrame>
    )
}