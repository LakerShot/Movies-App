import React from 'react'
import "antd/dist/antd.css"
import { Col, Pagination, Row } from 'antd'
import { MainContextWrapp } from './context/MainContext'
import { MovieList, Search, Tabs } from './components'
import './index.css'

const App = () => {
  return (
    <MainContextWrapp>
      <section className="main">
        <Row>
          <Col className="container" span={12} offset={6} >

            <Tabs/>
            <Search/>
            <MovieList />

            <Row>
              <Col span={10} offset={8}>
                <Pagination
                  defaultCurrent={1}
                  total={50}
                  pageSize={1}
                  size="small"
                />
              </Col>
            </Row>

          </Col>
        </Row>
      </section>
    </MainContextWrapp>
  )
}

export default App
