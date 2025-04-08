import { React } from 'react';
import { useMovies } from '../../hooks/UseMovies';
import { MovieItem } from './itens/MovieItem';
import style from './Movies.module.css';

export function Movies() {
    const movies = useMovies();
    
    return (
        <section className={style.movies}>
            <h1>Filmes Populares</h1>
            <div className={style.moviesList}>
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
}