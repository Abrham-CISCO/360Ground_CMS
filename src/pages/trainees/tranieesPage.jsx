import React from 'react'
import './tranieesPage.css'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AddIcon from '@mui/icons-material/Add';
import NewTrainee from '../trainees/newTrainee.component';
import EditTrainee from './editTrainee.component';
class TraineePage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            newTraineeModalStatus:false,
            editTraineeModalStatus:false
        }
    }

    openNewTraineeModal = () => {
        this.setState({newTraineeModalStatus:true})
    }

    closeNewTraineeModal = () =>{
        this.setState({newTraineeModalStatus:false})
    }

    openEditTraineeModal = () => {
        this.setState({editTraineeModalStatus:true})
    }

    closeEditTraineeModal = () =>{
        this.setState({editTraineeModalStatus:false})
    }

    makeBold = (props) => {
        return (<Typography sx = {{fontWeight:'bold',textDecoration:'underline', textTransform:'uppercase'}}>
            {props.colDef.headerName}
        </Typography>)
    }

    headCells = [
        {
            field:'id',
            headerName:'ID',
            width:100,
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
                        <IconButton color={'primary'} onClick={this.openEditTraineeModal}>
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
            <Box sx={{height:'600px', width:'100%'}}>
                <NewTrainee open={this.state.newTraineeModalStatus} handleClose={this.closeNewTraineeModal}/>
                <EditTrainee open={this.state.editTraineeModalStatus} handleClose={this.closeEditTraineeModal}/>
                <h1 style={{lineHeight:0.1}}>Trainees</h1>
                <Button onClick = {this.openNewTraineeModal} variant={'contained'} sx={{mb:1}} size={'small'}>
                    <AddIcon />new Student
                </Button>
            <DataGrid rows={this.data} columns={this.headCells}/>
            </Box>
        )
    }
}

export default TraineePage
