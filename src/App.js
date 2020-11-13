import React, { useEffect, useState } from 'react'
import { Col, Pagination, Row } from 'antd'
import { useMainContext } from './context/MainContext'
import { MovieList, Search, Tabs } from './components'
import { POPULAR_MOVIES, SEARCH_MOVIE, TOP_RATED } from './utils/keys'
import { enumTabs, urlType } from './utils/constants'
import "antd/dist/antd.css"
import './index.css'

const App = () => {
  const { totalResults, movies, currentPage, setCurrentPage, getMovies, currentUrlType, loading } = useMainContext()
  const [movieTitle, setMovieTitle] = useState()
  const [tabTitle, setTabTitle] = useState(enumTabs.search)

  useEffect(() => {
    // getMovies(Url, SerchByTitle, currentPage)
    if (currentUrlType === urlType.searchMovie) {
      getMovies(SEARCH_MOVIE, movieTitle, currentPage)
    } else if (enumTabs.rated === tabTitle) {
      getMovies(TOP_RATED, '', currentPage)
    } else {
      getMovies(POPULAR_MOVIES, '', currentPage)
    }
  }, [currentPage, tabTitle])

  return (
    <section className="main">
      <Row align="middle" justify="center">
        <Col className="container" span={14} xl={14} md={20} xs={24}>

          <Tabs tabTitle={tabTitle} setTabTitle={setTabTitle} setMovieTitle={setMovieTitle}/>

          {tabTitle === enumTabs.search && <Search setMovieTitle={setMovieTitle}/>}

          <MovieList tabTitle={tabTitle}/>

          <Row align="middle" justify="center">
            <Col>
              { totalResults > 0 && <Pagination
                  simple
                  responsive
                  hideOnSinglePage
                  size="small"
                  current={currentPage}
                  defaultCurrent={1}
                  total={totalResults}
                  defaultPageSize={20}
                  disabled={loading}
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
