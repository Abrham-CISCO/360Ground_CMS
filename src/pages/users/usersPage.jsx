import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AddIcon from '@mui/icons-material/Add';
import NewUser from './newUser.component';
import EditUser from './editUser.component';
class UsersPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            newUserModalStatus:false,
            editUserModalStatus:false
        }
    }

    openNewUserModal = () => {
        this.setState({newUserModalStatus:true})
    }

    closeNewUserModal = () =>{
        this.setState({newUserModalStatus:false})
    }

    openEditUserModal = () => {
        this.setState({editUserModalStatus:true})
    }

    closeEditUserModal = () =>{
        this.setState({editUserModalStatus:false})
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
            field:'userType',
            headerName:'User Type',
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
                        <IconButton color={'primary'} onClick={this.openEditUserModal}>
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
            gender:'Male',
            telephone:'0923276844',
            userType: 'Module Creator'
        },
        {
            id:'12S',
            name:'Getachew Biru',
            email:'agcruthsose22@gmail.com',
            gender:'Male',
            telephone:'0923276844',
            userType: 'Administrator'
        }
    ]
    render()
    {
        return(
            <Box sx={{height:'600px', width:'100%'}}>
                <NewUser open={this.state.newUserModalStatus} handleClose={this.closeNewUserModal}/>
                <EditUser open={this.state.editUserModalStatus} handleClose={this.closeEditUserModal}/>
                <h1 style={{lineHeight:0.1}}>Users</h1>
                <Button onClick = {this.openNewUserModal} variant={'contained'} sx={{mb:1}} size={'small'}>
                    <AddIcon />new User
                </Button>
            <DataGrid rows={this.data} columns={this.headCells}/>
            </Box>
        )
    }
}

export default UsersPage
