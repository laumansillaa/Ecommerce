import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div>
            <div>
                <h1>Bienvenidos a DogiApp</h1>
                <div>
                    <Link to='/localsignin'>
                        <button>Ya tengo una cuenta</button>
                    </Link>
                    <Link to='/signup'>
                        <button>Crear una cuenta</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}