import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'
import MovieSearchContextProvider from './subContexts/movieContexts/MovieSearchContext'
import SimilarMovieContextProvider from './subContexts/movieContexts/SimilarMovieContext'




interface propsInterface {
  children: React.ReactNode
}



function RootContext(props: propsInterface) {
  return (
    <>
      
      <AllUserContextProvider>
        <MovieSearchContextProvider>
          <SimilarMovieContextProvider>
            
            { props.children }
            
          </SimilarMovieContextProvider>

        </MovieSearchContextProvider>
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
