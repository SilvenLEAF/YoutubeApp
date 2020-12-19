import React, { createContext, useState } from 'react'
import MovieDataInterface from '../../../interfaces/MovieDataInterface';





interface similarMovieContextInterface {
    allSimilarMovies: MovieDataInterface[] | undefined,
    setAllSimilarMovies: Function,

    loading: boolean,
    setLoading: Function
}



interface propsInterface {
  children: React.ReactNode
}






export const SimilarMovieContext = createContext({} as similarMovieContextInterface);






function SimilarMovieContextProvider(props: propsInterface) {
  const [allSimilarMovies, setAllSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <SimilarMovieContext.Provider value={{ allSimilarMovies, setAllSimilarMovies, loading, setLoading }} >
      { props.children }
    </SimilarMovieContext.Provider>
  )
}

export default SimilarMovieContextProvider