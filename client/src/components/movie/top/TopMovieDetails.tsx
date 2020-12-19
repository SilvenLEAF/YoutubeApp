import M from 'materialize-css'





import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 
 

import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import MovieDetails from '../MovieDetails'



interface paramsInterface {
  id: string
}






function TopMovieDetails() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const { userData } = useContext(AuthContext);
  
  
  
  const { id } = useParams<paramsInterface>()

  
  const backBtn= <Link to="/search" className="btn mySecondaryBtn waves-effect waves-light myCornerless"><i className="fa fa-search"></i> Search Movie</Link>
  
  return (
    <>
        <MovieDetails id={ id } backBtn={ backBtn } />
    </>
  )
}

export default TopMovieDetails
