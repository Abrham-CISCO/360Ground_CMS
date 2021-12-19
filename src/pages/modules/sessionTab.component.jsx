import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import EditSessionModal from './editSessionModal.component';
import NewSessionModal from './newSessionModal.component';
import OpenSessionModal from './openSessionModal.component';

export default function SessionTab() {
  const [value, setValue] = React.useState('1');
  const [editSessionModalStatus, setEditSessionModalStatus] = React.useState(false);
  const [newSessionModalStatus, setNewSessionModalStatus] = React.useState(false);
  const [openSessionModalStatus, setOpenSessionModalStatus] = React.useState(false);

  const closeNewSessionModal = ()=> setNewSessionModalStatus(false);
  const openNewSessionModal = ()=> setNewSessionModalStatus(true);

  const openEditSessionModal = () => setEditSessionModalStatus(true);
  const closeEditSessionModal = () => setEditSessionModalStatus(false);

  const openOpenSessionModalStatus = () => setOpenSessionModalStatus(true);
  const closeOpenSessionModalStatus = () => setOpenSessionModalStatus(false);

 const makeBold = (props) => {
    return (<Typography sx = {{fontWeight:'bold', textTransform:'uppercase'}}>
        {props.colDef.headerName}
    </Typography>)
}

  const headCells = [
    {
        field:'id',
        headerName:'ID',
        width:100,
        renderHeader: (props) => makeBold(props)
    },
    {
        field:'name',
        headerName:'Session Name',
        width:200,
        renderHeader: (props) => makeBold(props)
    },
    {
        field:'description',
        headerName:'Description',
        width:560,
        renderHeader: (props) => makeBold(props)
    },
    {
        field:'open',
        headerName:'Open',
        width:75,
        renderCell:(params)=>{
            return (
                <div>
                    <IconButton onClick = {openOpenSessionModalStatus} color={'primary'}>
                        <OpenInNewIcon/>
                    </IconButton>
                </div>
            )
        },
        renderHeader: (props) => makeBold(props)
    },
    {
        field:'edit',
        headerName:'Edit',
        width:75,
        renderCell:(params)=>{
            return (
                <div>
                    <IconButton onClick={openEditSessionModal} color={'primary'}>
                        <EditIcon/>
                    </IconButton>
                </div>
            )
        },
        renderHeader: (props) => makeBold(props)
    },
    {
        field:'delete',
        headerName:'Delete',
        width:92,
        renderCell:(params)=>{
            return (
                <div>
                    <IconButton color={'error'}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            )
        },
        renderHeader: (props) => makeBold(props)
    }
    ]

  const data = [
    {
        id:'12AS',
        name:'What is React',
        description:'In this section you will what react is. In what way it is unique and why you need to used.'
    },
    {
        id:'12S',
        name:'Why is it used',
        description:'In this session you will learn the uses of React'
    }
  ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <React.Fragment>
        <Box sx={{height:'600px', width:'100%'}}>
        <EditSessionModal open={editSessionModalStatus} handleClose={closeEditSessionModal}/>
        <NewSessionModal open={newSessionModalStatus} handleClose={closeNewSessionModal}/>
        <OpenSessionModal open={openSessionModalStatus} handleClose={closeOpenSessionModalStatus}/>
            <Grid container>
                <Grid item xs={8}>
                    List of sessions on this specific course
                </Grid>
                <Grid item xs={4} sx={{textAlign:'end'}}>
                    <Button onClick={openNewSessionModal} variant={'contained'} sx={{mr:1, mb:1}}><AddIcon/>new Session</Button>
                </Grid>
            </Grid>
            <DataGrid density='compact' rows={data} columns={headCells}/>
        </Box>
      </React.Fragment>

  );
}