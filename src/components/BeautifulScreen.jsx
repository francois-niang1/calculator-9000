import React, { useState } from 'react'
import "../css/Screen.css"
import ButtonPanel from './ButtonPanel'

export default function BeautifulScreen(props) {
    return (
        <div className ="">
            <input type="text" className='screen' value={props.value} onChange = {props.changeNumbers} disabled/>
        </div>
    )
}
