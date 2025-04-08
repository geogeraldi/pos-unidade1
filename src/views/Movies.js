import { React, useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movies.service';

export function Movies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {   
        getPopularMovies().then(({data}) => {
            setMovies(data.results);
        })
    }, []);
    
    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li>
                        <h2>{movie.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}