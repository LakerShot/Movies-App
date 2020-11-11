import React, { useEffect, useState } from 'react'
import { Col, Pagination, Row } from 'antd'
import { useMainContext } from './context/MainContext'
import { MovieList, Search, Tabs } from './components'
import { POPULAR_MOVIES, SEARCH_MOVIE } from './utils/keys'
import "antd/dist/antd.css"
import './index.css'
import { urlType } from './utils/constants'

const App = () => {
  const { totalResults, movies, currentPage, setCurrentPage, getMovies, currentUrlType } = useMainContext()
  const [movieTitle, setMovieTitle] = useState('kill')

  useEffect(() => {
    if (currentUrlType === urlType.searchMovie) {
      getMovies(SEARCH_MOVIE, movieTitle, currentPage)
    } else {
      getMovies(POPULAR_MOVIES, '', currentPage)
    }
  }, [currentPage, setCurrentPage])

  
  return (
    <section className="main">
      <Row>
        <Col className="container" span={12} offset={6} >

          <Tabs/>
          <Search setMovieTitle={setMovieTitle}/>
          <MovieList />

          <Row align="middle" justify="center">
            <Col>
              { totalResults > 0 && <Pagination
                  current={currentPage}
                  defaultCurrent={1}
                  total={totalResults}
                  defaultPageSize={20}
                  size="small"
                  responsive
                  hideOnSinglePage
                  pageSize={movies.length}
                  onChange={(page) => setCurrentPage(page)}
                />
              }
            </Col>
          </Row>

        </Col>
      </Row>
    </section>
  )
}

export default App
