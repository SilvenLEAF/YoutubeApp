import M from 'materialize-css'



import React, { useEffect, useState } from 'react'

import SearchForm from './SearchForm';
import SearchResultHolder from './SearchResultHolder';
 
 




function SearchPage() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  
  const [loading, setLoading] = useState(false);

  
  return (
    <div className="container" >

      <SearchForm setLoading={ setLoading } />
      <SearchResultHolder loading={ loading } />    


      
    </div>
  )
}

export default SearchPage
