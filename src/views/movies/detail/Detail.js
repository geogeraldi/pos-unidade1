import { React } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../../hooks/UseMovies';
import style from './Detail.module.css';

export function MovieDetail() {

    const { id } = useParams();
    const movie = useMovie(id);

    return (
        <section className={style.movie}>
            <figure className={style.imageContainer}>
                {movie.poster_path && (
                    <img 
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                        alt="" 
                    />
                )}
            </figure>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </section>
    );

}
