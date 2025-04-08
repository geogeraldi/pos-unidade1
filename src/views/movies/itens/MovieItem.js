import { React } from 'react';
import { Link } from 'react-router-dom';
import style from './MovieItem.module.css';

export function MovieItem({movie}) {

    return (
        <div id={movie.id} className={style.movie}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />}
            <h2>{movie.title}</h2>
            <p>
                <Link to={`/movies/${movie.id}`} className={style.detailsBtn}>
                    Ver detalhes
                </Link>
            </p>
        </div>
    );

}
