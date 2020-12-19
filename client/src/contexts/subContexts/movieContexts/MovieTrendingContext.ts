import React, { createContext } from 'react'
import MovieDataInterface from '../../../interfaces/MovieDataInterface';






interface movieTrendingContextInterface {
    trendingMovies: MovieDataInterface[] | undefined,
    setTrendingMovies: Function,

    trendingLoading: boolean,
    setTrendingLoading: Function
}




export const MovieTrendingContext = createContext( {} as movieTrendingContextInterface );