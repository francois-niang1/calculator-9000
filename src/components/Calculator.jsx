import React, { useState, useEffect } from 'react'
import BeautifulScreen from './BeautifulScreen'
import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import SaveButton from './SaveButton'
import ClearAll from './ClearAll'
import ItsOver9000 from './ItsOver9000'
import axios from 'axios'
import "../css/calculator.css"
import "../css/ButtonPanel.css"
import "../css/Table.css"

export default function Calculator() {
    const [calc, setCalc] = useState("");
    const [res, setRes] = useState("")
    const [state, setState] = useState(true)
    const [table, setTable] = useState([])

    const handleClick = (e) => {
        calc === 0
        ? setCalc(e.target.value)
        : setCalc(calc + e.target.value)
    }

    const calculate = () => {
        try {
            const result = eval(calc);
            if (result < 9000){
                setRes(result)
                setState(true)
            }
            else{
                setState(false)
            }
        }
        catch(error){
            setRes('Error')
        }
    }

    const clear = () => {
        setCalc("")
        setRes("")
        setState(true)
    }

    const save = async () => {
        console.log(calc)
        console.log(res)
        console.log(table)
        const url = 'http://localhost/ReactJs/calculator-9000/php/ApiCalculator.php'
        try{
            const DataCalcul = await axios.post(url, {
                calc :calc,
                res :res
            })
            console.log(DataCalcul.data)
        }
        catch(error){
            console.log(error)
        }

    }
    useEffect(() => {
        axios.get('http://localhost/ReactJs/calculator-9000/php/GetData.php').then(response => response.data)
        .then((data) => {
            setTable(data)
        });
    })

    return (
        <div className="Calculator">
            {
                state === false
                ?<ItsOver9000 visibility='display'/>
                :<ItsOver9000 visibility='hidden'/>
            }

            <BeautifulScreen value={calc} changeNumbers={(e) => setCalc(e.target.value)} />
            <BeautifulScreen value={res} changeNumbers={(e) => setRes(e.target.value)} />
            <div className='ButtonPanel'>
                <div className="Numbers">
                    <AmazingNumberButton handleClickParent={handleClick}/>
                </div>

                <div className='Operator'>
                    <GreatOperationButton handleClickParent={handleClick} />
                </div>
            </div>
            <div className='ClearEqual'>
                    <ClearAll buttonClick={(e) => { clear(e) }}/>
                    <MagnificientEqualButton value= '=' buttonClick={(e) => { calculate(e)}} equal='='/>
            </div>
            <SaveButton buttonClick={(e) => { save(e)}}/>
            <div>
                <table className='table'>
                    <tr>
                        <th>Calcul</th>
                        <th>Resultat</th>
                    </tr>
                    {table.map((item) => (
                        <tr>
                            <td>{item.calcul}</td>
                            <td>{item.resultat}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
        
    )
}
