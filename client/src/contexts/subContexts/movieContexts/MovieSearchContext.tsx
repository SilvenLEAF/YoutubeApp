import React, { createContext, useState } from 'react'
import MovieDataInterface from '../../../interfaces/MovieData';





interface movieSearchContextInterface {
    allSearchMovies: MovieDataInterface[] | undefined,
    setAllSearchMovies: Function
}



interface propsInterface {
  children: React.ReactNode
}






export const MovieSearchContext = createContext({} as movieSearchContextInterface);






function MovieSearchContextProvider(props: propsInterface) {
  const [allSearchMovies, setAllSearchMovies] = useState([]);
  return (
    <MovieSearchContext.Provider value={{ allSearchMovies, setAllSearchMovies }} >
      { props.children }
    </MovieSearchContext.Provider>
  )
}

export default MovieSearchContextProvider