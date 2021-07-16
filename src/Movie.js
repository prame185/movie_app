import React from 'react'
import propTypes from 'prop-types'
import "./Movie.css"

function Movie({year, title, summary, poster, genres}) {
    return <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
            <h3 className="movie_title"> {title}</h3>
            <ul className="genres"> {
                genres.map(genre =>
                (
                    <li className="genres_genre">{genre}</li>
                )
            )}</ul>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};
export default Movie;