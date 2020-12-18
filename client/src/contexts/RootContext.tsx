import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'
import MovieSearchContextProvider from './subContexts/movieContexts/MovieSearchContext'




interface propsInterface {
  children: React.ReactNode
}



function RootContext(props: propsInterface) {
  return (
    <>
      
      <AllUserContextProvider>
        <MovieSearchContextProvider>
        
          { props.children }

        </MovieSearchContextProvider>
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
