// fake data
import FakeData from '../../helpers/FakeData/FakeData'


import M from 'materialize-css'
import '../../styles/movie/MovieDetails.scss';



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
 


import MyWelcome from '../../helpers/MyWelcome'




function MovieDetails() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const item = FakeData.movieDetailsData;
  
  
  return (
    <div className="container" >
      <div className="myLoaderPageHolder">
        <MyWelcome title="Details Page!"/>      
      </div>
    </div>
  )
}

export default MovieDetails
