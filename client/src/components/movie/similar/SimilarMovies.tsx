import M from 'materialize-css'
import '../../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

 
 





import Secrets from '../../../secrets/Secrets'
import { SimilarMovieContext } from '../../../contexts/subContexts/movieContexts/SimilarMovieContext'



import MovieListItem from '../MovieListItem';
import MyLoader from '../../../helpers/MyLoader';
import MyWelcome from '../../../helpers/MyWelcome';








interface paramsInterface {
  id: string
}








function SimilarMovies() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { id } = useParams<paramsInterface>()

  const { allSimilarMovies, setAllSimilarMovies } = useContext(SimilarMovieContext)
  const [loading, setLoading] = useState(true)



  useEffect(()=>{
    const getMovieDetails = async () =>{
      const response = await fetch(`${ Secrets.MovieDB_API_ROOT_URL }/movie/${ id }?api_key=${ Secrets.MovieDB_API_KEY }`)
      const data = await response.json();


      if(!data.results || !data.results[0]){
        setLoading(false);


      } else {
        setAllSimilarMovies(data.results);

      }


    };

    getMovieDetails();
  }, [])



  const loadingOrNull = loading ? <MyLoader/> : <MyWelcome title="No movie found:(" />;

  
  
  
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
