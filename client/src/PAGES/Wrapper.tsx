import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';




import Login from '../components/auth/signupLogin/Login';
import Signup from '../components/auth/signupLogin/Signup';
import LogInForm from '../components/auth/signupLogin/LogInForm';
import SignUpForm from '../components/auth/signupLogin/SignUpForm';


import ForgottenForm from '../components/auth/reset/ForgottenForm';
import ResetPassword from '../components/auth/reset/ResetPassword';
import VerifyDoor from '../components/auth/verify/VerifyDoor';


import Home from '../components/home/Home'
import Profile from '../components/profile/Profile';
import Contact from '../components/contact/Contact';
import UserList from '../components/profile/UserList';
import UpdateProfile from '../components/profile/UpdateProfile';
import UserProfile from '../components/profile/UserProfile';
import ActionPage from '../components/actionPage/ActionPage';

import VerifyEmail from '../components/auth/verify/VerifyEmail';
import ChangeEmail from '../components/auth/verify/ChangeEmail';


import SearchMovieDetails from '../components/movie/search/SearchMovieDetails';
import SearchPage from '../components/movie/search/SearchPage'
import SimilarMovieDetails from '../components/movie/similar/SimilarMovieDetails'
import SimilarMovies from '../components/movie/similar/SimilarMovies'
import TrendingMovies from '../components/movie/trending/TrendingMovies';
import TrendingMovieDetails from '../components/movie/trending/TrendingMovieDetails';
import TopMovies from '../components/movie/top/TopMovies';
import TopMovieDetails from '../components/movie/top/TopMovieDetails';



function Wrapper() {
  const location = useLocation();
  return (
    <div id="myWrapper">
      

      <Switch location={ location } key={ location.key } >


        <Route exact path="/" component={Home} />
        
        <Route path="/actionPage" component={ActionPage} />
        
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/loginForm" component={LogInForm} />
        <Route path="/signupForm" component={SignUpForm} />

        
        <Route path="/verifyDoor" component={VerifyDoor} />
        <Route path="/verifyEmail/:token" component={VerifyEmail} />
        <Route path="/changeEmail" component={ChangeEmail} />


        <Route path="/forgotten" component={ForgottenForm} />
        <Route path="/reset/:token" component={ResetPassword} />
  


        <Route path="/profile" component={Profile} />
        <Route path="/updateProfile" component={UpdateProfile} />
        <Route path="/userProfile/:index" component={UserProfile} />
        <Route path="/allUsers" component={UserList} />
        <Route path="/contact" component={Contact} />






        <Route path="/search" component={SearchPage} />
        <Route path="/searchMovieDetails/:id" component={SearchMovieDetails} />
        
        
        <Route path="/similarMovies" component={SimilarMovies} />
        <Route path="/similarMovieDetails/:id" component={SimilarMovieDetails} />


        <Route path="/trendingMovies" component={TrendingMovies} />
        <Route path="/trendingMovieDetails/:id" component={TrendingMovieDetails} />
        
        
        
        <Route path="/topMovies" component={TopMovies} />
        <Route path="/topMovieDetails/:id" component={TopMovieDetails} />



      </Switch>
      
  </div>
  )
}

export default Wrapper
