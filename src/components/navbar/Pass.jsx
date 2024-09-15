import React, { useState } from 'react';

export default function Pass() {
    const [Pas, Setpas] = useState('Show');
    const [P, Setp] = useState('password');

    const pass = () => {
        if (P === 'password') {
            Setpas('Hide');
            Setp('text');
        } else {
            Setpas('Show');
            Setp('password');
        }
    }

    return (
        <div className="ontainer">
            <input type={`${P}`} name="password" id="password-input" />
            <button id="show" onClick={pass}>{Pas}</button>
        </div>
    );
}
