import { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movies.service';

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
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {   
        getPopularMovies(id).then(({data}) => {
            setMovie(data.results);
        })
    }, [id]);
    
    return movie;
}

