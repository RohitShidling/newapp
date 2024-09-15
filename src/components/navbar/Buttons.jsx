import React from "react";

export default function Buttons(props){
    const upper=()=>{
        props.setText(props.text.toUpperCase());
    }

    const lower=()=>{
        props.setText(props.text.toLowerCase())
        
    }
    const copy=()=>{
        let txt=props.text;
        navigator.clipboard.writeText(txt);
    }

    const clear=()=>{
        props.setText("")
    }

    
    return(
        <>
        <button type="button" className="btn btn-primary" onClick={upper}>UPPER CASE</button>
        <button type="button" className="btn btn-primary" onClick={lower}>lOWER CASE</button>
        <button type="button" className="btn btn-primary" onClick={clear}>CLEAR</button>
        <button type="button" className="btn btn-primary" onClick={copy}>COPY</button>
        </>

    );

}