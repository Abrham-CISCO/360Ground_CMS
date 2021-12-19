import React from 'react'
import { LocalModal } from '../../components/local-modal'
export default function EditSessionModal({open,handleClose}){
    return(
        <LocalModal title={"Edit Session"} open={open} handleClose={handleClose}>

        </LocalModal>
    )
}