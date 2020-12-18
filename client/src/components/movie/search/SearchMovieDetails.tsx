// fake data
import FakeData from '../../../helpers/FakeData/FakeData'


import M from 'materialize-css'





import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
 
 

import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import MovieDetails from '../MovieDetails'



interface paramsInterface {
  id: string
}






function SearchMovieDetails() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const { userData } = useContext(AuthContext);
  
  
  
  const { id } = useParams<paramsInterface>()

  
  
  return (
    <>
        <MovieDetails id={ id } backURL="/search" />
    </>
  )
}

export default SearchMovieDetails
