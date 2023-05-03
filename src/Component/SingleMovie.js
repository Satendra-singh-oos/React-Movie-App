import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import useFetch from '../ContextApi/useFetch'

const SingleMovie = () => {

  const {id} =useParams()
  
  const {isLoading,isError,movie}=useFetch(`&i=${id}`)
  

  if(isLoading){
    return (
      <div className='movie-section'>
        <div className='loading'>Loading..</div>

      </div>
    )
  }

  return (
   
    // <div>SingleMovie {id}</div>
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movie.Poster} alt="" />
      </figure>
      <div className="card-content">
        {console.log(movie)}
        <p className="title">{movie.Title}</p>
        <p className=""></p>
        <p className="card-text">Released = {movie.Released}</p>
        <p className="card-text">Genre = {movie.Genre}</p>
        <p className="card-text">Rating = {movie.imdbRating} / 10</p>
        <p className="card-text">Country = {movie.Country}</p>
        <p className="card-text">Runtime = {movie.Runtime}</p>
        <p className="card-text">Actors = {movie.Actors}</p>
        <p className="card-text">Director = {movie.Director}</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div>
    </div>
  </section>
   
  )
}

export default SingleMovie