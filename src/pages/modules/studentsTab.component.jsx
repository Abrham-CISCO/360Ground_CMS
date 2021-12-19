import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
class StudentsTab extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    makeBold = (props) => {
        return (<Typography sx = {{fontWeight:'bold', textTransform:'uppercase'}}>
            {props.colDef.headerName}
        </Typography>)
    }

    headCells = [
        {
            field:'id',
            headerName:'ID',
            width:75,
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'name',
            headerName:'Name',
            width:200,
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'email',
            headerName:'Email',
            width:200,
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'gender',
            headerName:'Gender',
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'telephone',
            headerName:'Telephone',
            width:150,
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'educationalBackground',
            headerName:'Educational Background',
            width:270,
            renderHeader: (props) => this.makeBold(props)
        },
        {
            field:'actions',
            headerName:'Actions',
            width:100,
            renderCell:(params)=>{
                return (
                    <div>
                        <IconButton color={'primary'}>
                            <OpenInNewIcon/>
                        </IconButton>
                    </div>
                )
            },
            renderHeader: (props) => this.makeBold(props)
        }
    ]

    data = [
        {
            id:'12AS',
            name:'Abrham Getachew',
            email:'agcruthsose22@gmail.com',
            gender:'male',
            telephone:'0923276844',
            educationalBackground: 'Bsc. Electromechanical Engineering'
        },
        {
            id:'12S',
            name:'Abrham Getachew',
            email:'agcruthsose22@gmail.com',
            gender:'male',
            telephone:'0923276844',
            educationalBackground: 'Bsc. Electromechanical Engineering'
        }
    ]
    render()
    {
        return(
            <Box sx={{height:'600px', width:'100%', ml:-1}}>
                
                Student Stats<Grid container>
                    <Grid item xs={9} mb={2}>
                        <Chip color='primary' variant='outlined' label="Number of Students: 2"/>
                        <Chip color='primary' variant='outlined' label="Average Progress: 95.21%"/>
                        <Chip color='primary' variant='outlined' label="Average Assesement: 90%"/>
                        <Chip color='primary' variant='outlined' label="Average Completion time: 1Hr"/>
                    </Grid>
                    <Grid item xs={3} justifyContent={"end"}>
                        <Button variant={'contained'} sx={{ml:16}} size={'small'}>
              <AddIcon/>
              new Student</Button>
                    </Grid>
                </Grid>
                            
            <DataGrid rows={this.data} columns={this.headCells} density='compact'/>
            </Box>
        )
    }
}

export default StudentsTab
