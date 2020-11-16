import React, { useCallback, useContext, useEffect, useState } from 'react'
import { urlType } from '../utils/constants'
import { POPULAR_MOVIES } from '../utils/keys'

const MainContext = React.createContext()

export const useMainContext = () => {
  return useContext(MainContext)
}

export const MainContextWrapp = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [totalResults, setTotalResults] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentUrlType, setCurrentUrlType] = useState(urlType.popularMovie)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = useCallback(async (url, search = '', CurPage = 1) => {
    try {

      setLoading(true)
      const response = await fetch(`${url}${search}&page=${CurPage}`)
      if (!response.ok) throw new Error('Something went wrong')
      const { results, total_results, page } = await response.json()
      const movieGenre = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=2c94c607cc74978cfb9fcf6f2093fd6e&language=en-US')
      const { genres } = await movieGenre.json()

      // convert arr of geners id to geners name and merge it wiht result array
      const formatedMovie = results.reduce((acc, movie) => {
        const listOfGenresName = []
        genres.map(genre => {
          return movie.genre_ids.forEach(genreId => {
            if (genre.id === genreId) {
              listOfGenresName.push(genre.name)
            }
          })
        })
        acc.push({...movie, listOfGenresName})
        return acc
      },[])

      setMovies(formatedMovie)
      setTotalResults(total_results)
      setCurrentPage(page)
      setLoading(false)
    } catch (e) {
     setError(e.message)
    //  throw e
    }
  }, [])

  useEffect(() => {
    getMovies(POPULAR_MOVIES)
    // eslint-disable-next-line
  }, [])

  const clearError = useCallback(() => setError(null), [])

  const value = {
    movies,
    totalResults,
    currentPage,
    setCurrentPage,
    getMovies,
    loading,
    clearError,
    error,
    currentUrlType,
    setCurrentUrlType
  }

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}
