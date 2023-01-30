import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../config/api_key";
import { Container, MovieList, Movie } from "./components";



export default function Home(){

    const [movies, setMovies] = useState<any[]>([])
    const image_path ="https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])
    
  return(
    
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {
                    movies.map( movie => {
                        return(
                            <Movie>
                                <Link to={`/details/${movie.id}`}> <img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    );
  
}