// fake data
import FakeData from '../../helpers/FakeData/FakeData'


import M from 'materialize-css'
import '../../styles/profile/Profile.scss'
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
    <div className="container myProfilePage" >
      <div className="mainProfileIcon" style={{ background: `url(https://image.tmdb.org/t/p/w185${ item!.poster_path || "/Logo.png" }) center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName">{ item!.title }</div>
        <div className="myProfileTitle" >{ item!.tagline }</div>
        <div className="myProfileLocation red-text">Movie rating { item!.vote_average } </div>
      </div>



      <div className="row">
        

      <div className="myProfileInfoHolder col s12 m6">
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-star"></i> Rating 
          </div>
          <div className="myProfileInfoAnswer">
            { item!.vote_average }
          </div>
        </div>
          
          
          

        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-address-card"></i> Original Title
          </div>
          <div className="myProfileInfoAnswer">
          { item!.original_title }
          </div>
        </div>





        



        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-clock"></i> Release Data            
          </div>
          <div className="myProfileInfoAnswer">
            { item!.release_date }
          </div>
        </div>








        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-anchor"></i> Genres
          </div>
          <div className="myProfileInfoAnswer">
          { item!.genres.map((item, index)=> item.name + ' ' ) }
          </div>
        </div>


        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-compass"></i> Status
          </div>
          <div className="myProfileInfoAnswer">
          { item!.status }
          </div>
        </div>


      </div>






      <div className="myProfileAboutHolder col s12 m5 offset-m1">
      <p className="myProfileAbout">
        { item!.overview }
      </p>

      <div className="myProfileBtnsHolder myBtnsHolder right-align">
          <Link to="/similarMovies" className="btn myBtn waves-effect waves-light myCornerless"><i className="fa fa-anchor"></i> Similar Movies</Link>
          <Link to="/" className="btn mySecondaryBtn waves-effect waves-light myCornerless">Go back <i className="fa fa-arrow-left"></i></Link>
          
        </div>
    </div>


      </div>




    </div>
  )
}

export default MovieDetails
