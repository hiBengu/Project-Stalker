import {useState} from 'react';
import './Stalker.css';
import React from 'react';


function Stalker() {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [results] = useState([]);


    const handleFirstChange = event => {
        setFirstInput(event.target.value);
    };

    const handleSecondChange = event => {
        setSecondInput(event.target.value);
    };

    function findCommons() {
        // Clear Inputs
        setFirstInput('');
        setSecondInput('');

        results.push({"name": firstInput});
    }

    return (
    <div className="stalker">
        <div className="stalker-main">
            <div className="stalker-intro">
                <p>
                    Enter 2 instagram accounts to down below to find common followers.
                </p>
            </div>
            <div className="stalker-search">
                <div>
                    <input className='stalker-input' value={firstInput} onChange={handleFirstChange} type='text'></input>
                    <input className='stalker-input' value={secondInput} onChange={handleSecondChange} type='text'></input>
                </div>
                <button className='stalker-button' onClick={findCommons}>Find!</button>
            </div>
            <div className="stalker-results">
                {results.map(function(d, idx){
                    return (<div key={idx} className='result-div'>{d.name}</div>)
                })}
            </div>
        </div>
        <div className="stalker-side">

        </div>
    </div>

    );
}

export default Stalker;
