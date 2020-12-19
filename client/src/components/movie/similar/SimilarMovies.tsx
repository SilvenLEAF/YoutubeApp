import M from 'materialize-css'
import '../../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

 
 





import { SimilarMovieContext } from '../../../contexts/subContexts/movieContexts/SimilarMovieContext'



import MovieListItem from '../MovieListItem';
import MyLoader from '../../../helpers/MyLoader';
import MyWelcome from '../../../helpers/MyWelcome';













function SimilarMovies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  

  const { allSimilarMovies, setAllSimilarMovies, loading, setLoading } = useContext(SimilarMovieContext)
  



  



  
  const loadingOrNull = loading ?
  (
      <div className="myLoaderPageHolder">
          <MyLoader/>
      </div>
  ) : (
      <div className="myLoaderPageHolder">        
          <MyWelcome title="No movie found:(" />
      </div>
  );
  
  
  
  return  !allSimilarMovies || (allSimilarMovies && !allSimilarMovies[0]) ?  loadingOrNull : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">Similar movies (Click to visit)</h6>


      <ul>
        {
          allSimilarMovies[0] && allSimilarMovies.map((item, index)=>{
            return (
              <Link to={ "/similarMovieDetails/" + item.id } key={ index } >
                <MovieListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default SimilarMovies
