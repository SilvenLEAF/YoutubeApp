import M from 'materialize-css'
import '../../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom';

 
 






import { MovieSearchContext } from '../../../contexts/subContexts/movieContexts/MovieSearchContext'



import MovieListItem from '../MovieListItem';
import MyLoader from '../../../helpers/MyLoader';
import MyWelcome from '../../../helpers/MyWelcome';




interface propsInterface {
  loading: boolean
}





function SearchResultHolder(props: propsInterface) {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { allSearchMovies, setAllSearchMovies } = useContext(MovieSearchContext)


  const loadingOrNull = props.loading ? <MyLoader/> : <MyWelcome title="No movie found:(" />;
  
  
  
  return  !allSearchMovies || (allSearchMovies && !allSearchMovies[0]) ?  loadingOrNull : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">Your movie results (Click to visit)</h6>


      <ul>
        {
          allSearchMovies[0] && allSearchMovies.map((item, index)=>{
            return (
              <Link to={ "/searchMovieDetails/" + item.id } key={ index } >
                <MovieListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default SearchResultHolder
