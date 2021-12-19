import React from 'react'
import { LocalModal } from '../../components/local-modal'
export default function OpenSessionModal({open,handleClose}){
    return(
        <LocalModal open={open} handleClose={handleClose} title={"Open Session"}>

        </LocalModal>
    )
}