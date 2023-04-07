import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../config/api_key";
import { Container } from "./components";
import React from "react";

export default function Details (){

    const [movie, setMovie] = useState<any>({})
    const {id} =useParams()
    useEffect(() => {        
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
    .then(response => response.json())
    .then(data => setMovie(data))
    }, [id])

    return(
        <Container>
            <div className="movie">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="releaseDate">Release date: {movie.release_date} </span>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            </div>
        </Container>

    );

}