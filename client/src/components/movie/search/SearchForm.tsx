import M from 'materialize-css'
import '../../../styles/Form.scss'
import '../../../styles/movie/SearchForm.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
 
 
import { MovieSearchContext } from '../../../contexts/subContexts/movieContexts/MovieSearchContext'
import { Toast } from '../../../helpers/MyAlerts'
import Secrets from '../../../secrets/Secrets'



interface propsInterface {
  setLoading: Function
}






function SearchForm(props: propsInterface) {
  useEffect(() => {
    M.AutoInit();
  }, [])



  const { setLoading } = props;
  const { allSearchMovies, setAllSearchMovies } = useContext(MovieSearchContext);

  
  const [movieName, setMovieName] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>)=>{
    e.preventDefault();

    setLoading(true);

      
    try {
      const response = await fetch(`${ Secrets.MovieDB_API_ROOT_URL }/search/movie?query=${ movieName }&api_key=${ Secrets.MovieDB_API_KEY }`)
      
            
      const data = await response.json();
      
      

      if(data && data.results && data.results[0]){
        
        setMovieName('');
        setAllSearchMovies(data.results);    
        
      } else {
        
        setLoading(false);
      
                

      }

  
  
  
      
    } catch (err) {
      console.log(err)

      if(err.error) setError(err.msg);
    }
    
    
  }




  useEffect(()=>{
    if(error){
      Toast.fire({
        icon: 'error',
        title: error
      })
    }
  }, [error])





  return (
    <div className= "container" >



      <form onSubmit= { handleSubmit } className="myDefaultForm mySearchForm" >
        <h6 className="myDefaultFormName" >Search for your movie</h6>



        <div className="myInputHolder myURLFormBtnHolder">            
          <label htmlFor="fullURL">Type a Title <span className="red-text">(Required)</span></label>
          <div>
            <input type="text" name="movieName" value={ movieName } onChange={ e=> setMovieName(e.target.value) } required />
          </div>
        </div>






        <div className="myBtnsHolder right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light myCornerless">
            <i className="fa fa-search"></i> search
          </button>
          
        </div>
     


      </form>
    </div>
  )

}

export default SearchForm
