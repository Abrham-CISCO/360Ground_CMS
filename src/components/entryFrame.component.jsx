import React from 'react'
import './entryFrame.styles.css'

export default function EntryFrame(props)
{
return <div className='box'>
        {props.children}
    </div>
}