import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Alert, Row } from 'antd'
import { useMainContext } from '../../context/MainContext'
import Movie from './Movie'
import Loader from '../Loader/Loader'

const MovieList = () => {
  const { movies, loading, error, clearError } = useMainContext()
  useEffect(() => {
    setTimeout(() => {
      clearError()
    }, 5000)
  }, [error, clearError])

  return (
    <main className="main mb2">

      {loading && !error && <Loader/>}

      {error && <Alert message={error} type="error" showIcon className="mb2"/>}

      <Row gutter={[24, 24]}>
        {movies.results && movies.results.map(movie => (
          <Movie {...movie} key={uuidv4()}/>
        ))}
      </Row>

    </main>
  )
}

export default MovieList
