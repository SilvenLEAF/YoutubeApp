import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
 
 




function Home() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  

  
  return (
    <div className="container" >

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h1 id="myLandingTitle" className="pageTitle">
          MyMovieList
        </h1>
        
        <div className="myLandingDescription">
          Find any movie, see details, see similar movies, get treding movies of the day, top movies and many more, add to liked list, add to watchlist and many many many more! Make your own movie list and enjoy!!
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/search" className="btn myBtn waves-effect waves-light myLandingBtn" >
            <i className="fa fa-search"></i> Search MOVIE
          </Link>
          <Link to="/trendingMovies" className="btn myBtn waves-effect waves-light myLandingBtn" >
            <i className="fas fa-chart-line"></i> TRENDING Movies
          </Link>
          <Link to="/TopMovies" className="btn myBtn waves-effect waves-light myLandingBtn" >
            <i className="fa fa-star"></i> TOP Movies
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
