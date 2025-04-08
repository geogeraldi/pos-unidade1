import { useEffect, useState } from 'react';
import { getMovie, getPopularMovies } from '../services/movies.service';

//hook é uma função para abstrair as funções customizaveis dos estados dos componentes

export function useMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {   
        getPopularMovies().then(({data}) => {
            setMovies(data.results);
        })
    }, []);
    
    return movies;
}

export function useMovie(id) {  
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {   
        getMovie(id).then(({data}) => {
            setMovie(data);
        })
    }, [id]);
    
    return movie;
}

