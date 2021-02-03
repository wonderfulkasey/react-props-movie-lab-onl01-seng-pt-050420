import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
  return (
      movieData.map(function (e){
        return <MovieCard 
        title={e.title} 
        IMDBRating={e.IMDBRating} 
        genres={e.genres} 
        poster={e.poster} 
        />
      })
    )
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
