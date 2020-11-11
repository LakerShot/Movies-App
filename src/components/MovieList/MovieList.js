import React, { useEffect } from 'react'
import { Alert, Row } from 'antd'
import { useMainContext } from '../../context/MainContext'
import Movie from './Movie'
import Loader from '../Loader/Loader'

const MovieList = () => {
  const { movies, loading, error, clearError, totalResults } = useMainContext()
  useEffect(() => {
    setTimeout(() => {
      clearError()
    }, 5000)
  }, [error, clearError])

  return (
    <main className="main mb2">

      { loading && !error && <Loader/> }

      { error && <Alert message={error} type="error" showIcon className="mb2"/> }

      { totalResults === 0 && <Alert message='Invalid input...' type="error" showIcon className="mb2" /> }

      <Row gutter={[24, 24]}>
        {movies && movies.map(movie => (
          <Movie {...movie} key={movie.id}/>
        ))}
      </Row>

    </main>
  )
}

export default MovieList
