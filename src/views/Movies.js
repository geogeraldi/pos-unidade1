import { React } from 'react';
import { useMovies } from '../hooks/UseMovies';

export function Movies() {
    const movies = useMovies();
    
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