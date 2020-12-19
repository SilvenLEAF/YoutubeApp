import 'materialize-css/dist/css/materialize.min.css'



import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootAppStucture from './PAGES/RootAppStructure';


import RootContext from './contexts/RootContext';
import { AuthContext } from './contexts/subContexts/AuthContext';
import { MovieTrendingContext } from './contexts/subContexts/movieContexts/MovieTrendingContext';
import { MovieTopContext } from './contexts/subContexts/movieContexts/MovieTopContext';


import Secrets from './secrets/Secrets'



// interfaces
import UserDataInterface from './interfaces/UserDataInterface';
import MovieDataInterface from './interfaces/MovieDataInterface';







function App() {
  const [userData, setUserData] = useState<UserDataInterface>();
  const [trendingMovies, setTrendingMovies] = useState<MovieDataInterface[]>();
  const [topMovies, setTopMovies] = useState<MovieDataInterface[]>();
  
  // GET LOGGED IN USER
  useEffect(()=>{
    const getLoggedInUser = async () =>{
      const res = await fetch('/user');
      const data = await res.json();
      
      console.log(data);
      
      if(data.user) {
        setUserData(data.user);
        
      }
    }

    getLoggedInUser();

  }, [])




  // GET TRENDING MOVIES
  useEffect(()=>{
    const getTrendingMovies = async () =>{
      const response = await fetch(`${ Secrets.MovieDB_API_ROOT_URL }/trending/movie/day?api_key=${ Secrets.MovieDB_API_KEY }`)
      
      console.log("response", response)
      
      const data = await response.json();
      console.log("data", data)
      

      if(!data.results || !data.results[0]){
        
        setTrendingMovies(data.results);    
                

      }

    }

    getTrendingMovies();

  }, [])
  
  
  
  
  
  // GET TOP MOVIES
  useEffect(()=>{
    const getTopMovies = async () =>{
      const response = await fetch(`${ Secrets.MovieDB_API_ROOT_URL }/movie/top_rated?api_key=${ Secrets.MovieDB_API_KEY }`)
      
      console.log("response", response)
      
      const data = await response.json();
      console.log("data", data)
      

      if(!data.results || !data.results[0]){
        
        setTopMovies(data.results);    
                

      }

    }

    getTopMovies();

  }, [])




  return (
    <BrowserRouter basename="/">
      <AuthContext.Provider value={{ userData, setUserData }} >
        <MovieTrendingContext.Provider value={{ trendingMovies, setTrendingMovies }} >
          <MovieTopContext.Provider value={{topMovies, setTopMovies}} >


            <RootContext >
              <div className="App"><RootAppStucture/></div>
            </RootContext>


          </MovieTopContext.Provider>          
        </MovieTrendingContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
