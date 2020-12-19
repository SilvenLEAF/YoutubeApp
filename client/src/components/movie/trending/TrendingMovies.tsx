import M from 'materialize-css'
import '../../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

 
 





import { MovieTrendingContext } from '../../../contexts/subContexts/movieContexts/MovieTrendingContext'



import MovieListItem from '../MovieListItem';
import MyLoader from '../../../helpers/MyLoader';
import MyWelcome from '../../../helpers/MyWelcome';













function TrendingMovies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  

  const { trendingMovies, setTrendingMovies, trendingLoading, setTrendingLoading } = useContext(MovieTrendingContext)
  



  



  const loadingOrNull = trendingLoading ?
   (
        <div className="myLoaderPageHolder">
            <MyLoader/>
        </div>
    ) : (
        <div className="myLoaderPageHolder">        
            <MyWelcome title="No movie found:(" />
        </div>
    );

  
  
  
  return  !trendingMovies || (trendingMovies && !trendingMovies[0]) ?  loadingOrNull : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">Trending movies (Click to visit)</h6>


      <ul>
        {
          trendingMovies[0] && trendingMovies.map((item, index)=>{
            return (
              <Link to={ "/trendingMovieDetails/" + item.id } key={ index } >
                <MovieListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default TrendingMovies
