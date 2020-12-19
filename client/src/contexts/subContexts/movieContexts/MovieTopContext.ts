import React, { createContext } from 'react'
import MovieDataInterface from '../../../interfaces/MovieDataInterface';






interface movieTopContextInterface {
    topMovies: MovieDataInterface[] | undefined,
    setTopMovies: Function,


    topLoading: boolean,
    setTopLoading: Function
}




export const MovieTopContext = createContext( {} as movieTopContextInterface );