import React, { useCallback, useContext, useEffect, useState } from 'react'
import { POPULAR_MOVIES } from '../utils/keys'

const MainContext = React.createContext()

export const useMainContext = () => {
  return useContext(MainContext)
}

export const MainContextWrapp = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

  const getMovies = async () => {
    try {

      setLoading(true)
      const resp = await fetch(POPULAR_MOVIES)
      if (!resp.ok) throw new Error('Something went wrong...')
      const respData = await resp.json()

      setMovies(respData)
      setLoading(false)
    } catch (e) {
     setError(e.message)
    //  throw e
    }
  }

  useEffect(() => {
      getMovies()
  }, [])

  const clearError = useCallback(() => setError(null), [])

  const value = {
    movies,
    loading,
    clearError,
    error
  }

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}
