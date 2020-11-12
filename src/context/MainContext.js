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
      const resp = await fetch(`${url}${search}&page=${CurPage}`)
      if (!resp.ok) throw new Error('Something went wrong')
      const { results, total_results, page } = await resp.json()

      setMovies(results)
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
