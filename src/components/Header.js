import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <>
            <h1>Aplicação Filmes</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
        </>
    );
}