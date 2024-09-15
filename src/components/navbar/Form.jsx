import React, { useState } from 'react'
import Buttons from './Buttons'

export default function Form() {
    const [text,setText]=useState("hi rohit")
    
    const TextChange=(event)=>{
        setText(event.target.value);
    }

    return (
        <div className="container">
            <div className="mb-3 my-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={TextChange} ></textarea>
            </div>
            <Buttons text={text} setText={setText}/>
            <br />
            <br />
            <p>Num of words {text.split(" ").length-1} and char {text.length}</p>
            <h5>preview</h5>
            <p>{text}</p>

        </div>
    )
}
