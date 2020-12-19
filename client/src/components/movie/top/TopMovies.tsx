import M from 'materialize-css'
import '../../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

 
 





import { MovieTopContext } from '../../../contexts/subContexts/movieContexts/MovieTopContext'



import MovieListItem from '../MovieListItem';
import MyLoader from '../../../helpers/MyLoader';
import MyWelcome from '../../../helpers/MyWelcome';













function TopMovies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  

  const { topMovies, setTopMovies, topLoading, setTopLoading } = useContext(MovieTopContext)
  



  



  const loadingOrNull = topLoading ?
   (
        <div className="myLoaderPageHolder">
            <MyLoader/>
        </div>
    ) : (
        <div className="myLoaderPageHolder">        
            <MyWelcome title="No movie found:(" />
        </div>
    );

  
  
  
  return  !topMovies || (topMovies && !topMovies[0]) ?  loadingOrNull : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">Top movies (Click to visit)</h6>


      <ul>
        {
          topMovies[0] && topMovies.map((item, index)=>{
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

export default TopMovies
