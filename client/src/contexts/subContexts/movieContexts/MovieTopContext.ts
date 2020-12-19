import React, { createContext } from 'react'
import MovieDataInterface from '../../../interfaces/MovieDataInterface';






interface movieTopContextInterface {
    topMovies: MovieDataInterface[] | undefined,
    setTopMovies: Function
}




export const MovieTopContext = createContext( {} as movieTopContextInterface );