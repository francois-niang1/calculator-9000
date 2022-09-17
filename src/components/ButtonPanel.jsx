import React, {useState} from 'react'
import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import ClearAll from './ClearAll'
import '../css/ButtonPanel.css'

export default function ButtonPanel() {

    const handleClick = (i) => {
        console.log(i)
    }

    const handleClickOperation = (i) => {
        console.log(i)
    }

  return (
    <div className='ButtonPanel'>
        <div className="Numbers">
            <div>
                <AmazingNumberButton value='1' buttonClick= {()=>{handleClick(1)}} numbers='1'/>
                <AmazingNumberButton value='2' buttonClick= {()=>{handleClick(2)}} numbers='2'/>
                <AmazingNumberButton value='3' buttonClick= {()=>{handleClick(3)}} numbers='3'/>
                <AmazingNumberButton value='0' buttonClick= {()=>{handleClick(0)}} numbers='0'/>
                <ClearAll/>
                <MagnificientEqualButton/>
            </div>
            <div>
                <AmazingNumberButton value='4' buttonClick= {()=>{handleClick(4)}} numbers='4'/>
                <AmazingNumberButton value='5' buttonClick= {()=>{handleClick(5)}} numbers='5'/>
                <AmazingNumberButton value='6' buttonClick= {()=>{handleClick(6)}} numbers='6'/>
            </div>
            <div>
                <AmazingNumberButton value='7' buttonClick= {()=>{handleClick(7)}} numbers='7'/>
                <AmazingNumberButton value='8' buttonClick= {()=>{handleClick(8)}} numbers='8'/>
                <AmazingNumberButton value='9' buttonClick= {()=>{handleClick(9)}} numbers='9'/>
            </div>
        </div>
        <div className='Operator'>
            <GreatOperationButton value='+' buttonClick= {()=>{handleClickOperation('+')}} operation='+'/>
            <GreatOperationButton value='-' buttonClick= {()=>{handleClickOperation('-')}} operation='-'/>
            <GreatOperationButton value='*' buttonClick= {()=>{handleClickOperation('*')}} operation='*'/>
            <GreatOperationButton value='/' buttonClick= {()=>{handleClickOperation('/')}} operation='/'/>
        </div>
    </div>
  )
}
