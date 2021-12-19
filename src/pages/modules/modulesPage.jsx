import React from 'react'
import ReactImage from './static/react_js.png'
import ModuleCard from '../../components/moduleCard.component'
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import NewModuleModal from './newModuleModal.component';
class ModulePage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            modules:[
                {
                    id:'M001',
                    title:'Introduction to React',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                },
                {
                    id:'M002',
                    title:'Getting started with React',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                },
                {
                    id:'M003',
                    title:'Introduction to FireBase',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                },
                {
                    id:'M004',
                    title:'Introduction to Angular',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                },
                {
                    id:'M005',
                    title:'Introduction to Python',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                },
                {
                    id:'M006',
                    title:'Introduction to MongoDB',
                    description:'Build encapsulated components that manage their own state, then compose them to make complex UIs'
                }
            ],
            searchKey:'',
            newModuleModalStatus:false,
        }
    }

    closeNewModuleModal = ()=> {
        this.setState({newModuleModalStatus:false})
    }

    openNewModuleModal = () => {
        this.setState({newModuleModalStatus:true})
    }

    render()
    {
        
        let tempModules = this.state.modules;
        tempModules = this.state.modules.filter(module=>
            (module.title.toUpperCase().includes(this.state.searchKey.toUpperCase())) ||
            (module.id.toUpperCase().includes(this.state.searchKey.toUpperCase()))
        )
        console.log(this.state.searchKey,tempModules)
        return(
            <div>
                <NewModuleModal open={this.state.newModuleModalStatus} handleClose = {this.closeNewModuleModal}/>
                <Box sx={{ml:'80px', width:'300px'}}>
                    Search
                    <Grid container sx={{width:'1450px'}} >
                        <Grid item xs={6}>
                            <TextField label="Type here to search by Module Name and ID" size={'small'} onChange={e=>this.setState({searchKey:e.target.value})} sx={{mb:'20px', width:'99%'}}  />
                        </Grid>
                        <Grid item xs={6}>

                            <Button variant='contained' onClick={this.openNewModuleModal}><AddIcon/>New Module</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Grid ml={10} container>
                    {tempModules.length!==0?tempModules.map(module=>
                    (
                        <Grid item  mr={1} xs={3} mb={1} key={module.id}>
                            <ModuleCard image={ReactImage} id={module.id} title= {module.title} description={module.description}/>
                        </Grid>
                    )):<h1>No Modules Found</h1>
                }
                </Grid>
            </div>
        )
    }
}

export default ModulePage
