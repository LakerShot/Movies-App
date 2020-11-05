import { Row } from 'antd'
import React from 'react'
import Movie from './Movie'

const MovieList = () => {
  return (
    <main className="main mb2">
      <Row gutter={[24, 24]}>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
      </Row>
    </main>
  )
}

export default MovieList
