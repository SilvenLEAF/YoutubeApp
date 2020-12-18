// fake data
import FakeData from '../../helpers/FakeData/FakeData'


import M from 'materialize-css'
import '../../styles/profile/Profile.scss'
import '../../styles/movie/MovieDetails.scss';


import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
 
 

import { AuthContext } from '../../contexts/subContexts/AuthContext'
import MovieDataInterface from '../../interfaces/MovieDataInterface'
import Secrets from '../../secrets/Secrets'
import MyLoader from '../../helpers/MyLoader'



interface paramsInterface {
  id: string
}



function MovieDetails() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  const { userData } = useContext(AuthContext);
  
  
  // const item = FakeData.movieDetailsData;
  const [item, setItem] = useState<MovieDataInterface>();
  const { id } = useParams<paramsInterface>()

  
  useEffect(()=>{
    const getMovieDetails = async () =>{
      const response = await fetch(`${ Secrets.MovieDB_API_ROOT_URL }/movie/${ id }?api_key=${ Secrets.MovieDB_API_KEY }`)
      const data = await response.json();

      setItem(data);
    };

    getMovieDetails();
  }, [])


  const movieImage = item && item.poster_path ? "https://image.tmdb.org/t/p/w185" + item.poster_path : "/Logo.png";
  
  return !item ? (
    <div className="myLoaderPageHolder">
      <MyLoader/>
    </div>
  ) : (
    <div className="container myProfilePage" >
      <div className="mainProfileIcon" style={{ background: `url(${ movieImage }) center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName">{ item!.title }</div>
        <div className="myProfileTitle" >{ item!.tagline }</div>
        <div className="myProfileLocation red-text">Movie rating { item!.vote_average || "unknown" } </div>
      </div>



      <div className="row">
        

        <div className="myProfileInfoHolder col s12 m6">
          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-star"></i> Rating 
            </div>
            <div className="myProfileInfoAnswer">
              { item!.vote_average || "unknown" }
            </div>
          </div>
            
            
            

          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-address-card"></i> Original Title
            </div>
            <div className="myProfileInfoAnswer">
            { item!.original_title || item!.title }
            </div>
          </div>





          



          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-clock"></i> Release Data            
            </div>
            <div className="myProfileInfoAnswer">
              { item!.release_date || "no info given" }
            </div>
          </div>








          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-anchor"></i> Genres
            </div>
            <div className="myProfileInfoAnswer">
            { (item!.genres && item!.genres[0]) ? item!.genres.map((item, index)=> item.name + ' ' ) : "no info given" }
            </div>
          </div>


          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-compass"></i> Status
            </div>
            <div className="myProfileInfoAnswer">
            { item!.status || "unknown" }
            </div>
          </div>


        </div>






        <div className="myProfileAboutHolder col s12 m5 offset-m1">
          <p className="myProfileAbout">
            { item!.overview || `Sometimes suspence can be really a beautiful feeling. Have you watched a movie without knowing nothing about it? Wasn't the suspense reall amazing? It's really great to watch a movie without reading its synopsis in every now and then. Take this movie and watch it without reading its synopsis.` }
          </p>

          <div className="myProfileBtnsHolder myBtnsHolder right-align">
            { 
              userData && (
                <>
                  <Link to="/similarMovies" className="btn myBtn waves-effect waves-light myCornerless"><i className="fa fa-list"></i> Add to WatchList</Link>
                  <Link to="/" className="btn myRedBtn waves-effect waves-light myCornerless"><i className="fa fa-heart"></i> Add to Liked List</Link>
                </>
              )
            }

            
            <Link to="/similarMovies" className="btn myBtn waves-effect waves-light myCornerless"><i className="fa fa-anchor"></i> Similar Movies</Link>
            <Link to="/" className="btn mySecondaryBtn waves-effect waves-light myCornerless">Go back <i className="fa fa-arrow-left"></i></Link>

            
          </div>


          


        </div>


      </div>




    </div>
  )
}

export default MovieDetails
