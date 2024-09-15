import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [mode,setMode]=useState("light")

    const setmode=()=>{
        if(mode==='light'){
            setMode("dark")
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
            
        }
        else{
            setMode("light")
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                       

                    </ul>   
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={setmode}/>
                            <label className={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{mode==='light'?'light':'dark'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
